import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProductOrder from './product-order';

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

    render() {
        return <ProductOrder {...this.props} />;
    }
}

Container.propTypes = {
    productTitle: PropTypes.string
};

Container.defaultProps = {
    productTitle: 'Product Detail Home'
};

const stateToProps = state => ({
    productTitle: state.product.product.title,
    product: state.product.products
});

const dispatchToProps = () => ({});

const ProductOrderContainer = connect(stateToProps, dispatchToProps)(Container);

export default ProductOrderContainer;
