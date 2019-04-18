import { combineReducers } from 'redux';
import userReducer from './userReducer';
import mathReducer from './mathReducer';

const rootReducer =  combineReducers({
    math: mathReducer,
    user: userReducer
});
export {rootReducer};
