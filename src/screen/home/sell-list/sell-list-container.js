import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SellList from './sell-list';

const Container = props => <SellList {...props} />;

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

const SellListContainer = connect(stateToProps, dispatchToProps)(Container);

export default SellListContainer;
