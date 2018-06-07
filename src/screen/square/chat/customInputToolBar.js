import React, { Component } from 'react';
import { View, Text, StyleSheet, ActionSheetIOS, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';
import { InputToolbar, Composer, Send } from 'react-native-gifted-chat';

const styles = StyleSheet.create({
    textInputContainer: {
        flex: 1,
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
        marginTop: 5,
        marginBottom: 5,
        bottom: 5,
        alignItems: 'center',
        justifyContent: 'center'
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
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
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
        this.setState({ inputTextValue: value });
        console.log('key change', this.state.inputTextValue);
        this.textInput.clear();
        // this.setState({ inputTextValue: '' });
    }
    handleKeyPress(e) {
        console.log('key press', this.state.inputTextValue);

        this.setState({ inputTextValue: '' });
        //this.textInput.clear();
    }
    clearText() {
        this.textInputValue.setNativeProps({ text: '' });
    }

    renderComposer(props) {
        return (
            <View style={styles.textInputContainer}>
                <TextInput
                    {...props}
                    ref={ref => {
                        this.textInput = ref;
                    }}
                    enablesReturnKeyAutomatically
                    blurOnSubmit={false}
                    value={this.state.inputTextValue}
                    onChangeText={this.handleTextChange}
                    returnKeyLabel="发送"
                    returnKeyType="send"
                    placeholder="请输入消息"
                    style={styles.textInputStyle}
                    onSubmitEditing={e => this.handleKeyPress(e)}
                    onKeyPress={e => this.handleKeyPress(e)}
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
