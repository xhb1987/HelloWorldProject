import {
    HOME_HIT_BUTTON,
    HOME_RESET_BUTTON,
    HOME_INDEX_UPDATE
} from './actions';

const initialState = {
    home: 'home screen',
    homeTitle: '中信领航',
    products: [
        {
            id: '0',
            title: '商品 1',
            price: '100.00',
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
    index: 0,
    routes: [
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' }
    ]
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case HOME_HIT_BUTTON:
            return Object.assign({}, state, { home: 'button hit' });
        case HOME_RESET_BUTTON:
            return Object.assign({}, state, { home: 'home screen' });
        case HOME_INDEX_UPDATE:
            return Object.assign({}, state, { index: action.payload });
        default:
            return state;
    }
};

export default homeReducer;
