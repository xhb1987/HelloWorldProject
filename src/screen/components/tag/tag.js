import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    tagItem: {
        marginRight: 5,
        height: 20,
        minWidth: 45,
        padding: 2,
        textAlign: 'center',
        fontSize: 13,
        backgroundColor: '#ffeff1',
        borderRadius: 5,
        color: '#ed3349',
        borderWidth: 1,
        borderColor: '#ed3349'
    }
});

const Tag = ({ contant }) => <Text style={styles.tagItem}> {contant} </Text>;

export default Tag;
