<template>
    <div class="about">
        <Nav_Main/>
        <div class="hero">
            <div class="hero-body">
                <div class="container">
                    <Menu/>
                    <article class="panel is-link">
                        <p class="panel-heading">
                            Быстрый поиск
                        </p>
                        <p class="panel-tabs">
                            <a class="is-active">All</a>
                            <a></a>
                            <a></a>
                            <a></a>
                            <a></a>
                        </p>
                        <div class="panel-block">
                            <p class="control has-icons-left">
                                <input class="input is-link" type="text" placeholder="Search">
                                <span class="icon is-left">
                  <i class="fas fa-search" aria-hidden="true"></i>
                </span>
                            </p>

                        </div>
                        <ul>
                            <li v-for="q in questions" :key="q.id">
                                <span>{{q.id.toString()}}.</span> {{ q.quest }}
                                <button class="btn_blue" v-on:click="windowWrite(q)">Изменить</button>
                                <button v-on:click="counterPlus(q)">+1</button>
                                <button v-on:click="counterMinus(q)">-1</button>
                                <p>Кнопка нажата {{ q.counter }} раз</p>
                                <div v-for="answer in q.answers" :key=" answer.id">
                                    <input v-on:change="choiceAnswer(answer, q.id)" :name="q.id" type="radio" :checked="q.correctAnswer == answer.id"/>
                                    <label>{{answer.text}}{{q.correctAnswer}}-{{answer.id}}</label>
                                </div>
                            </li>
                        </ul>
                    </article>
                    <div class="modalWrap"><!--Wrap-обертка-->
                        <button class="btn btn_blue btn_full btn_medium" v-on:click="windowNew">Создать вопрос</button>
                        <!--btn-button-->
                        <modal v-bind:quest="editingQuestText" v-show="isModalVisible" @close="windowClose"/>
                    </div>

                </div>


            </div>
        </div>


    </div>
</template>

<script>

    import Menu from '@/components/Menu.vue'
    import Nav_Main from '@/components/Nav_Main.vue'
    import Modal from '@/components/Modal.vue'
    import {mapState} from "vuex";

    export default {
        name: 'Home',
        components: {
            Modal,
            Nav_Main,
            Menu
        },
        data() {
            return {
                isModalVisible: false,
                editingQuestText: {},
                counterQuest: 0 //this.$store.state.questions.counter
            };
        },

        methods: {
            windowNew() {
                this.isModalVisible = true;
                this.editingQuestText = {};
            },
            windowWrite(q) {
                this.isModalVisible = true;
                this.editingQuestText = Object.assign({}, q);
            },
            windowClose() {
                this.isModalVisible = false;
            },
            counterPlus(quest){
               // this.counterQuest++
                this.$store.commit('aPlusCounter', {quest});
            },
            counterMinus(quest){
                this.$store.commit('aMinusCounter', {quest});
            },
            choiceAnswer(answer, questionId){
console.log(answer,questionId);
                this.$store.commit('choiceCorrectAnswer', {answer, questionId});


            }
        },
        computed: mapState(['questions']),
    }
</script>

<style lang="scss" scoped>
    article {
        height: 300px;
        width: 700px;
        margin-left: auto;
        margin-right: auto;

    }

    ul li span {
        font-weight: bold;
    }

    .org-description {
        margin-top: 50px;
    }

    .container {
        display: flex;
    }

    .btn {
        border: none;
        background: transparent;
        font-weight: bold;
        cursor: pointer;
    }

    .btn_blue {
        color: white;
        background: #8f9de5;
        border: 1px solid #0e46ee;
        border-radius: 2px;
    }

    .btn_medium {
        padding: 10px 15px;
        font-size: 18px;
    }

    .btn_full {
        background: #d88d00;
    }

</style>