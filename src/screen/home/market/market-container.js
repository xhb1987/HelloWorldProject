import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { marketSelectAction } from '../../../state/screen/market/actions';
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
    markets: state.market.markets,
    navigator: ownProps.propsNavigatorObject
});

const dispatchToProps = (dispatch, ownProps) => ({
    marketSelect: market => {
        ownProps.propsNavigatorObject.push({
            screen: 'screen.Market.Detail'
        });
        dispatch(marketSelectAction(market));
    }
});

const MarketContainer = connect(stateToProps, dispatchToProps)(Container);

export default MarketContainer;
