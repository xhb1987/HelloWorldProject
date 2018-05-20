import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        minHeight: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: '#ededed',
        borderBottomWidth: 1
    },
    userContainer: {
        flex: 8,
        alignItems: 'center',
        flexDirection: 'row'
    },
    avatar: {
        marginRight: 5
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 2
    },
    userStatus: {
        color: '#ababab'
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center'
    }
});

const UserCard = ({ product }) => (
    <View style={styles.container}>
        <View style={styles.userContainer}>
            <View style={styles.avatar}>
                <Avatar medium rounded activeOpacity={0.2} />
            </View>
            <View style={styles.name}>
                <Text style={styles.userName}>{product.talkName}</Text>
                <Text style={styles.userStatus}>{product.mda}</Text>
            </View>
        </View>
        <View style={styles.iconContainer}>
            <Icon
                type="entypo"
                size={18}
                name="chevron-thin-right"
                color="#dddddd"
            />
        </View>
    </View>
);

UserCard.propTypes = {
    product: PropTypes.objectOf(PropTypes.any)
};

UserCard.defaultProps = {
    product: {
        talkName: 'default user',
        mda: ''
    }
};

export default UserCard;
