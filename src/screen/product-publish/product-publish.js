import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    Dimensions
} from 'react-native';
import { FormInput, Button, Icon, Divider } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Header from '../components/header/header';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
        flexDirection: 'column'
    },
    scrollContainer: {
        backgroundColor: '#fff',
        height: Dimensions.get('screen').height - 140
    },
    buttonContainer: {
        height: 130,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 16,
        color: '#888'
    },
    titleInputContainer: {
        height: 50,
        marginRight: 0,
        marginLeft: 0,
        paddingTop: 9,
        paddingBottom: 8,
        paddingHorizontal: 10
    },
    titleInput: {
        fontSize: 18,
        color: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    descriptionInputContainer: {
        height: 150,
        marginRight: 0,
        marginLeft: 0,
        paddingTop: 10,
        paddingHorizontal: 10,
        borderBottomWidth: 0
    },
    descriptionInput: {
        color: '#000',
        fontSize: 17,
        lineHeight: 60,
        paddingTop: 0
    },
    listContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#c0c0c0',
        paddingLeft: 10,
        paddingVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listTitle: {
        flex: 1,
        fontSize: 18,
        color: '#636162'
    },
    listChoice: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    listChoiceTitle: {
        fontSize: 18,
        color: '#adadad'
    },
    listPrice: {
        paddingRight: 10,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    price: {
        fontSize: 18
    },
    footerBottonContainer: {
        backgroundColor: '#fff',
        marginLeft: 0,
        marginRight: 0,
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    footerBotton: {
        borderRadius: 5
    }
});

const ProductPublish = ({
    openCategory,
    product,
    productInputChange,
    goToPhotoScreen,
    cancel,
    showSelections
}) => (
    <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={false}
        contentContainerStyle={styles.container}
        keyboardDismissMode="interactive"
    >
        <Header title="发布宝贝" leftButtonPress={cancel} leftButtonType="cancel" />
        <ScrollView style={styles.scrollContainer}>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => goToPhotoScreen()}>
                <Icon type="entypo" name="camera" color="#888888" size={50} />
                <Text style={styles.buttonText}>添加照片</Text>
            </TouchableOpacity>
            <Divider style={{ height: 13, backgroundColor: '#f0f0f0' }} />
            <FormInput
                containerStyle={styles.titleInputContainer}
                placeholder="请输入宝贝标题，型号"
                placeholderTextColor="#000"
                inputStyle={styles.titleInput}
                multiline={false}
                onEndEditing={e => {
                    productInputChange(e.nativeEvent.text, 'title');
                }}
            />
            <FormInput
                containerStyle={styles.descriptionInputContainer}
                placeholder={`在这里描述一下你的宝贝吧~\n转手原因，入手渠道，规格尺寸，新旧程度和使用～`}
                placeholderTextColor="#c0c0c0"
                inputStyle={styles.descriptionInput}
                numberOfLines={6}
                multiline
                onEndEditing={e => {
                    productInputChange(e.nativeEvent.text, 'description');
                }}
            />
            <Divider style={{ height: 13, backgroundColor: '#f0f0f0' }} />
            <TouchableOpacity style={styles.listContainer} onPress={() => openCategory()}>
                <Text style={styles.listTitle}>分类</Text>
                <View style={styles.listChoice}>
                    <Text style={styles.listChoiceTitle}>{product.category || '选择分类'}</Text>
                    <Icon type="entypo" name="chevron-small-right" color="#c0c0c0" size={30} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listContainer} onPress={() => showSelections('usage')}>
                <Text style={styles.listTitle}>新旧程度</Text>
                <View style={styles.listChoice}>
                    <Text style={styles.listChoiceTitle}>{product.usage || '选择新旧程度'}</Text>
                    <Icon type="entypo" name="chevron-small-right" color="#c0c0c0" size={30} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.listContainer}
                onPress={() => showSelections('district')}
            >
                <Text style={styles.listTitle}>购买地点</Text>
                <View style={styles.listChoice}>
                    <Text style={styles.listChoiceTitle}>{product.district || '选择地点'}</Text>
                    <Icon type="entypo" name="chevron-small-right" color="#c0c0c0" size={30} />
                </View>
            </TouchableOpacity>
            <View style={styles.listContainer}>
                <Text style={styles.listTitle}>价格</Text>
                <View style={styles.listPrice}>
                    <TextInput
                        style={styles.price}
                        placeholder="开个价吧"
                        placeholderTextColor="#c0c0c0"
                    />
                </View>
            </View>
            <Divider style={{ height: 50, backgroundColor: '#f0f0f0' }} />
        </ScrollView>
        <Button
            title="发布"
            color="#fff"
            backgroundColor="#ed3349"
            onPress={() => goToPhotoScreen()}
            buttonStyle={styles.footerBotton}
            containerViewStyle={styles.footerBottonContainer}
        />
    </KeyboardAwareScrollView>
);

export default ProductPublish;
