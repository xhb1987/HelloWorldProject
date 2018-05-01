import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import PropTypes from 'prop-types';
import { productSelectAction } from '../../../state/screen/product/actions';
import ProductList from './product-list';

class Container extends Component {
    constructor(props) {
        super(props);
        this.goToProductDetail = this.goToProductDetail.bind(this);
    }

    goToProductDetail(product) {
        this.props.propsNavigatorObject.push({
            screen: 'screen.Product.Detail',
            animationType: 'slide-up',
            title: product.title,
            backButtonTitle: ''
        });
        this.props.productSelect(product);
    }

    render() {
        return (
            <ProductList
                {...this.props}
                products={this.props.products}
                onProductPress={this.goToProductDetail}
            />
        );
    }
}

const stateToProps = state => ({
    productItem: state.product.products
});

const dispatchToProps = dispatch => ({
    productSelect: product => dispatch(productSelectAction(product))
});

const ProductListContainer = connect(stateToProps, dispatchToProps)(Container);

export default ProductListContainer;
