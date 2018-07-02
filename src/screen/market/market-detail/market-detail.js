import React from 'react';
import { ScrollView, View, KeyboardAvoidingView, StyleSheet, Text } from 'react-native';
import { Divider } from 'react-native-elements';
import PropTypes from 'prop-types';
import Header from '../../components/header/header';
import MarketTitle from './market-title/market-title';
import MarketContentContainer from './market-content/market-content-container';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

const MarketDetail = ({ goBack, market, clientConfig }) => (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
        <Header title="店铺详情" leftButtonPress={goBack} leftButtonType="back" />
        <MarketTitle title={market.name} />
        <MarketContentContainer />
    </KeyboardAvoidingView>
);

export default MarketDetail;
