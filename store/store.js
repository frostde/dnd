import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { classes } from '../reducers/classes'

export const makeStore = (initialState, options) => {
    return createStore(combineReducers({
        classes
    }), applyMiddleware(thunk));
};
