import React from 'react';
import { View, Text, StyleSheet, Keyboard } from 'react-native';
import { List, ListItem, Divider } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        marginBottom: 5
    }
});

const ListContent = ({ data, onPressCallback }) => (
    <View>
        <ListItem
            title={data.cityName}
            hideChevron
            containerStyle={{
                borderBottomWidth: 1,
                borderBottomColor: '#e6e6e6',
                height: 50,
                justifyContent: 'center'
            }}
        />
        <List containerStyle={{ marginTop: 0, borderTopWidth: 0 }}>
            {data.villages.map(village => (
                <ListItem
                    key={village.villageID}
                    title={village.villageName}
                    hideChevron
                    containerStyle={{
                        paddingTop: 5,
                        paddingBottom: 5,
                        paddingLeft: 15,
                        borderBottomWidth: 1,
                        borderBottomColor: '#e6e6e6',
                        height: 40,
                        justifyContent: 'center'
                    }}
                    onPress={() => {
                        Keyboard.dismiss();
                        onPressCallback(village);
                    }}
                />
            ))}
        </List>
    </View>
);

export default ListContent;
