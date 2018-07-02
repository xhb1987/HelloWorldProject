import React from 'react';
import { View } from 'react-native';
import ProductListContainer from './product-list/product-list-container';

const SellList = ({ navigator }) => <ProductListContainer propsNavigatorObject={navigator} />;

SellList.propTypes = {};

SellList.defaultProps = {};

export default SellList;
