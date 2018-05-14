import RNC from 'react-native-css';
import { Dimensions } from 'react-native';

const styles = RNC`
    container {
        flex: 1;
        flex-direction: column;
        background-color: black
    }

    preview {
        flex: 1;
        justify-content: flex-end;
        align-items: center;
    }

    capture {
        flex: 0;
        background-color: #fff;
        padding: 15;
    }
    `;

export default styles;
