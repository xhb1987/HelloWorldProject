import React, { PureComponent } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    codeButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#dddddd',
        height: 40,
        width: 80
    },
    codeTItle: {
        color: '#3e3e3e',
        fontSize: 15
    }
});

class CodeButton extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            countTime: 60,
            buttonTitle: '获取验证码',
            buttonDisabled: false
        };
        this.timeoutId = null;
        this.startCountTime = this.startCountTime.bind(this);
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutId);
        // this.setState({ countTime: 60, buttonDisabled: false, buttonTitle: '获取验证码' });
    }

    startCountTime() {
        const setTimeFunc = () => {
            clearTimeout(this.timeoutId);
            this.timeoutId = setTimeout(() => {
                if (this.state.countTime > 0) {
                    this.setState({
                        countTime: this.state.countTime - 1,
                        buttonTitle: `${this.state.countTime} S`,
                        buttonDisabled: true
                    });
                    setTimeFunc();
                } else {
                    this.setState({ countTime: 60, buttonDisabled: false, buttonTitle: '获取验证码' });
                }
            }, 1000);
        };
        setTimeFunc();
        this.props.callback();
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.codeButton}
                onPress={this.startCountTime}
                disabled={this.state.buttonDisabled}
            >
                <Text style={styles.codeTItle}>{this.state.buttonTitle}</Text>
            </TouchableOpacity>
        );
    }
}

export default CodeButton;
