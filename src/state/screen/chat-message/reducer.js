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
    SQUARE_SEND_MESSAGE_FAILURE
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
                    name: 'Developer'
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
                }
            }
        ]
    },
    chat: [],
    squareMessageSend: false,
    authorized: false
};

const chatMessageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SOCKET_REQUEST:
        case SOCKET_SUCCESS:
        case SOCKET_FAILURE:
        case SOCKET_AUTH_REQUEST:
        case SOCKET_AUTH_SUCCESS:
        case SOCKET_AUTH_FAILURE:
            console.log(action);
            return state;
        case SOCKET_RECEIVE: {
            const payload = JSON.parse(action.payload);
            if (payload.funCode === 2 && payload.retCode === 0) {
                return Object.assign({}, state, { authorized: true });
            }

            if (payload.funCode === 2008 && payload.retCode === 0) {
                return Object.assign({}, state, { squareMessageSend: true });
            }

            return Object.assign({}, state, { squareMessageSend: false, authorized: false });
        }
        case SQUARE_SEND_MESSAGE: {
            // const messageObj = generateMessage(action.payload.msgContent);
            const { village, msgContent, user } = action.payload;

            const squareMessageObj = state.squareMessages;
            if (lodash.has(squareMessageObj, village.villageID)) {
                const existMessageArray = squareMessageObj[village.villageID].slice();

                return Object.assign({}, state, {
                    squareMessages: {
                        ...state.squareMessages,
                        [village.villageID]: GiftedChat.append(
                            existMessageArray,
                            generateMessage(msgContent, user)
                        )
                    }
                });
            }

            return Object.assign({}, state, {
                squareMessages: {
                    ...state.squareMessages,
                    [village.villageName]: GiftedChat.append([], generateMessage(msgContent))
                }
            });
        }
        default:
            return state;
    }
};

export default chatMessageReducer;
