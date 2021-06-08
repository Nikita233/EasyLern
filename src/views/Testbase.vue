<template>
  <div class="about">
    <Nav_Main />
    <div class="hero">
      <div class="hero-body">
        <div class="container">
         <Menu />
            <article class="panel is-link">
            <p class="panel-heading">
              Быстрый поиск
            </p>
            <p class="panel-tabs">
                <button>Добавити предмет</button>

                <a class="is-active">All</a>
              <a>Math</a>
              <a></a>
              <a></a>
              <a></a>
            </p>
            <div class="panel-block-1">
              <p class="control_has-icons-left">
                <input class="input_is-link" type="text" placeholder="Пошук тесту">
                <span class="icon is-left">
                  <i class="fas fa-search" aria-hidden="true"></i>
                </span>
              </p>
            </div>
                <button v-on:click="createTestModalShow()">Добавити тест</button>
                <p></p>
                <ul>
                    <li v-for="t in tests" :key="t.id">
                        <span>{{t.id.toString()}}.</span> {{ t.test }}
                        <button v-on:click="editTestModalShow(t)">Просмотр</button>
                    </li>
                </ul>
                <div id="editingTest">
                    {{editingTest.test}}
                </div>
          </article>

         <div id="btn-edit">
             <ModalEditTest v-bind:test="editingTest" v-show="isModalEditTestVisible" @close="windowCloseEditTestModal" />
             <ModalCreateTest v-bind:test="creatingTest" v-show="isModalCreateTestVisible" @close="windowCloseCreateTestModal" />
         </div>

        </div>
        
        
      </div>
    </div>
    
    
  </div>
</template>


<script>
import Menu from '@/components/Menu.vue'
import Nav_Main from '@/components/Nav_Main.vue'
import ModalEditTest from '@/components/ModalEditTest.vue'
import ModalCreateTest from '@/components/ModalCreateTest.vue'


import {mapState} from "vuex";

export default {
    name: 'Home',
    components: {
        ModalEditTest,
        ModalCreateTest,
        Nav_Main,
        Menu
    },
    data () {
        return {
            isModalEditTestVisible: false,
            isModalCreateTestVisible: false,
            editingTest: {},
            creatingTest:{},
        };
    },
    methods: {

        windowNew() {
            this.isModalEditTestVisible = true;
        },
        windowCloseEditTestModal() {
            this.isModalEditTestVisible = false;
        },
        windowCloseCreateTestModal() {
            this.isModalCreateTestVisible = false;
        },
        editTestModalShow(t) {
            this.isModalEditTestVisible = true;
            this.editingTest = Object.assign({}, t);
            console.log(this.editingTest);
            console.log("helloWorld")
        },
        createTestModalShow(){
            this.isModalCreateTestVisible = true;
          //  this.creatingTest = Object.assign({}, t);

        },

        },

    computed: {
        ...mapState(['tests', 'questions'])
    },



};

</script>



<style lang="scss" scoped>

article{
  min-height: 300px;
  width: 700px;
  margin-left: auto;
  margin-right: auto;
  
}

  .org-description {
    margin-top: 50px;
  }
    .container {
        display: flex;
    }
</style>

