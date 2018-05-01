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
