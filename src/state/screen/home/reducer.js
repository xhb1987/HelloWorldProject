import {
    CITY_PULL_REQUEST,
    CITY_PULL_SUCCESS,
    CITY_PULL_FAILURE,
    CITY_SELECT,
    CLIENT_CONFIG_SUCCESS,
    CLIENT_CONFIG_FAILURE,
    TAG_PULL_SUCCESS,
    TAG_PULL_FAILURE,
    ACTIVE_TAB_TOGGLE
} from './actions';

const initialState = {
    home: 'home screen',
    homeTitle: '中信领航',
    cityList: [],
    selectedCity: {
        cityName: '城市'
    },
    cityPage: 0,
    cityPageSize: 0,
    villageList: [],
    selectedVillage: {
        villageName: '小区'
    },
    tags: [],
    clientConfig: '',
    loading: false,
    error: false,
    activeTab: 'index'
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIVE_TAB_TOGGLE:
            return Object.assign({}, state, { activeTab: action.payload });
        case TAG_PULL_FAILURE:
            return Object.assign({}, state, { error: true });
        case TAG_PULL_SUCCESS:
            return Object.assign({}, state, { tags: action.payload.result });
        case CLIENT_CONFIG_SUCCESS:
            return Object.assign({}, state, { clientConfig: action.payload.result[0].configValue });
        case CLIENT_CONFIG_FAILURE:
            return Object.assign({}, state, { clientConfig: '' });
        case CITY_SELECT:
            return Object.assign({}, state, { selectedCity: action.payload });
        case CITY_PULL_REQUEST:
            return Object.assign({}, state, { loading: true });
        case CITY_PULL_SUCCESS:
            return Object.assign({}, state, {
                cityList: action.payload.resultList,
                cityPage: action.payload.pageNo,
                cityPageSize: action.payload.pageSize
            });
        case CITY_PULL_FAILURE:
            return Object.assign({}, state, { error: true, loading: false });
        default:
            return state;
    }
};

export default homeReducer;
