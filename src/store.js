import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './state/reducer';
import SocketClient from './socket-client';
import socketMiddleWare from './socket-middleware';

const initialState = {};
const socketClient = new SocketClient();

const persistRootConfig = {
    key: 'root',
    storage: AsyncStorage,
    debug: true,
    blacklist: ['home', 'square', 'user', 'product', 'chatMessage', 'estate', 'market', 'message']
};

const middleware = applyMiddleware(logger, socketMiddleWare(socketClient), thunkMiddleware);

const persistedReducer = persistReducer(persistRootConfig, reducer);

const makeStore = () => {
    const store = createStore(persistedReducer, initialState, compose(middleware));

    // store.subscribe(() => {
    //     const state = store.getState();

    // })
    return store;
};

export default makeStore;
