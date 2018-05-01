import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import { messageDetailIdSetAction } from '../../../state/screen/message/actions';
import styles from './styles';

class MessageItem extends PureComponent {
    constructor(props) {
        super(props);

        this.onPressHandler = this.onPressHandler.bind(this);
    }

    onPressHandler() {
        const { navigator } = this.props;
        navigator.push({
            screen: 'screen.Message.Detail',
            title: '小区用户1'
        });
        this.props.getMessageId(this.props.item.id);
    }

    render() {
        const { item } = this.props;
        const getItemName = message => {
            if (message.userMessage) {
                return message.user.name;
            }

            if (message.productMessage) {
                return message.product.name;
            }

            if (message.systemMessage) {
                return message.system.name;
            }
            return 'default user';
        };
        return (
            <TouchableOpacity style={styles.container} onPress={() => this.onPressHandler()}>
                <Avatar rounded small activeOpacity={0.7} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{getItemName(item)}</Text>
                    <Text style={styles.message}>{item.lastMessage}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const stateToProps = () => ({});

const dispatchToProps = dispatch => ({
    getMessageId: messageId => dispatch(messageDetailIdSetAction(messageId))
});

export default connect(stateToProps, dispatchToProps)(MessageItem);
