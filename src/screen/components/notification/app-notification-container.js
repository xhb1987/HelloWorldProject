import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import AppNotification from './app-notification';
import { clearNotification } from '../../../state/actions';
import * as selector from '../../../state/selectors';

class Container extends PureComponent {
    componentWillUnmount() {
        this.props.clearNotification();
    }

    render() {
        return <AppNotification {...this.props} />;
    }
}

const stateToProps = state => ({
    notification: selector.getNotification(state)
});

const dispatchToProps = dispatch => ({
    clearNotification: () => dispatch(clearNotification())
});

const AppNotificationContainer = connect(stateToProps, dispatchToProps)(Container);
export default AppNotificationContainer;
