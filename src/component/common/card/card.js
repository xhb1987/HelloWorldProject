import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Avatar } from 'react-native-elements';
import styles from './styles';

const images = [
    { key: '1', title: 'Image 1', value: 'Test' },
    { key: '2', title: 'Image 2', value: 'Test' }
];

const Card = ({ item, name, address, onPressCallback }) => (
    <TouchableOpacity
        style={styles.container}
        onPress={() => {
            onPressCallback(item);
        }}
    >
        <View style={styles.container}>
            <View style={styles.userContainer}>
                <View style={styles.avatar}>
                    <Avatar small rounded activeOpacity={0.2} />
                </View>
                <View style={styles.name}>
                    <Text>{name}</Text>
                    <Text>{address}</Text>
                </View>
            </View>
            <View style={styles.listContainer}>
                {images.map(img => (
                    <Text style={styles.imgItem} key={img.key}>
                        {img.title}
                    </Text>
                ))}
            </View>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.listContainer}>
                {item.tags.map(tag => (
                    <Text style={styles.tagItem} key={tag.id}>
                        {tag.name}
                    </Text>
                ))}
            </View>
            <Text style={styles.price}>{item.price}</Text>
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
