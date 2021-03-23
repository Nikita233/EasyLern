<template>
    <transition name="modal-fade">
        <div class="modal-backdrop">
            <div class="modal" role="dialog">

                <header class="modal-header" id="modalTitle">
                    <slot name="header">

                    </slot>
                </header>

                <section class="modal-body" id="modalDescription">
                    <slot name="body">

                    </slot>
                    <textarea id="write" v-model="text" placeholder="введите"></textarea>
                </section>
<p>{{text}}</p>
                <footer class="modal-footer">
                    <slot name="footer">

                    </slot>
                    <button type="button" class="numb" @click="hot">Save</button>
                    <button type="button" class="btn-green" @click="close">Close</button>
                </footer>
            </div>
        </div>
    </transition>
</template>


<script>
    import {mapState} from 'vuex'
    //import main from './main.js'
    //import index from '@store/index.js'

    export default {
        name: 'modal',
        windowNew: false,

        computed: mapState(['count']),
        // count () {
        //   return this.$store.state.count
        // }

        data: () => ({
            text: ''
        }),
        methods: {
            close() {
                this.$emit('close');
            },
            inc() {
                this.$store.commit('increment')
                //        index.state.count++;
            },
            hot() {
                this.$store.commit('rev', this.text);
                this.$emit('close');
                this.text='';
            }
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
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal {
        background: #FFFFFF;
        box-shadow: 2px 2px 20px 1px;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
    }

    .modal-header,
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