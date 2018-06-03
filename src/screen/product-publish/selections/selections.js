import React, { Component } from 'react';
import { TouchableOpacity, Dimensions, Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
        backgroundColor: '#3a3a3a7a',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    menuContainer: {
        height: 120,
        width: Dimensions.get('screen').width,
        backgroundColor: 'white',
        flexDirection: 'column'
    },
    titleContainer: {
        flex: 1,
        borderBottomColor: '#f0f0f0',
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingTop: 10,
        paddingBottom: 10
    },
    title: {
        fontSize: 18
    },
    optionContainer: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    option: {
        marginRight: 5,
        paddingHorizontal: 5,
        borderRightColor: '#7e7e7e',
        borderRightWidth: 1
    },
    optionLast: {
        borderRightWidth: 0
    },
    optionTitle: {
        fontSize: 16,
        color: '#7e7e7e'
    },
    optionTitleSelected: {
        color: '#ed3349'
    }
});

class Selections extends Component {
    render() {
        const {
            openCategory,
            selectOption,
            productToPublish,
            productOptionActive,
            productCategoryOption,
            productUsageOption,
            productDistrictOption
        } = this.props;

        let option = productCategoryOption;
        if (productOptionActive === 'usage') {
            option = productUsageOption;
        } else if (productOptionActive === 'district') {
            option = productDistrictOption;
        }

        return (
            <View style={styles.container}>
                <View style={styles.menuContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{option.title}</Text>
                    </View>
                    <View style={styles.optionContainer}>
                        {option.options.map((opt, i) => (
                            <TouchableOpacity
                                style={
                                    option.options.length - 1 === i
                                        ? [styles.option, styles.optionLast]
                                        : styles.option
                                }
                                key={opt}
                                onPress={() => selectOption(productOptionActive, opt)}
                            >
                                <Text
                                    style={
                                        opt === productToPublish[productOptionActive]
                                            ? [styles.optionTitle, styles.optionTitleSelected]
                                            : styles.optionTitle
                                    }
                                >
                                    {opt}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </View>
        );
    }
}
export default Selections;
