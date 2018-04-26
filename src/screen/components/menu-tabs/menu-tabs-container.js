import React from 'react';
import { connect } from 'react-redux';
import MenuTabs from './menu-tabs';

const Container = props => <MenuTabs {...props} />;

const stateToProps = () => ({});
const disptachToProps = () => ({});
const MenuTabsContainer = connect(stateToProps, disptachToProps)(Container);
export default MenuTabsContainer;
