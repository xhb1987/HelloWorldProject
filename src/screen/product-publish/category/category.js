import React, { Component } from 'react';
import { TouchableOpacity, Dimensions, Text, View, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Header from '../../components/header/header';

const styles = StyleSheet.create({
    container: {
        marginTop: 0
    },
    itemContainer: {
        paddingLeft: 10,
        paddingTop: 15,
        paddingBottom: 15,
        paddingVertical: 8
    },
    listTitleSelected: {
        color: '#ed3349'
    },
    listTitle: {
        marginLeft: 0,
        fontSize: 18,
        color: '#636162'
    }
});

const Category = ({ product, cancel, selectOption, productCategoryOption }) => (
    <View>
        <Header title="分类" leftButtonPress={cancel} />
        <List containerStyle={styles.container}>
            {productCategoryOption.map(option => (
                <ListItem
                    containerStyle={styles.itemContainer}
                    titleStyle={
                        product.category === option
                            ? [styles.listTitle, styles.listTitleSelected]
                            : styles.listTitle
                    }
                    rightIcon={
                        product.category === option ? { name: 'check', type: 'entypo' } : null
                    }
                    hideChevron
                    key={option}
                    title={option}
                    onPress={() => selectOption('category', option)}
                />
            ))}
        </List>
    </View>
);
export default Category;
