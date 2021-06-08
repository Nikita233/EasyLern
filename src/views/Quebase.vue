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
                        <p class="panel-tabs1">

                            <a class="tab is-active">All</a>
                            <a class="tab">Math</a>
                            <a class="tab"></a>
                            <a class="tab"></a>
                            <a class="tab"></a>
                        </p>
                        <div class="panel-block-1">
                            <p class="control_has-icons-left">
                                <button class="btn_blue">Добавити предмет</button>

                                <input class="input_is-link" type="text" placeholder="Пошук запитання">
                                <span class="icon is-left">
                  <i class="fas fa-search" aria-hidden="true"></i>
                </span>
                            </p>

                        </div>
                        <ul>
                            <li class="test_question" v-for="q in questions" :key="q.id">
                                <div>
                                <span>{{q.id.toString()}}.</span> {{ q.quest }}
                                <ul>
                                <li v-for="answer in q.answers" :key=" answer.id">
                                    <input v-on:change="choiceAnswer(answer, q.id)" :name="q.id" type="radio" :checked="q.correctAnswer == answer.id"/>
                                    <label>{{answer.text}}{{q.correctAnswer}}-{{answer.id}}</label>
                                </li>
                                </ul>
                                </div>
                                <button class="btn_blue_outline" v-on:click="windowWrite(q)">Змінити</button>

                            </li>
                        </ul>
                    </article>
                    <div class="modalWrap"><!--Wrap-обертка-->
                        <button class="btn_blue" v-on:click="windowNew">Створити запитання</button>
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
        min-height: 300px;
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


    .btn_blue_outline{
    border: 1px solid #3173dc;
    border-radius: 6px;
    line-height: 40px;
    color: #3173dc;
    background: transparent;
    font-weight: bold;
}
    .btn_blue {
        white-space: nowrap;
        line-height: 40px;
        margin-right: 15px;
        background-color: #3173dc;
        color: #fff;
        border-radius: 6px;
        border: none;
        padding: 0 15px;
        font-weight: bold;
        font-size: 14px;
        border-radius: 6px 6px 6px 6px;
    }

    .btn_medium {
        padding: 10px 15px;
        font-size: 18px;
    }

    .btn_full {
        background: #3273dc;
    }
    .control_has-icons-left{
        display: flex;
        padding: 15px;
        border-bottom: 1px solid #ededed;
    }
    .test_question{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding: 15px;
    }
    .panel-tabs1{
        display: flex;
        justify-content: flex-start;
        border-bottom: 1px solid #ededed;
        padding: 15px 15px 0;
    }
    .tab{
        font-size: 14px;
    }
    .is-active{
        color: #3273dc;
        font-weight: bold;
        border-bottom: 2px solid #3173dc;
    }
</style>