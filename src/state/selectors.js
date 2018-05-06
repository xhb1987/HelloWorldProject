import { createSelector } from 'reselect';
import * as userSelector from './screen/user/selectors';

export const getUserLoginPhone = state => userSelector.getUserLoginPhone(state.user);
export const getUserLoginPassword = state => userSelector.getUserLoginPassword(state.user);
export const getUsersessionToken = state => userSelector.getUsersessionToken(state.user);

export const getUserLogInfo = createSelector(
    getUserLoginPhone,
    getUserLoginPassword,
    (loginPhone, loginPassword) => ({
        phone: loginPhone,
        password: loginPassword
    })
);
