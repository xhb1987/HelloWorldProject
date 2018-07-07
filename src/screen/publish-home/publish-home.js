import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    iconContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        marginBottom: 50
    },
    iconButton: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25
    },

    icon: {
        height: 50,
        width: 50,
        borderRadius: 50,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconImage: {
        width: 30,
        height: 30
    },
    iconButtonCenter: {
        marginHorizontal: 65
    },
    buyButton: {
        backgroundColor: '#fdc752'
    },
    sellButton: {
        backgroundColor: '#fb9f3e'
    },
    estateButton: {
        backgroundColor: '#fa6832'
    },
    storeButton: {
        backgroundColor: '#39b3fa'
    },
    iconTitle: {
        fontWeight: 'bold',
        fontSize: 16
    },
    closeButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
    }
});

const PublishHome = ({ goToProductPublish, close }) => (
    <View style={styles.container}>
        <View style={styles.iconContainer}>
            <TouchableOpacity
                style={styles.iconButton}
                onPress={goToProductPublish}
                activeOpacity={0.8}
            >
                <View style={[styles.icon, styles.buyButton]}>
                    <Image
                        style={styles.iconImage}
                        source={require('../../asset/icon/publish-buy.png')}
                    />
                </View>
                <Text style={styles.iconTitle}>发布转让</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
                <View style={[styles.icon, styles.sellButton, styles.iconButtonCenter]}>
                    <Image
                        style={styles.iconImage}
                        source={require('../../asset/icon/publish-sell.png')}
                    />
                </View>
                <Text style={styles.iconTitle}>发布求购</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
                <View style={[styles.icon, styles.estateButton]}>
                    <Image
                        style={styles.iconImage}
                        source={require('../../asset/icon/publish-estate.png')}
                    />
                </View>
                <Text style={styles.iconTitle}>发布地产</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
                <View style={[styles.icon, styles.storeButton]}>
                    <Image
                        style={styles.iconImage}
                        source={require('../../asset/icon/publish-store.png')}
                    />
                </View>
                <Text style={styles.iconTitle}>发布店铺</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.closeButton} onPress={close} activeOpacity={0.8}>
            <Icon type="evilIcons" name="close" color="#888" />
        </TouchableOpacity>
    </View>
);

export default PublishHome;
