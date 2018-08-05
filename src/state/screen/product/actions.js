import fetchPost from '../../../util/fetch-post';

export const PRODUCT_SELECT = 'PRODUCT_SELECT';
export const PRODUCT_PUBLISH_STORE = 'PRODUCT_PUBLISH_STORE';
export const PRODUCT_INPUT_CHANGE = 'PRODUCT_INPUT_CHANGE';
export const PRODUCT_TAKE_IMAGE = 'PRODUCT_TAKE_IMAGE';
export const PRODUCT_IMAGE_SELECT = 'PRODUCT_IMAGE_SELECT';

export const PRODUCT_PULL_REQUEST = 'PRODUCT_PULL_REQUEST';
export const PRODUCT_PULL_SUCCESS = 'PRODUCT_PULL_SUCCESS';
export const PRODUCT_PULL_FAILURE = 'PRODUCT_PULL_SUCCESS';

export const PRODUCT_OPTION = 'PRODUCT_OPTION';
export const PRODUCT_OPTION_SELECT = 'PRODUCT_OPTION_SELECT';

export const PRODUCT_PUBLISH_CLEAR = 'PRODUCT_PUBLISH_CLEAR';
export const PRODUCT_PUBLISH_IMAGE_CLEAR = 'PRODUCT_PUBLISH_IMAGE_CLEAR';
export const PRODUCT_PUBLISH_IMAGE_DELETE = 'PRODUCT_PUBLISH_IMAGE_DELETE';

export const PRODUCT_PUBLISH_REQUEST = 'PRODUCT_PUBLISH_REQUEST';
export const PRODUCT_PUBLISH_SUCCESS = 'PRODUCT_PUBLISH_SUCCESS';
export const PRODUCT_PUBLISH_FAILURE = 'PRODUCT_PUBLISH_FAILURE';

export const PRODUCT_PRICE_INPUT = 'PRODUCT_PRICE_INPUT';

const productPublishRequestAction = () => ({
    type: PRODUCT_PUBLISH_REQUEST,
    payload: {},
    meta: {}
});

const productPublishSuccessAction = res => ({
    type: PRODUCT_PUBLISH_SUCCESS,
    payload: res,
    meta: {}
});

const productPublishFailureAciton = e => ({
    type: PRODUCT_PUBLISH_FAILURE,
    payload: e,
    meta: {}
});

export const productPriceInputAction = price => ({
    type: PRODUCT_PRICE_INPUT,
    payload: price,
    meta: {}
});

export const productPublishImageDeleteAction = image => ({
    type: PRODUCT_PUBLISH_IMAGE_DELETE,
    payload: image,
    meta: {}
});

export const productPublishImageClearAction = () => ({
    type: PRODUCT_PUBLISH_IMAGE_CLEAR,
    payload: {},
    meta: {}
});

export const productPublishClearAction = () => ({
    type: PRODUCT_PUBLISH_CLEAR,
    payload: {},
    meta: {}
});

export const productOptionSelectAction = (type, option) => ({
    type: PRODUCT_OPTION_SELECT,
    payload: { optionType: type, optionSelected: option },
    meta: {}
});

export const productOptionAction = active => ({
    type: PRODUCT_OPTION,
    payload: active,
    meta: {}
});

const productPullRequestAction = () => ({
    type: PRODUCT_PULL_REQUEST,
    payload: {},
    meta: {}
});

const productPullSuccess = product => ({
    type: PRODUCT_PULL_SUCCESS,
    payload: product,
    meta: {}
});

const productPullFailure = e => ({
    type: PRODUCT_PULL_FAILURE,
    payload: e,
    meta: {}
});

export const productImageSelectAction = (imageData, currentImage) => ({
    type: PRODUCT_IMAGE_SELECT,
    payload: { images: imageData, current: currentImage },
    meta: {}
});

export const productTakeImageAction = imageData => ({
    type: PRODUCT_TAKE_IMAGE,
    payload: imageData,
    meta: {}
});

export const productInputChangeAction = (inputValue, inputType) => ({
    type: PRODUCT_INPUT_CHANGE,
    payload: {
        value: inputValue,
        type: inputType
    }
});

export const productSelectAction = product => ({
    type: PRODUCT_SELECT,
    payload: product,
    meta: {}
});

export const productPublishStoreAction = product => ({
    type: PRODUCT_PUBLISH_STORE,
    payload: product,
    meta: {}
});

export const productPublishAction = () => (dispatch, getState) => {
    const { productToPublish } = getState().product;
    console.log(productToPublish);
    dispatch(productPublishRequestAction());
};

export const productPull = () => (dispatch, getState) => {
    const state = getState();
    const isLoading = state.product.loading;

    if (isLoading) {
        return;
    }

    console.log(isLoading);
    const { selectedVillage } = state.home;
    const url = 'userservice/getcommodity';
    dispatch(productPullRequestAction());
    const villageID = selectedVillage.villageID || 1;
    const result = fetchPost(url, {
        queryParams: { villageID, pageSize: 20, pageNo: 1 }
    });
    return result
        .then(json => dispatch(productPullSuccess(json)))
        .catch(e => dispatch(productPullFailure(e)));
};
