import { AsyncStorage } from 'react-native';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import homeReducer from './screen/home/reducer';
import productReducer from './screen/product/reducer';
import squareReducer from './screen/square/reducer';
import userReducer from './screen/user/reducer';
import messageReducer from './screen/message/reducer';
import marketReducer from './screen/market/reducer';
import estateReducer from './screen/estate/reducer';
import chatMessageReducer from './screen/chat-message/reducer';

const persistHomeConfig = {
    key: 'home',
    storage: AsyncStorage,
    blacklist: ['activeCityTab', 'activeTab', 'loading']
};

const persistSquareConfig = {
    key: 'square',
    storage: AsyncStorage,
    blacklist: ['toggleActionSheet', 'toggleTextInput']
};

const persistProductConfig = {
    key: 'product',
    storage: AsyncStorage,
    blacklist: ['productToPublish']
};

const reducer = combineReducers({
    home: persistReducer(persistHomeConfig, homeReducer),
    product: persistReducer(persistProductConfig, productReducer),
    square: persistReducer(persistSquareConfig, squareReducer),
    user: userReducer,
    message: messageReducer,
    market: marketReducer,
    estate: estateReducer,
    chatMessage: chatMessageReducer
});

export default reducer;
