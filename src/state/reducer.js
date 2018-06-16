import homeReducer from './screen/home/reducer';
import productReducer from './screen/product/reducer';
import squareReducer from './screen/square/reducer';
import userReducer from './screen/user/reducer';
import messageReducer from './screen/message/reducer';
import marketReducer from './screen/market/reducer';

export default function reducer(state = {}, action) {
    return {
        home: homeReducer(state.home, action),
        product: productReducer(state.product, action),
        square: squareReducer(state.square, action),
        user: userReducer(state.user, action),
        message: messageReducer(state.message, action),
        market: marketReducer(state.market, action)
    };
}
