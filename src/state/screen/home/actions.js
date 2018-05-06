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

export const CITY_SELECT = 'CITY_SELECT';

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
