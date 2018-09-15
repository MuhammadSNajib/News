import React, { Component } from 'react';
import { Image, ScrollView, Text, View, BackHandler, TouchableHighlight, ActivityIndicator } from 'react-native';
import { Icon, SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';

import moment from 'moment';

import { styles } from './../articlesStyles';
import { fetchArticlesAPI } from './../articlesAction';

class Articles extends Component {

  constructor(props) {
    super(props)
    this.state = {
      key_search: ''
    };
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick)
  }

  componentDidMount() {
    this.props.getArticles(this.props.navigation.state.params.source, '')
  }

  _goBack() {
    this.props.navigation.dispatch({ type: 'Navigation/BACK' })
  }

  handleBackButtonClick() {
    this._goBack()
    return true
  }

  openWebArticle(item) {
    this.props.navigation.navigate('WebView', { url: item.url })
  }

  searchArticle(text) {
    this.props.getArticles(this.props.navigation.state.params.source, text)
    this.setState({ key_search: text })
  }

  clearKeySearch() {
    this.props.getArticles(this.props.navigation.state.params.source, '')
    this.setState({ key_search: '' })
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          lightTheme
          containerStyle={styles.contentSearch}
          onChangeText={(text) => this.searchArticle(text)}
          onClearText={() => this.clearKeySearch()}
          clearIcon={{ color: '#86939e', name: 'close' }}
          icon={{ type: 'font-awesome', name: 'search' }}
          placeholder='Search article...' />
        {this.props.articles.isLoading != false ?
          <ActivityIndicator size="large" color="#4A2891" style={styles.activityIndicator} />
          :
          <ScrollView contentContainerStyle={styles.contentScroll}>
            {this.props.articles.data.map((item, index) => (
              <TouchableHighlight key={index} underlayColor={'transparent'} onPress={() => this.openWebArticle(item)}>
                <View style={styles.windowCardItem}>
                  <View style={{ width: '30%' }} >
                    <Image source={{ uri: item.urlToImage }} style={styles.imgCard} />
                  </View>
                  <View style={{ width: '70%' }}>
                    <Text style={styles.textTitleListItem}>{item.title}</Text>
                    <Text style={styles.textSubTitleListItem}>{item.description.substr(0, 70)}</Text>
                    <Text style={styles.textInfoListItem}>{'Source : '}<Text style={styles.textInfoWeight}>{item.source.name}</Text></Text>
                    <View style={styles.viewTimer}>
                      <Icon name='md-alarm' type='ionicon' iconStyle={styles.iconTimer} />
                      <Text>{moment([item.publishedAt]).fromNow()}</Text>
                    </View>
                  </View>
                </View>
              </TouchableHighlight>
            ))}
          </ScrollView>
        }
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getArticles: (source, key_search) => dispatch(fetchArticlesAPI(source, key_search)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles)
