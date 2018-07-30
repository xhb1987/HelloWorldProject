import React, { Component } from 'react';
import { View, Dimensions, Animated, Easing } from 'react-native';
import TabContainer from '../../screen/tabs/tabs-container';

class TabWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            positionAnimation: new Animated.Value(0)
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.hideTab === true && this.props.hideTab === false) {
            Animated.timing(this.state.positionAnimation, {
                toValue: 0,
                duration: 100,
                easing: Easing.ease,
                useNativeDriver: true
            }).start();
        }

        if (prevProps.hideTab === false && this.props.hideTab === true) {
            Animated.timing(this.state.positionAnimation, {
                toValue: 55,
                duration: 100,
                easing: Easing.ease,
                useNativeDriver: true
            }).start();
        }
    }

    render() {
        return (
            <View
                style={{
                    flexDirection: 'column',
                    height: Dimensions.get('screen').height
                }}
            >
                <View
                    style={{
                        flexGrow: 1,
                        flexShrink: 0,
                        flexBasis: 'auto'
                    }}
                >
                    {this.props.children}
                </View>
                <Animated.View
                    style={{
                        flexGrow: 0,
                        flexShrink: 0,
                        flexBasis: 'auto',
                        transform: [
                            {
                                translateY: this.state.positionAnimation
                            }
                        ]
                    }}
                >
                    <TabContainer navigator={this.props.navigator} />
                </Animated.View>
            </View>
        );
    }
}

export default TabWrapper;
