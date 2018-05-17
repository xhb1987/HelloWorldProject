import lodash from 'lodash';

export const stringToArray = str => {
    const matchs = str.match(/\[(.*)\]/);
    let strArray = [];
    if (matchs) {
        strArray = matchs[1].split(',');
    }

    return strArray;
};

export const findTagName = (tags, tag) => {
    const label = lodash.find(tags, t => {
        return t.labelID === parseInt(tag, 10);
    });

    return label ? label.labelName : '';
};
