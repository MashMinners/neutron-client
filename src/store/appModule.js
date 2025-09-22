import connections from "@/configs/connections";
import axios from "axios";

export const appModule = {
    state:() => ({
        intersections: {
            bad : [],
            good: [],
            dubious : []
        },
        stage: {
            title: 'Титул',
            message: 'Мессадж'
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
            state.intersections.bad = intersections.bad
            state.intersections.good = intersections.good
            state.intersections.dubious = intersections.dubious
        },
        // eslint-disable-next-line no-unused-vars
        ['FINISH'](state, response){

        }
    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        async getIntersections({state, commit}, payload) {
            const params = {}
            // eslint-disable-next-line no-unused-vars
            const response = await axios.get('http://192.168.0.10/stom/intersections', {params});
            console.log(response.data)
            commit('GET_INTERSECTIONS', response.data);
        },
        // eslint-disable-next-line no-unused-vars
        async truncateDPRegistryTable ({state, commit}){
            const response = await axios.delete(connections.api.production.DPTruncate ? connections.api.production.DPTruncate : connections.api.dev.DPTruncate.toString(), {});
            //const response = await axios.delete('http://192.168.0.10/dp/registry/truncate', {});
            console.log(connections.api.dev.DPTruncate)
            commit('FINISH', response)
        }
    },
    namespaced: true
}