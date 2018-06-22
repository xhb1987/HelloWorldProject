import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    ListView,
    View,
    Text,
    TouchableOpacity,
    Animated,
    PixelRatio,
    StyleSheet
} from 'react-native';
import { Icon } from 'react-native-elements';
import { TabBar, SceneMap } from 'react-native-tab-view';
import MarketContent from './market-content';
import MarketItemListContainer from './market-item-list/market-item-list-container';

const styles = StyleSheet.create({
    tabViewContainer: {
        paddingHorizontal: 15,
        paddingRight: 30,
        backgroundColor: '#ed3349',
        minHeight: 42.5,
        paddingTop: 12.5,
        paddingBottom: 15,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    tabView: {
        flex: 1,
        alignItems: 'center',
        maxWidth: 62.5
    },
    tabViewText: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 5,
        marginHorizontal: 5
    },
    searchButton: {
        width: 90,
        height: 30,
        borderRadius: 30,
        paddingHorizontal: 10,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    searchTitle: {
        color: '#bebebe',
        fontSize: 17
    }
});

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            routes: [
                { key: 'sale', title: '特价' },
                { key: 'fruit', title: '水果' },
                { key: 'vage', title: '青菜' },
                { key: 'meat', title: '肉类' }
            ]
        };
    }

    _handleIndexChange = index => this.setState({ index });

    _renderHeader = props => {
        const inputRange = props.navigationState.routes.map((x, i) => i);

        return (
            <View>
                <View style={styles.tabViewContainer}>
                    <View>
                        <TouchableOpacity style={styles.searchButton} activeOpacity={0.9}>
                            <Icon type="evilicon" name="search" color="#bebebe" />
                            <Text style={styles.searchTitle}>火龙果</Text>
                        </TouchableOpacity>
                    </View>
                    {props.navigationState.routes.map((route, i) => {
                        const color = props.position.interpolate({
                            inputRange,
                            outputRange: inputRange.map(
                                inputIndex => (inputIndex === i ? 'white' : 'white')
                            )
                        });

                        const backgroundColor = props.position.interpolate({
                            inputRange,
                            outputRange: inputRange.map(
                                inputIndex => (inputIndex === i ? 'white' : '#fff')
                            )
                        });

                        const opacity = props.position.interpolate({
                            inputRange,
                            outputRange: inputRange.map(inputIndex => (inputIndex === i ? 1 : 0))
                        });

                        return (
                            <TouchableOpacity
                                key={i}
                                style={styles.tabView}
                                onPress={() => this.setState({ index: i })}
                            >
                                <Animated.Text style={[styles.tabViewText, { color }]}>
                                    {route.title}
                                </Animated.Text>
                                <Animated.View
                                    style={[
                                        {
                                            height: 2,
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
        sale: () => <MarketItemListContainer />,
        fruit: () => <MarketItemListContainer />,
        vage: () => <MarketItemListContainer />,
        meat: () => <MarketItemListContainer />
    });

    render() {
        return (
            <MarketContent
                {...this.props}
                scene={this._renderScene}
                tabHeader={this._renderHeader}
                tabRounter={this.state}
                indexChange={this._handleIndexChange}
            />
        );
    }
}

const stateToProps = (state, ownProps) => ({
    market: state.market.market,
    navigator: ownProps.navigator
});

const dispatchToProps = dispatch => ({});

const MarketContentContainer = connect(stateToProps, dispatchToProps)(Container);

export default MarketContentContainer;
