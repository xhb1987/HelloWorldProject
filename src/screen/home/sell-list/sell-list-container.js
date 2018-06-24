import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SellList from './sell-list';
import { productPull } from '../../../state/screen/product/actions';
import { getClientConfigRequest, getTagRequest } from '../../../state/screen/home/actions';

class Container extends Component {
    componentDidMount() {
        this.props.getProductList(this.props.selectedVillage);
        this.props.getClientConfig();
        this.props.getTags();
    }
    render() {
        return <SellList {...this.props} />;
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
    selectedVillage: state.home.selectedVillage,
    navigator: ownProps.propsNavigatorObject
});

const dispatchToProps = dispatch => ({
    getProductList: () => dispatch(productPull()),
    getClientConfig: () => dispatch(getClientConfigRequest()),
    getTags: () => dispatch(getTagRequest())
});

const SellListContainer = connect(stateToProps, dispatchToProps)(Container);

export default SellListContainer;
