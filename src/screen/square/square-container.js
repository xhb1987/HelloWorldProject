import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Square from './square';

let homeTitle = '';
let homeNavigator;

class Container extends Component {
    constructor(props) {
        super(props);
        ({ homeTitle } = this.props);
        homeNavigator = this.props.navigator;
    }

    static get navigatorStyle() {
        return {
            navBarCustomView: 'screen.Home.TopBar',
            navBarComponentAlignment: 'center',
            navBarCustomViewInitialProps: {
                title: homeTitle,
                navigator: homeNavigator
            }
        };
    }

    render() {
        return <Square {...this.props} propsNavigatorObject={this.props.navigator} />;
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

const stateToProps = state => ({
    homeTitle: state.home.homeTitle
});

const dispatchToProps = () => ({});

const SquareContainer = connect(stateToProps, dispatchToProps)(Container);

export default SquareContainer;
