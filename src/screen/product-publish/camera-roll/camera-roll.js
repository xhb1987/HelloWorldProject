import React from 'react';
import { View, StyleSheet } from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker';

const styles = StyleSheet.create({});

const CameraRoll = ({ selectImage }) => (
    <View>
        <CameraRollPicker
            maximum={10}
            scrollRenderAheadDistance={800}
            callback={(image, current) => selectImage(image, current)}
        />
    </View>
);

export default CameraRoll;
