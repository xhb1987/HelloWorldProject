import React from 'react';
import { connect } from 'react-redux';
import ScreenProfile from './screen-profile';

const Container = props => <ScreenProfile {...props} />;

const stateToProps = () => ({});
const dispatchToProps = () => ({});

const ScreenProfileContainer = connect(stateToProps, dispatchToProps)(Container);
export default ScreenProfileContainer;
