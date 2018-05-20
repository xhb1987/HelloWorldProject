import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProductDetail from './product-detail';

class Container extends Component {
    static get navigatorStyle() {
        return {
            navBarTranslucent: true,
            tabBarHidden: true,
            navBarHidden: true
        };
    }

    render() {
        return <ProductDetail {...this.props} />;
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
    product: state.product.product,
    tags: state.home.tags,
    clientConfig: state.home.clientConfig
});

const dispatchToProps = (dispatch, ownProps) => ({
    goBack: () => ownProps.navigator.pop()
});

const ProductDetailContainer = connect(stateToProps, dispatchToProps)(
    Container
);

export default ProductDetailContainer;
