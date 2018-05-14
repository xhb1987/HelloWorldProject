import RNC from 'react-native-css';
import { Dimensions } from 'react-native';

const styles = RNC`
    viewContainer: {
        flex: 1;
        background-color: #f1f1f1;
        height: ${Dimensions.get('window').height}
    }
    container: {
        height: ${Dimensions.get('window').height - 50}
    }
    `;

export default styles;
