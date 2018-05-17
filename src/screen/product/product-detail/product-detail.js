import React from 'react';
import { ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
import CustomHeader from '../../components/header/header';
import TitleCardContainer from './title-card/title-card-container';
import DetailCardContainer from './detail-card/detail-card-container';
import BuyButtonContainer from './buy-button/buy-button-container';
import styles from './styles';

const ProductDetail = ({ productOrderCallback, goBack }) => (
    <View style={styles.container}>
        <CustomHeader title="宝贝详情" leftButtonPress={goBack} />
        <ScrollView>
            <TitleCardContainer />
            <DetailCardContainer />
        </ScrollView>
        <BuyButtonContainer productOrderCallback={productOrderCallback} />
    </View>
);

ProductDetail.propTypes = {
    productOrderCallback: PropTypes.func
};

ProductDetail.defaultProps = {
    productOrderCallback: () => {}
};

export default ProductDetail;
