// import { GiftedChat } from 'react-native-gifted-chat';
import { MESSAGE_DETAIL_ID_SET } from './actions';

const initialState = {
    messagesList: [
        {
            id: Math.round(Math.random() * 1000000),
            lastMessage: '你的桌子还在吗',
            createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
            user: {
                id: 1,
                name: '小区用户1'
            },
            sent: true,
            received: true,
            userMessage: true
        },
        {
            id: Math.round(Math.random() * 1000000),
            lastMessage: '收到东西了， 谢谢',
            createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
            user: {
                id: 2,
                name: '小区用户2'
            },
            sent: true,
            received: true,
            userMessage: true
        },
        {
            id: Math.round(Math.random() * 1000000),
            lastMessage: '这个东西不错',
            createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
            productMessage: true,
            product: {
                id: 1234,
                name: '商品1'
            }
        },
        {
            id: Math.round(Math.random() * 1000000),
            lastMessage: '你有一条新短消息',
            createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
            systemMessage: true,
            system: {
                id: 4567,
                name: '系统消息'
            }
        }
    ],
    loading: false,
    error: false,
    messageId: '',
    message: [
        {
            _id: Math.round(Math.random() * 1000000),
            text: '你的桌子还在吗？',
            createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
            user: {
                _id: 2,
                name: '小区用户1'
            }
        }
    ]
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case MESSAGE_DETAIL_ID_SET:
            return Object.assign({}, state, { messageId: action.payload });
        default:
            return state;
    }
};

export default messageReducer;
