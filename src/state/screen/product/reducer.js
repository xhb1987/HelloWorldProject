import lodash from 'lodash';
import {
    PRODUCT_SELECT,
    PRODUCT_PUBLISH_STORE,
    PRODUCT_INPUT_CHANGE,
    PRODUCT_TAKE_IMAGE,
    PRODUCT_IMAGE_SELECT,
    PRODUCT_PULL_REQUEST,
    PRODUCT_PULL_SUCCESS,
    PRODUCT_PULL_FAILURE,
    PRODUCT_OPTION,
    PRODUCT_OPTION_SELECT,
    PRODUCT_PUBLISH_CLEAR,
    PRODUCT_PUBLISH_IMAGE_CLEAR,
    PRODUCT_PUBLISH_IMAGE_DELETE
} from './actions';
const date = new Date();

const initialState = {
    products: [],
    product: {},
    pageSize: 20,
    pageNo: 1,
    totalCount: 0,
    imageVersion: date.getTime(),
    productToPublish: {
        title: '',
        discreption: '',
        images: [],
        category: '',
        usage: '',
        district: ''
    },
    productOptionActive: '',
    productCategoryOption: ['手机', '婴儿用品'],
    productUsageOption: {
        title: '选择新旧程度',
        options: ['全新', '95新', '9成新', '8成新', '7成新', '7成一下']
    },
    productDistrictOption: {
        title: '选择地点',
        options: ['大陆', '香港', '澳门', '台湾', '国外']
    },
    loading: false,
    error: false
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_PUBLISH_IMAGE_DELETE: {
            const image = action.payload;
            const currentImages = state.productToPublish.images.slice();
            const imageIndex = lodash.findIndex(currentImages, img => img.uri === image.uri);
            currentImages.splice(imageIndex, 1);
            return Object.assign({}, state, {
                productToPublish: {
                    ...state.productToPublish,
                    images: currentImages
                }
            });
        }

        case PRODUCT_PUBLISH_IMAGE_CLEAR:
            return Object.assign({}, state, {
                productToPublish: {
                    ...state.productToPublish,
                    images: []
                }
            });
        case PRODUCT_PUBLISH_CLEAR:
            return Object.assign({}, state, {
                productToPublish: { ...initialState.productToPublish }
            });
        case PRODUCT_OPTION_SELECT:
            return Object.assign({}, state, {
                productToPublish: {
                    ...state.productToPublish,
                    [action.payload.optionType]: action.payload.optionSelected
                }
            });
        case PRODUCT_OPTION:
            return Object.assign({}, state, { productOptionActive: action.payload });
        case PRODUCT_PULL_REQUEST:
            return Object.assign({}, state, { loading: true });
        case PRODUCT_PULL_SUCCESS: {
            const productResponseData = action.payload;
            const timeNow = new Date();
            return Object.assign({}, state, {
                imageVersion: timeNow.getTime(),
                loading: false,
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
