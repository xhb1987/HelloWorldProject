import lodash from 'lodash';

const initialState = {
    market: [{ name: '福伴超市' }, { name: '小区超市' }],
    loading: false,
    error: false
};

const marketReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default marketReducer;
