import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').height * 0.7,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 16
    },
    title: {
        fontSize: 17,
        fontWeight: '700'
    },
    content: {
        marginTop: 5
    }
});

export default styles;
