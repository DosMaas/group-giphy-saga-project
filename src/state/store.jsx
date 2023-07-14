import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../components/App/App.jsx';
import {takeEvery, put} from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

function* getSearchRequest(){
  try {
    const response = yield fetch('/api/category');
    const searchRequest = yield response.json();
    yield put({type: 'GIPH_REQUEST', payload: searchRequest});
  } catch (error) {
    console.log('Getting search results failed:', error);
  }
}

function searchReducer(state = '', action) {
  if (action.type === 'GIPH_REQUEST') {
    return action.payload;
  }
  return state;
}

function* watcherSaga() {
  yield takeEvery('GIPH_REQUEST', getSearchRequest)
}

const store = createStore(
  combineReducers({
    searchReducer: searchReducer
  }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(watcherSaga);

export default store;