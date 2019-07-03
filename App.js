import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { compose, createStore, combineReducers, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './src/reducers';
import {MainNavigator} from './src/routers/routes'



function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // used to dispatch() functions
      // loggerMiddleware, // used for logging actions
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    )
  }
}