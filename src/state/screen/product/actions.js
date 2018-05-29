import fetchPost from '../../../util/fetch-post';

export const PRODUCT_SELECT = 'PRODUCT_SELECT';
export const PRODUCT_PUBLISH_STORE = 'PRODUCT_PUBLISH_STORE';
export const PRODUCT_INPUT_CHANGE = 'PRODUCT_INPUT_CHANGE';
export const PRODUCT_TAKE_IMAGE = 'PRODUCT_TAKE_IMAGE';
export const PRODUCT_IMAGE_SELECT = 'PRODUCT_IMAGE_SELECT';

export const PRODUCT_PULL_REQUEST = 'PRODUCT_PULL_REQUEST';
export const PRODUCT_PULL_SUCCESS = 'PRODUCT_PULL_SUCCESS';
export const PRODUCT_PULL_FAILURE = 'PRODUCT_PULL_SUCCESS';

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

export const productPull = () => {
    return (dispatch, getState) => {
        const state = getState();
        const url = 'userservice/getcommodity';
        dispatch(productPullRequestAction());
        const villageId = 1;
        const result = fetchPost(url, {
            queryParams: { villageID: villageId, pageSize: 2, pageNo: 1 }
        });
        return result
            .then(json => dispatch(productPullSuccess(json)))
            .catch(e => dispatch(productPullFailure(e)));
    };
};
