export const SEND_MESSAGE = 'SEND_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const LOAD_OLD_MESSAGE_REQUEST = 'LOAD_OLD_MESSAGE_REQUEST';
export const LOAD_OLD_MESSAGE_SUCCESS = 'LOAD_OLD_MESSAGE_SUCCESS';

export const TOGGLE_FAB_BUTTON = 'TOGGLE_FAB_BUTTON';

export const toggleFabButtonAction = toggleValue => ({
    type: TOGGLE_FAB_BUTTON,
    payload: !toggleValue,
    meta: {}
});

export const sendMessageAction = messagesValue => ({
    type: SEND_MESSAGE,
    payload: {
        messages: messagesValue
    },
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
