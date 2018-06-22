import fetchPost from '../../../util/fetch-post';

export const HOME_HIT_BUTTON = 'HOME_HIT_BUTTON';
export const HOME_RESET_BUTTON = 'HOME_RESET_BUTTON';
export const HOME_INDEX_UPDATE = 'HOME_INDEX_UPDATE';

export const VILLAGE_SCHOOL_PULL_REQUEST = 'VILLAGE_SCHOOL_PULL_REQUEST';
export const VILLAGE_SCHOOL_PULL_SUCCESS = 'VILLAGE_SCHOOL_PULL_SUCCESS';
export const VILLAGE_SCHOOL_PULL_FAILURE = 'VILLAGE_SCHOOL_PULL_FAILURE';

export const VILLAGE_FILTER = 'VILLAGE_FILTER';

export const CLIENT_CONFIG_REQUEST = 'CLIENT_CONFIG_REQUEST';
export const CLIENT_CONFIG_SUCCESS = 'CLIENT_CONFIG_SUCCESS';
export const CLIENT_CONFIG_FAILURE = 'CLIENT_CONFIG_FAILURE';

export const TAG_PULL_REQUEST = 'TAG_PULL_REQUEST';
export const TAG_PULL_SUCCESS = 'TAG_PULL_SUCCESS';
export const TAG_PULL_FAILURE = 'TAG_PULL_FAILURE';

export const VILLAGE_SELECT = 'VILLAGE_SELECT';

export const ACTIVE_TAB_TOGGLE = 'ACTIVE_TAB_TOGGLE';

export const ACTIVE_CITY_TAB_TOGGLE = 'ACTIVE_CITY_TAB_TOGGLE';

export const villageFilterAction = content => ({
    type: VILLAGE_FILTER,
    payload: content,
    meta: {}
});

const villageSchoolPullRequestAction = villageOrSchool => ({
    type: VILLAGE_SCHOOL_PULL_REQUEST,
    payload: villageOrSchool,
    meta: {}
});

const villageSchoolPullSuccessAction = (response, villageOrSchool) => ({
    type: VILLAGE_SCHOOL_PULL_SUCCESS,
    payload: { data: response, type: villageOrSchool },
    meta: {}
});

const villageSchoolPullFailureAction = error => ({
    type: VILLAGE_SCHOOL_PULL_FAILURE,
    payload: error,
    meta: {}
});

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

export const villageSelectAction = village => ({
    type: VILLAGE_SELECT,
    payload: village,
    meta: {}
});

export const villageSchoolPullRequest = villageOrSchool => dispatch => {
    const requestUrl = 'userservice/getAllCityAndVillages';
    dispatch(villageSchoolPullRequestAction(villageOrSchool));
    const result = fetchPost(requestUrl, { type: villageOrSchool });
    return result
        .then(response => dispatch(villageSchoolPullSuccessAction(response, villageOrSchool)))
        .catch(e => dispatch(villageSchoolPullFailureAction(e)));
};

export const getClientConfigRequest = () => {
    return dispatch => {
        const requestUrl = 'userservice/getclientconfig';
        dispatch(clientConfigRequestAction());
        const result = fetchPost(requestUrl, {});
        return result
            .then(response => dispatch(clientConfigSuccessAction(response)))
            .catch(e => dispatch(clientConfigFailureAction(e)));
    };
};

export const getTagRequest = () => {
    return dispatch => {
        const requestUrl = 'userservice/getlabeltypes';
        dispatch(tagPullRequestAction());
        const result = fetchPost(requestUrl, {});
        return result
            .then(response => dispatch(tagPullSuccessAction(response)))
            .catch(e => dispatch(tagPullFailureAction(e)));
    };
};

export const cityTabToggleAction = activeTab => ({
    type: ACTIVE_CITY_TAB_TOGGLE,
    payload: activeTab,
    meta: {}
});
