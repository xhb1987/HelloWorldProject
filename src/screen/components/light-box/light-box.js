import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

const LightBox = ({ title, content, onClose, selectCity }) => (
    <View style={styles.container}>
        <View style={{ flex: 8 }}>
            <Text style={styles.title}>{title}</Text>
            {content.map(item => (
                <Button
                    key={item.cityName}
                    title={item.cityName}
                    style={styles.content}
                    onPress={() => {
                        selectCity({ cityName: item.cityName, cityID: item.cityID });
                        onClose();
                    }}
                />
            ))}
        </View>
    </View>
);

export default LightBox;
