import React from 'react';
import { connect } from 'react-redux';
import TabTwo from './tab-two';

const Container = props => <TabTwo {...props} />;

const stateToProps = () => ({});
const dispatchToProps = () => ({});

const TabTwoContainer = connect(stateToProps, dispatchToProps)(Container);
export default TabTwoContainer;
