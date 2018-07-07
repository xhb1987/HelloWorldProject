import lodash from 'lodash';
import { MARKET_SELECT } from './actions';

const initialState = {
    markets: [{ name: '福伴超市' }, { name: '小区超市' }],
    market: {},
    loading: false,
    error: false,
    notification: ''
};

const marketReducer = (state = initialState, action) => {
    switch (action.type) {
        case MARKET_SELECT:
            return Object.assign({}, state, { market: action.payload });
        default:
            return state;
    }
};

export default marketReducer;
