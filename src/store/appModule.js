//import connections from "@/configs/connections";
import axios from "axios";

export const appModule = {
    state:() => ({
        intersections: [],
        records: {
            letterNumber: '123',
            letterHeader: 'Заголовок'
        },
        stage: {
            title: '',
            message: ''
        }
    }),
    getters: {
        getIntersections(state){
            return state.intersections;
        },
        //Steps
        getStepTitle(state){
          return state.stage.title;
        },
        getStepMessage(state){
            return state.stage.message;
        }
    },
    mutations: {
        ['GET_INTERSECTIONS'](state, intersections){
            state.intersections = intersections
        }
    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        async getIntersections({state, commit}, payload) {
            const params = {}
            // eslint-disable-next-line no-unused-vars
            const response = await axios.get('http://192.168.0.10/stom/intersections', {params});
            console.log(response.data.bad)
            commit('GET_INTERSECTIONS', response.data.bad);
        },
        // eslint-disable-next-line no-unused-vars
        getInform({state, commit}, payload){
            console.log(state.intersections);
        }
    },
    namespaced: true
}