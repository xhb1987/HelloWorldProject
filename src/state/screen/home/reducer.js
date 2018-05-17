import {
    CITY_PULL_REQUEST,
    CITY_PULL_SUCCESS,
    CITY_PULL_FAILURE,
    VILLAGE_PULL_REQUEST,
    VILLAGE_PULL_SUCCESS,
    VILLAGE_PULL_FAILURE,
    CITY_SELECT,
    VILLAGE_SELECT,
    CLIENT_CONFIG_SUCCESS,
    CLIENT_CONFIG_FAILURE,
    TAG_PULL_SUCCESS,
    TAG_PULL_FAILURE,
    ACTIVE_TAB_TOGGLE,
    ACTIVE_CITY_TAB_TOGGLE
} from './actions';

const initialState = {
    home: 'home screen',
    homeTitle: '城市',
    cityList: [],
    selectedCity: {
        cityName: '城市'
    },
    cityPage: 0,
    cityPageSize: 0,
    villageList: [],
    villagePage: 0,
    villagePageSize: 0,
    selectedVillage: {
        villageName: '小区'
    },
    tags: [],
    clientConfig: '',
    loading: false,
    error: false,
    activeTab: 'index',
    activeCityTab: 'city'
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIVE_CITY_TAB_TOGGLE:
            return Object.assign({}, state, { activeCityTab: action.payload });
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
        case VILLAGE_SELECT:
            return Object.assign({}, state, {
                selectedVillage: action.payload,
                homeTitle: action.payload.villageName
            });
        case VILLAGE_PULL_REQUEST:
            return Object.assign({}, state, { loading: true });
        case VILLAGE_PULL_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                villageList: action.payload.resultList,
                villagePage: action.payload.pageNo,
                villagePageSize: action.payload.pageSize
            });
        case VILLAGE_PULL_FAILURE:
            return Object.assign({}, state, { loading: false, error: true });
        case CITY_PULL_REQUEST:
            return Object.assign({}, state, { loading: true });
        case CITY_PULL_SUCCESS:
            return Object.assign({}, state, {
                cityList: action.payload.resultList,
                cityPage: action.payload.pageNo,
                cityPageSize: action.payload.pageSize,
                loading: false
            });
        case CITY_PULL_FAILURE:
            return Object.assign({}, state, { error: true, loading: false });
        default:
            return state;
    }
};

export default homeReducer;
