import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { Divider } from 'react-native-elements';
import MarketItem from './market-item/market-item';

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    listContainer: {
        flexDirection: 'column',
        flexWrap: 'wrap'
    }
});

const MarketItemList = ({ markets, marketSelect, navigator }) => (
    <View style={styles.container}>
        <FlatList
            numColumns={2}
            style={styles.listContainer}
            data={[1, 2, 3]}
            renderItem={({ item, index }) => <MarketItem item={item} />}
            keyExtractor={({ item, index }) => item}
        />
    </View>
);

export default MarketItemList;
