import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash';

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        count: 0,
        questions: [
            {id: 1, quest: 'zero', counter: 0},
            {id: 2, quest: 'first', counter: 0},
            {id: 3, quest: 'second', counter: 0}
        ]

    },
    mutations: {
        addQuest(state, quest) {
            let maxId = _.reduce(state.questions, (maxId, q) => {
                return q.id > maxId ? q.id : maxId;
            } , 0);
            state.questions.push({ id: ++maxId, quest: quest });
        },
        updateQuest(state, { id, quest }) {
            const entryQuest = state.questions.find(q => q.id === id);
            if (entryQuest != null) {
                entryQuest.quest = quest
            }
        },
        aPlusCounter(state,{ quest }){
            quest.counter++

        }
    },
    actions: {},
    modules: {}
});
