import React, { Component } from 'react';
import { connect } from 'react-redux';
import { estateSelectAction } from '../../../state/screen/estate/actions';
import EstateList from './estate-list';

class Container extends Component {
    componentWillMount() {
        // this.props.getProductList();
    }

    render() {
        return <EstateList {...this.props} />;
    }
}

const stateToProps = (state, ownProps) => ({
    estates: state.estate.estates,
    navigator: ownProps.propsNavigatorObject
});

const dispatchToProps = (dispatch, ownProps) => ({
    estateSelect: estate => {
        ownProps.propsNavigatorObject.push({
            screen: 'screen.Market.Detail'
        });
        dispatch(estateSelectAction(estate));
    }
});

const EstateListContainer = connect(stateToProps, dispatchToProps)(Container);

export default EstateListContainer;
