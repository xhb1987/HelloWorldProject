import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { Divider } from 'react-native-elements';
import Card from './card/card';

const styles = StyleSheet.create({
    height: Dimensions.get('screen').height
});

const BuyList = ({ products, navigator }) => (
    <View>
        <FlatList
            data={products}
            renderItem={({ item, index }) => <Card item={item} key={index} />}
            keyExtractor={item => {
                return item.commodityID ? item.commodityID + '' : 'defaultKey';
            }}
            ItemSeparatorComponent={() => (
                <Divider style={{ backgroundColor: '#f0f0f0', height: 10 }} />
            )}
        />
    </View>
);

BuyList.propTypes = {};

BuyList.defaultProps = {};

export default BuyList;
