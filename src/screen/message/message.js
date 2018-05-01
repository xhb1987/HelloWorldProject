import React from 'react';
import { View, FlatList } from 'react-native';
import { Divider } from 'react-native-elements';
import PropTypes from 'prop-types';
import MessageItem from './message-item/message-item';
import styles from './styles';

const Message = ({ messagesList, navigator }) => (
    <View style={styles.container}>
        <FlatList
            data={messagesList}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <MessageItem item={item} navigator={navigator} />}
            ItemSeparatorComponent={() => (
                <Divider style={{ height: 1.5, backgroundColor: '#f1f1f1' }} />
            )}
        />
    </View>
);
Message.propTypes = {
    messagesList: PropTypes.arrayOf(PropTypes.object),
    navigator: PropTypes.objectOf(PropTypes.any)
};

Message.defaultProps = {
    messagesList: [{}],
    navigator: {}
};

export default Message;
