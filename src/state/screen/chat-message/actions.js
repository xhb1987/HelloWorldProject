import { userKeepingLogin } from '../user/actions';

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

export const SOCKET_CLOSE_REQUEST = 'SOCKET_CLOSE_REQUEST';
export const SOCKET_CLOSE_SUCCESS = 'SOCKET_CLOSE_SUCCESS';
export const SOCKET_CLOSE_FAILURE = 'SOCKET_CLOSE_FAILURE';

export const SOCKET_CONNECTION_DETECT = 'SOCKET_CONNECTION_DETECT';
export const SOCKET_CONNECTION_SUCCESS = 'SOCKET_CONNECTION_SUCCESS';
export const SOCKET_CONNECTION_FAILURE = 'SOCKET_CONNECTION_FAILURE';

export const SOCKET_HEARTBEAT = 'SOCKET_HEARTBEAT';
export const SOCKET_HEARTBEAT_SUCCESS = 'SOCKET_HEARTBEAT_SUCCESS';
export const SOCKET_HEARTBEAT_FAILURE = 'SOCKET_HEARTBEAT_FAILURE';

export const SOCKET_CLOSED = 'SOCKET_CLOSED';

export function socketHeartBeatAction() {
    return {
        type: 'socket',
        types: [SOCKET_HEARTBEAT, SOCKET_HEARTBEAT_SUCCESS, SOCKET_HEARTBEAT_FAILURE],
        payload: {
            funCode: 1005
        },
        promise: socket =>
            socket.emit({
                funCode: 1005
            })
    };
}

const socketClosed = () => ({
    type: SOCKET_CLOSED,
    payload: {},
    meta: {}
});

export function socketCloseAction() {
    return {
        type: 'socket',
        types: [SOCKET_CLOSE_REQUEST, SOCKET_CLOSE_SUCCESS, SOCKET_CLOSE_FAILURE],
        promise: socket => socket.disconnect()
    };
}

const socketMessageReceiveAction = (msg, village, user) => ({
    type: SOCKET_RECEIVE,
    payload: { msg, village, user },
    meta: {}
});

function socketMessageReceive(msg) {
    return (dispatch, getState) => {
        const state = getState();
        const village = state.home.selectedVillage;
        const user = state.user.userInfo;

        dispatch(socketMessageReceiveAction(msg, village, user));
    };
}

export function socketInitAction() {
    return {
        type: 'socket',
        types: [SOCKET_REQUEST, SOCKET_SUCCESS, SOCKET_FAILURE],
        promise: (socket, dispatch) =>
            socket.init(
                msg => {
                    const message = JSON.parse(msg);

                    if (message.funCode === 2) {
                        dispatch(userKeepingLogin(message));
                    }

                    if (message.funCode === 1005) {
                        dispatch(socketHeartBeatAction());
                    }

                    dispatch(socketMessageReceive(msg));
                },
                () => {
                    dispatch(socketClosed());
                }
            )
    };
}
export function sendMessageAction(dataValue, village, userInfo) {
    return {
        type: 'socket',
        types: [SQUARE_SEND_MESSAGE, SQUARE_SEND_MESSAGE_SUCCESS, SQUARE_SEND_MESSAGE_FAILURE],
        payload: {
            user: userInfo,
            village,
            msgContent: dataValue
        },
        promise: socket =>
            socket.emit({
                funCode: 2007,
                villageID: village.villageID,
                msgContent: dataValue
            })
    };
}
export function socketAuthAction(token) {
    return {
        type: 'socket',
        types: [SOCKET_AUTH_REQUEST, SOCKET_AUTH_SUCCESS, SOCKET_AUTH_FAILURE],
        payload: {
            funCode: 1,
            sessionToken: global.token || token
        },
        promise: socket =>
            socket.emit({
                funCode: 1,
                sessionToken: global.token || token
            })
    };
}

export function socketConnectionDetect() {
    return {
        type: 'socket',
        types: [SOCKET_CONNECTION_DETECT, SOCKET_CONNECTION_SUCCESS, SOCKET_CONNECTION_FAILURE],
        payload: {},
        promise: socket => socket.detect()
    };
}
