import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import { productSelectAction } from '../../../../state/screen/product/actions';
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
            backButtonTitle: '',
            navigatorButtons: {}
        });
        this.props.productSelect(product);
    }

    render() {
        return this.props.products.length > 0 ? (
            <ProductList {...this.props} onProductPress={this.goToProductDetail} />
        ) : null;
    }
}

const stateToProps = state => ({
    products: state.product.products,
    clientConfig: state.home.clientConfig,
    tags: state.home.tags
});

const dispatchToProps = dispatch => ({
    productSelect: product => dispatch(productSelectAction(product))
});

const ProductListContainer = connect(stateToProps, dispatchToProps)(Container);

export default ProductListContainer;
