import RNC from 'react-native-css';
import { Dimensions } from 'react-native';

const styles = RNC`
    container {
        flex: 1;
        align-items: center;
        justify-content: center;
        background-color: white;
        padding: 10;
        height: ${Dimensions.get('window').height}
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
