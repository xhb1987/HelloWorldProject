import { createSelector } from 'reselect';
import * as userSelector from './screen/user/selectors';

export const getUserLoginPhone = state => userSelector.getUserLoginPhone(state.user);
export const getUserLoginPassword = state => userSelector.getUserLoginPassword(state.user);
export const getUsersessionToken = state => userSelector.getUsersessionToken(state.user);
export const getUserSmsCode = state => userSelector.getUserSmsCode(state.user);

export const getUserLogInfo = createSelector(
    getUserLoginPhone,
    getUserLoginPassword,
    getUserSmsCode,
    (loginPhone, loginPassword, smsCode) => ({
        phone: loginPhone,
        password: loginPassword,
        smsCode: smsCode
    })
);
