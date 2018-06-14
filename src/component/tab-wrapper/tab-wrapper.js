import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import TabContainer from '../../screen/tabs/tabs-container';

class TabWrapper extends Component {
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
                <View
                    style={{
                        flexGrow: 0,
                        flexShrink: 0,
                        flexBasis: 'auto'
                    }}
                >
                    {this.props.hideTab ? null : <TabContainer navigator={this.props.navigator} />}
                </View>
            </View>
        );
    }
}

export default TabWrapper;
