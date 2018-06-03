import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import CameraRollPicker from 'react-native-camera-roll-picker';
import Header from '../../components/header/header';
import CameraRollContainer from '../camera-roll/camera-roll-conatiner';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        flexDirection: 'column'
    },
    photoButtonContainer: {
        flex: 1,
        backgroundColor: '#c5c5c5a6',
        borderColor: 'white',
        borderWidth: 1,
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    photoButtonText: {
        color: 'white'
    },
    cameraRollContainer: {
        flex: 4
    },
    footer: {
        flex: 1,
        flexDirection: 'row'
    },
    imageContainer: {
        padding: 5,
        flex: 2,
        width: Dimensions.get('screen').width * 0.7
    },
    image: {
        width: 100,
        marginRight: 5
    },
    publishContainer: {
        padding: 0,
        backgroundColor: '#ed3349',
        marginRight: 0,
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('screen').width * 0.3
    },
    publishButton: {
        padding: 28,
        alignItems: 'stretch',
        justifyContent: 'center'
    }
});

const PhotoScreen = ({ product, goToTakePicature, goBack, selectImage }) => (
    <View style={styles.container}>
        <Header title="相机交卷" leftButtonType="cancel" leftButtonPress={goBack} />
        <View style={styles.photoButtonContainer}>
            <Icon
                type="entypo"
                name="camera"
                color="#fff"
                size={50}
                onPress={() => goToTakePicature()}
            />
            <Text style={styles.photoButtonText}>拍照</Text>
        </View>
        <View style={styles.cameraRollContainer}>
            <CameraRollPicker
                maximum={10}
                scrollRenderAheadDistance={800}
                callback={(image, current) => selectImage(image, current)}
            />
        </View>
        <View style={styles.footer}>
            <ScrollView horizontal style={styles.imageContainer}>
                {product.images.length
                    ? product.images.map(img => (
                          <Image key={img.uri} source={{ uri: img.uri }} style={styles.image} />
                      ))
                    : null}
            </ScrollView>
            <Button
                title="确定"
                large
                backgroundColor="#ed3349"
                containerViewStyle={styles.publishContainer}
                buttonStyle={styles.publishButton}
                color="white"
                onPress={() => {}}
            />
        </View>
    </View>
);

export default PhotoScreen;
