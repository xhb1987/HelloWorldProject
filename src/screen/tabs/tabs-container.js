import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { activeTabToggleAction } from '../../state/screen/home/actions';
import Tab from './tabs';

class Container extends Component {
    componentDidMount() {
        // for square page hide and show tab
        if (this.props.activeTab !== 'square') {
            this.props.goToIndex();
        }
    }
    render() {
        return <Tab {...this.props} />;
    }
}

const stateToProps = state => ({
    activeTab: state.home.activeTab
});

const dispatchToProps = (dispatch, ownProps) => ({
    goToIndex: () => {
        ownProps.navigator.switchToTab({
            tabIndex: 0
        });
        dispatch(activeTabToggleAction('index'));
    },
    goToSquare: () => {
        ownProps.navigator.switchToTab({
            tabIndex: 1
        });
        dispatch(activeTabToggleAction('square'));
    },
    goToPublish: () => {
        ownProps.navigator.switchToTab({
            tabIndex: 2
        });
        dispatch(activeTabToggleAction('publish'));
    },
    goToMessage: () => {
        ownProps.navigator.switchToTab({
            tabIndex: 3
        });
        dispatch(activeTabToggleAction('message'));
    },
    goToProfile: () => {
        ownProps.navigator.switchToTab({
            tabIndex: 4
        });
        dispatch(activeTabToggleAction('profile'));
    }
});

const TabContainer = connect(stateToProps, dispatchToProps)(Container);

export default TabContainer;
