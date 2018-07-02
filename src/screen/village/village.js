import React from 'react';
import { View, Text, TouchableOpacity, SectionList } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import CustomHeader from '../components/header/header';
import ListBodyContainer from './list-body/list-body-container';

const Village = ({ close }) => (
    <View style={{ flex: 1 }}>
        <CustomHeader title="区域选择" leftButtonPress={close} leftButtonType="back" />
        <ListBodyContainer close={close} />
    </View>
);

export default Village;
