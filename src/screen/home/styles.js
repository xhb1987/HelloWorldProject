import RNC from 'react-native-css';
import { Dimensions } from 'react-native';

const styles = RNC`
    viewContainer {
        flex: 1;
        height: ${Dimensions.get('window').height};
    }
    slider: {
        flex: 1;
        justify-content: center;
        align-items: center;
        background-color: #92BBD9;
    }
    indicator: {
        height: 5;
        width: 20;
        background-color: #92BBD9;
    }

    text: {
        color: #fff,
        font-size: 30,
        font-weight: bold,
    }

    tabBar: {
        flex-direction: row;
        background-color: white;
        color: black;
    }

    tabItem: {
        flex: 1;
        align-item: center;
    }

    indicator: {
        background-color: white;
    }

    `;

export default styles;
