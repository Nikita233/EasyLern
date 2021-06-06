import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash';

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        count: 0,
        questions: [
            {
                id: 1,
                quest: 'zero',
                counter: 0,
                firstOptionText: 'One', firstOption: false,
                secondOptionText: 'Two' , secondOption: false,
                thirdOptionText: 'Three' , thirdOption: false,
                correctAnswer: 1,
                answers: [
                    { id:1, text: 'One'},
                    { id:2, text: 'Two'},
                    { id:3, text: 'Three'}
                ]
            },
            {
                id: 2,
                quest: 'first',
                counter: 0,
                firstOptionText: 'One', firstOption: false,
                secondOptionText: 'Two', secondOption: false,
                thirdOptionText: 'Three' , thirdOption: false,
                correctAnswer: 2,
                answers: [
                    { id:1, text: 'One'},
                    { id:2, text: 'Two'},
                    { id:3, text: 'Three'}
                ]
            },
            {
                id: 3,
                quest: 'second',
                counter: 0,
                firstOptionText: 'One', firstOption: false,
                secondOptionText: 'Two', secondOption: false,
                thirdOptionText: 'Three' , thirdOption: false,
                correctAnswer: 3,
                answers: [
                    { id:1, text: 'One'},
                    { id:2, text: 'Two'},
                    { id:3, text: 'Three'}
                ]
            }
        ],
        tests: [
            {
                id: 1,
                test: 'zero',
            },
            {
                id: 2,
                test: 'first',
            },
            {
                id: 3,
                test: 'second',
            }
        ]

    },
    mutations: {
        addQuest(state, quest) {
            let maxId = _.reduce(state.questions, (maxId, q) => {
                return q.id > maxId ? q.id : maxId;
            } , 0);
            state.questions.push({ id: ++maxId, quest: quest, counter: 0 });
        },
        updateQuest(state, { id, quest }) {
            const entryQuest = state.questions.find(q => q.id === id);
            if (entryQuest != null) {
                entryQuest.quest = quest
            }
        },
        aPlusCounter(state,{ quest }){
            quest.counter++
        },
        aMinusCounter(state,{ quest }){
            quest.counter--
        },
       choiceCorrectAnswer(state,{ answer, questionId }) {
           const entryCorrectAnswer = state.questions.find(q => q.id === questionId);
           if (entryCorrectAnswer != null) {
               entryCorrectAnswer.correctAnswer = answer.id
           }
       }
    },
    actions: {},
    modules: {}
});
