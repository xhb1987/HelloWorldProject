import React from 'react';
import { Text, StyleSheet, PixelRatio } from 'react-native';

const styles = StyleSheet.create({
    tagItem: {
        height: 17.5,
        width: 40,
        marginRight: 10,
        textAlign: 'center',
        fontSize: 14,
        backgroundColor: '#ffeff1',
        borderRadius: 5,
        color: '#ed3349',
        borderWidth: 1,
        borderColor: '#ed3349',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const Tag = ({ contant }) => <Text style={styles.tagItem}> {contant} </Text>;

export default Tag;
