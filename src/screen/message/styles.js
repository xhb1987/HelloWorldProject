import RNC from 'react-native-css';
import { Dimensions } from 'react-native';

const styles = RNC`
    container {
        height: ${Dimensions.get('window').height}
    }
    `;

export default styles;
