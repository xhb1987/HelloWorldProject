import React, { Component } from 'react';
import { Text, TouchableOpacity, View, CameraRoll } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Header from '../header/header';
import styles from './styles';

class Camera extends Component {
    constructor(props) {
        super(props);
        this.takePicture = this.takePicture.bind(this);
    }

    async takePicture() {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            this.props.storeImage(data);
            CameraRoll.saveToCameraRoll(data.uri)
                .then(result => {
                    console.log(result);
                })
                .catch(e => console.log(e));
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Header leftButtonPress={this.props.cancel} title="拍照" leftButtonType="cancel" />
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}
                />

                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => this.takePicture()} style={styles.capture}>
                        <Text style={{ fontSize: 14 }}> 拍照 </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default Camera;
