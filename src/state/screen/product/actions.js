export const PRODUCT_SELECT = 'PRODUCT_SELECT';

export const productSelectAction = product => ({
    type: PRODUCT_SELECT,
    payload: product,
    meta: {}
});
