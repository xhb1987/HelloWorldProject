import React from 'react';
import { connect } from 'react-redux';
import TabOne from './tab-one';

const Container = props => <TabOne {...props} />;

const stateToProps = () => ({});
const dispatchToProps = () => ({});

const TabOneContainer = connect(stateToProps, dispatchToProps)(Container);
export default TabOneContainer;
