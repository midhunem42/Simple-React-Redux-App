import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import { rootReducer } from '../reducers';
import thunk from 'redux-thunk';
import { createPromise } from 'redux-promise-middleware';

const mylogger = (store) => (next) => (action) => {
    console.log("logged action", action);
    next(action);
}
const Store = createStore(rootReducer, {}, applyMiddleware(createLogger(),thunk));

export {Store}
