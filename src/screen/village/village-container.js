import React, { Component } from 'react';
import { connect } from 'react-redux';
import Village from './village';
import { citySelectAction } from '../../state/screen/home/actions';

class Container extends Component {
    static get navigatorStyle() {
        return {
            navBarHidden: true,
            tabBarHidden: true,
            tabBarTranslucent: true
        };
    }
    render() {
        return <Village {...this.props} />;
    }
}

const stateToProps = state => ({
    city: state.home.selectedCity,
    village: state.home.selectedVillage,
    cityList: state.home.cityList,
    villageList: state.home.villageList
});

const dispatchToProps = (dispatch, ownProps) => ({
    selectCity: city => dispatch(citySelectAction(city)),
    close: () =>
        ownProps.navigator.dismissModal({
            animationType: 'slide-down'
        })
});

const VillageContainer = connect(stateToProps, dispatchToProps)(Container);
export default VillageContainer;
