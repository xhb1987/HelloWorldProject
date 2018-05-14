import RNC from 'react-native-css';

const styles = RNC`
    container {
        background-color: white;
        padding: 15px 10px;
        min-height: 260;
    }
    titleContainer {
        flex-direction: row;
        align-items: center;
    }
    userContainer {
        flex: 1;
        flex-direction: row;
        align-items: center;
    }
    avatar {
        margin-right: 5;
    }
    user {
        vertical-align: middle;
    }

    userName {
        font-size: 16;
        font-weight: bold;
    }

    userStatus {
        color: #ababab;
    }

    title {
        font-size: 16px;
        flex: 1;
        align-items: center;
    }

    imageContainer {
        border-radius: 5px;
        height: 120;
        width: 140;
        margin-right: 10px;
        margin-top: 8px;
        margin-bottom: 10px;
    }

    imgItem {
        height: 120;
        width: 130;
        border-radius: 5px;
        margin-right: 10px;
        margin-top: 8px;
        margin-bottom: 10px;
    }
    tagContainer {
        flex-direction: row
    }

    tagItem {
        height: 20px;
        padding: 4px;
        min-width: 50;
        margin-right: 10px;
        margin-top: 10px;
        text-align: center;
        font-size: 13px;
        background-color: #f1f1f1;
        border-radius: 5;
        color: #ed3349;
        border: 1px solid #ed3349;
        background-color: #ffeff1;
    }
    priceContainer {
        flex-direction: column;
        padding: 0 5px;
    }
    price {
        text-align: right;
        font-size: 17px;
        font-weight: bold;
        color: #ed3349;
    }
    priceOld {
        text-align: right;
        color: grey;
    }

    priceOldLine {
        font-size: 14px;
        text-decoration: line-through;
    }
`;

export default styles;
