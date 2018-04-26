import { Navigation } from 'react-native-navigation';

import HomeTabBarContainer from './home/tab-bar/tab-bar-container';
import ScreenHomeContainer from './home/screen-home-container';
import ScreenProfileContainer from './profile/screen-profile-container';

import Modale from './components/modal/modal';
import LightBoxContainer from './components/light-box/light-box-container';

import SquareTab from './footer/tabs/square-tab';
import HomeTab from './footer/tabs/home-tab';
import MessageTab from './footer/tabs/message-tab';
import ProfileTab from './footer/tabs/profile-tab';

// product
import ProductDetailContainer from './product/product-detail/product-detail-container';
import ProductDetailTabBarContainer from './product/product-detail/tab-bar/tab-bar-container';
import ProductOrderContainer from './product/product-order/product-order-container';

// square
import SquareContainer from './square/square-container';

export const registerScreens = (store, provider) => {
    // squre
    Navigation.registerComponent('screen.Square', () => SquareContainer, store, provider);
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

    // component
    Navigation.registerComponent('screen.Component.Modal', () => Modale, store, provider);
    Navigation.registerComponent(
        'screen.Component.LightBox',
        () => LightBoxContainer,
        store,
        provider
    );

    // home
    Navigation.registerComponent('screen.Home.TopBar', () => HomeTabBarContainer, store, provider);
    Navigation.registerComponent('screen.Home', () => ScreenHomeContainer, store, provider);
    Navigation.registerComponent('screen.Profile', () => ScreenProfileContainer, store, provider);

    // tabs
    Navigation.registerComponent('footer.Tabs.HomeTab', () => HomeTab, store, provider);
    Navigation.registerComponent('footer.Tabs.SquareTab', () => SquareTab, store, provider);
    Navigation.registerComponent('footer.Tabs.MessageTab', () => MessageTab, store, provider);
    Navigation.registerComponent('footer.Tabs.ProfileTab', () => ProfileTab, store, provider);
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
