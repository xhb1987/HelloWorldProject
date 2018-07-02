import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { productPull } from '../../../state/screen/product/actions';
import BuyList from './buy-list';

class Container extends Component {
    render() {
        return <BuyList {...this.props} />;
    }
}

const stateToProps = (state, ownProps) => ({
    products: state.product.products,
    navigator: ownProps.propsNavigatorObject
});

const dispatchToProps = dispatch => ({});

const BuyListContainer = connect(stateToProps, dispatchToProps)(Container);

export default BuyListContainer;
