export const PRODUCT_SELECT = 'PRODUCT_SELECT';
export const PRODUCT_PUBLISH_STORE = 'PRODUCT_PUBLISH_STORE';
export const PRODUCT_INPUT_CHANGE = 'PRODUCT_INPUT_CHANGE';
export const PRODUCT_TAKE_IMAGE = 'PRODUCT_TAKE_IMAGE';

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
