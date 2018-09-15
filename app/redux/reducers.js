import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import { RootNavigation } from './../navigators/AppNavigator';

import newsSource from './../screens/news-source/newsSourceReducer';
import articles from './../screens/articles/articlesReducer';

const nav = createNavigationReducer(RootNavigation);

const appReducer = combineReducers({
  nav,
  newsSource,
  articles
});

export default appReducer;