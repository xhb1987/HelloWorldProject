import React from 'react';
import { connect } from 'react-redux';
import TitleCard from './title-card';

const Container = props => <TitleCard {...props} />;

const stateToProps = state => ({
    product: state.product.product,
    tags: state.home.tags
});

const dispatchToProps = () => ({});

const TitleCardContainer = connect(stateToProps, dispatchToProps)(Container);

export default TitleCardContainer;
