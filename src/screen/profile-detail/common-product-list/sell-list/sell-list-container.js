import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import { productPull, productSelectAction } from '../../../../state/screen/product/actions';
import SellList from './sell-list';

const Container = props => <SellList {...props} />;

const stateToProps = state => ({
    imageVersion: state.product.imageVersion,
    products: state.product.products,
    clientConfig: state.home.clientConfig,
    myType: state.user.myInvolvePulish
});

const dispatchToProps = (dispatch, ownProps) => ({
    productSelect: product => {
        ownProps.propsNavigatorObject.push({
            screen: 'screen.Product.Detail',
            title: product.title
        });
        dispatch(productSelectAction(product));
    }
});

const SellListContainer = connect(stateToProps, dispatchToProps)(Container);

export default SellListContainer;
