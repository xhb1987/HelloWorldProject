export const SOCKET_REQUEST = 'SOCKET_REQUEST';
export const SOCKET_SUCCESS = 'SOCKET_SUCCESS';
export const SOCKET_FAILURE = 'SOCKET_FAILURE';

export const SOCKET_AUTH_REQUEST = 'SOCKET_AUTH_REQUEST';
export const SOCKET_AUTH_SUCCESS = 'SOCKET_AUTH_SUCCESS';
export const SOCKET_AUTH_FAILURE = 'SOCKET_AUTH_FAILURE';

export const SOCKET_RECEIVE = 'SOCKET_RECEIVE';

export const SQUARE_SEND_MESSAGE = 'SQUARE_SEND_MESSAGE';
export const SQUARE_SEND_MESSAGE_SUCCESS = 'SQUARE_SEND_MESSAGE_SUCCESS';
export const SQUARE_SEND_MESSAGE_FAILURE = 'SQUARE_SEND_MESSAGE_FAILURE';

export function sendMessageAction(dataValue, village, userInfo) {
    return {
        type: 'socket',
        types: [SQUARE_SEND_MESSAGE, SQUARE_SEND_MESSAGE_SUCCESS, SQUARE_SEND_MESSAGE_FAILURE],
        payload: {
            funCode: '2007',
            user: userInfo,
            village: village,
            msgContent: dataValue
        },
        promise: socket =>
            socket.emit({
                funCode: '2007',
                user: userInfo,
                village: village,
                msgContent: dataValue
            })
    };
}
const socketMessageReceiveAction = msg => ({
    type: SOCKET_RECEIVE,
    payload: msg,
    meta: {}
});

function socketMessageReceive(msg) {
    return dispatch => {
        dispatch(socketMessageReceiveAction(msg));
    };
}

export function socketInitAction() {
    return {
        type: 'socket',
        types: [SOCKET_REQUEST, SOCKET_SUCCESS, SOCKET_FAILURE],
        promise: (socket, dispatch) =>
            socket.init(msg => {
                dispatch(socketMessageReceive(msg));
                console.log(msg);
            })
    };
}

export function socketAuthAction() {
    return {
        type: 'socket',
        types: [SOCKET_AUTH_REQUEST, SOCKET_AUTH_SUCCESS, SOCKET_AUTH_FAILURE],
        payload: {
            funCode: '1',
            sessionToken: global.token
        },
        promise: socket =>
            socket.emit({
                funCode: '1',
                sessionToken: global.token
            })
    };
}

export function socketConnectAction() {
    return {
        type: 'socket',
        types: [SOCKET_RECEIVE_REQUEST, SOCKET_RECEIVE_SUCCESS, SOCKET_RECEIVE_FAILURE],
        payload: {},
        promise: socket =>
            socket.on(message => {
                console.log('message', message);
            })
    };
}
