import lodash from 'lodash';
import { ESTATE_SELECT } from './actions';

const initialState = {
    estates: [1, 2, 3, 4],
    estate: {},
    loading: false,
    error: false
};

const estateReducer = (state = initialState, action) => {
    switch (action.type) {
        case ESTATE_SELECT:
            return Object.assign({}, state, { estate: action.payload });
        default:
            return state;
    }
};

export default estateReducer;
