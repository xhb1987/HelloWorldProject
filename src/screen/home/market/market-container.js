import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { productPull } from '../../../state/screen/product/actions';
import Market from './market';

class Container extends Component {
    componentWillMount() {
        // this.props.getProductList();
    }
    render() {
        return <Market {...this.props} />;
    }
}

const stateToProps = (state, ownProps) => ({
    market: state.market.market,
    navigator: ownProps.propsNavigatorObject
});

const dispatchToProps = dispatch => ({});

const MarketContainer = connect(stateToProps, dispatchToProps)(Container);

export default MarketContainer;
