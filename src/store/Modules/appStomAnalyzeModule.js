import axios from "axios";

export const appStomAnalyzeModule = {
    state:()=>({
        activeComponent: null,
        intersections: {
            bad : [],
            good: [],
            dubious : []
        },
        incorrectPurposes: [],
        tornCases: [],
        incorrectServices: {
            HaveNoPrimary: [],
            TwoOrMore: []
        },
        incorrectTeeth: {
            incorrectTeeth: {
                Code: '',
                Message: '',
                Body: []
            },
            incorrectRequiredTeeth: {
                Code: '',
                Message: '',
                Body: []
            },
            simultaneousTeethInclusion: {
                Code: '',
                Message: '',
                Body: []
            },
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

        getActiveComponent(state){
            return state.activeComponent
        },
        getStomIntersections(state){
            return state.intersections;
        },
        getExcelIncorrectPurposes(state){
            return state.incorrectPurposes;
        },
        getTornCases(state){
            return state.tornCases;
        },
        getIncorrectServices(state){
            return state.incorrectServices
        },
        getIncorrectTeeth(state){
            return state.incorrectTeeth;
        },
        //Pages
        getPageTitle(state){
            return state.page.title;
        },
        getPageMessage(state){
            return state.page.message;
        }
    },
    mutations:{
        ['SET_INTERSECTIONS'](state, intersections){
            state.intersections.bad = intersections.bad ?? []
            state.intersections.good = intersections.good ?? []
            state.intersections.dubious = intersections.dubious ??[]
        },
        ['GET_INCORRECT_PURPOSES'](state, purposes){
            state.incorrectPurposes = purposes
        },
        ['GET_TORN_CASES'](state, tornCases){
            state.tornCases = tornCases
        },
        ['SET_INCORRECT_SERVICES'](state, services){
            state.incorrectServices = services
        },
        ['SET_INCORRECT_TEETH'](state, teeth){
            state.incorrectTeeth.incorrectTeeth = teeth.incorrectTeeth
            state.incorrectTeeth.incorrectRequiredTeeth = teeth.incorrectRequiredTeeth
            state.incorrectTeeth.simultaneousTeethInclusion = teeth.simultaneousTeethInclusion
        },
        // eslint-disable-next-line no-unused-vars
        ['UPLOAD_EXCEL_REGISTRY'](state, response){
            state.mySQLRecords.inserted = response.inserted;
            state.mySQLRecords.deleted = response.deleted;
            state.page.message = state.mySQLRecords.inserted+' / '+state.mySQLRecords.deleted;
        },
        ['TRUNCATE_EXCEL_REGISTRY'](state, response){
            state.page.message = response;
        },
        // eslint-disable-next-line no-unused-vars
        ['UPLOAD_XML_REGISTRY'](state, response){
            //state.mySQLRecords.inserted = response.inserted;
            //state.mySQLRecords.deleted = response.deleted;
            //state.page.message = state.mySQLRecords.inserted+' / '+state.mySQLRecords.deleted;
        },
        ['TRUNCATE_XML_REGISTRY'](state, response){
            state.page.message = response;
        },
        ['SET_SECTION_TITLE'](state, title){
            state.section.title = title
        },
        ['SET_ACTIVE_COMPONENT'](state, component){
            state.activeComponent = component
        }
    },
    actions:{
        // eslint-disable-next-line no-unused-vars
        async getIntersectionsAction({state, commit}) {
            const response = await axios.get('http://172.25.70.201/buffer/stom/intersections?XDEBUG_SESSION_START=PHPSTORM');
            commit('SET_INTERSECTIONS', response.data);
        },
        // eslint-disable-next-line no-unused-vars
        async getExcelIncorrectPurposesAction({state, commit}) {
            const response = await axios.get('http://172.25.70.201/buffer/stom/purposes?XDEBUG_SESSION_START=PHPSTORM');
            commit('GET_INCORRECT_PURPOSES', response.data);
        },
        // eslint-disable-next-line no-unused-vars
        async getTornCasesAction({state, commit}) {
            const response = await axios.get('http://172.25.70.201/buffer/stom/torn-cases?XDEBUG_SESSION_START=PHPSTORM');
            commit('GET_TORN_CASES', response.data);
        },
        // eslint-disable-next-line no-unused-vars
        async uploadExcelRegistryAction({state, commit}) {
            const response = await axios.get('http://172.25.70.201/buffer/stom/upload?XDEBUG_SESSION_START=PHPSTORM');
            commit('UPLOAD_EXCEL_REGISTRY', response.data)
        },
        // eslint-disable-next-line no-unused-vars
        async truncateExcelRegistryAction({state, commit}) {
            const response = await axios.delete('http://172.25.70.201/buffer/stom/truncate');
            commit('TRUNCATE_EXCEL_REGISTRY', response.data)
        },
        // Заливка XML реестра по стоматологии
        // eslint-disable-next-line no-unused-vars
        async uploadXMLRegistryAction({state, commit}) {
            const response = await axios.get('http://172.25.70.201/xml/stom/upload');
            commit('UPLOAD_XML_REGISTRY', response.data)
        },
        // eslint-disable-next-line no-unused-vars
        async truncateXMLRegistryAction({state, commit}) {
            const response = await axios.delete('http://172.25.70.201/xml/stom/truncate');
            commit('TRUNCATE_XML_REGISTRY', response.data)
        },

        // eslint-disable-next-line no-unused-vars
        async getIncorrectServicesAction({state, commit}) {
            const response = await axios.get('http://172.25.70.201/invoice/analyzer/incorrect-services?XDEBUG_SESSION_START=PHPSTORM');
            commit('SET_INCORRECT_SERVICES', response.data);
        },
        // eslint-disable-next-line no-unused-vars
        async getIncorrectTeethAction({state, commit}) {
            const response = await axios.get('http://172.25.70.201/invoice/analyzer/incorrect-teeth?XDEBUG_SESSION_START=PHPSTORM');
            commit('SET_INCORRECT_TEETH', response.data);
        },

        //РАБОТА С ВИЗИТАМИ (Стоматология)
        // eslint-disable-next-line no-unused-vars
        async uploadVisitsAction({state, commit}) {
            // eslint-disable-next-line no-unused-vars
            const response = await axios.get('http://172.25.70.201/visits/upload');
        },
        // eslint-disable-next-line no-unused-vars
        async truncateVisitsAction({state, commit}) {
            // eslint-disable-next-line no-unused-vars
            const response = await axios.delete('http://172.25.70.201/visits/truncate');
        }
    },
    namespaced: true
}