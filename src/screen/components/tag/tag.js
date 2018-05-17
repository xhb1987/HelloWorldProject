import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    height: 20,
    padding: 4,
    textAlign: 'center',
    fontSize: 13,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
    color: '#ed3349',
    borderWidth: 1,
    borderColor: '#ed3349'
});

const Tag = ({ contant }) => <Text style={styles.tagItem}>{contant}</Text>;

export default Tag;

Tag.propTypes = {
    contant: PropTypes.string
};

Tag.defaultProps = {
    contant: 'default'
};
