import React from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import { Divider } from 'react-native-elements';
import PropTypes from 'prop-types';
import MessageItem from './message-item/message-item';
import TabContainer from '../tabs/tabs-container';
import TabWrapper from '../../component/tab-wrapper/tab-wrapper';
import Header from '../components/header/header';

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1
    },
    container: {
        height: Dimensions.get('screen').height
    }
});

const Message = ({ messagesList, navigator }) => (
    <TabWrapper navigator={navigator}>
        <View style={styles.viewContainer}>
            <Header title="消息" leftButtonType="none" />
            <FlatList
                style={styles.container}
                data={messagesList}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <MessageItem item={item} navigator={navigator} />}
                ItemSeparatorComponent={() => <Divider style={{ height: 1.5, backgroundColor: '#f1f1f1' }} />}
            />
            {/* <TabContainer navigator={navigator} /> */}
        </View>
    </TabWrapper>
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
