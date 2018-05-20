import RNC from 'react-native-css';
import { Dimensions } from 'react-native';

const styles = RNC`
    container {
        flex-direction: row;
        background-color: white;
        padding: 10px;
        width: ${Dimensions.get('window').width}
        height: ${Dimensions.get('window').height * 0.1}
    }

    userContainer {
        flex: 1;
    }

    buttonContainer {
        flex: 3;
        flex-direction: row
    }

    button {
        flex: 1;
        max-width: 100;
        border-width: 0;
        border-radius: 5;
    }

    buyButton {
        background-color: '#ed3349';
    }

    talkButton {
        background-color: '#ffc12c';
    }
    `;

export default styles;
