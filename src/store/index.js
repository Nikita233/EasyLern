import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash';

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        count: 0,
        questions: [
            {id: 1, quest: 'zero'},
            {id: 2, quest: 'first'},
            {id: 3, quest: 'second'}
        ]

    },
    mutations: {
        increment(state) {
            state.count++;
        },
        rev(state, quest) {
            let maxId = _.reduce(state.questions, (maxId, q) => {
                return q.id > maxId ? q.id : maxId;
            } , 0);
            state.questions.push({ id: ++maxId, quest: quest });
        }
    },
    actions: {},
    modules: {}
});
