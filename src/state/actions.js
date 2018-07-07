import { resetUserNotificationAction } from './screen/user/actions';

export function clearNotification() {
    return dispatch => {
        dispatch(resetUserNotificationAction());
    };
}
