import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    cityPullRequest,
    cityTabToggleAction,
    villageSelectAction,
    villageSchoolPullRequest,
    villageFilterAction
} from '../../../state/screen/home/actions';
import { productPull } from 'state/screen/product/actions';
// import { productPull } from '../../../state/screen/product/actions';
import ListBody from './list-body';

import { VILLAGE_TYPE, SCHOOL_TYPE } from '../../../config';

class Container extends Component {
    componentWillMount() {
        this.props.getAllCity();
    }

    render() {
        return <ListBody {...this.props} />;
    }
}

const stateToProps = state => ({
    village: state.home.selectedVillage,
    villageList: state.home.villageFilteredList,
    schoolList: state.home.schoolFilteredList,
    school: state.home.school,
    homeTitle: state.home.homeTitle,
    activeCityTab: state.home.activeCityTab
});

const dispatchToProps = (dispatch, ownProps) => ({
    filterVillage: content => {
        dispatch(villageFilterAction(content));
    },
    getAllCity: () => {
        dispatch(villageSchoolPullRequest(VILLAGE_TYPE));
        dispatch(villageSchoolPullRequest(SCHOOL_TYPE));
    },
    selectVillage: village => {
        dispatch(villageSelectAction(village));
        dispatch(productPull());
        ownProps.close();
    },
    cityTabToggle: activeTab => dispatch(cityTabToggleAction(activeTab)),
    cityPull: () => dispatch(cityPullRequest())
});

const ListBodyContainer = connect(stateToProps, dispatchToProps)(Container);
export default ListBodyContainer;
