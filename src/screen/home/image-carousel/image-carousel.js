import React from 'react';
import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';

const ImageCarousel = () => (
    <View style={styles.container}>
        <Swiper style={styles.wrapper} loop={false} index={0}>
            <View style={styles.slider}>
                <Text style={styles.text}>Beautiful</Text>
            </View>
            <View style={styles.slider}>
                <Text style={styles.text}>And simple</Text>
            </View>
        </Swiper>
    </View>
);

export default ImageCarousel;
