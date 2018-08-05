import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import UserCertAdd from './user-cert-add';
import { userAddCertAction } from '../../../state/screen/user/actions';

class Container extends PureComponent {
    componentDidUpdate(prevProps) {
        if (prevProps.certUploading === false && this.props.certUploading === true) {
            this.props.uploadSuccess();
        }
    }
    render() {
        return <UserCertAdd {...this.props} />;
    }
}

const stateToProps = (state, ownProps) => ({
    isLogin: state.user.isLogin,
    navigator: ownProps.navigator,
    certUploading: state.user.certUploading
});
const dispatchToProps = (dispatch, ownProps) => ({
    addCert: () => dispatch(userAddCertAction()),
    goBack: () => {
        ownProps.navigator.pop();
    },
    uploadSuccess: () => {
        ownProps.navigator.popToRoot();
    }
});

const UserCertAddContainer = connect(stateToProps, dispatchToProps)(Container);
export default UserCertAddContainer;
