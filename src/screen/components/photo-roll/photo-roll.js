import React from 'react';
import { View } from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker';
import Header from '../header/header';
import styles from './styles';

const PhotoRoll = ({ selectImage, cancel }) => (
    <View style={styles.container}>
        <Header leftButtonPress={cancel} title="手机相册" leftButtonType="cancel" />
        <CameraRollPicker
            maximum={1}
            scrollRenderAheadDistance={800}
            callback={(image, current) => selectImage(image, current)}
        />
    </View>
);

export default PhotoRoll;
