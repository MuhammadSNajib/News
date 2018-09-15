import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Platform, ToolbarAndroid } from 'react-native';
import { Header } from "react-navigation";
// import { Icon, SearchBar } from 'react-native-elements';

import { styles } from './../componentsStyles';
import StatusBar from './StatusBar';

const HeaderMain = (props) => {
  return (
    <View>
      <StatusBar />
      {Platform.OS === 'android' && Platform.Version >= 20 ?
        <View style={styles.subStatusbar} />
        : null}
      <ToolbarAndroid style={styles.containerHeaderMain}
        titleColor="white"
        title={props.title}
      />
    </View>
  )
}

module.exports = { HeaderMain };