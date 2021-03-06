import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ActionSheetIOS,
    TextInput,
    Platform,
    TouchableHighlight
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';
import { InputToolbar, Composer, Send } from 'react-native-gifted-chat';

const styles = StyleSheet.create({
    textInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    actionButtonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInputStyle: {
        flex: 5,
        minHeight: 20,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 17,
        marginLeft: 10,
        paddingLeft: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#dddddd',
        backgroundColor: '#f0f0f0'
    },
    fabButton: {
        position: 'absolute',
        top: -50
    },
    containerStyle: {
        borderTopWidth: 0,
        height: 46,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        transform: [
            {
                translateX: 0
            },
            {
                translateY: 46
            }
        ]
    }
});

class CustomInputToolBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputTextValue: ''
        };
        this.renderComposer = this.renderComposer.bind(this);
        this.renderSend = this.renderSend.bind(this);
        this.popActionSheet = this.popActionSheet.bind(this);
        this.actionSheetClick = this.actionSheetClick.bind(this);
        this.clearText = this.clearText.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleEditEnd = this.handleEditEnd.bind(this);
    }

    popActionSheet() {
        ActionSheetIOS.showActionSheetWithOptions(
            {
                options: ['拍摄', '从手机相册选择', '取消'],
                cancelButtonIndex: 2
            },
            buttonIndex => this.actionSheetClick(buttonIndex)
        );
    }

    actionSheetClick(index) {
        if (index === 0) {
            Navigation.showModal({
                screen: 'modal.Camera',
                animationType: 'slide-up'
            });
        } else if (index === 1) {
            Navigation.showModal({
                screen: 'modal.Photo',
                animationType: 'slide-up'
            });
        }
    }

    renderSend(props) {
        return null;
    }
    handleTextChange(value) {
        if (value) {
            this.setState({ inputTextValue: value });
        }
    }
    handleEditEnd() {
        this.props.onSend(this.state.inputTextValue);
        this.setState({ inputTextValue: '' });
        this.clearText();
    }
    clearText() {
        if (Platform.OS === 'ios') {
            this.textInput.setNativeProps({ text: ' ' });
        }

        setTimeout(() => {
            this.textInput.setNativeProps({ text: '' });
        });
    }

    renderComposer(props) {
        return (
            <View style={styles.textInputContainer}>
                <TextInput
                    ref={ref => {
                        this.textInput = ref;
                    }}
                    editable={this.props.isLogin}
                    enablesReturnKeyAutomatically
                    blurOnSubmit={false}
                    style={styles.textInputStyle}
                    returnKeyLabel="发送"
                    returnKeyType="send"
                    placeholder="请输入消息"
                    onChange={e => this.handleTextChange(e.nativeEvent.text)}
                    onSubmitEditing={() => this.handleEditEnd()}
                />
                <Icon
                    type="entypo"
                    name="camera"
                    color="#888888"
                    size={30}
                    containerStyle={styles.actionButtonContainer}
                    iconStyle={styles.actionButton}
                    onPress={() => this.popActionSheet()}
                />
            </View>
        );
    }

    render() {
        return (
            <InputToolbar
                {...this.props}
                renderComposer={this.renderComposer}
                renderSend={this.renderSend}
                containerStyle={styles.containerStyle}
            />
        );
    }
}

export default CustomInputToolBar;
