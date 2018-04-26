import React from 'react';
import { PixelRatio, View, Text } from 'react-native';

class TopTabs extends React.Component {
    static get navigatorStyle() {
        return {
            topTabTextColor: '#ffffff',
            topTabTextFontFamily: 'BioRhyme-Bold',
            selectedTopTabTextColor: '#ff505c',

            // Icons
            topTabIconColor: '#ffffff',
            selectedTopTabIconColor: '#ff505c',

            // Tab indicator
            selectedTopTabIndicatorHeight: PixelRatio.get() * 2,
            selectedTopTabIndicatorColor: '#ff505c'
        };
    }

    render() {
        return (
            <View>
                <Text>Title</Text>
            </View>
        );
    }
}

export default TopTabs;
