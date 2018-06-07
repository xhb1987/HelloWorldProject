export const SEND_MESSAGE = 'SEND_MESSAGE';
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
export const SEND_MESSAGE_FAILURE = 'SEND_MESSAGE_FAILURE';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const LOAD_OLD_MESSAGE_REQUEST = 'LOAD_OLD_MESSAGE_REQUEST';
export const LOAD_OLD_MESSAGE_SUCCESS = 'LOAD_OLD_MESSAGE_SUCCESS';

export const TOGGLE_FAB_BUTTON = 'TOGGLE_FAB_BUTTON';
export const TOGGLE_ACTION_SHEET = 'TOGGLE_ACTION_SHEET';

export const SQUARE_TAKE_IMAGE = 'SQUARE_TAKE_IMAGE';
export const SQUARE_PICK_IMAGE = 'SQUARE_PICK_IMAGE';

export const SQUARE_SOCKET_REQUEST = 'SQUARE_SOCKET_REQUEST';
export const SQUARE_SOCKET_SUCCESS = 'SQUARE_SOCKET_SUCCESS';
export const SQUARE_SOCKET_FAILURE = 'SQUARE_SOCKET_FAILURE';

export const SQUARE_SOCKET_AUTH_REQUEST = 'SQUARE_SOCKET_AUTH_REQUEST';
export const SQUARE_SOCKET_AUTH_SUCCESS = 'SQUARE_SOCKET_AUTH_SUCCESS';
export const SQUARE_SOCKET_AUTH_FAILURE = 'SQUARE_SOCKET_AUTH_FAILURE';

export const squarePickImageAction = (imageData, currentImage) => ({
    type: SQUARE_PICK_IMAGE,
    payload: { images: imageData, current: currentImage },
    meta: {}
});

export const squareTakeImageAction = imageData => ({
    type: SQUARE_TAKE_IMAGE,
    payload: imageData,
    meta: {}
});

export const toggleActionSheetAction = toggleValue => ({
    type: TOGGLE_ACTION_SHEET,
    payload: !toggleValue,
    meta: {}
});

export const toggleFabButtonAction = toggleValue => ({
    type: TOGGLE_FAB_BUTTON,
    payload: !toggleValue,
    meta: {}
});

export const receiveMessageAction = messagesValue => ({
    type: RECEIVE_MESSAGE,
    payload: {
        messages: messagesValue
    },
    meta: {}
});

export const loadOldMessageRequestAction = () => ({
    type: LOAD_OLD_MESSAGE_REQUEST,
    payload: {},
    meta: {}
});

export const loadOldMessageSuccessAction = oldMessage => ({
    type: LOAD_OLD_MESSAGE_SUCCESS,
    payload: {
        messages: oldMessage
    },
    meta: {}
});

export function squareSocketInit() {
    return {
        type: 'socket',
        types: [SQUARE_SOCKET_REQUEST, SQUARE_SOCKET_SUCCESS, SQUARE_SOCKET_FAILURE],
        promise: socket => socket.connect()
    };
}

export function squareSocketAuth() {
    return {
        type: 'socket',
        types: [SQUARE_SOCKET_AUTH_REQUEST, SQUARE_SOCKET_AUTH_SUCCESS, SQUARE_SOCKET_AUTH_FAILURE],
        payload: {
            funCode: 1,
            sessionToken: global.token
        },
        promise: socket =>
            socket.emit('Send', {
                funCode: 1,
                sessionToken: global.token
            })
    };
}

export function sendMessageAction(messagesValue) {
    return {
        type: 'test',
        types: [SEND_MESSAGE, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAILURE],
        payload: {
            message: messagesValue
        },
        promise: socket => socket.emit({ message: messagesValue })
    };
}
