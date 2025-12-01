//import connections from "@/configs/connections";
import axios from "axios";

export const appModule = {
    state:() => ({
        section: {
            title: 'Начало'
        },
        menuItems: [
            {
                label: 'Главная',
                icon: 'pi pi-home',
                route: '/app/main',
                title: 'Главная'
            },
            {
                label: 'Стоматология',
                icon: 'pi pi-book',
                route: '/app/registry/stom',
                title: 'Реестры по стоматологии'
            },
            {
                label: 'Диспансеризация',
                icon: 'pi pi-book',
                route: '/app/registry/disp',
                title: 'Реестры по диспансеризации'
            },
        ],
        stomIntersections: {
            bad : [],
            good: [],
            dubious : []
        },
        stomIncorrectPurpose: [],
        tornCases: [],
        dispIntersections: {
            bad : []
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
        getSectionTitle(state){
            return state.section.title;
        },
        getMenuItems(state) {
            return state.menuItems;
        },
        getStomIntersections(state){
            return state.stomIntersections;
        },
        getStomIncorrectPurpose(state){
            return state.stomIncorrectPurpose;
        },
        getStomTornCases(state){
            return state.tornCases;
        },
        //Pages
        getPageTitle(state){
            return state.page.title;
        },
        getPageMessage(state){
            return state.page.message;
        },
        getDispIntersections(state){
            return state.dispIntersections;
        },
    },
    mutations: {
        ['GET_STOM_INTERSECTIONS'](state, intersections){
            state.stomIntersections.bad = intersections.bad
            state.stomIntersections.good = intersections.good
            state.stomIntersections.dubious = intersections.dubious
        },
        ['GET_STOM_INCORRECT_PURPOSES'](state, purposes){
            state.stomIncorrectPurpose = purposes
        },
        ['GET_TORN_CASES'](state, tornCases){
            state.tornCases = tornCases
        },
        // eslint-disable-next-line no-unused-vars
        ['UPLOAD_BUFFER_STOM_REGISTRY'](state, response){
            state.mySQLRecords.inserted = response.inserted;
            state.mySQLRecords.deleted = response.deleted;
            state.page.message = state.mySQLRecords.inserted+' / '+state.mySQLRecords.deleted;
        },
        // eslint-disable-next-line no-unused-vars
        ['TRUNCATE_BUFFER_STOM_REGISTRY'](state, response){
            state.page.message = response;
        },
        ['UPLOAD_BUFFER_DISP_REGISTRY'](state, response){
            state.page.message = response;
        },
        ['TRUNCATE_BUFFER_DISP_REGISTRY'](state, response){
            state.page.message = response;
        },
        ['GET_DISP_INTERSECTIONS'](state, intersections){
            state.dispIntersections.bad = intersections

        },
        ['SET_SECTION_TITLE'](state, title){
            state.section.title = title
        }
    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        async getStomIntersections({state, commit}) {
            const response = await axios.get('http://192.168.0.10/buffer/stom/intersections?XDEBUG_SESSION_START=PHPSTORM');
            commit('GET_STOM_INTERSECTIONS', response.data);
        },
        // eslint-disable-next-line no-unused-vars
        async getStomIncorrectPurposes({state, commit}) {
            const response = await axios.get('http://192.168.0.10/buffer/stom/purposes?XDEBUG_SESSION_START=PHPSTORM');
            commit('GET_STOM_INCORRECT_PURPOSES', response.data);
        },
        // eslint-disable-next-line no-unused-vars
        async getTornCases({state, commit}) {
            const response = await axios.get('http://192.168.0.10/buffer/stom/torn-cases?XDEBUG_SESSION_START=PHPSTORM');
            commit('GET_TORN_CASES', response.data);
        },
        // eslint-disable-next-line no-unused-vars
        async uploadBufferSTOMRegistry({state, commit}) {
            const response = await axios.get('http://192.168.0.10/buffer/stom/upload?XDEBUG_SESSION_START=PHPSTORM');
            commit('UPLOAD_BUFFER_STOM_REGISTRY', response.data)
        },
        // eslint-disable-next-line no-unused-vars
        async truncateBufferSTOMRegistry({state, commit}) {
            const response = await axios.delete('http://192.168.0.10/buffer/stom/truncate');
            commit('TRUNCATE_BUFFER_STOM_REGISTRY', response.data)
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

        //РАБОТА С ИСТОРИЯМИ БОЛЕЗНИ
        // eslint-disable-next-line no-unused-vars
        async uploadIB({state, commit}) {
            const response = await axios.get('http://192.168.0.10/histories/upload');
            console.log(response)
        },
        // eslint-disable-next-line no-unused-vars
        async truncateIB({state, commit}) {
            const response = await axios.delete('http://192.168.0.10/histories/truncate');
            console.log(response)
        },

        //РАБОТА С РЕЕСТРОМ ДИСПАНСЕРИЗАЦИИ
        // eslint-disable-next-line no-unused-vars
        async uploadBufferDISPRegistry({state, commit}) {
            const response = await axios.get('http://192.168.0.10/buffer/disp/upload');
            commit('UPLOAD_BUFFER_DISP_REGISTRY', response.data)
        },
        // eslint-disable-next-line no-unused-vars
        async truncateBufferDISPRegistry({state, commit}) {
            const response = await axios.delete('http://192.168.0.10/buffer/disp/truncate');
            commit('TRUNCATE_BUFFER_DISP_REGISTRY', response.data)
        },
        // eslint-disable-next-line no-unused-vars
        async getDispIntersections({state, commit}) {
            const response = await axios.get('http://192.168.0.10/buffer/disp/intersections');
            commit('GET_DISP_INTERSECTIONS', response.data);
        },
    },
    namespaced: true
}