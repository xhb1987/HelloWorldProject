import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, SearchBar } from 'react-native-elements';
import { ListView, View, TouchableOpacity, Animated } from 'react-native';
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
        homeNavigator = this.props.navigator;
        this.state = {
            index: 0,
            routes: [
                { key: 'sell', title: '转让' },
                { key: 'buy', title: '求购' },
                { key: 'daigou', title: '代购' }
            ]
        };
    }

    static get navigatorStyle() {
        return {
            navBarCustomView: 'screen.Home.TopBar',
            navBarComponentAlignment: 'center',
            navBarNoBorder: true,
            tabBarHidden: true,
            tabBarTranslucent: true,
            navBarCustomViewInitialProps: {
                navigator: homeNavigator
            }
        };
    }

    _handleIndexChange = index => this.setState({ index });

    _renderHeader = props => {
        const inputRange = props.navigationState.routes.map((x, i) => i);

        return (
            <View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        borderBottomWidth: 1,
                        borderColor: '#f0f0f0',
                        shadowColor: '#f0f0f0',
                        shadowOffset: {
                            width: 1,
                            height: 2
                        },
                        shadowRadius: 1.5,
                        shadowOpacity: 1,
                        marginBottom: 2
                    }}
                >
                    {props.navigationState.routes.map((route, i) => {
                        const color = props.position.interpolate({
                            inputRange,
                            outputRange: inputRange.map(
                                inputIndex => (inputIndex === i ? '#ed3349' : '#888888')
                            )
                        });

                        const backgroundColor = props.position.interpolate({
                            inputRange,
                            outputRange: inputRange.map(
                                inputIndex => (inputIndex === i ? '#ed3349' : '#fff')
                            )
                        });

                        const opacity = props.position.interpolate({
                            inputRange,
                            outputRange: inputRange.map(inputIndex => (inputIndex === i ? 1 : 0))
                        });

                        return (
                            <TouchableOpacity
                                key={i}
                                style={{ flex: 1, alignItems: 'center', maxWidth: 70 }}
                                onPress={() => this.setState({ index: i })}
                            >
                                <Animated.Text
                                    style={[
                                        {
                                            fontSize: 18,
                                            fontWeight: 'bold',
                                            marginBottom: 5,
                                            marginHorizontal: 10
                                        },
                                        { color }
                                    ]}
                                >
                                    {route.title}
                                </Animated.Text>
                                <Animated.View
                                    style={[
                                        { height: 2, backgroundColor: 'red', width: 30 },
                                        { backgroundColor },
                                        { opacity }
                                    ]}
                                />
                            </TouchableOpacity>
                        );
                    })}
                </View>
                <View style={{ marginTop: 5 }}>
                    <Button
                        title="飞科剃须刀"
                        containerViewStyle={{
                            justifyContent: 'flex-start'
                        }}
                        textStyle={{
                            alignContent: 'flex-start',
                            color: '#c8c8c8',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start'
                        }}
                        leftIcon={{
                            name: 'search',
                            alignContent: 'flex-start',
                            color: '#c8c8c8',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start'
                        }}
                        rounded={true}
                        backgroundColor={'#efefef'}
                        buttonStyle={{ padding: 5 }}
                    />
                </View>
            </View>
        );
    };

    _renderScene = SceneMap({
        sell: () => <SellListContainer propsNavigatorObject={homeNavigator} />,
        buy: () => <SellListContainer propsNavigatorObject={homeNavigator} />,
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

const stateToProps = (state, ownProps) => ({
    home: state.home.home,
    homeTitle: state.home.homeTitle,
    productItem: state.product.products,
    city: state.home.selectedCity,
    navigator: ownProps.navigator
});

const dispatchToProps = dispatch => ({});

const ScreenHomeContainer = connect(stateToProps, dispatchToProps)(Container);

export default ScreenHomeContainer;
