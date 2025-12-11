//import axios from "axios";
import axios from "axios";

export const appDispAnalyzeModule = {
    state:()=>({
        dispIntersections: {
            bad : []
        },
        page: {
            title: 'Диспансеризация',
            message: 'Работа с реестром по диспансеризации'
        }
    }),
    getters: {
        getDispIntersections(state){
            return state.dispIntersections;
        },
        getPageTitle(state){
            return state.page.title;
        },
        getPageMessage(state){
            return state.page.message;
        },
    },
    mutations:{
        ['UPLOAD_BUFFER_DISP_REGISTRY'](state, response){
            state.page.message = response;
        },
        ['TRUNCATE_BUFFER_DISP_REGISTRY'](state, response){
            state.page.message = response;
        },
        ['GET_DISP_INTERSECTIONS'](state, intersections){
            state.dispIntersections.bad = intersections
        },
        ['SET_PAGE_TITLE'](state, title){
            state.page.title = title;
        },
        ['SET_ACTIVE_COMPONENT'](state, component){
            state.stomatologyBufferActiveComponent = component
        }
    },
    actions:{
        //РАБОТА С ИСТОРИЯМИ БОЛЕЗНИ
        // eslint-disable-next-line no-unused-vars
        async uploadIB({state, commit}) {
            const response = await axios.get('http://172.25.70.201/histories/upload');
            console.log(response)
        },
        // eslint-disable-next-line no-unused-vars
        async truncateIB({state, commit}) {
            const response = await axios.delete('http://172.25.70.201/histories/truncate');
            console.log(response)
        },
        //РАБОТА С РЕЕСТРОМ ДИСПАНСЕРИЗАЦИИ
        // eslint-disable-next-line no-unused-vars
        async uploadBufferDISPRegistry({state, commit}) {
            const response = await axios.get('http://172.25.70.201/buffer/disp/upload');
            commit('UPLOAD_BUFFER_DISP_REGISTRY', response.data)
        },
        // eslint-disable-next-line no-unused-vars
        async truncateBufferDISPRegistry({state, commit}) {
            const response = await axios.delete('http://172.25.70.201/buffer/disp/truncate');
            commit('TRUNCATE_BUFFER_DISP_REGISTRY', response.data)
        },
        // eslint-disable-next-line no-unused-vars
        async getDispIntersections({state, commit}) {
            const response = await axios.get('http://172.25.70.201/buffer/disp/intersections');
            commit('GET_DISP_INTERSECTIONS', response.data);
        },
    },
    namespaced: true
}