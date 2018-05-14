import RNC from 'react-native-css';
import { Dimensions } from 'react-native';

const styles = RNC`
    viewContainer {
        flex: 1;
    }
    container {
        height: ${Dimensions.get('window').height - 113}
    }
    `;

export default styles;
