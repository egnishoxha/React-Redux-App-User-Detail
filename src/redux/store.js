import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from "redux-thunk";

import users from './reducers/userReducer';

export default createStore(
    combineReducers({
        users
    }),
    {},
    applyMiddleware(
        thunk,
        createLogger()
    )
);