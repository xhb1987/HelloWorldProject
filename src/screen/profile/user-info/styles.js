import RNC from 'react-native-css';
import { Dimensions } from 'react-native';

const styles = RNC`
    container {
        background-color: white;
        height: ${Dimensions.get('window').height * 0.25}
        min-height: 200px;
        align-items: center;
        justify-content: center;
    }

    title {
        margin-top: 15px;
    }
    `;

export default styles;
