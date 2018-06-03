import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import Category from './category';
import { productOptionSelectAction } from '../../../state/screen/product/actions';

class Container extends Component {
    static get navigatorStyle() {
        return {
            navBarHidden: true,
            tabBarHidden: true,
            tabBarTranslucent: true
        };
    }

    render() {
        return <Category {...this.props} />;
    }
}

const stateToProps = state => ({
    product: state.product.productToPublish,
    productCategoryOption: state.product.productCategoryOption
});

const dispatchToProps = (dispatch, ownProps) => ({
    selectOption: (type, option) => {
        dispatch(productOptionSelectAction(type, option));
        ownProps.navigator.pop();
    }
    // cancel: () => ownProps.navigator.pop()
});

const CategoryContainer = connect(stateToProps, dispatchToProps)(Container);

export default CategoryContainer;
