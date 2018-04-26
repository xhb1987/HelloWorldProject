import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from './modal';

class Container extends Component {
    constructor(props) {
        super(props);
        this.dismissModal = this.dismissModal.bind(this);
    }

    dismissModal() {
        this.props.navigator.onPopToRoot();
    }

    render() {
        return <Modal {...this.props} dismissModal={this.dismissModal} />;
    }
}

const stateToProps = () => ({});
const dispatchToProps = () => ({});

const ModalContainer = connect(stateToProps, dispatchToProps)(Container);
export default ModalContainer;
