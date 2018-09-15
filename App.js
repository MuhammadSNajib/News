import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk';

import appReducer from './app/redux/reducers';
import { AppNavigator, middleware } from './app/navigators/AppNavigator';

const store = createStore(appReducer, applyMiddleware(middleware, thunk));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}