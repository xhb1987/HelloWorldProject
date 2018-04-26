import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

const LightBox = ({ title, content, onClose }) => (
    <View style={styles.container}>
        <View style={{ flex: 8 }}>
            <Text style={styles.title}>{title}</Text>
            {content.map(item => (
                <Text key={item} style={styles.content}>
                    {item}
                </Text>
            ))}
        </View>
        <View style={{ flex: 1 }}>
            <Button title="Close" onPress={() => onClose()} />
        </View>
    </View>
);

export default LightBox;
