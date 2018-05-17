import React from 'react';
import { View, Text, TouchableOpacity, SectionList, StyleSheet } from 'react-native';
import { SearchBar, Divider, List, ListItem } from 'react-native-elements';

const ListBody = ({
    homeTitle,
    cityList,
    villageList,
    activeCityTab,
    cityTabToggle,
    selectCity,
    selectVillage
}) => (
    <View>
        <SearchBar
            round
            lightTheme
            style={{ borderWidth: 0 }}
            inputStyle={{
                backgroundColor: '#efefef',
                color: '#bbbbbb',
                height: 35,
                paddingLeft: 30,
                margin: 5
            }}
            containerStyle={{
                marginHorizontal: 8,
                borderTopWidth: 0,
                borderBottomWidth: 0,
                backgroundColor: 'white'
            }}
            placeholder="请选择小区或者学校"
            placeholderTextColor="#bbbbbb"
        />
        <View style={styles.tabContainer}>
            <TouchableOpacity
                style={activeCityTab === 'city' ? [styles.tab, styles.tabSelected] : styles.tab}
                onPress={() => cityTabToggle('city')}
            >
                <View style={styles.tabInside}>
                    <Text
                        style={
                            activeCityTab === 'city'
                                ? [styles.tabText, styles.tabTextSelected]
                                : styles.tabText
                        }
                    >
                        城市
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={activeCityTab === 'village' ? [styles.tab, styles.tabSelected] : styles.tab}
                onPress={() => cityTabToggle('village')}
            >
                <View style={styles.tabInsideRight}>
                    <Text
                        style={
                            activeCityTab === 'village'
                                ? [styles.tabText, styles.tabTextSelected]
                                : styles.tabText
                        }
                    >
                        小区或学校
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.villageTitleContainer}>
            <Text style={styles.villageTitle}>当前：{homeTitle}</Text>
        </View>
        {activeCityTab === 'city' ? (
            <List containerStyle={{ marginTop: 0, borderTopWidth: 0 }}>
                {cityList.map(city => (
                    <ListItem
                        key={city.cityID}
                        title={city.cityName}
                        hideChevron={true}
                        containerStyle={{
                            borderBottomWidth: 1,
                            borderBottomColor: '#e6e6e6',
                            height: 50,
                            justifyContent: 'center'
                        }}
                        onPress={() => selectCity(city)}
                    />
                ))}
            </List>
        ) : (
            <List containerStyle={{ marginTop: 0, borderTopWidth: 0 }}>
                {villageList.map(village => (
                    <ListItem
                        key={village.villageID}
                        title={village.villageName}
                        hideChevron={true}
                        containerStyle={{
                            borderBottomWidth: 1,
                            borderBottomColor: '#e6e6e6',
                            height: 50,
                            justifyContent: 'center'
                        }}
                        onPress={() => selectVillage(village)}
                    />
                ))}
            </List>
        )}
    </View>
);

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row'
    },
    villageTitleContainer: {
        justifyContent: 'center',
        height: 50,
        padding: 15,
        borderBottomColor: '#e7e7e7',
        borderBottomWidth: 1
    },
    villageTitle: {
        fontSize: 16
    },
    tab: {
        flex: 1,
        height: 45,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd'
    },
    tabSelected: {
        borderBottomColor: '#ed3349'
    },
    tabInside: {
        height: 20,
        borderRightWidth: 1,
        borderRightColor: '#dddddd'
    },
    tabInsideRight: {
        borderRightWidth: 0
    },
    tabText: {
        lineHeight: 20,
        height: 20,
        textAlign: 'center',
        fontSize: 18,
        color: '#888888'
    },
    tabTextSelected: {
        color: '#ed3349'
    }
});
export default ListBody;
