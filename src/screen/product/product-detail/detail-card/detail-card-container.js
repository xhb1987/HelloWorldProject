import React from 'react';
import { connect } from 'react-redux';
import DetailCard from './detail-card';

const Container = props => <DetailCard {...props} />;

const stateToProps = state => ({
    productDescription: state.product.product.productDescription
});

const dispatchToProps = () => ({});

const DetailCardContainer = connect(stateToProps, dispatchToProps)(Container);

export default DetailCardContainer;
