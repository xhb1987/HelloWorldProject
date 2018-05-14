import RNC from 'react-native-css';
import { Dimensions } from 'react-native';

const styles = RNC`
    container {
        flex: 1;
        flex-direction: column;
    }
    cameraRollContainer {
        flex: 1;
        height: ${Dimensions.get('window').height * 0.3};
    }
    imageContainer {
        flex: 1;
        margin: 10px;
    }

    image {
        height: ${Dimensions.get('window').height * 0.3};
        width: 100px;
        margin-right: 20px;
    }
    publishContainer {
        flex: 1;
    }
    `;

export default styles;
