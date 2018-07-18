import { GiftedChat } from 'react-native-gifted-chat';
import lodash from 'lodash';
import {
    SOCKET_REQUEST,
    SOCKET_SUCCESS,
    SOCKET_FAILURE,
    SOCKET_AUTH_REQUEST,
    SOCKET_AUTH_SUCCESS,
    SOCKET_AUTH_FAILURE,
    SOCKET_RECEIVE,
    SQUARE_SEND_MESSAGE,
    SQUARE_SEND_MESSAGE_SUCCESS,
    SQUARE_SEND_MESSAGE_FAILURE,
    SOCKET_CLOSE_REQUEST,
    SOCKET_CLOSE_SUCCESS,
    SOCKET_CLOSE_FAILURE,
    SOCKET_CONNECTION_DETECT,
    SOCKET_CONNECTION_SUCCESS,
    SOCKET_CONNECTION_FAILURE
} from './actions';
import { generateMessage } from '../../../util/utils';

const initialState = {
    squareMessages: {
        1: [
            {
                _id: Math.round(Math.random() * 1000000),
                text: '这里应该是本地信息',
                createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
                user: {
                    _id: 1,
                    name: '小区用户'
                },
                sent: true,
                received: true
            },
            {
                _id: Math.round(Math.random() * 1000000),
                text: '你好， 本地信息',
                createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
                user: {
                    _id: 26,
                    name: '本地用户'
                },
                sent: true,
                received: true
            }
        ]
    },
    chat: [],
    currentMessage: {},
    squareMessageSend: false,
    authorized: false,
    socketClosed: true,
    chatMessage: 'test',
    notification: ''
};

const chatMessageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SOCKET_REQUEST:
            return Object.assign({}, state, {
                socketClosed: false,
                authorized: false
            });
        case SOCKET_SUCCESS:
            return Object.assign({}, state, { socketClosed: false, authorized: false });

        case SOCKET_FAILURE:
            return Object.assign({}, state, { socketClosed: true, authorized: false });
        case SOCKET_AUTH_REQUEST:
        case SOCKET_AUTH_FAILURE:
            return state;
        case SOCKET_AUTH_SUCCESS:
            return Object.assign({}, state, { authorized: true });
        case SOCKET_RECEIVE: {
            const { msg, village, user } = action.payload;

            const message = JSON.parse(msg);
            if (message.funCode === 2 && message.retCode === 0) {
                return Object.assign({}, state, { authorized: true });
            }

            if (message.funCode === 2008 && message.retCode === 0) {
                return Object.assign({}, state, { squareMessageSend: true });
            }

            if (message.funCode === 1004) {
                const squareMessageObj = state.squareMessages;
                const existMessageArray = squareMessageObj[village.villageID].slice();

                const originalMessage = message.msgRef.origMsgInfo;
                const originalMessageId = originalMessage.messageID;

                const originalMessageUser = originalMessage.user;

                const messageId = message.msgRef.messageID;
                const currentMessage = state.currentMessage;

                // which means this is ack message from server
                if (user.id === originalMessage.fromUserID) {
                    const currentMessageIndex = lodash.findIndex(
                        existMessageArray,
                        msg => msg._id === currentMessage._id
                    );

                    existMessageArray[currentMessageIndex]._id = `${originalMessage.messageID}-${
                        originalMessage.timeStamp
                    }`;
                    existMessageArray[currentMessageIndex].messageType =
                        originalMessage.messageType;

                    return Object.assign({}, state, {
                        squareMessages: {
                            ...state.squareMessages,
                            [village.villageID]: existMessageArray
                        }
                    });
                }
                // which means this message is from other users
                if (user.id !== originalMessage.fromUserID) {
                    const tempMessage = generateMessage(
                        originalMessage.content,
                        {
                            _id: originalMessage.fromUserID,
                            name: originalMessage.fromUserID + ''
                        },
                        `${originalMessage.messageID}-${originalMessage.timeStamp}`,
                        originalMessage.messageType
                    );

                    return Object.assign({}, state, {
                        squareMessages: {
                            ...state.squareMessages,
                            [village.villageID]: GiftedChat.append(existMessageArray, tempMessage)
                        }
                    });
                }
            }

            return state;
        }
        case SQUARE_SEND_MESSAGE: {
            // const messageObj = generateMessage(action.payload.msgContent);
            const { village, msgContent, user } = action.payload;

            const squareMessageObj = state.squareMessages;
            const currentMessage = generateMessage(msgContent, user);

            if (lodash.has(squareMessageObj, village.villageID)) {
                const existMessageArray = squareMessageObj[village.villageID].slice();

                return Object.assign({}, state, {
                    squareMessages: {
                        ...state.squareMessages,
                        [village.villageID]: GiftedChat.append(existMessageArray, currentMessage)
                    },
                    currentMessage
                });
            }

            return Object.assign({}, state, {
                squareMessages: {
                    ...state.squareMessages,
                    [village.villageID]: GiftedChat.append([], currentMessage)
                },
                currentMessage
            });
        }
        case SQUARE_SEND_MESSAGE_SUCCESS:
            console.log('send success');
            return state;
        case SQUARE_SEND_MESSAGE_FAILURE:
            return Object.assign({}, state, { authorized: false, socketClosed: true });
        case SOCKET_CLOSE_REQUEST:
        case SOCKET_CLOSE_SUCCESS:
            return Object.assign({}, state, { authorized: false, socketClosed: true });
        case SOCKET_CLOSE_FAILURE:
            return Object.assign({}, state, { authorized: false });
        case SOCKET_CONNECTION_SUCCESS:
            return Object.assign({}, state, { socketClosed: false });
        case SOCKET_CONNECTION_FAILURE:
            return Object.assign({}, state, { socketClosed: true, authorized: false });
        default:
            return state;
    }
};

export default chatMessageReducer;
