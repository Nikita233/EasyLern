<template>
    <transition name="modal-fade">
        <div class="modal-backdrop">
            <div class="modal-custom" role="dialog">

                <header class="modal-header" id="modalTitle">
                    <slot name="header">

                    </slot>
                </header>

                <section class="modal-body" id="modalDescription">
                    <slot name="body">

                    </slot>
                    <textarea id="writeQuest" v-model="editableQuest" placeholder="Тест запитання"></textarea>
                        <select v-model="optionAnswer">
                            <option>1 варіант</option>
                            <option>Декілька</option>
                            <option>У вірній послідовності</option>
                        </select>
                        <span>Выбрано: {{optionAnswer}}</span>
                    <p></p>
                    <textarea id="writeQuestAnswerFirst" v-model="editableQuestAnswerFirst" placeholder="Тест відповіді"></textarea>
                    <button type="button" class="numb">-</button>
                    <select v-model="choiceSubject">
                        <option>Інженерія</option>
                        <option>Програмне забезпечення</option>
                        <option>Мікромеханічні прилади</option>
                    </select>
                    <span>Выбрано: {{choiceSubject}}</span>

                    <p></p>
                    <textarea id="writeQuestAnswerSecond" v-model="editableQuestAnswerSecond" placeholder="Тест відповіді"></textarea>
                    <button type="button" class="numb">-</button>


                </section>
<p>{{quest.quest}}</p>
                <footer class="modal-footer">
                    <slot name="footer">

                    </slot>
                    <button type="button" class="numb" @click="handleSave()">Save</button>
                    <button type="button" class="btn-green" @click="close()">Close</button>
                </footer>
            </div>
        </div>
    </transition>
</template>


<script>


  export default {
        name: 'modal',
        windowNew: false,

        props: {
            quest: {}
        },

      data() {
        return {
            editableQuest: this.quest.quest,
            editableQuestAnswerFirst:{},
            editableQuestAnswerSecond:{},
            optionAnswer:'',
            choiceSubject:'',

        }
      },

        methods: {
            close() {
                this.$emit('close');
            },

            handleSave() {
                const isEdit = this.quest.id != null
                if (isEdit) {
                    this.$store.commit('updateQuest', {
                        id: this.quest.id,
                        quest: this.editableQuest,
                    })
                    this.$emit('close');
                } else {
                    this.$store.commit('addQuest', this.editableQuest)
                    this.$emit('close');
                }

            },

        },
    };
</script>

<style>

    .modal-backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal-custom {
       box-shadow: 2px 2px 20px 1px;
        overflow-x: auto;
        background: #42c4d2;
        border-radius: 8px;
        min-width: 420px;
        top: 50%;
        left: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .modal-footer {
        padding: 15px;
        display: flex;
    }

    .modal-header {
        border-bottom: 1px solid #eeeeee;
        color: #4AAE9B;
        justify-content: space-between;
    }

    .modal-footer {
        border-top: 1px solid #eeeeee;
        justify-content: flex-end;
    }

    .modal-body {
        position: relative;
        padding: 20px 10px;
    }

    .btn-close {
        border: none;
        font-size: 20px;
        padding: 20px;
        cursor: pointer;
        font-weight: bold;
        color: #4AAE9B;
        background: transparent;
    }

    .btn-green {
        color: white;
        background: #4AAE9B;
        border: 1px solid #4AAE9B;
        border-radius: 2px;
    }
</style>
<!--if (_.includes(this.$store.questions.id)){
                    this.$store.commit('reWrite', this.text);
                    this.$emit('close');
                    this.text = '';
                }else {-->