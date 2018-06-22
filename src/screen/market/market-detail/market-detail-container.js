import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MarketDetail from './market-detail';

class Container extends Component {
    static get navigatorStyle() {
        return {
            navBarTranslucent: true,
            tabBarHidden: true,
            navBarHidden: true
        };
    }

    render() {
        return <MarketDetail {...this.props} />;
    }
}

const stateToProps = state => ({
    market: state.market.market
});

const dispatchToProps = (dispatch, ownProps) => ({
    goBack: () => ownProps.navigator.pop()
});

const MarketDetailContainer = connect(stateToProps, dispatchToProps)(Container);

export default MarketDetailContainer;
