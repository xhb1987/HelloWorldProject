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
    USER_LOGOUT_SUCCESS,
    REGISTER_VALIDATE,
    USER_INFO_CLEAR,
    INVOLVE_PUBLISH,
    RESET_NOTIFICATION,
    PASSWORD_SECURED_TOGGLE
} from './actions';
import getReturnCodeMessage from '../../../util/return-code';

const initialState = {
    isLogin: false,
    userInfo: {
        id: 0,
        name: '',
        address: ''
    },
    loading: false,
    sendCodeLoading: true,
    snedCodeError: false,
    error: false,
    phone: {
        data: '',
        validate: false
    },
    smsCode: {
        data: '',
        validate: false
    },
    password: {
        data: '',
        validate: false
    },
    passwordSecured: true,
    sessionToken: '',
    myInvolvePulish: '',
    notification: ''
};

const phoneRegex = /^1(3|4|5|7|8)\d{9}$/;
const passwordRegex = /^[A-Za-z0-9]{6,20}$/;
const smsCodeReges = /^\d{6}$/;

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case PASSWORD_SECURED_TOGGLE:
            return Object.assign({}, state, { passwordSecured: !action.payload });
        case RESET_NOTIFICATION:
            return Object.assign({}, state, { notification: '' });
        case USER_INFO_CLEAR: {
            return Object.assign({}, state, {
                phone: initialState.phone,
                smsCode: initialState.smsCode,
                password: initialState.password,
                passwordSecured: true
            });
        }
        case USER_INPUT_CHANGE: {
            const inputType = action.payload.type;
            if (inputType === 'phone') {
                return Object.assign({}, state, {
                    phone: {
                        validate: phoneRegex.test(action.payload.value),
                        data: action.payload.value
                    }
                });
            }

            if (inputType === 'code') {
                return Object.assign({}, state, {
                    smsCode: {
                        validate: smsCodeReges.test(action.payload.value),
                        data: action.payload.value
                    }
                });
            }

            if (inputType === 'password') {
                return Object.assign({}, state, {
                    password: {
                        validate: passwordRegex.test(action.payload.value),
                        data: action.payload.value
                    }
                });
            }
            return state;
        }

        case USER_REGISTER_REQUEST:
            return Object.assign({}, state, { loading: true });
        case USER_REGISTER_SUCCESS: {
            const result = action.payload;

            if (result.retCode === 0) {
                return Object.assign({}, state, {
                    loading: false,
                    error: false,
                    notification: ''
                });
            }

            return Object.assign({}, state, {
                loading: false,
                error: false,
                notification: getReturnCodeMessage(result.retCode)
            });
        }
        case USER_REGISTER_FAILURE:
            return Object.assign({}, state, { loading: false, error: true });
        case USER_REGISTER_CODE_REQUEST:
            return Object.assign({}, state, { loading: true });
        case USER_REGISTER_CODE_SUCCESS: {
            const response = action.payload;
            if (response.retCode === 0) {
                return Object.assign({}, state, { loading: false, error: false });
            }

            return Object.assign({}, state, { loading: false, error: true });
        }
        case USER_REGISTER_CODE_FAILURE:
            return Object.assign({}, state, { loading: false, error: true });
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
                    password: {
                        data: '',
                        validate: true
                    },
                    phone: {
                        data: '',
                        validate: true
                    },
                    loading: false,
                    isLogin: true,
                    sessionToken: result.result.sessionToken,
                    userInfo: {
                        ...state.userInfo,
                        id: result.result.userID
                    },
                    notification: ''
                });
            }

            return Object.assign({}, state, {
                loading: false,
                isLogin: false,
                notification: getReturnCodeMessage(result.retCode)
            });
        }
        case USER_LOGIN_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                error: true,
                isLogin: false,
                password: {
                    data: '',
                    validate: true
                },
                phone: {
                    data: '',
                    validate: true
                },
                notification: ''
            });
        case USER_LOGOUT_SUCCESS: {
            const result = action.payload;
            if (result.retCode === 0) {
                return Object.assign({}, state, {
                    loading: false,
                    error: false,
                    isLogin: false,
                    password: {
                        data: '',
                        validate: true
                    },
                    phone: {
                        data: '',
                        validate: true
                    }
                });
            }

            return Object.assign({}, state, {
                loading: false,
                error: true,
                isLogin: false,
                password: {
                    data: '',
                    validate: true
                },
                phone: {
                    data: '',
                    validate: true
                }
            });
        }
        case REGISTER_VALIDATE: {
            const { userInput, validationType } = action.payload;
            if (validationType === 'phone') {
                return Object.assign({}, state, {
                    phone: { ...state.phone, validate: phoneRegex.test(userInput.phone) }
                });
            }

            if (validationType === 'password') {
                return Object.assign({}, state, {
                    password: {
                        ...state.password,
                        validate: passwordRegex.test(userInput.password)
                    }
                });
            }

            return state;
        }
        case INVOLVE_PUBLISH:
            return Object.assign({}, state, { myInvolvePulish: action.payload });
        default:
            return state;
    }
};

export default userReducer;
