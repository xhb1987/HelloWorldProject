import React, { Component } from 'react';
import { connect } from 'react-redux';
import MarketItemList from './market-item-list';

class Container extends Component {
    componentWillMount() {
        // this.props.getProductList();
    }

    render() {
        return <MarketItemList {...this.props} />;
    }
}

const stateToProps = (state, ownProps) => ({
    markets: state.market.markets,
    navigator: ownProps.propsNavigatorObject
});

const dispatchToProps = (dispatch, ownProps) => ({});

const MarketItemListContainer = connect(stateToProps, dispatchToProps)(Container);

export default MarketItemListContainer;
