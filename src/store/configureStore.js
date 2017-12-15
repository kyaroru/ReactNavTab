import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import createSagaMiddleware from 'redux-saga';
import reducers from 'reducers';
import sagas from 'sagas';

let createAppStore;
let store;
const sagaMiddleware = createSagaMiddleware();

/* global __DEV__ */
if (__DEV__) {
  const excludedActions = [];
  const logger = createLogger({
    collapsed: true,
    predicate: (getState, action) => excludedActions.indexOf(action.type) < 0,
  });
  createAppStore = applyMiddleware(sagaMiddleware, logger)(createStore);
} else {
  createAppStore = applyMiddleware(sagaMiddleware)(createStore);
}

// specify the reducer data that NEED to be persist into AsyncStorage
const whitelistReducer = ['PERSIST'];

export const getStore = () => store;

const configureStore = (onComplete) => {
  store = autoRehydrate()(createAppStore)(reducers);
  persistStore(store, { storage: AsyncStorage, whitelist: whitelistReducer }, onComplete);
  sagaMiddleware.run(sagas);
  return store;
};

export default configureStore;
