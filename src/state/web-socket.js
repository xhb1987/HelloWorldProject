import io from 'socket.io-client';
import messageTypes from '../web-socket-config';
import config from '../config';

const socket = io(config.webSocketUrl);

export const init = store => {
    messageTypes.map(type => socket.on(type, payload => store.dispatch({ type, payload })));
};

export const emit = (type, payload) => socket.emit(type, payload);
