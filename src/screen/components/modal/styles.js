import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    button: {
        marginTop: 16
    },
    buttonContainer: {
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center'
    },
    closeModalButton: {
        backgroundColor: 'tomato',
        width: 50,
        height: 25,
        borderRadius: 2,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white'
    }
});
export default styles;
