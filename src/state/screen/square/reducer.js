import { GiftedChat } from 'react-native-gifted-chat';
import {
    SEND_MESSAGE,
    RECEIVE_MESSAGE,
    LOAD_OLD_MESSAGE_REQUEST,
    LOAD_OLD_MESSAGE_SUCCESS,
    TOGGLE_FAB_BUTTON,
    TOGGLE_ACTION_SHEET,
    SQUARE_TAKE_IMAGE,
    SQUARE_PICK_IMAGE
} from './actions';

const initialState = {
    messages: [
        {
            _id: Math.round(Math.random() * 1000000),
            text: '你好',
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
            text: '你好， 903',
            createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
            user: {
                _id: 2,
                name: 'React Native'
            }
        },
        {
            _id: Math.round(Math.random() * 1000000),
            text: '',
            createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
            system: true
        }
    ],
    old_messages: [
        {
            _id: Math.round(Math.random() * 1000000),
            text: '谁在卖婴儿车？',
            createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
            user: {
                _id: 1,
                name: 'Developer'
            }
        },
        {
            _id: Math.round(Math.random() * 1000000),
            text: '谁在卖桌子？',
            createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
            user: {
                _id: 1,
                name: 'Developer'
            }
        },
        {
            _id: Math.round(Math.random() * 1000000),
            text: '系统消息',
            createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
            system: true
        }
    ],
    loadEarlier: true,
    typingText: null,
    isLoadingEarlier: false,
    toggleTextInput: false,
    toggleActionSheet: false,
    image: { uri: '' }
};

const squareReducer = (state = initialState, action) => {
    switch (action.type) {
        case SQUARE_PICK_IMAGE:
            return Object.assign({}, state, { image: { url: action.payload.current.uri } });
        case SQUARE_TAKE_IMAGE:
            return Object.assign({}, state, { image: { uri: action.payload.uri } });
        case TOGGLE_ACTION_SHEET:
            return Object.assign({}, state, { toggleActionSheet: action.payload });
        case TOGGLE_FAB_BUTTON:
            return Object.assign({}, state, { toggleTextInput: action.payload });
        case LOAD_OLD_MESSAGE_SUCCESS:
            return Object.assign({}, state, {
                loadEarlier: false,
                isLoadingEarlier: false,
                messages: GiftedChat.prepend(state.messages, action.payload.messages)
            });
        case LOAD_OLD_MESSAGE_REQUEST:
            return Object.assign({}, state, { loadEarlier: true, isLoadingEarlier: true });
        case RECEIVE_MESSAGE:
            return Object.assign({}, state, {
                messages: GiftedChat.append(state.messages, action.payload.messages)
            });
        case SEND_MESSAGE:
            return Object.assign({}, state, {
                messages: GiftedChat.append(state.messages, action.payload.messages)
            });
        default:
            return state;
    }
};

export default squareReducer;
