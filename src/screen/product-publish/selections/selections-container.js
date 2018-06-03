import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import { productOptionSelectAction } from '../../../state/screen/product/actions';
import Selections from './selections';

class Container extends Component {
    static get navigatorStyle() {
        return {
            screenBackgroundColor: '#000000ad',
            navBarHidden: true,
            tabBarHidden: true,
            tabBarTranslucent: true
        };
    }

    render() {
        return <Selections {...this.props} />;
    }
}

const stateToProps = state => ({
    productToPublish: state.product.productToPublish,
    productOptionActive: state.product.productOptionActive,
    productCategoryOption: state.product.productCategoryOption,
    productUsageOption: state.product.productUsageOption,
    productDistrictOption: state.product.productDistrictOption
});

const dispatchToProps = dispatch => ({
    selectOption: (type, option) => {
        dispatch(productOptionSelectAction(type, option));
        Navigation.dismissLightBox({
            animationType: 'slide-down'
        });
    }
});

const SelectionsContainer = connect(stateToProps, dispatchToProps)(Container);
export default SelectionsContainer;
