import fetchPost from '../../../util/fetch-post';

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

export const USER_INPUT_CHANGE = 'USER_INPUT_CHANGE';

export const USER_LOGOUT_REQUEST = 'USER_LOGOUT_REQUEST';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_LOGOUT_FAILURE = 'USER_LOGOUT_FAILURE';

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

// const userRegisterCodeFailureAction = () => ({
//     type: USER_REGISTER_CODE_FAILURE,
//     payload: {},
//     meta: {}
// });

const userRegisterCodeSuccessAction = () => ({
    type: USER_REGISTER_CODE_SUCCESS,
    payload: {},
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

export const userRegisterSuccessAction = () => ({
    type: USER_REGISTER_SUCCESS,
    payload: {},
    meta: {}
});

export const userRegisterFailureAction = () => ({
    type: USER_REGISTER_FAILURE,
    payload: {},
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
        const result = fetchPost('http://39.105.23.168:8080/neighbors-web/userservice/loginbypwd', {
            mobile: user.phone,
            loginPWD: user.password,
            loginType: 1
        });
        return result
            .then(response => dispatch(userLoginSuccessAction(response)))
            .catch(e => dispatch(userLoginFailureAction(e)));
    };
};

export const userLogout = () => {
    return dispatch => {
        dispatch(userLogoutRequestAction());
        const result = fetchPost('http://39.105.23.168:8080/neighbors-web/userservice/logout');
        return result
            .then(res => dispatch(userLogoutSuccessAction(res)))
            .catch(e => dispatch(userLogoutFailureAction(e)));
    };
};

export const userRegisterCode = () => {
    return dispatch => {
        dispatch(userRegisterCodeRequestAction());
        dispatch(userRegisterCodeSuccessAction());
    };
};

export const userRegister = () => {
    return dispatch => {
        dispatch(userRegisterRequestAction());
        dispatch(userRegisterSuccessAction());
    };
};