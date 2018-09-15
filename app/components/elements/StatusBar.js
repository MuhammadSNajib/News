import React, { Component } from 'react';
import { View, StatusBar as StatusBarCustom, StatusBarIOS } from 'react-native';

import { styles } from './../componentsStyles';

class StatusBar extends Component {

  render() {
    return (
      <StatusBarCustom
        translucent
        backgroundColor="rgba(0, 0, 0, 0.20)"
        animated />
    )
  }
}

export default StatusBar