import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Modale = ({ dismissModal }) => (
    <TouchableOpacity style={[styles.buttonContainer]} onPress={() => dismissModal()}>
        <View style={styles.closeModalButton}>
            <Text style={styles.buttonText}>Modale</Text>
        </View>
    </TouchableOpacity>
);

export default Modale;
