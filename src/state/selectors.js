import { createSelector } from 'reselect';
import * as chatMessageSelector from './screen/chat-message/selectors';
import * as estateSelector from './screen/estate/selectors';
import * as homeSelector from './screen/home/selectors';
import * as marketSelector from './screen/market/selectors';
import * as messageSelector from './screen/message/selectors';
import * as productSelector from './screen/product/selectors';
import * as squareSelector from './screen/square/selectors';
import * as userSelector from './screen/user/selectors';

export const getUserLoginPhone = state => userSelector.getUserLoginPhone(state.user);
export const getUserLoginPassword = state => userSelector.getUserLoginPassword(state.user);
export const getUsersessionToken = state => userSelector.getUsersessionToken(state.user);
export const getUserSmsCode = state => userSelector.getUserSmsCode(state.user);

// notification selector
export const getChatMessageNotification = state =>
    chatMessageSelector.getChatMessageNotification(state.chatMessage);
export const getEstateNotification = state => estateSelector.getEstateNotification(state.estate);
export const getHomeNotification = state => homeSelector.getHomeNotification(state.home);
export const getMarketNotification = state => marketSelector.getMarketNotification(state.market);
export const getMessageNotification = state =>
    messageSelector.getMessageNotification(state.message);
export const getProductNotification = state =>
    productSelector.getProductNotification(state.product);
export const getSquareNotification = state => squareSelector.getSquareNotification(state.square);
export const getUserNotification = state => userSelector.getUsersNotification(state.user);

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

export const getNotification = createSelector(
    getChatMessageNotification,
    getEstateNotification,
    getHomeNotification,
    getMarketNotification,
    getMessageNotification,
    getProductNotification,
    getSquareNotification,
    getUserNotification,
    (
        chatMessageNotification,
        estateNotification,
        homeNotification,
        marketNotification,
        messageNotification,
        productNotification,
        squareNotification,
        userNotification
    ) =>
        chatMessageNotification ||
        estateNotification ||
        homeNotification ||
        marketNotification ||
        messageNotification ||
        productNotification ||
        squareNotification ||
        userNotification
);
