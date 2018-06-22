import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { Divider } from 'react-native-elements';
import Card from './card/card';

const EstateList = ({ estates, estateSelect, navigator }) => (
    <View>
        <FlatList
            data={estates}
            renderItem={({ item, index }) => (
                <Card item={item} key={index} onPressCallback={() => {}} />
            )}
            keyExtractor={({ item, index }) => index}
            ItemSeparatorComponent={() => (
                <Divider style={{ backgroundColor: '#f0f0f0', height: 10 }} />
            )}
        />
    </View>
);

export default EstateList;
