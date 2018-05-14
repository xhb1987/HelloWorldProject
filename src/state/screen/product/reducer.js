import lodash from 'lodash';
import {
    PRODUCT_SELECT,
    PRODUCT_PUBLISH_STORE,
    PRODUCT_INPUT_CHANGE,
    PRODUCT_TAKE_IMAGE,
    PRODUCT_IMAGE_SELECT,
    PRODUCT_PULL_REQUEST,
    PRODUCT_PULL_SUCCESS,
    PRODUCT_PULL_FAILURE
} from './actions';

const initialState = {
    products: [],
    product: {},
    pageSize: 20,
    pageNo: 1,
    totalCount: 0,
    productToPublish: {
        title: '',
        discreption: '',
        images: []
    },
    loading: false,
    error: false
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_PULL_REQUEST:
            return Object.assign({}, state, { loading: true });
        case PRODUCT_PULL_SUCCESS: {
            const productResponseData = action.payload;
            return Object.assign({}, state, {
                pageSize: productResponseData.pageSize,
                pageNo: productResponseData.pageNo,
                totalCount: productResponseData.totalCount,
                products: productResponseData.resultList || []
            });
        }
        case PRODUCT_PULL_FAILURE:
            return Object.assign({}, state, { loading: false, error: false });
        case PRODUCT_IMAGE_SELECT: {
            const stateImages = state.productToPublish.images.slice();
            const image = { uri: action.payload.current.uri };
            let isContained = false;
            if (stateImages.length < 10) {
                lodash.map(stateImages, img => {
                    if (img.uri === image.uri) {
                        isContained = true;
                    }
                });
                if (!isContained) {
                    stateImages.push(image);
                } else {
                    lodash.remove(stateImages, img => {
                        return img.uri === image.uri;
                    });
                }
            }

            return Object.assign({}, state, {
                productToPublish: { ...state.productToPublish, images: stateImages }
            });
        }
        case PRODUCT_TAKE_IMAGE: {
            const stateImages = state.productToPublish.images.slice();
            if (stateImages.length < 10) {
                stateImages.push({ uri: action.payload.uri });
            }

            return Object.assign({}, state, {
                productToPublish: { ...state.productToPublish, images: stateImages }
            });
        }
        case PRODUCT_INPUT_CHANGE: {
            const inputType = action.payload.type;
            if (inputType === 'title') {
                return Object.assign({}, state, {
                    productToPublish: { ...state.productToPublish, title: action.payload.value }
                });
            }

            if (inputType === 'description') {
                return Object.assign({}, state, {
                    productToPublish: {
                        ...state.productToPublish,
                        discreption: action.payload.value
                    }
                });
            }
            return state;
        }
        case PRODUCT_PUBLISH_STORE:
            return Object.assign({}, state, { productToPublish: action.payload });
        case PRODUCT_SELECT:
            return Object.assign({}, state, { product: action.payload });
        default:
            return state;
    }
};

export default productReducer;
