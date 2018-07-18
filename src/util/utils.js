import lodash from 'lodash';

export const stringToArray = str => {
    return JSON.parse(str);

    // const matchs = str.match(/\[(.*)\]/);
    // let strArray = [];
    // if (matchs) {
    //     strArray = matchs[1].split(',');
    // }

    // return strArray;
};

export const findTagName = (tags, tag) => {
    const label = lodash.find(tags, t => {
        return t.labelID === parseInt(tag, 10);
    });

    return label ? label.labelName : '';
};

export const generateMessage = (message, user, messageId, messageType) => ({
    _id: messageId || Math.round(Math.random() * 1000000),
    text: message,
    createdAt: new Date(),
    user: {
        _id: user.id,
        name: user.name || user.id + ''
    },
    messageType: messageType || 0,
    sent: true,
    received: true
});

export const currencyFormat = currency => {
    if (isNaN(currency)) {
        return 0;
    }

    const localCurrency = parseFloat(currency).toFixed(2);

    return localCurrency.replace(/\d(?=(\d{3})+\.)/g, '$&,');
};
