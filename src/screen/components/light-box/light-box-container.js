import React, { Component } from 'react';
import { connect } from 'react-redux';
import { citySelectAction } from '../../../state/screen/home/actions';
import LightBox from './light-box';

class Container extends Component {
    constructor(props) {
        super(props);
        this.onClose = this.onClose.bind(this);
    }

    onClose() {
        this.props.navigator.dismissLightBox();
    }

    render() {
        return <LightBox {...this.props} onClose={this.onClose} />;
    }
}

const stateToProps = () => ({});
const dispatchToProps = dispatch => ({
    selectCity: city => dispatch(citySelectAction(city))
});

const LightBoxContainer = connect(stateToProps, dispatchToProps)(Container);
export default LightBoxContainer;
