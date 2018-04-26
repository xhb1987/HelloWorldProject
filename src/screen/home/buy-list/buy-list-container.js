import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BuyList from './buy-list';

const Container = props => <BuyList {...props} />;

Container.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object)
};

Container.defaultProps = {
    products: [{}]
};

const stateToProps = (state, ownProps) => ({
    products: state.product.products,
    navigator: ownProps.propsNavigatorObject
});

const dispatchToProps = () => ({});

const BuyListContainer = connect(stateToProps, dispatchToProps)(Container);

export default BuyListContainer;
