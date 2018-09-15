import React, { Component } from 'react';
import { Platform, ScrollView, Text, View, TouchableHighlight, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { styles } from './../newsSourceStyles';
import { fetchNewsSourceAPI } from './../newsSourceAction';

class NewsSource extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getNewsSource()
  }

  navigationToArticles(item) {
    this.props.navigation.navigate('Articles', { source: item.id })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.newsSource.isLoading != false ?
          <ActivityIndicator size="large" color="#4A2891" style={styles.activityIndicator} />
          :
          <ScrollView contentContainerStyle={styles.contentScroll} >
            {this.props.newsSource.data.map((item, index) => (
              <View key={index} style={[styles.windowCardItem]}>
                <TouchableHighlight underlayColor={'transparent'} onPress={() => this.navigationToArticles(item)} >
                  <View style={styles.listItem} >
                    <Text style={styles.titleList} >{item.name}</Text>
                    <Text style={styles.subTitleList}>{item.description}</Text>
                  </View>
                </TouchableHighlight>
              </View>
            ))}
          </ScrollView>
        }
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    newsSource: state.newsSource
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getNewsSource: () => dispatch(fetchNewsSourceAPI()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsSource)