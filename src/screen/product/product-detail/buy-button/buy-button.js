import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 5,
        height: 50
    },

    iconContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    messageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
        marginBottom: 2
    },

    button: {
        color: 'white',
        fontWeight: 'bold',
        alignItems: 'center'
    },

    talkButton: {
        flex: 2,
        borderRadius: 5,
        backgroundColor: '#ffc12c',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buyButton: {
        marginLeft: 5,
        borderRadius: 5,
        flex: 2,
        backgroundColor: '#ed3349',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const BuyButton = ({ productOrderCallback }) => (
    <View style={styles.container}>
        <View style={styles.iconContainer}>
            <Avatar
                rounded
                containerStyle={{ width: 28, height: 28, marginBottom: 3 }}
            />
            <Text>卖家</Text>
        </View>
        <View style={[styles.iconContainer, styles.messageContainer]}>
            <Icon type="entypo" name="message" color="#888888" size={30} />
            <Text>留言</Text>
        </View>
        <View style={styles.talkButton}>
            <Button
                style={styles.button}
                title="买前聊一聊"
                onPress={() => productOrderCallback()}
                color="white"
            />
        </View>
        <View style={styles.buyButton}>
            <Button
                title="马上买"
                style={styles.button}
                onPress={() => productOrderCallback()}
                color="white"
            />
        </View>
    </View>
);

BuyButton.propTypes = {
    productOrderCallback: PropTypes.func
};

BuyButton.defaultProps = {
    productOrderCallback: () => {}
};

export default BuyButton;
