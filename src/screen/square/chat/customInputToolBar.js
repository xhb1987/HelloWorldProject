import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { InputToolbar, Composer, Send } from 'react-native-gifted-chat';

const styles = StyleSheet.create({
    textInputContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    actionButtonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInputStyle: {
        flex: 5,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        paddingBottom: 5,
        paddingLeft: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#dddddd',
        backgroundColor: '#f0f0f0'
    },
    fabButton: {
        position: 'absolute',
        top: -50
    },
    containerStyle: {}
});

class CustomInputToolBar extends Component {
    constructor(props) {
        super(props);
        this.renderComposer = this.renderComposer.bind(this);
        this.renderSend = this.renderSend.bind(this);
    }

    renderSend(props) {
        return null;
    }

    renderComposer(props) {
        return (
            <View style={styles.textInputContainer}>
                <Composer
                    {...props}
                    placeholder="请输入消息"
                    textInputStyle={styles.textInputStyle}
                />
                <Icon
                    type="entypo"
                    name="camera"
                    color="#888888"
                    size={30}
                    containerStyle={styles.actionButtonContainer}
                    iconStyle={styles.actionButton}
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
