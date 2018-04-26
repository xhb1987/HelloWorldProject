import React from 'react';
import { connect } from 'react-redux';
import ConfirmButton from './confirm-button';

const Container = props => <ConfirmButton {...props} />;

const stateToProps = state => ({
    price: state.product.product.price
});

const dispatchToProps = () => ({});

const ConfirmButtonContainer = connect(stateToProps, dispatchToProps)(Container);

export default ConfirmButtonContainer;
