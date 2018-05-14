import React from 'react';
import { ScrollView, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import CameraRollContainer from '../camera-roll/camera-roll-conatiner';
import styles from './styles';

const PhotoScreen = ({ product, goToTakePicature }) => (
    <View style={styles.container}>
        <Button title="拍照" onPress={() => goToTakePicature()} />
        <View style={styles.cameraRollContainer}>
            <CameraRollContainer />
        </View>
        <ScrollView horizontal={true} style={styles.cameraRollContainer}>
            {product.images.length
                ? product.images.map(img => (
                      <Image key={img.uri} source={{ uri: img.uri }} style={styles.image} />
                  ))
                : null}
        </ScrollView>
        <View style={styles.publishContainer}>
            <Button title="发布" onPress={() => {}} />
        </View>
    </View>
);

export default PhotoScreen;
