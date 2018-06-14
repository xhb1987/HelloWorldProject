import { PixelRatio, Dimensions } from 'react-native';

export const dp2px = dp => PixelRatio.getPixelSizeForLayoutSize(dp);

export const px2dp = px => px / PixelRatio.get();

export const Color = {
    red: '#ed3349',
    grey: '#efefef',
    border: '#f0f0f0',
    deepGrey: '#888888',
    black: '#333333'
};
