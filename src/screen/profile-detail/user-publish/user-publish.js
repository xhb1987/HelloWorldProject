import React from 'react';
import { ScrollView, View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import { Icon, Divider } from 'react-native-elements';
import Header from '../../components/header/header';
import CommonProductListContainer from '../common-product-list/common-product-list-container';

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        flexDirection: 'column'
    },
    itemContainer: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    },
    container: {
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 'auto'
    },
    item: {
        height: 48
    },
    text: {
        fontSize: 17,
        color: '#333'
    },
    leftItem: {
        marginLeft: 11
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    buttonContainer: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: 'auto',
        marginBottom: 75
    }
});

const UserPublish = ({ navigator, goBack }) => (
    <View style={styles.viewContainer}>
        <Header title="我的发布" leftButtonType="back" leftButtonPress={goBack} />
        <CommonProductListContainer />
    </View>
);

export default UserPublish;
