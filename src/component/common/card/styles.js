import RNC from 'react-native-css';

const styles = RNC`
    container {
        background-color: white;
        margin-bottom: 5px;
        padding: 0 5px;
        min-height: 260;
    }

    userContainer {
        flex: 1;
        flex-direction: row;
        align-items: flex-end;
        margin: 10px 0;
    }
    avatar {
        margin-right: 20;

    }
    user {
        vertical-align: middle;
    }

    title {
        font-size: 18px;
        font-weight: bold;
        padding: 5px;
    }

    listContainer {
        flex-direction: row;
        flex-wrap: wrap;
    }
    imgItem {
        background-color: yellow;
        height: 100;
        width: 100;
        padding: 10px;
        margin: 10px;
        margin-left: 0;
        color: black;
    }
    tagItem {
        min-width: 50;
        text-align: center;
        font-size: 13px;
        background-color: #f1f1f1;
        padding: 5px;
        margin-right: 10px;
        border-radius: 5;
    }

    price {
        font-size: 17px;
        color: red;
        padding: 5px;
    }
`;

export default styles;
