import RNC from 'react-native-css';
import { Dimensions } from 'react-native';

const styles = RNC`
    container {
        padding: 10px;
        flex-direction: row;
        align-items: center;
    }

    titleContainer {
        padding: 10px;
        padding-left: 15px;
        flex-direction: column;
    }

    title {
        font-size: 16;
        font-weight: bold;

    }

    message {
        font-size: 13;
        padding-top: 5px;
    }
    `;

export default styles;
