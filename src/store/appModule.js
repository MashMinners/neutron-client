//import connections from "@/configs/connections";
import axios from "axios";

export const appModule = {
    state:() => ({
        stomIntersections: {
            bad : [],
            good: [],
            dubious : []
        },
        stomIncorrectPurpose: [],
        page: {
            title: 'Стоматология',
            message: 'Работа с реестром по стоматологии'
        },
        mySQLRecords: {
            inserted: 0,
            deleted: 0
        }
    }),
    getters: {
        getStomIntersections(state){
            return state.stomIntersections;
        },
        getStomIncorrectPurpose(state){
            return state.stomIncorrectPurpose
        },
        //Pages
        getPageTitle(state){
            return state.page.title;
        },
        getPageMessage(state){
            return state.page.message;
        }
    },
    mutations: {
        ['GET_INTERSECTIONS'](state, intersections){
            state.stomIntersections.bad = intersections.bad
            state.stomIntersections.good = intersections.good
            state.stomIntersections.dubious = intersections.dubious
        },
        ['GET_STOM_INCORRECT_PURPOSES'](state, purposes){
            state.stomIncorrectPurpose = purposes
        },
        // eslint-disable-next-line no-unused-vars
        ['FINISH'](state, response){

        },
        // eslint-disable-next-line no-unused-vars
        ['UPLOAD_BUFFER_REGISTRY'](state, response){
            state.mySQLRecords.inserted = response.inserted;
            state.mySQLRecords.deleted = response.deleted;
            state.page.message = state.mySQLRecords.inserted+' / '+state.mySQLRecords.deleted;
        },
        // eslint-disable-next-line no-unused-vars
        ['TRUNCATE_BUFFER_REGISTRY'](state, response){
            state.page.message = response;
        }
    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        async getStomIntersections({state, commit}) {
            const response = await axios.get('http://192.168.0.10/buffer/stom/intersections?XDEBUG_SESSION_START=PHPSTORM');
            commit('GET_INTERSECTIONS', response.data);
        },
        // eslint-disable-next-line no-unused-vars
        async getStomIncorrectPurposes({state, commit}) {
            const response = await axios.get('http://192.168.0.10/buffer/stom/purposes?XDEBUG_SESSION_START=PHPSTORM');
            commit('GET_STOM_INCORRECT_PURPOSES', response.data);
        },
        // eslint-disable-next-line no-unused-vars
        async uploadBufferSTOMRegistry({state, commit}) {
            const response = await axios.get('http://192.168.0.10/buffer/stom/upload?XDEBUG_SESSION_START=PHPSTORM');
            commit('UPLOAD_BUFFER_REGISTRY', response.data)
        },
        // eslint-disable-next-line no-unused-vars
        async truncateBufferSTOMRegistry({state, commit}) {
            const response = await axios.delete('http://192.168.0.10/buffer/stom/truncate');
            commit('TRUNCATE_BUFFER_REGISTRY', response.data)
        },

        //РАБОТА С ВИЗИТАМИ (Стоматология)
        // eslint-disable-next-line no-unused-vars
        async uploadVisits({state, commit}) {
            const response = await axios.get('http://192.168.0.10/visits/upload');
            console.log(response)
        },
        // eslint-disable-next-line no-unused-vars
        async truncateVisits({state, commit}) {
            const response = await axios.delete('http://192.168.0.10/visits/truncate');
            console.log(response)
        },
    },
    namespaced: true
}