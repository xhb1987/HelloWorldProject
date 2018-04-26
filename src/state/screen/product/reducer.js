import { PRODUCT_SELECT } from './actions';

const initialState = {
    products: [
        {
            id: '0',
            title: '商品 1',
            price: '100.00',
            productDescription: '这是商品 1',
            user: {
                name: '用户1',
                address: '地址1'
            },
            tags: [
                {
                    id: 0,
                    name: '数码'
                },
                {
                    id: 1,
                    name: '手机'
                }
            ]
        },
        {
            id: '1',
            title: '商品 2',
            price: '200.00',
            productDescription: '这是商品 2',
            user: {
                name: '用户2',
                address: '地址2'
            },
            tags: [
                {
                    id: 0,
                    name: '服装'
                },
                {
                    id: 1,
                    name: '女士'
                }
            ]
        },
        {
            id: '3',
            title: '商品 3',
            price: '300.00',
            productDescription: '这是商品 3',
            user: {
                name: '用户3',
                address: '地址3'
            },
            tags: [
                {
                    id: 0,
                    name: '服装'
                },
                {
                    id: 1,
                    name: '女士'
                }
            ]
        },
        {
            id: '4',
            title: '商品 4',
            price: '400.00',
            productDescription: '这是商品 4',
            user: {
                name: '用户4',
                address: '地址4'
            },
            tags: [
                {
                    id: 0,
                    name: '服装'
                },
                {
                    id: 1,
                    name: '女士'
                }
            ]
        }
    ],
    product: {}
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_SELECT:
            return Object.assign({}, state, { product: action.payload });
        default:
            return state;
    }
};

export default productReducer;
