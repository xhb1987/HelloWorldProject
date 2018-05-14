import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './styles';

const ProductPublish = ({ product, productInputChange, goToPhotoScreen }) => (
    <ScrollView style={styles.container}>
        <Button title="添加照片" onPress={() => goToPhotoScreen()} />
        <FormLabel>输入商品标题</FormLabel>
        <FormInput
            onEndEditing={e => {
                productInputChange(e.nativeEvent.text, 'title');
            }}
        />
        <FormLabel>输入商品描述</FormLabel>
        <FormInput
            onEndEditing={e => {
                productInputChange(e.nativeEvent.text, 'description');
            }}
        />
        <Button title="发布" onPress={() => goToPhotoScreen()} />
    </ScrollView>
);

export default ProductPublish;
