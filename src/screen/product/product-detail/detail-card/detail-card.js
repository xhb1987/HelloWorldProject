import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image';
import PropTypes from 'prop-types';
import lodash from 'lodash';
import { stringToArray } from '../../../../util/utils';

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flexDirection: 'column'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    content: {
        marginBottom: 10,
        fontSize: 17
    },
    imgContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    imgItem: {
        marginBottom: 20
    }
});

const DetailCard = ({ product, clientConfig }) => (
    <View style={styles.container}>
        <Text style={styles.title}>商品详情</Text>
        <Text style={styles.content}>{product.discriptionInfos}</Text>
        <View style={styles.imgContainer}>
            {stringToArray(product.fileNames).map(img => (
                <FullWidthImage
                    key={img}
                    source={{
                        uri: `${clientConfig}${img}`
                    }}
                    style={styles.imgItem}
                />
            ))}
        </View>
    </View>
);

DetailCard.propTypes = {
    product: PropTypes.objectOf(PropTypes.any)
};

DetailCard.defaultProps = {
    product: {
        detail: 'default descripion'
    }
};

export default DetailCard;
