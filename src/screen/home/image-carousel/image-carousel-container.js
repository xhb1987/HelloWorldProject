import React from 'react';
import { connect } from 'react-redux';
import ImageCarousel from './image-carousel';

const Container = props => <ImageCarousel {...props} />;

const stateToProps = state => ({
    productItem: state.product.products
});

const dispatchToProps = () => ({});

const ImageCarouselContainer = connect(stateToProps, dispatchToProps)(Container);

export default ImageCarouselContainer;
