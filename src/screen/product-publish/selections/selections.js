import React, { Component } from 'react';
import {
    TouchableOpacity,
    Dimensions,
    Text,
    View,
    StyleSheet,
    Animated,
    Easing
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height + 200,
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
    constructor(props) {
        super(props);
        this.state = {
            backgroundFade: new Animated.Value(0),
            menuPosition: new Animated.Value(150)
        };
        this.dismissLayout = this.dismissLayout.bind(this);
    }

    componentDidMount() {
        Animated.sequence([
            Animated.timing(this.state.backgroundFade, {
                toValue: 1,
                duration: 10
            }).start(),

            Animated.timing(this.state.menuPosition, {
                toValue: 0,
                duration: 50,
                delay: 100,
                easing: Easing.linear
            }).start()
        ]);
    }

    dismissLayout() {
        Animated.sequence([
            Animated.timing(this.state.menuPosition, {
                toValue: 150,
                duration: 50,
                easing: Easing.linear
            }).start(),

            Animated.timing(this.state.backgroundFade, {
                toValue: 0,
                duration: 20,
                delay: 100
            }).stop(this.props.cancel())
        ]);
        // this.props.cancel();
    }

    render() {
        const {
            openCategory,
            selectOption,
            productToPublish,
            productOptionActive,
            productCategoryOption,
            productUsageOption,
            productDistrictOption,
            cancel
        } = this.props;

        let option = productCategoryOption;
        if (productOptionActive === 'usage') {
            option = productUsageOption;
        } else if (productOptionActive === 'district') {
            option = productDistrictOption;
        }

        return (
            <TouchableOpacity onPress={this.dismissLayout} accessible={false}>
                <Animated.View
                    style={[
                        styles.container,
                        {
                            opacity: this.state.backgroundFade.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 1]
                            }),
                            transform: [
                                {
                                    translateY: -100
                                }
                            ]
                        }
                    ]}
                >
                    <Animated.View
                        style={[
                            styles.menuContainer,
                            {
                                transform: [
                                    {
                                        translateY: this.state.menuPosition.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0, 150]
                                        })
                                    }
                                ]
                            }
                        ]}
                    >
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
                    </Animated.View>
                </Animated.View>
            </TouchableOpacity>
        );
    }
}
export default Selections;
