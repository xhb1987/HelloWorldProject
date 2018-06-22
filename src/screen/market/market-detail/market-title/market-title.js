import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ed3349',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        height: 25
    },
    content: {
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold'
    }
});

const MarketTitle = ({ title }) => (
    <View style={styles.container}>
        <Text style={styles.content}>{title}</Text>
        <TouchableOpacity>
            <Text style={styles.content}>关注</Text>
        </TouchableOpacity>
    </View>
);

export default MarketTitle;
