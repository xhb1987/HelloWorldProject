export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

export const USER_LOGIN_CANCEL = 'USER_LOGIN_CANCEL';

export const userLoginRequestAction = () => ({
    type: USER_LOGIN_REQUEST,
    payload: {},
    meta: {}
});

export const userLoginSuccessAction = () => ({
    type: USER_LOGIN_SUCCESS,
    payload: {},
    meta: {}
});

export const userLoginFailureAction = () => ({
    type: USER_LOGIN_FAILURE,
    payload: {},
    meta: {}
});

export const userLoginCancelAction = () => ({
    type: USER_LOGIN_CANCEL,
    payload: {},
    meta: {}
});

export const userLogin = () => {
    return dispatch => {
        dispatch(userLoginRequestAction());
        dispatch(userLoginSuccessAction());
    };
};
