export const HOME_HIT_BUTTON = 'HOME_HIT_BUTTON';
export const HOME_RESET_BUTTON = 'HOME_RESET_BUTTON';
export const HOME_INDEX_UPDATE = 'HOME_INDEX_UPDATE';

export const hitButtonAction = () => ({
    type: HOME_HIT_BUTTON,
    payload: {},
    meta: {}
});

export const resetButtonAction = () => ({
    type: HOME_RESET_BUTTON,
    payload: {},
    meta: {}
});

export const indexUpdateAction = index => ({
    type: HOME_INDEX_UPDATE,
    payload: index,
    meta: {}
});
