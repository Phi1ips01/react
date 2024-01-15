import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Redux/Reducers';
import logger from 'redux-logger';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Ensure compatibility with redux-logger
    }).concat(logger), // Add redux-logger middleware
});

const ReduxProvider = props => (
  <Provider store={store}>{props.children}</Provider>
);

export default ReduxProvider;
