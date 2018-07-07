import fetchPost from '../../../util/fetch-post';
import { socketAuthAction } from '../chat-message/actions';
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

export const USER_LOGIN_CANCEL = 'USER_LOGIN_CANCEL';

export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAILURE = 'USER_REGISTER_FAILURE';

export const USER_REGISTER_CODE_REQUEST = 'USER_REGISTER_CODE_REQUEST';
export const USER_REGISTER_CODE_SUCCESS = 'USER_REGISTER_CODE_SUCCESS';
export const USER_REGISTER_CODE_FAILURE = 'USER_REGISTER_CODE_FAILURE';

export const REGISTER_VALIDATE = 'REGISTER_VALIDATE';

export const USER_INPUT_CHANGE = 'USER_INPUT_CHANGE';

export const USER_LOGOUT_REQUEST = 'USER_LOGOUT_REQUEST';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_LOGOUT_FAILURE = 'USER_LOGOUT_FAILURE';
export const USER_INFO_CLEAR = 'USER_INFO_CLEAR';

export const INVOLVE_PUBLISH = 'INVOLVE_PUBLISH';

export const RESET_NOTIFICATION = 'RESET_NOTIFICATION';

export const resetUserNotificationAction = () => ({
    type: RESET_NOTIFICATION,
    payload: {},
    meta: {}
});

export const involvePublishAction = type => ({
    type: INVOLVE_PUBLISH,
    payload: type,
    meta: {}
});

export const userInfoClearAction = () => ({
    type: USER_INFO_CLEAR,
    payload: {},
    meta: {}
});

const userLogoutRequestAction = () => ({
    type: USER_LOGOUT_REQUEST,
    payload: {},
    meta: {}
});

const userLogoutSuccessAction = () => ({
    type: USER_LOGOUT_SUCCESS,
    payload: {},
    meta: {}
});

const userLogoutFailureAction = e => ({
    type: USER_LOGOUT_FAILURE,
    payload: e,
    meta: {}
});

export const userInputChangeAction = (inputValue, inputType) => ({
    type: USER_INPUT_CHANGE,
    payload: {
        value: inputValue,
        type: inputType
    },
    meta: {}
});

const userRegisterCodeFailureAction = e => ({
    type: USER_REGISTER_CODE_FAILURE,
    payload: e,
    meta: {}
});

const userRegisterCodeSuccessAction = res => ({
    type: USER_REGISTER_CODE_SUCCESS,
    payload: res,
    meta: {}
});

const userRegisterCodeRequestAction = () => ({
    type: USER_REGISTER_CODE_REQUEST,
    payload: {},
    meta: {}
});

export const userRegisterRequestAction = () => ({
    type: USER_REGISTER_REQUEST,
    payload: {},
    meta: {}
});

export const userRegisterSuccessAction = res => ({
    type: USER_REGISTER_SUCCESS,
    payload: res,
    meta: {}
});

export const userRegisterFailureAction = e => ({
    type: USER_REGISTER_FAILURE,
    payload: e,
    meta: {}
});

export const userLoginRequestAction = () => ({
    type: USER_LOGIN_REQUEST,
    payload: {},
    meta: {}
});

export const userLoginSuccessAction = response => ({
    type: USER_LOGIN_SUCCESS,
    payload: response,
    meta: {}
});

export const userLoginFailureAction = e => ({
    type: USER_LOGIN_FAILURE,
    payload: e,
    meta: {}
});

export const userLoginCancelAction = () => ({
    type: USER_LOGIN_CANCEL,
    payload: {},
    meta: {}
});

export const userLogin = user => {
    return dispatch => {
        dispatch(userLoginRequestAction());
        const result = fetchPost('userservice/loginbypwd', {
            mobile: user.phone.data,
            loginPWD: user.password.data,
            loginType: 1
        });
        return result
            .then(response => {
                dispatch(userLoginSuccessAction(response));
                dispatch(socketAuthAction());
            })
            .catch(e => dispatch(userLoginFailureAction(e)));
    };
};

export const userLogout = () => {
    return dispatch => {
        dispatch(userLogoutRequestAction());
        const result = fetchPost('userservice/logout');
        return result
            .then(res => dispatch(userLogoutSuccessAction(res)))
            .catch(e => dispatch(userLogoutFailureAction(e)));
    };
};

export const userRegisterCode = phone => {
    return dispatch => {
        dispatch(userRegisterCodeRequestAction());
        const result = fetchPost('sms/request', {
            mobile: phone.data,
            smstype: 1
        });
        return result
            .then(res => dispatch(userRegisterCodeSuccessAction(res)))
            .catch(e => dispatch(userRegisterCodeFailureAction(e)));
    };
};

export const userRegister = user => dispatch => {
    dispatch(userRegisterRequestAction());
    console.log(user);
    const result = fetchPost('userservice/registeruser', {
        userName: user.phone.data,
        mobile: user.phone.data,
        verifyCode: user.smsCode.data,
        loginPWD: user.password.data
    });
    return result
        .then(res => {
            dispatch(userRegisterSuccessAction(res));
            console.log(res);
            if (res.retCode === 0) {
                dispatch(userLogin(user));
            }
        })
        .catch(e => dispatch(userRegisterFailureAction(e)));
};

export const validateRegisterFormAction = (user, type) => ({
    type: REGISTER_VALIDATE,
    payload: { userInput: user, validationType: type },
    meta: {}
});
