import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';
import App from './app';

class Main extends Component {
  render() {
    const { store } = configureStore();
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Main;
