import RNC from 'react-native-css';
import { Dimensions } from 'react-native';

const styles = RNC`
    container {
        flex-direction: row;
        background-color: white;
        padding: 10px;
        width: ${Dimensions.get('window').width}
        align-items: flex-end;
        height: ${Dimensions.get('window').height * 0.08}
    }

    userContainer {
        flex: 1;
    }

    buyButtonContainer {
        background-color: red;
        flex: 1;
        max-width: 100;
        border-width: 0;
        border-radius: 5;
    }
    `;

export default styles;
