import React, { Component } from 'react';
import { WebView as Web, Text, View, BackHandler, StatusBar, TouchableOpacity, ProgressBarAndroid } from 'react-native';
import { Icon } from 'react-native-elements';

import { styles } from './../webViewStyle';

class WebView extends Component {

  constructor(props) {
    super(props)

    this.webViewRef = 'webview';
    this.defaultUrl = this.props.navigation.state.params.url;

    this.state = {
      url: this.defaultUrl,
      loading: 0,
      canGoBack: false,
      canGoForward: false,
    };

    this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick)
  }

  _goBack() {
    this.props.navigation.dispatch({ type: 'Navigation/BACK' })
  }

  handleBackButtonClick() {
    this._goBack()
    return true
  }


  _onNavigationStateChange(webViewState) {
    this.setState({ url: webViewState.url, canGoBack: webViewState.canGoBack, canGoForward: webViewState.canGoForward })
    if (webViewState.loading == true) {
      setTimeout((function () {
        this.setState({ loading: this.state.loading + (0.4 * Math.random()) });
      }).bind(this), 10);
    } else {
      this.setState({ loading: 0 });
    }
  }

  canGoBack() {
    this.refs[this.webViewRef].goBack();
  }

  canGoForward() {
    this.refs[this.webViewRef].goForward();
  };

  reload() {
    this.refs[this.webViewRef].reload();
  };



  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent
          backgroundColor="#4A2891"
          animated />
        <View style={styles.progressBar} >
          {this.state.loading != 0 &&
            <ProgressBarAndroid
              styleAttr="Horizontal"
              indeterminate={false}
              progress={this.state.loading} />
          }
        </View>
        <Web
          ref={this.webViewRef}
          source={{ uri: this.props.navigation.state.params.url }}
          onNavigationStateChange={this._onNavigationStateChange.bind(this)} />
        <View style={styles.navigationWeb}>
          <TouchableOpacity disabled={!this.state.canGoBack} onPress={this.canGoBack.bind(this)}>
            <Icon name="ios-arrow-back" type="ionicon" iconStyle={{ color: !this.state.canGoBack ? '#bfbfbf' : '#363636' }} />
          </TouchableOpacity>
          <TouchableOpacity disabled={!this.state.canGoForward} onPress={this.canGoForward.bind(this)}>
            <Icon name="ios-arrow-forward" type="ionicon" iconStyle={{ color: !this.state.canGoForward ? '#bfbfbf' : '#363636' }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.reload.bind(this)}>
            <Icon name='autorenew' iconStyle={{ color: '#363636' }} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default WebView
