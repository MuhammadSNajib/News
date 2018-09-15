import React from 'react';
import { View, Platform } from 'react-native';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import { reduxifyNavigator, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

import { HeaderMain } from './../components/elements/Header';

import NewsSource from './../screens/news-source/screens/newsSource';
import Articles from './../screens/articles/screens/articles';
import WebView from './../screens/web-view/screens/webView';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const RootNavigation = createStackNavigator({
  NewsSource: {
    screen: NewsSource,
    navigationOptions: (props) => ({
      header: <HeaderMain {...props} title={'News Source'} />
    })
  },
  Articles: {
    screen: Articles,
    navigationOptions: (props) => ({
      header: <HeaderMain {...props} title={'Articles'} />
    })
  },
  WebView: {
    screen: WebView,
    navigationOptions: (props) => ({
      header: null
    })
  },
},)


const AppWithNavigationState = reduxifyNavigator(RootNavigation, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigation, AppNavigator, middleware };