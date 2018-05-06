import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './styles';

const ProductPublish = ({ product, productInputChange, goToTakePicature }) => (
    <View style={styles.container}>
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
        <View style={styles.imageContainer}>
            {product.images.length
                ? product.images.map(img => (
                      <Image key={img.uri} source={{ uri: img.uri }} style={styles.image} />
                  ))
                : null}
        </View>
        <Button title="拍照" onPress={() => goToTakePicature()} />
    </View>
);

export default ProductPublish;
