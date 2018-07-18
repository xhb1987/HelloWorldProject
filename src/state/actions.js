import { resetUserNotificationAction, userLogout } from './screen/user/actions';
import { socketCloseAction } from './screen/chat-message/actions';

export function userLogoutAction() {
    return dispatch => {
        dispatch(userLogout());
        dispatch(socketCloseAction());
    };
}

export function clearNotification() {
    return dispatch => {
        dispatch(resetUserNotificationAction());
    };
}
