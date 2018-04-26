import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './state/reducer';

const initialState = {};

const makeStore = () => {
    const store = createStore(reducer, initialState, applyMiddleware(logger, thunkMiddleware));

    // store.subscribe(() => {
    //     const state = store.getState();

    // })
    return store;
};

export default makeStore;
