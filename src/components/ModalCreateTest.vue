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
                    <textarea id="writeQuest" v-model="editableNameTest" placeholder="Ім'я тесту"></textarea>
                   <p></p>
                    <select v-model="choiceSubject">
                        <option>Інженерія</option>
                        <option>Програмне забезпечення</option>
                        <option>Мікромеханічні прилади</option>
                    </select>
                    <span>Выбрано: {{choiceSubject}}</span>
                    <p></p>
                    <button type="button" class="numb" @click="addQuestionTest()">Додати</button>

                </section>
                <footer class="modal-footer">
                    <slot name="footer">

                    </slot>
                    <button type="button" class="numb" @click="add()">add</button>
                    <button type="button" class="btn-green" @click="close()">Close</button>
                </footer>
                <ModalAddQuestionInTest v-bind:test="addQuestionInTest" v-show="isModalAddQuestionInTestVisible" @close="windowCloseModalAddQuestionInTest" />

            </div>
        </div>
    </transition>
</template>


<script>
    import ModalAddQuestionInTest from '@/components/ModalAddQuestionInTest.vue'

    export default {
        name: 'ModalCreateTest',
        components:{
            ModalAddQuestionInTest,
        },
    data(){
     return {
         isModalAddQuestionInTestVisible:false,
         addQuestionInTest: {},
         editableNameTest:{},
         choiceSubject:'',
     }
    },
        methods: {
            windowCloseModalAddQuestionInTest(){
                this.isModalAddQuestionInTestVisible = false;

            },
            addQuestionTest(){
                this.isModalAddQuestionInTestVisible= true;
            },
            close() {
                this.$emit('close');
            },
            add() {
                this.$emit('close');
            }
        }
    }
</script>

<style scoped>
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