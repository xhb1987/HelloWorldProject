import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Text, List, ListItem } from 'react-native-elements';
import styles from './styles';

const ProfileInfo = ({ user, list }) => (
    <ScrollView>
        <List>
            {list.map(item => (
                <TouchableOpacity key={item.title}>
                    <ListItem title={item.title} leftIcon={{ name: item.icon }} />
                </TouchableOpacity>
            ))}
        </List>
    </ScrollView>
);

export default ProfileInfo;
