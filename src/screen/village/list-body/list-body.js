import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SectionList,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import { SearchBar, Divider, List, ListItem } from 'react-native-elements';
import Lodash from 'lodash';
import ListContent from './list-content/list-content';

const ListBody = ({
    homeTitle,
    schoolList,
    villageList,
    activeCityTab,
    cityTabToggle,
    selectVillage,
    filterVillage
}) => (
    <TouchableWithoutFeedback
        onPress={() => {
            console.log('test');
            Keyboard.dismiss();
        }}
        style={{ flex: 1 }}
        accessible={false}
    >
        <View style={{ flex: 1 }}>
            <SearchBar
                round
                lightTheme
                blurOnSubmit
                returnKeyType="search"
                returnKeyLabel="搜索"
                style={{ borderWidth: 0 }}
                color="black"
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
                onChangeText={text => filterVillage(text)}
            />
            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={
                        activeCityTab === 'village' ? [styles.tab, styles.tabSelected] : styles.tab
                    }
                    onPress={() => cityTabToggle('village')}
                >
                    <View style={styles.tabInside}>
                        <Text
                            style={
                                activeCityTab === 'village'
                                    ? [styles.tabText, styles.tabTextSelected]
                                    : styles.tabText
                            }
                        >
                            小区
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={
                        activeCityTab === 'school' ? [styles.tab, styles.tabSelected] : styles.tab
                    }
                    onPress={() => cityTabToggle('school')}
                >
                    <View style={styles.tabInsideRight}>
                        <Text
                            style={
                                activeCityTab === 'school'
                                    ? [styles.tabText, styles.tabTextSelected]
                                    : styles.tabText
                            }
                        >
                            学校
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.villageTitleContainer}>
                <Text style={styles.villageTitle}>当前：{homeTitle}</Text>
            </View>
            {activeCityTab === 'village' ? (
                <List containerStyle={{ marginTop: 0, borderTopWidth: 0 }}>
                    {villageList.map(
                        city =>
                            Lodash.has(city, 'villages') ? (
                                <ListContent
                                    data={city}
                                    onPressCallback={selectVillage}
                                    key={city.cityID}
                                />
                            ) : null
                    )}
                </List>
            ) : (
                <List containerStyle={{ marginTop: 0, borderTopWidth: 0 }}>
                    {schoolList.map(
                        school =>
                            Lodash.has(school, 'villages') ? (
                                <ListContent
                                    data={school}
                                    onPressCallback={selectVillage}
                                    key={school.cityID}
                                />
                            ) : null
                    )}
                </List>
            )}
        </View>
    </TouchableWithoutFeedback>
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
