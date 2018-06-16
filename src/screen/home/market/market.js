import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { Divider } from 'react-native-elements';
import Card from './card/card';

const styles = StyleSheet.create({
    height: Dimensions.get('screen').height
});

const Market = ({ market, navigator }) => (
    <View>
        <FlatList
            data={market}
            renderItem={({ item, index }) => <Card item={item} key={index} />}
            keyExtractor={({ item, index }) => index}
            ItemSeparatorComponent={() => (
                <Divider style={{ backgroundColor: '#f0f0f0', height: 10 }} />
            )}
        />
    </View>
);

export default Market;
