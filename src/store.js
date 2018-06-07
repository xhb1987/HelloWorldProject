import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './state/reducer';
import SocketClient from './socket-client';
import socketMiddleWare from './socket-middleware';

const initialState = {};
const socketClient = new SocketClient();

const makeStore = () => {
    const store = createStore(
        reducer,
        initialState,
        applyMiddleware(logger, socketMiddleWare(socketClient), thunkMiddleware)
    );

    // store.subscribe(() => {
    //     const state = store.getState();

    // })
    return store;
};

export default makeStore;
