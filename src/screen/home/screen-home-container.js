import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { TabBar, SceneMap } from 'react-native-tab-view';
import PropTypes from 'prop-types';

import BuyListContainer from './buy-list/buy-list-container';
import SellListContainer from './sell-list/sell-list-container';
import ProductListContainer from './product-list/product-list-container';
import DaigouListContainer from './daigou-list/daigou-list-container';
import ScreenHome from './screen-home';

import styles from './styles';

let homeTitle = '';
let homeNavigator;

class Container extends Component {
    constructor(props) {
        super(props);
        ({ homeTitle } = this.props);
        homeNavigator = this.props.navigator;
        this.state = {
            index: 0,
            routes: [
                { key: 'sell', title: '求购' },
                { key: 'buy', title: '出售' },
                { key: 'daigou', title: '代购' }
            ]
        };
    }

    static get navigatorStyle() {
        return {
            navBarCustomView: 'screen.Home.TopBar',
            navBarComponentAlignment: 'center',
            navBarNoBorder: true,
            navBarCustomViewInitialProps: {
                title: homeTitle,
                navigator: homeNavigator
            }
        };
    }

    _handleIndexChange = index => this.setState({ index });
    _renderHeader = props => (
        <TabBar
            {...props}
            style={{ backgroundColor: 'white' }}
            labelStyle={{ color: 'black' }}
            indicatorStyle={{ backgroundColor: 'red' }}
        />
    );

    _renderScene = SceneMap({
        sell: () => <SellListContainer propsNavigatorObject={homeNavigator} />,
        buy: () => <BuyListContainer propsNavigatorObject={homeNavigator} />,
        daigou: () => <DaigouListContainer />
    });

    render() {
        return (
            <ScreenHome
                {...this.props}
                scene={this._renderScene}
                tabHeader={this._renderHeader}
                tabRounter={this.state}
                indexChange={this._handleIndexChange}
                productItem={this.state.dataSource}
            />
        );
    }
}

Container.propTypes = {
    homeTitle: PropTypes.string,
    navigator: PropTypes.objectOf(PropTypes.any),
    productItem: PropTypes.arrayOf(PropTypes.object)
};

Container.defaultProps = {
    homeTitle: 'Default Home',
    navigator: {},
    productItem: [{}]
};

const stateToProps = state => ({
    home: state.home.home,
    homeTitle: state.home.homeTitle,
    productItem: state.product.products
});

const dispatchToProps = () => ({});

const ScreenHomeContainer = connect(stateToProps, dispatchToProps)(Container);

export default ScreenHomeContainer;
