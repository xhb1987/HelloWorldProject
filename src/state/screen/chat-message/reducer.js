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
    squareMessages: {},
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
            const { village, msgContent } = action.payload;

            const squareMessageObj = state.squareMessages;
            if (lodash.has(squareMessageObj, village.villageName)) {
                const existMessageArray = squareMessageObj[village.villageName].messages.slice();
                existMessageArray.push(generateMessage(msgContent));

                return Object.assign({}, state, {
                    squareMessages: {
                        ...state.squareMessages,
                        [village.villageName]: existMessageArray
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
