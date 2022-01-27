import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducer'; //support the redux-devtools
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //support the redux-devtools
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;
