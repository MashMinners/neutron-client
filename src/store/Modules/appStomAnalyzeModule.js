import axios from "axios";

export const appStomAnalyzeModule = {
    state:()=>({
        activeComponent: null,
        intersections: {
            bad : [],
            good: [],
            dubious : []
        },
        incorrectExcelPurposes: [],
        incorrectXMLPurposes: [],
        tornCases: [],
        incorrectServices: {
            HaveNoPrimary: [],
            TwoOrMore: []
        },
        incorrectTeeth: {
            incorrectTeeth: {
                Code: '',
                Message: 'Данные не загружены',
                Body: []
            },
            incorrectRequiredTeeth: {
                Code: '',
                Message: 'Данные не загружены',
                Body: []
            },
            simultaneousTeethInclusion: {
                Code: '',
                Message: 'Данные не загружены',
                Body: []
            },
        },
        page: {
            title: 'Работа с реестром по стоматологии',
            message: ''
        },
        mySQLRecords: {
            inserted: 0,
            deleted: 0
        },
        toastMessage: {}
    }),
    getters: {
        getActiveComponent(state){
            return state.activeComponent
        },
        getStomIntersections(state){
            return state.intersections;
        },
        getExcelIncorrectPurposes(state){
            return state.incorrectExcelPurposes;
        },
        getXMLIncorrectPurposes(state){
            return state.incorrectXMLPurposes;
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
        },
        getToastMessage(state){
            return state.toastMessage
        }
    },
    mutations:{
        ['SET_INTERSECTIONS'](state, intersections){
            state.intersections.bad = intersections.bad ?? []
            state.intersections.good = intersections.good ?? []
            state.intersections.dubious = intersections.dubious ??[]
        },
        ['SET_INCORRECT_EXCEL_PURPOSES'](state, purposes){
            state.incorrectExcelPurposes = purposes
        },
        ['SET_INCORRECT_XML_PURPOSES'](state, purposes){
            state.incorrectXMLPurposes = purposes
        },
        ['SET_TORN_CASES'](state, tornCases){
            state.tornCases = tornCases
        },
        ['SET_TOAST_MESSAGE'](state, message){
            state.toastMessage.message = message.message
            state.toastMessage.summary = message.summary
            state.toastMessage.severity = message.severity
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
        ['SET_PAGE_TITLE'](state, title){
            state.page.title = title;
        },
        ['SET_ACTIVE_COMPONENT'](state, component){
            state.activeComponent = component
        }
    },
    actions:{
        //РАБОТА С РЕЕСТРОМ ПО СТОМАТОЛОГИИ
        // eslint-disable-next-line no-unused-vars
        async getIntersectionsAction({state, commit}) {
            const response = await axios.get('http://172.25.70.201/buffer/stom/intersections?XDEBUG_SESSION_START=PHPSTORM');
            if (response.data.length !==0){
                commit('SET_INTERSECTIONS', response.data);
                commit('SET_TOAST_MESSAGE', {message: 'Данные с пересечениями загружены', summary: 'Пересечения', severity: 'success'})
            }else {
                commit('SET_TOAST_MESSAGE', {message: 'Данные с пересечениями не найдены', summary: 'Пересечения', severity: 'warn'})
            }
        },
        // eslint-disable-next-line no-unused-vars
        async getExcelIncorrectPurposesAction({state, commit}) {
            const response = await axios.get('http://172.25.70.201/buffer/stom/excel/incorrect-purposes?XDEBUG_SESSION_START=PHPSTORM');
            if (response.data.length !==0){
                commit('SET_INCORRECT_EXCEL_PURPOSES', response.data);
                commit('SET_TOAST_MESSAGE', {message: 'Данные по некорректным целям из Excel загружены', summary: 'Некорректные цели (Excel)', severity: 'success'})
            }else {
                commit('SET_TOAST_MESSAGE', {message: 'Данные по некорректным целям в Excel не найдены', summary: 'Некорректные цели (Excel)', severity: 'warn'})
            }
        },
        // eslint-disable-next-line no-unused-vars
        async getXMLIncorrectPurposesAction({state, commit}) {
            const response = await axios.get('http://172.25.70.201/invoice/analyzer/incorrect-purposes?XDEBUG_SESSION_START=PHPSTORM');
            if (response.data.length !==0){
                commit('SET_INCORRECT_XML_PURPOSES', response.data);
                commit('SET_TOAST_MESSAGE', {message: 'Данные по некорректным целям из XML загружены', summary: 'Некорректные цели (XML)', severity: 'success'})
            }else {
                commit('SET_TOAST_MESSAGE', {message: 'Данные по некорректным целям в XML не найдены', summary: 'Некорректные цели (XML)', severity: 'warn'})
            }

        },
        // eslint-disable-next-line no-unused-vars
        async getTornCasesAction({state, commit}) {
            const response = await axios.get('http://172.25.70.201/buffer/stom/torn-cases?XDEBUG_SESSION_START=PHPSTORM');
            if (response.data){
                commit('SET_TORN_CASES', response.data);
                commit('SET_TOAST_MESSAGE', {message: 'Данные с разрывами загружены', summary: 'Разорванные случаи', severity: 'success'})
            }else {
                commit('SET_TOAST_MESSAGE', {message: 'Данные с разрывами не загружены', summary: 'Разорванные случаи', severity: 'error'})
            }
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
            if (response.data.HaveNoPrimary.length !==0 || response.data.TwoOrMore.length !==0){
                commit('SET_INCORRECT_SERVICES', response.data);
                commit('SET_TOAST_MESSAGE', {message: 'Данные с услугами загружены', summary: 'Некорректные услуги', severity: 'success'})
            }else {
                commit('SET_TOAST_MESSAGE', {message: 'Данные с услугами не загружены', summary: 'Некорректные услуги', severity: 'warn'})
            }
        },
        // eslint-disable-next-line no-unused-vars
        async getIncorrectTeethAction({state, commit}) {
            const response = await axios.get('http://172.25.70.201/invoice/analyzer/incorrect-teeth?XDEBUG_SESSION_START=PHPSTORM');
            if (response.data.incorrectRequiredTeeth.Body.length !==0 ||
                response.data.incorrectTeeth.Body.length !==0 ||
                response.data.simultaneousTeethInclusion.Body.length !==0)
            {
                commit('SET_INCORRECT_TEETH', response.data);
                commit('SET_TOAST_MESSAGE', {message: 'Данные со случаями по зубам загружены', summary: 'Некорректные случаи по зубам', severity: 'success'})
            }
            else
            {
                commit('SET_TOAST_MESSAGE', {message: 'Данные со случаями по зубам не загружены', summary: 'Некорректные случаи по зубам', severity: 'warn'})
            }

        },
        //РАБОТА С ВИЗИТАМИ
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