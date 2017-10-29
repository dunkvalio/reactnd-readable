import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

let composeEnhancers = compose;

const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
if (typeof composeWithDevToolsExtension === 'function') {
  composeEnhancers = composeWithDevToolsExtension
}

const initialState = {
  categories: [],
}

export default createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);
