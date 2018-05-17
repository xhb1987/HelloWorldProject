import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    citySelectAction,
    cityPullRequest,
    cityTabToggleAction,
    villagePullRequest,
    villageSelectAction
} from '../../../state/screen/home/actions';
import ListBody from './list-body';

class Container extends Component {
    componentWillMount() {
        this.props.cityPull();
    }

    render() {
        return <ListBody {...this.props} />;
    }
}

const stateToProps = state => ({
    city: state.home.selectedCity,
    village: state.home.selectedVillage,
    cityList: state.home.cityList,
    villageList: state.home.villageList,
    homeTitle: state.home.homeTitle,
    activeCityTab: state.home.activeCityTab
});

const dispatchToProps = (dispatch, ownProps) => ({
    selectCity: city => {
        dispatch(citySelectAction(city));
        dispatch(villagePullRequest(city));
        dispatch(cityTabToggleAction('village'));
    },
    selectVillage: village => {
        dispatch(villageSelectAction(village));
        dispatch(cityTabToggleAction('city'));
        ownProps.close();
    },
    cityTabToggle: activeTab => dispatch(cityTabToggleAction(activeTab)),
    cityPull: () => dispatch(cityPullRequest())
});

const ListBodyContainer = connect(stateToProps, dispatchToProps)(Container);
export default ListBodyContainer;
