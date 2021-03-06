import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { Divider } from 'react-native-elements';
import Card from './card/card';

const styles = StyleSheet.create({
    height: Dimensions.get('screen').height
});

const Market = ({ markets, marketSelect, navigator }) => (
    <View>
        <FlatList
            data={markets}
            renderItem={({ item, index }) => (
                <Card item={item} key={index} onPressCallback={() => marketSelect(item)} />
            )}
            keyExtractor={({ item, index }) => index}
            ItemSeparatorComponent={() => (
                <Divider style={{ backgroundColor: '#f0f0f0', height: 10 }} />
            )}
        />
    </View>
);

export default Market;
