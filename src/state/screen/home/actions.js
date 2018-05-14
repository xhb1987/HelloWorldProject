import fetchPost from '../../../util/fetch-post';

export const HOME_HIT_BUTTON = 'HOME_HIT_BUTTON';
export const HOME_RESET_BUTTON = 'HOME_RESET_BUTTON';
export const HOME_INDEX_UPDATE = 'HOME_INDEX_UPDATE';

export const CITY_PULL_REQUEST = 'CITY_PULL_REQUEST';
export const CITY_PULL_SUCCESS = 'CITY_PULL_SUCCESS';
export const CITY_PULL_FAILURE = 'CITY_PULL_FAILURE';

export const VILLAGE_PULL_REQUEST = 'VILLAGE_PULL_REQUEST';
export const VILLAGE_PULL_SUCCESS = 'VILLAGE_PULL_SUCCESS';
export const VILLAGE_PULL_FAILURE = 'VILLAGE_PULL_FAILURE';

export const CLIENT_CONFIG_REQUEST = 'CLIENT_CONFIG_REQUEST';
export const CLIENT_CONFIG_SUCCESS = 'CLIENT_CONFIG_SUCCESS';
export const CLIENT_CONFIG_FAILURE = 'CLIENT_CONFIG_FAILURE';

export const TAG_PULL_REQUEST = 'TAG_PULL_REQUEST';
export const TAG_PULL_SUCCESS = 'TAG_PULL_SUCCESS';
export const TAG_PULL_FAILURE = 'TAG_PULL_FAILURE';

export const CITY_SELECT = 'CITY_SELECT';

export const ACTIVE_TAB_TOGGLE = 'ACTIVE_TAB_TOGGLE';

export const activeTabToggleAction = tabName => ({
    type: ACTIVE_TAB_TOGGLE,
    payload: tabName,
    meta: {}
});

const tagPullRequestAction = () => ({
    type: TAG_PULL_REQUEST,
    payload: {},
    meta: {}
});

const tagPullSuccessAction = response => ({
    type: TAG_PULL_SUCCESS,
    payload: response,
    meta: {}
});

const tagPullFailureAction = e => ({
    type: TAG_PULL_FAILURE,
    payload: e,
    meta: {}
});

const clientConfigRequestAction = () => ({
    type: CLIENT_CONFIG_REQUEST,
    payload: {},
    meta: {}
});

const clientConfigSuccessAction = value => ({
    type: CLIENT_CONFIG_SUCCESS,
    payload: value,
    meta: {}
});

const clientConfigFailureAction = e => ({
    type: CLIENT_CONFIG_FAILURE,
    payload: e,
    meta: {}
});

export const citySelectAction = city => ({
    type: CITY_SELECT,
    payload: city,
    meta: {}
});

const villagePullSuccessAction = response => ({
    type: VILLAGE_PULL_SUCCESS,
    payload: response,
    meta: {}
});

const villagePullFailureAction = e => ({
    type: VILLAGE_PULL_REQUEST,
    payload: e,
    meta: {}
});

const villagePullRequestAction = () => ({
    type: VILLAGE_PULL_REQUEST,
    payload: {},
    meta: {}
});

const cityPullRequestAction = () => ({
    type: CITY_PULL_REQUEST,
    payload: {},
    meta: {}
});

const cityPullSuccessAction = json => ({
    type: CITY_PULL_SUCCESS,
    payload: json,
    meta: {}
});

const cityPullFailureAction = e => ({
    type: CITY_PULL_FAILURE,
    payload: e,
    meta: {}
});

export const cityPullRequest = () => {
    return dispatch => {
        const requestUrl = 'http://39.105.23.168:8080/neighbors-web/userservice/getcity';

        dispatch(cityPullRequestAction);
        const result = fetchPost(requestUrl, { pageNo: 1, pageSize: 10 });

        return result
            .then(response => dispatch(cityPullSuccessAction(response)))
            .catch(e => dispatch(cityPullFailureAction(e)));
    };
};

export const villagePullRequest = () => {
    return dispatch => {
        const requestUrl = 'http://39.105.23.168:8080/neighbors-web/userservice/getvillage';

        dispatch(villagePullRequestAction);
        const result = fetchPost(requestUrl, {});

        return result
            .then(response => dispatch(villagePullSuccessAction(response)))
            .catch(e => dispatch(villagePullFailureAction(e)));
    };
};

export const getClientConfigRequest = () => {
    return dispatch => {
        const requestUrl = 'http://39.105.23.168:8080/neighbors-web/userservice/getclientconfig';
        dispatch(clientConfigRequestAction());
        const result = fetchPost(requestUrl, {});
        return result
            .then(response => dispatch(clientConfigSuccessAction(response)))
            .catch(e => dispatch(clientConfigFailureAction(e)));
    };
};

export const getTagRequest = () => {
    return dispatch => {
        const requestUrl = 'http://39.105.23.168:8080/neighbors-web/userservice/getlabeltypes';
        dispatch(tagPullRequestAction());
        const result = fetchPost(requestUrl, {});
        return result
            .then(response => dispatch(tagPullSuccessAction(response)))
            .catch(e => dispatch(tagPullFailureAction(e)));
    };
};
