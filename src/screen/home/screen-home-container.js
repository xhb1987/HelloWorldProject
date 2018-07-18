import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, SearchBar } from 'react-native-elements';
import { ListView, View, TouchableOpacity, Animated, PixelRatio } from 'react-native';
import { TabBar, SceneMap } from 'react-native-tab-view';
import PropTypes from 'prop-types';
import SplashScreen from 'react-native-splash-screen';
import TabWrapper from '../../component/tab-wrapper/tab-wrapper';
import BuyListContainer from './buy-list/buy-list-container';
import SellListContainer from './sell-list/sell-list-container';
import MarketContainer from './market/market-container';
import EstateListContainer from './estate-list/estate-list-container';
import ScreenHome from './screen-home';
import { socketInitAction } from 'state/screen/chat-message/actions';
import * as selector from '../../state/selectors';

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
                { key: 'store', title: '店铺' },
                { key: 'estate', title: '地产' }
            ]
        };
    }

    componentDidMount() {
        SplashScreen.hide();
        console.log('Im home did mount');
        this.props.socketInit();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.notification === '' && this.props.notification !== '') {
            this.props.showNotification();
        }
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
            <View>
                <View
                    style={{
                        marginTop: 10,
                        height: 25,
                        flexDirection: 'row',
                        alignItems: 'center',
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
                <SearchBar
                    returnKeyLabel={'搜索'}
                    round
                    lightTheme
                    style={{ borderWidth: 0 }}
                    icon={{
                        type: 'material',
                        color: '#86939e',
                        name: 'search',
                        style: { top: 10 }
                    }}
                    inputStyle={{
                        backgroundColor: '#efefef',
                        color: '#bbbbbb',
                        marginVertical: 3,
                        paddingLeft: 30,
                        height: 30.5
                    }}
                    containerStyle={{
                        marginHorizontal: 5,
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                        backgroundColor: 'white'
                    }}
                    placeholder="飞科剃须刀"
                    placeholderTextColor="#bbbbbb"
                />
            </View>
        );
    };

    _renderScene = SceneMap({
        sell: () => <SellListContainer propsNavigatorObject={homeNavigator} />,
        buy: () => <BuyListContainer propsNavigatorObject={homeNavigator} />,
        store: () => <MarketContainer propsNavigatorObject={homeNavigator} />,
        estate: () => <EstateListContainer propsNavigatorObject={homeNavigator} />
    });

    render() {
        return (
            <TabWrapper navigator={this.props.navigator}>
                <ScreenHome
                    {...this.props}
                    scene={this._renderScene}
                    tabHeader={this._renderHeader}
                    tabRounter={this.state}
                    indexChange={this._handleIndexChange}
                />
            </TabWrapper>
        );
    }
}

Container.propTypes = {
    homeTitle: PropTypes.string,
    navigator: PropTypes.objectOf(PropTypes.any)
};

Container.defaultProps = {
    homeTitle: 'Default Home',
    navigator: {}
};

const stateToProps = (state, ownProps) => ({
    home: state.home.home,
    homeTitle: state.home.homeTitle,
    productItem: state.product.products,
    city: state.home.selectedCity,
    navigator: ownProps.navigator,
    notification: selector.getNotification(state)
});

const dispatchToProps = (dispatch, ownProps) => ({
    socketInit: () => {
        dispatch(socketInitAction());
    },
    showNotification: () => {
        ownProps.navigator.showInAppNotification({
            screen: 'component.Notification',
            autoDismissTimerSec: 0.5
        });
    }
});

const ScreenHomeContainer = connect(stateToProps, dispatchToProps)(Container);

export default ScreenHomeContainer;
