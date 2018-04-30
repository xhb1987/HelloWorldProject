import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_LOGIN_CANCEL
} from './actions';

const initialState = {
    isLogin: false,
    userInfo: {
        id: 123456,
        name: 'Test User',
        address: 'Test Address'
    },
    myItem: [
        {
            id: 123456,
            title: '我发布的',
            icon: 'assessment'
        },
        {
            id: 234567,
            title: '我卖出的',
            icon: 'assessment'
        },
        {
            id: 345678,
            title: '我买到的',
            icon: 'assessment'
        },
        {
            id: 456789,
            title: '我想要的',
            icon: 'assessment'
        }
    ],
    loading: false,
    error: false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_CANCEL:
            return Object.assign({}, state, { loading: false, error: false, isLogin: false });
        case USER_LOGIN_REQUEST:
            return Object.assign({}, state, { loading: true });
        case USER_LOGIN_SUCCESS:
            return Object.assign({}, state, { loading: false, isLogin: true });
        case USER_LOGIN_FAILURE:
            return Object.assign({}, state, { loading: false, error: true, isLogin: false });
        default:
            return state;
    }
};

export default userReducer;
