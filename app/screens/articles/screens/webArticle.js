import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal, WebView } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux'

import ModalBox from 'react-native-modalbox';

import { styles } from './../articlesStyles';

class WebArticle extends Component {

  constructor(props) {
    super(props)
    this.state = {
      url: 'https://google.com'
    }
  }

  componentWillMount() { }

  componentDidMount() { }

  _handleOnClosed(isOpen) {
    this.props.onClosed(isOpen)
  }

  _onNavigationStateChange(webViewState) {
    this.setState({ url: webViewState.url })
  }

  render() {
    return (
      <Modal transparent={true} onRequestClose={() => null} visible={this.props.isOpen} style={styles.backDropModal}>
        <ModalBox
          style={styles.modalBox}
          swipeToClose
          backdrop={true}
          isOpen={this.props.isOpen}
          onClosed={() => this._handleOnClosed(false)}
          position="bottom">
          <WebView
            source={{ uri: this.state.url }}
            onNavigationStateChange={this._onNavigationStateChange.bind(this)} />
        </ModalBox>
      </Modal>
    )
  }
}

export default WebArticle