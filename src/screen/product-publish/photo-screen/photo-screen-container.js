import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhotoScreen from './photo-screen';

class Container extends Component {
    static get navigatorStyle() {
        return {
            navBarTranslucent: true,
            tabBarHidden: false,
            drawUnderTabBar: true,
            navBarButtonColor: '#123456',
            navBarTextColor: '#000000',
            navBarBackgroundColor: '#ffffff'
        };
    }

    render() {
        return <PhotoScreen {...this.props} />;
    }
}

const stateToProps = state => ({
    product: state.product.productToPublish
});

const dispatchToProps = (dispatch, ownProps) => ({
    goToTakePicature: () => {
        ownProps.navigator.push({
            screen: 'screen.ProductPublish.CameraScreen'
        });
    }
});

const PhotoScreenContainer = connect(stateToProps, dispatchToProps)(Container);

export default PhotoScreenContainer;
