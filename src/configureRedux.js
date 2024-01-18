import React from 'react';
import { Provider } from 'react-redux';
import rootReducer from './Redux/Reducers';
import logger from 'redux-logger';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancer=composeWithDevTools({trace:true});

const store = createStore(
rootReducer,
composeEnhancer(applyMiddleware(thunk,logger))
)
// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false, // Ensure compatibility with redux-logger
//     }).concat(logger), // Add redux-logger middleware
// });

const ReduxProvider = props => (
  <Provider store={store}>{props.children}</Provider>
);

export default ReduxProvider;
