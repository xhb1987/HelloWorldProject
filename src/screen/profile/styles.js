import RNC from 'react-native-css';
import { Dimensions } from 'react-native';

const styles = RNC`
    container {
        flex: 1;
        background-color: #f1f1f1;
        height: ${Dimensions.get('window').height}
    }
    `;

export default styles;
