import React from 'react';
import {
    ScrollView,
    View,
    KeyboardAvoidingView
} from 'react-native';
import { Divider } from 'react-native-elements';
import PropTypes from 'prop-types';
import CustomHeader from '../../components/header/header';
import UserCard from './user-card/user-card';
import TitleCard from './title-card/title-card';
import DetailCard from './detail-card/detail-card';
import Messages from './messages/messages';
import BuyButtonContainer from './buy-button/buy-button-container';
import styles from './styles';

const ProductDetail = ({
    goBack,
    product,
    tags,
    clientConfig
}) => (
    <KeyboardAvoidingView
        behavior="padding"
        enabled
        style={styles.container}
    >
        <CustomHeader
            title="宝贝详情"
            leftButtonPress={goBack}
        />
        <ScrollView>
            <UserCard product={product} />
            <TitleCard
                product={product}
                tags={tags}
            />
            <Divider
                style={{
                    backgroundColor: '#f0f0f0',
                    height: 10
                }}
            />
            <DetailCard
                product={product}
                clientConfig={clientConfig}
            />
            <Messages />
        </ScrollView>
        <BuyButtonContainer />
    </KeyboardAvoidingView>
);

ProductDetail.propTypes = {
    goBack: PropTypes.func,
    product: PropTypes.objectOf(PropTypes.any),
    tags: PropTypes.arrayOf(PropTypes.any),
    clientConfig: PropTypes.string
};

ProductDetail.defaultProps = {
    goBack: () => {},
    product: {},
    tags: [],
    clientConfig: ''
};

export default ProductDetail;
