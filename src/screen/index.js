import { Navigation } from 'react-native-navigation';

import HomeTabBarContainer from '../screen/components/tab-bar/tab-bar-container';
import ScreenHomeContainer from './home/screen-home-container';
import ScreenProfileContainer from './profile/screen-profile-container';
import MessageContainer from './message/message-container';

import Modale from './components/modal/modal';
import LightBoxContainer from './components/light-box/light-box-container';

import VillageContainer from './village/village-container';

// message
import MessageDetailContainer from './message/message-detail/message-detail-container';

// product
import ProductDetailContainer from './product/product-detail/product-detail-container';
import ProductDetailTabBarContainer from './product/product-detail/tab-bar/tab-bar-container';
import ProductOrderContainer from './product/product-order/product-order-container';

// market
import MarketDetailContainer from './market/market-detail/market-detail-container';

// product publish
import ProductPublishContainer from './product-publish/product-publish-container';
import CameraScreenContainer from './product-publish/camera-screen/camera-screen-container';
import CameraRollContainer from './product-publish/camera-roll/camera-roll-conatiner';
import PhotoScreenContainer from './product-publish/photo-screen/photo-screen-container';
import SelectionsContainer from './product-publish/selections/selections-container';
import CategoryContainer from './product-publish/category/category-container';

// square
import SquareContainer from './square/square-container';
import CameraContainer from './components/camera/camera-container';
import PhotoRollContainer from './components/photo-roll/photo-roll-container';

// user - login
import UserLoginContainer from './user-login/user-login-container';

// user - register
import UserRegisterContainer from './user-register/user-register-container';

export const registerScreens = (store, provider) => {
    // product publish
    Navigation.registerComponent(
        'screen.ProductPublish',
        () => ProductPublishContainer,
        store,
        provider
    );
    Navigation.registerComponent(
        'screen.ProductPublish.CameraScreen',
        () => CameraScreenContainer,
        store,
        provider
    );
    Navigation.registerComponent(
        'screen.ProductPublish.CameraRoll',
        () => CameraRollContainer,
        store,
        provider
    );
    Navigation.registerComponent(
        'screen.ProductPublish.PhotoScreen',
        () => PhotoScreenContainer,
        store,
        provider
    );
    Navigation.registerComponent(
        'lightBox.ProductPublish.Selections',
        () => SelectionsContainer,
        store,
        provider
    );
    Navigation.registerComponent('modal.Category', () => CategoryContainer, store, provider);
    // message
    Navigation.registerComponent('screen.Message', () => MessageContainer, store, provider);
    Navigation.registerComponent(
        'screen.Message.Detail',
        () => MessageDetailContainer,
        store,
        provider
    );

    // user - register
    Navigation.registerComponent(
        'screen.User.Register',
        () => UserRegisterContainer,
        store,
        provider
    );
    // user - login
    Navigation.registerComponent('screen.User.Login', () => UserLoginContainer, store, provider);

    // squre
    Navigation.registerComponent('screen.Square', () => SquareContainer, store, provider);
    Navigation.registerComponent('modal.Camera', () => CameraContainer, store, provider);
    Navigation.registerComponent('modal.Photo', () => PhotoRollContainer, store, provider);
    // product
    Navigation.registerComponent(
        'screen.Product.Order',
        () => ProductOrderContainer,
        store,
        provider
    );
    Navigation.registerComponent(
        'screen.Product.Detail.TabBar',
        () => ProductDetailTabBarContainer,
        store,
        provider
    );
    Navigation.registerComponent(
        'screen.Product.Detail',
        () => ProductDetailContainer,
        store,
        provider
    );

    Navigation.registerComponent(
        'screen.Market.Detail',
        () => MarketDetailContainer,
        store,
        provider
    );

    // component
    Navigation.registerComponent('screen.Component.Modal', () => Modale, store, provider);
    Navigation.registerComponent(
        'screen.Component.LightBox',
        () => LightBoxContainer,
        store,
        provider
    );

    // home - village selection modal
    Navigation.registerComponent('modal.Village', () => VillageContainer, store, provider);

    // home
    Navigation.registerComponent('screen.Home.TopBar', () => HomeTabBarContainer, store, provider);
    Navigation.registerComponent('screen.Home', () => ScreenHomeContainer, store, provider);
    Navigation.registerComponent('screen.Profile', () => ScreenProfileContainer, store, provider);
};

// export const registerScreens = (store, provider) => {
//     Navigation.registerComponent(
//         'HomeScreen',
//         () => HomeContainer,
//         store,
//         provider
//     );
// };
export default registerScreens;
