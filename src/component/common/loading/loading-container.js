import React from 'react';
import { connect } from 'react-redux';
import Loading from './loading';

const Container = props => <Loading {...props} />;

const stateToProps = () => ({});

const dispatchToProps = () => ({});

const LoadingContainer = connect(stateToProps, dispatchToProps)(Container);
export default LoadingContainer;
