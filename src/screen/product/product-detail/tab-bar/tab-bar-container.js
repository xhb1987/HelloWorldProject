import React from 'react';
import { connect } from 'react-redux';
import ProductTabBar from './tab-bar';

const Container = props => <ProductTabBar {...props} />;

const stateToProps = state => ({
    productTitle: state.product.product.title
});

const ProductDetailTabBarContainer = connect(stateToProps)(Container);
export default ProductDetailTabBarContainer;
