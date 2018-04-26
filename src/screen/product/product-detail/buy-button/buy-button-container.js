import React from 'react';
import { connect } from 'react-redux';
import BuyButton from './buy-button';

const Container = props => <BuyButton {...props} />;

const stateToProps = state => ({
    productDescription: state.product.product.productDescription
});

const dispatchToProps = () => ({});

const BuyButtonContainer = connect(stateToProps, dispatchToProps)(Container);

export default BuyButtonContainer;
