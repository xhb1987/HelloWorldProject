import RNC from 'react-native-css';
import { Dimensions } from 'react-native';

const styles = RNC`
    container {
        flex-direction: row;
        background-color: white;
        width: ${Dimensions.get('window').width};
        height: ${Dimensions.get('window').height * 0.1};
        max-height: 50;
    }

    tabButton {
        flex: 1;
        flex-direction: column;
    }
    imageItem {
        flex: 1;
    }
    tabText {
        text-align: center;
        flex: 1;
    }
    `;

export default styles;
