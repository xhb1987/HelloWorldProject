import RNC from 'react-native-css';
import { Dimensions } from 'react-native';

const styles = RNC`
    container {
        flex: 1;
        flex-direction: column;
    }

    imageContainer {
        margin: 10px;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    image {
        height: 150px;
        width: 100px;
        margin-right: 20px;
    }

    capture {
        flex: 0;
        background-color: #fff;
        padding: 15;
    }
    `;

export default styles;
