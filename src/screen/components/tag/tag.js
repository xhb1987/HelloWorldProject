import React from 'react';
import { Text, StyleSheet, PixelRatio, View } from 'react-native';

const styles = StyleSheet.create({
    tagContainer: {
        borderRadius: 5,
        backgroundColor: '#ffeff1',
        marginRight: 10,
        height: 17.5,
        width: 40,
        borderColor: '#ed3349',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5
    },
    tagItem: {
        fontSize: 13,
        color: '#ed3349',
        textAlign: 'center'
    }
});

const Tag = ({ contant }) => (
    <View style={styles.tagContainer}>
        <Text style={styles.tagItem}>{contant} </Text>
    </View>
);

export default Tag;
