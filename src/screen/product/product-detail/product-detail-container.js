import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProductDetail from './product-detail';

class Container extends Component {
    static get navigatorStyle() {
        return {
            navBarTranslucent: true,
            tabBarHidden: true,
            drawUnderTabBar: true,
            navBarButtonColor: '#123456',
            navBarTextColor: '#000000',
            collapsingToolBarCollapsedColor: '#0f2362',
            navBarBackgroundColor: '#ffffff',
            navBarCustomView: 'screen.Product.Detail.TabBar',
            navBarComponentAlignment: 'center'
        };
    }
    constructor(props) {
        super(props);
        this.productOrderCallback = this.productOrderCallback.bind(this);
    }

    productOrderCallback() {
        this.props.navigator.push({
            screen: 'screen.Product.Order',
            animationType: 'slide-up',
            title: 'test title',
            backButtonTitle: ''
        });
    }

    render() {
        return <ProductDetail {...this.props} productOrderCallback={this.productOrderCallback} />;
    }
}

Container.propTypes = {
    productTitle: PropTypes.string,
    navigator: PropTypes.objectOf(PropTypes.any)
};

Container.defaultProps = {
    productTitle: 'Product Detail Home',
    navigator: {}
};

const stateToProps = state => ({
    productTitle: state.product.product.title,
    product: state.product.products
});

const dispatchToProps = () => ({});

const ProductDetailContainer = connect(stateToProps, dispatchToProps)(Container);

export default ProductDetailContainer;