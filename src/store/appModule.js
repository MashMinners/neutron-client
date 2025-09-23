//import connections from "@/configs/connections";
import axios from "axios";

export const appModule = {
    state:() => ({
        intersections: {
            bad : [],
            good: [],
            dubious : []
        },
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
        getIntersections(state){
            return state.intersections;
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
            state.intersections.bad = intersections.bad
            state.intersections.good = intersections.good
            state.intersections.dubious = intersections.dubious
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
        async getIntersections({state, commit}, payload) {
            // eslint-disable-next-line no-unused-vars
            const response = await axios.get('http://192.168.0.10/stom/intersections?XDEBUG_SESSION_START=PHPSTORM', {});
            commit('GET_INTERSECTIONS', response.data);
        },
        //РАБОТА С БУФЕРОМ
        // eslint-disable-next-line no-unused-vars
        async uploadBufferRegistry({state, commit}, registerType) {
            const params = {registerType: registerType}
            //const response = await axios.get(connections.api.production.uploadBufferRegistry ? connections.api.production.uploadBufferRegistry : connections.api.dev.uploadBufferRegistry, {params});
            const response = await axios.get('http://192.168.0.10/buffer/registry/upload?XDEBUG_SESSION_START=PHPSTORM', {params});
            commit('UPLOAD_BUFFER_REGISTRY', response.data)
        },
        // eslint-disable-next-line no-unused-vars
        async truncateBufferRegistry({state, commit}) {
            const response = await axios.delete('http://192.168.0.10/buffer/registry/truncate', {});
            commit('TRUNCATE_BUFFER_REGISTRY', response.data)
        },

        //РАБОТА С ВИЗИТАМИ (Стоматология)
        // eslint-disable-next-line no-unused-vars
        async uploadSTOMVisits({state, commit}) {
            const response = await axios.get('http://192.168.0.10/stom/visits/upload', {});
            console.log(response)
        },
        // eslint-disable-next-line no-unused-vars
        async truncateSTOMVisits({state, commit}) {
            const response = await axios.delete('http://192.168.0.10/stom/visits/truncate', {});
            console.log(response)
        },
    },
    namespaced: true
}