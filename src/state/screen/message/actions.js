export const MESSAGE_DETAIL_ID_SET = 'MESSAGE_DETAIL_ID_SET';

export const messageDetailIdSetAction = messageId => ({
    type: MESSAGE_DETAIL_ID_SET,
    payload: messageId,
    meta: {}
});
