import React from 'react';
import lodash from 'lodash';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Alert, ScrollView, Image } from 'react-native';
import { Avatar } from 'react-native-elements';
import { CachedImage } from 'react-native-cached-image';
import Tag from '../../../components/tag/tag';
import { stringToArray, findTagName } from '../../../../util/utils';
import styles from './styles';

const Card = ({ item, clientConfig, onPressCallback, tags }) => (
    <TouchableOpacity
        style={styles.container}
        onPress={() => {
            onPressCallback(item);
        }}
    >
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <View style={styles.userContainer}>
                    <View style={styles.avatar}>
                        <Avatar medium rounded activeOpacity={0.2} />
                    </View>
                    <View style={styles.name}>
                        <Text style={styles.userName}>{item.talkName}</Text>
                        <Text style={styles.userStatus}>{item.mda}</Text>
                    </View>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>¥ {item.nowPrice}</Text>
                    <Text style={styles.priceOld}>
                        全新价:
                        <Text style={styles.priceOldLine}>¥ {item.oldPrice}</Text>
                    </Text>
                </View>
            </View>
            <ScrollView horizontal={true}>
                {stringToArray(item.fileNames).map(img => (
                    <View key={img}>
                        <CachedImage
                            source={{ uri: clientConfig + lodash.trim(img, '"') }}
                            style={styles.imgItem}
                        />
                    </View>
                ))}
            </ScrollView>
            <Text style={styles.title}>{item.commodityTitle}</Text>
            <View style={styles.tagContainer}>
                {stringToArray(item.labels).map(tag => (
                    <Tag key={tag} contant={findTagName(tags, tag)} />
                ))}
            </View>
        </View>
    </TouchableOpacity>
);

Card.propTypes = {
    title: PropTypes.string,
    price: PropTypes.string,
    name: PropTypes.string,
    address: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.object)
};

Card.defaultProps = {
    title: 'title',
    price: '0.00',
    name: 'name',
    address: 'address',
    tags: [{}]
};

export default Card;
