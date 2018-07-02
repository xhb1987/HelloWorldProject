import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    CameraRoll,
    StyleSheet,
    ScrollView,
    Dimensions
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import ImageContent from '../image-content/image-content';

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height,
        backgroundColor: 'black'
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 130
    },
    preview: {
        flex: 100
    },
    captureContainer: {
        position: 'absolute',
        bottom: 50,
        left: Dimensions.get('screen').width / 2 - 40
    },
    capture: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        width: 80,
        borderRadius: 80
    }
});

class CameraScreen extends Component {
    constructor(props) {
        super(props);
        this.takePicture = this.takePicture.bind(this);
    }

    static get navigatorStyle() {
        return {
            navBarHidden: true,
            tabBarHidden: true,
            tabBarTranslucent: true
        };
    }

    async takePicture() {
        if (this.camera) {
            const options = { quality: 0.5, base64: true, fixOrientation: true };
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
                <ScrollView contentContainerStyle={styles.imageContainer} horizontal>
                    {this.props.product.images.map(img => (
                        <ImageContent
                            key={img.uri}
                            image={img}
                            deleteImage={this.props.imageDelete}
                        />
                    ))}
                </ScrollView>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.off}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}
                />

                <View style={styles.captureContainer}>
                    <TouchableOpacity onPress={() => this.takePicture()} style={styles.capture}>
                        <Text style={{ fontSize: 14 }}> 拍照 </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default CameraScreen;
