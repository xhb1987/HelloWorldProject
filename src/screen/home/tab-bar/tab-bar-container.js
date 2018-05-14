import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import {
    cityPullRequest,
    villagePullRequest,
    citySelectAction
} from '../../../state/screen/home/actions';
import HomeTabBar from './tab-bar';

class Container extends Component {
    constructor(props) {
        super(props);
        this.openOption = this.openOption.bind(this);
    }

    componentDidMount() {
        // this.props.getCityList();
        // this.props.getVillageList();
    }

    openOption(optionType) {
        let contentList = [];
        let boxTitle = '';

        if (optionType === 'city') {
            contentList = this.props.cityList;
            boxTitle = '选择城市';
        }

        if (optionType === 'village') {
            contentList = this.props.villageList;
            boxTitle = '选择小区';
        }
        Navigation.showLightBox({
            screen: 'screen.Component.LightBox',
            passProps: {
                title: boxTitle,
                content: contentList,
                onClose: Navigation.dismissLightBox
            },
            style: {
                backgroundBlur: 'dark',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                tapBackgroundToDismiss: true
            }
        });
    }
    render() {
        return <HomeTabBar {...this.props} openOption={this.openOption} />;
    }
}
const stateToProps = state => ({
    homeTitle: state.home.homeTitle,
    cityList: state.home.cityList,
    villageList: state.home.villageList,
    city: state.home.selectedCity,
    village: state.home.selectedVillage
});

const dispatchToProps = dispatch => ({
    getCityList: () => dispatch(cityPullRequest()),
    getVillageList: () => dispatch(villagePullRequest())
});

const HomeTabBarContainer = connect(stateToProps, dispatchToProps)(Container);
export default HomeTabBarContainer;
