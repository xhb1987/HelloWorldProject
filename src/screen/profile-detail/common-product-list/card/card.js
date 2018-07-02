import React from 'react';
import lodash from 'lodash';
import { View, Text, TouchableOpacity, Alert, ScrollView, Image, StyleSheet } from 'react-native';
import { CachedImage } from 'react-native-cached-image';
import { stringToArray } from '../../../../util/utils';
import { Divider } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    contentContainer: {
        flexDirection: 'row',
        paddingVertical: 13.5,
        paddingHorizontal: 15
    },
    titleContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flex: 1
    },
    title: {
        lineHeight: 25,
        fontSize: 15,
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    messageContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    imgItem: {
        height: 100,
        width: 100,
        borderRadius: 5,
        marginRight: 10
    },
    message: {
        color: '#888',
        marginRight: 15
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingVertical: 15,
        paddingHorizontal: 12
    },
    button: {
        width: 45,
        height: 22.5,
        borderWidth: 1,
        borderColor: '#888',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonFirst: {
        marginRight: 11
    },
    buttonText: {
        color: '#888'
    }
});

const Card = ({ item, clientConfig, onPressCallback, imageVersion, type }) => (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
        <View style={styles.contentContainer}>
            {item.fileNames.length ? (
                <Image
                    style={styles.imgItem}
                    source={{
                        uri: `${clientConfig}${lodash.trim(
                            stringToArray(item.fileNames)[0],
                            '"'
                        )}?version=${imageVersion}`
                    }}
                />
            ) : null}
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{item.commodityTitle}</Text>
                <View style={styles.messageContainer}>
                    <Text style={styles.message}>留言 0</Text>
                    <Text style={styles.message}>浏览 18</Text>
                </View>
            </View>
        </View>
        <Divider style={{ height: 0.5, backgroundColor: '#ddd', paddingRight: 15 }} />
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.buttonFirst]}>
                <Text style={styles.buttonText}>{type === 'publish' ? '擦亮' : '查看'} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{type === 'publish' ? '编辑' : '删除'}</Text>
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
);

export default Card;
