import homeReducer from './screen/home/reducer';
import productReducer from './screen/product/reducer';
import squareReducer from './screen/square/reducer';

export default function reducer(state = {}, action) {
    return {
        home: homeReducer(state.home, action),
        product: productReducer(state.product, action),
        square: squareReducer(state.square, action)
    };
}
