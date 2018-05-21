import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleFabButtonAction } from '../../state/screen/square/actions';
import Square from './square';

class Container extends Component {
    static get navigatorStyle() {
        return {
            navBarHidden: true,
            tabBarHidden: true,
            tabBarTranslucent: true
        };
    }

    render() {
        return <Square {...this.props} />;
    }
}

Container.propTypes = {
    homeTitle: PropTypes.string,
    navigator: PropTypes.objectOf(PropTypes.any)
};

Container.defaultProps = {
    homeTitle: 'Default Home',
    navigator: {}
};

const stateToProps = (state, ownProps) => ({
    homeTitle: state.home.homeTitle,
    navigator: ownProps.navigator,
    toggleTextInput: state.square.toggleTextInput
});

const dispatchToProps = (dispatch, ownProps) => ({
    toggleFabButton: toggleValue => dispatch(toggleFabButtonAction(toggleValue))
});

const SquareContainer = connect(stateToProps, dispatchToProps)(Container);

export default SquareContainer;
