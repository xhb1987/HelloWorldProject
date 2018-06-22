import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import { productPull, productSelectAction } from '../../../../state/screen/product/actions';
import ProductList from './product-list';

class Container extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return this.props.products.length > 0 ? <ProductList {...this.props} /> : null;
    }
}

const stateToProps = state => ({
    products: state.product.products,
    loading: state.product.loading,
    clientConfig: state.home.clientConfig,
    tags: state.home.tags
});

const dispatchToProps = (dispatch, ownProps) => ({
    refreshProductList: () => dispatch(productPull()),
    productSelect: product => {
        ownProps.propsNavigatorObject.push({
            screen: 'screen.Product.Detail',
            title: product.title
        });
        dispatch(productSelectAction(product));
    }
});

const ProductListContainer = connect(stateToProps, dispatchToProps)(Container);

export default ProductListContainer;
