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
                <button v-on:click="Test()">add</button>
                <p></p>
                <ul>
                    <li v-for="t in tests" :key="t.id">
                        <span>{{t.id.toString()}}.</span> {{ t.test }}
                        <button v-on:click="editTestModalShow(t)">edit</button>
                    </li>
                </ul>
                <div id="editingTest">
                    {{editingTest.test}}
                </div>
          </article>

         <div id="btn-edit">
             <ModalEditTest v-bind:test="editingTest" v-show="isModalEditTestVisible" @close="windowClose" />
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

import {mapState} from "vuex";

export default {
    name: 'Home',
    components: {
      ModalEditTest,
      Nav_Main,
      Menu
    },
    data () {
        return {
            isModalVisible: false,
            isModalEditTestVisible: false,
            editingTest: {},
        };
    },
    methods: {

        windowNew() {
            this.isModalEditTestVisible = true;
        },
        windowClose() {
            this.isModalVisible = false;
            this.isModalEditTestVisible = false;
        },
        editTestModalShow(t) {
            this.isModalEditTestVisible = true;
            this.editingTest = Object.assign({}, t);
            console.log(this.editingTest);
            console.log("helloWorld")
        }

        },

    computed: {
        ...mapState(['tests', 'questions'])
    },



};

</script>



<style lang="scss" scoped>
    panel-block {
       // z-index: -1;
    }
article{
  height: 300px;
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

