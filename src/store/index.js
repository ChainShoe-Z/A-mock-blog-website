import { createStore, compose } from 'redux';
import reducer from './reducer'; //support the redux-devtools


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //support the redux-devtools
const store = createStore(reducer, composeEnhancers());

export default store;
