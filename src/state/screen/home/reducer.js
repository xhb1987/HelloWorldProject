import lodash from 'lodash';
import {
    VILLAGE_SCHOOL_PULL_REQUEST,
    VILLAGE_SCHOOL_PULL_SUCCESS,
    VILLAGE_SCHOOL_PULL_FAILURE,
    VILLAGE_SELECT,
    CLIENT_CONFIG_SUCCESS,
    CLIENT_CONFIG_FAILURE,
    TAG_PULL_SUCCESS,
    TAG_PULL_FAILURE,
    ACTIVE_TAB_TOGGLE,
    ACTIVE_CITY_TAB_TOGGLE,
    VILLAGE_FILTER
} from './actions';

import { VILLAGE_TYPE, SCHOOL_TYPE } from 'src/config';
const initialState = {
    home: 'home screen',
    homeTitle: '城市',
    villageOrSchool: 0,
    selectedCity: {
        cityName: '城市'
    },
    cityPage: 0,
    cityPageSize: 0,
    villageList: [],
    villageFilteredList: [],
    schoolList: [],
    schoolFilteredList: [],
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
    activeCityTab: 'village'
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
        case VILLAGE_SELECT:
            return Object.assign({}, state, {
                selectedVillage: action.payload,
                homeTitle: action.payload.villageName
            });
        case VILLAGE_SCHOOL_PULL_REQUEST:
            return Object.assign({}, state, { loading: true });
        case VILLAGE_SCHOOL_PULL_SUCCESS: {
            const { type } = action.payload;

            if (type === VILLAGE_TYPE) {
                return Object.assign({}, state, {
                    villageList: action.payload.data.result,
                    villageFilteredList: action.payload.data.result,
                    loading: false
                });
            }

            if (type === SCHOOL_TYPE) {
                return Object.assign({}, state, {
                    schoolList: action.payload.data.result,
                    schoolFilteredList: action.payload.data.result,
                    loading: false
                });
            }
            return state;
        }
        case VILLAGE_FILTER: {
            AsyncStorage.getItem('root', result => {
                console.log(result);
            });
            const filterContent = action.payload;
            if (filterContent !== '') {
                const originalVillageList = state.villageList;
                const originalSchoolList = state.schoolList;

                const tempVillageList = [];
                const tempSchoolList = [];

                lodash.map(originalVillageList, village => {
                    const villages = village.villages;
                    lodash.map(villages, vill => {
                        if (lodash.includes(vill.villageName, filterContent)) {
                            tempVillageList.push(village);
                        }
                    });
                });

                lodash.map(originalSchoolList, school => {
                    const schools = school.villages;
                    lodash.map(schools, sch => {
                        if (lodash.includes(sch.villageName, filterContent)) {
                            tempSchoolList.push(school);
                        }
                    });
                });

                return Object.assign({}, state, {
                    schoolFilteredList: tempSchoolList,
                    villageFilteredList: tempVillageList
                });
            }

            return Object.assign({}, state, {
                schoolFilteredList: state.schoolList,
                villageFilteredList: state.villageList
            });
        }
        case VILLAGE_SCHOOL_PULL_FAILURE:
            return Object.assign({}, state, { loading: false, error: false });
        default:
            return state;
    }
};

export default homeReducer;
