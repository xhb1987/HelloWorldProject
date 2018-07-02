import React, { PureComponent } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        position: 'relative'
    },
    image: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 130,
        width: 130,
        marginRight: 5
    },
    closeIcon: {
        position: 'absolute',
        right: 10,
        top: 10
    },
    icon: {
        color: '#ed3349'
    }
});

const ImageContent = ({ image, deleteImage }) => (
    <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <Icon
            name="times-circle"
            type="font-awesome"
            containerStyle={styles.closeIcon}
            iconStyle={styles.icon}
            onPress={() => deleteImage(image)}
        />
    </View>
);

export default ImageContent;
