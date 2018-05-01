import RNC from 'react-native-css';
import { Dimensions } from 'react-native';

const styles = RNC`
    container {
        background-color: white;
        padding: 10;
        height: ${Dimensions.get('window').height};
        width: ${Dimensions.get('window').width};
        flex-direction: column;
    }
    phoneGroup {
        flex-direction: row;
        padding: 10px;
    }
    codeButtonGroup {
        flex-direction: row;
        padding: 10px;
    }

    codeInput {
        flex: 1;
    }
    codeButton {
        flex: 1;
    }
    inputContainer {
        width: ${Dimensions.get('window').width * 0.5}
    }

    buttonGroup {
        margin-top: 10px;
    }

    screenTitle {

    }
    `;

export default styles;
