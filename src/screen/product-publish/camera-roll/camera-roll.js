import React from 'react';
import { View } from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker';
import styles from './styles';

const CameraRoll = ({ selectImage }) => (
    <View style={styles.container}>
        <CameraRollPicker
            maximum={10}
            scrollRenderAheadDistance={800}
            callback={(image, current) => selectImage(image, current)}
        />
    </View>
);

export default CameraRoll;
