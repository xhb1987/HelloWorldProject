import React from 'react';
import { connect } from 'react-redux';
import TitleCard from './title-card';

const Container = props => <TitleCard {...props} />;

const stateToProps = state => ({
    productTitle: state.product.product.title,
    price: state.product.product.price
});

const dispatchToProps = () => ({});

const TitleCardContainer = connect(stateToProps, dispatchToProps)(Container);

export default TitleCardContainer;
