import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App';
import createLogger from 'redux-logger';

const logger = createLogger();
const store = createStore(todoApp, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("main")
);
