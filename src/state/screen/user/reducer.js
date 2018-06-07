import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_LOGIN_CANCEL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
    USER_REGISTER_CODE_REQUEST,
    USER_REGISTER_CODE_SUCCESS,
    USER_REGISTER_CODE_FAILURE,
    USER_INPUT_CHANGE,
    USER_LOGOUT_SUCCESS
} from './actions';

const initialState = {
    isLogin: false,
    userInfo: {
        id: 0,
        name: '',
        address: ''
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
    sendCodeLoading: true,
    snedCodeError: false,
    error: false,
    userPhone: '',
    userCode: '',
    userPassword: '',
    userPasswordRepeat: '',
    userLoginPhone: '',
    userLoginPassword: '',
    sessionToken: ''
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_INPUT_CHANGE: {
            const inputType = action.payload.type;
            if (inputType === 'phone') {
                return Object.assign({}, state, { userPhone: action.payload.value });
            }

            if (inputType === 'code') {
                return Object.assign({}, state, { userCode: action.payload.value });
            }

            if (inputType === 'password') {
                return Object.assign({}, state, { userPassword: action.payload.value });
            }

            if (inputType === 'passwordRepeat') {
                return Object.assign({}, state, { userPasswordRepeat: action.payload.value });
            }

            if (inputType === 'loginPhone') {
                return Object.assign({}, state, { userLoginPhone: action.payload.value });
            }

            if (inputType === 'loginPassword') {
                return Object.assign({}, state, { userLoginPassword: action.payload.value });
            }
            return state;
        }

        case USER_REGISTER_REQUEST:
            return Object.assign({}, state, { loading: true });
        case USER_REGISTER_SUCCESS:
            return Object.assign({}, state, { loading: false, error: false });
        case USER_REGISTER_FAILURE:
            return Object.assign({}, state, { loading: false, error: true });
        case USER_REGISTER_CODE_REQUEST:
            return Object.assign({}, state, { sendCodeLoading: true });
        case USER_REGISTER_CODE_SUCCESS:
            return Object.assign({}, state, { sendCodeLoading: false, snedCodeError: false });
        case USER_REGISTER_CODE_FAILURE:
            return Object.assign({}, state, { sendCodeLoading: false, snedCodeError: true });
        case USER_LOGIN_CANCEL:
            return Object.assign({}, state, { loading: false, error: false, isLogin: false });
        case USER_LOGIN_REQUEST:
            return Object.assign({}, state, { loading: true });
        case USER_LOGIN_SUCCESS: {
            console.log(action);
            // test account 13633139898 654321
            // ret code is 0 means login success
            const result = action.payload;
            if (result.retCode === 0) {
                global.token = result.result.sessionToken;
                return Object.assign({}, state, {
                    userLoginPassword: '',
                    userLoginPhone: '',
                    loading: false,
                    isLogin: true,
                    sessionToken: result.result.sessionToken
                });
            }

            return Object.assign({}, state, {
                loading: false,
                isLogin: false,
                userLoginPassword: '',
                userLoginPhone: ''
            });
        }
        case USER_LOGIN_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                error: true,
                isLogin: false,
                userLoginPassword: '',
                userLoginPhone: ''
            });
        case USER_LOGOUT_SUCCESS: {
            const result = action.payload;
            if (result.retCode === 0) {
                return Object.assign({}, state, {
                    loading: false,
                    error: false,
                    isLogin: false
                });
            }

            return Object.assign({}, state, { loading: false, error: true });
        }
        default:
            return state;
    }
};

export default userReducer;
