import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, SearchBar } from 'react-native-elements';
import { ListView, View, TouchableOpacity, Animated, PixelRatio } from 'react-native';
import { TabBar, SceneMap } from 'react-native-tab-view';
import PropTypes from 'prop-types';

import CommonProductList from './common-product-list';
import SellListContainer from './sell-list/sell-list-container';

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
                { key: 'store', title: '店铺' },
                { key: 'estate', title: '地产' }
            ]
        };
    }

    static get navigatorStyle() {
        return {
            navBarHidden: true,
            tabBarHidden: true,
            tabBarTranslucent: true
        };
    }

    _handleIndexChange = index => this.setState({ index });

    _renderHeader = props => {
        const inputRange = props.navigationState.routes.map((x, i) => i);

        return (
            <View style={{ backgroundColor: 'white' }}>
                <View
                    style={{
                        height: 32,
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        borderBottomWidth: 1,
                        borderColor: '#f0f0f0',
                        shadowColor: '#f0f0f0',
                        shadowOffset: {
                            width: 5,
                            height: 5
                        },
                        shadowRadius: 1.5,
                        shadowOpacity: 0.8
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
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    maxWidth: 62.5
                                }}
                                onPress={() => this.setState({ index: i })}
                            >
                                <Animated.Text
                                    style={[
                                        {
                                            fontSize: 18,
                                            fontWeight: 'bold',
                                            marginBottom: 5,
                                            marginHorizontal: 5
                                        },
                                        { color }
                                    ]}
                                >
                                    {route.title}
                                </Animated.Text>
                                <Animated.View
                                    style={[
                                        {
                                            height: 2,
                                            backgroundColor: 'red',
                                            width: 20
                                        },
                                        { backgroundColor },
                                        { opacity }
                                    ]}
                                />
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        );
    };

    _renderScene = SceneMap({
        sell: () => <SellListContainer propsNavigatorObject={homeNavigator} />,
        buy: () => <View propsNavigatorObject={homeNavigator} />,
        store: () => <View propsNavigatorObject={homeNavigator} />,
        estate: () => <View propsNavigatorObject={homeNavigator} />
    });

    render() {
        return (
            <CommonProductList
                {...this.props}
                scene={this._renderScene}
                tabHeader={this._renderHeader}
                tabRounter={this.state}
                indexChange={this._handleIndexChange}
            />
        );
    }
}

Container.propTypes = {
    navigator: PropTypes.objectOf(PropTypes.any)
};

Container.defaultProps = {
    navigator: {}
};

const stateToProps = (state, ownProps) => ({
    navigator: ownProps.navigator
});

const dispatchToProps = dispatch => ({});

const CommonProductListContainer = connect(stateToProps, dispatchToProps)(Container);

export default CommonProductListContainer;
