import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DaigouList from './daigou-list';

const Container = props => <DaigouList {...props} />;

Container.propTypes = {
    productItem: PropTypes.arrayOf(PropTypes.object)
};

Container.defaultProps = {
    productItem: [{}]
};

const stateToProps = state => ({
    productItem: state.product.products
});

const dispatchToProps = () => ({});

const DaigouListContainer = connect(stateToProps, dispatchToProps)(Container);

export default DaigouListContainer;
