import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { productPull } from '../../../state/screen/product/actions';
import BuyList from './buy-list';

class Container extends Component {
    componentWillMount() {
        this.props.getProductList();
    }
    render() {
        return <BuyList {...this.props} />;
    }
}
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

const dispatchToProps = dispatch => ({
    getProductList: () => dispatch(productPull())
});

const BuyListContainer = connect(stateToProps, dispatchToProps)(Container);

export default BuyListContainer;
