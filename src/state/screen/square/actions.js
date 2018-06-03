export const SEND_MESSAGE = 'SEND_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const LOAD_OLD_MESSAGE_REQUEST = 'LOAD_OLD_MESSAGE_REQUEST';
export const LOAD_OLD_MESSAGE_SUCCESS = 'LOAD_OLD_MESSAGE_SUCCESS';

export const TOGGLE_FAB_BUTTON = 'TOGGLE_FAB_BUTTON';
export const TOGGLE_ACTION_SHEET = 'TOGGLE_ACTION_SHEET';

export const SQUARE_TAKE_IMAGE = 'SQUARE_TAKE_IMAGE';
export const SQUARE_PICK_IMAGE = 'SQUARE_PICK_IMAGE';

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
