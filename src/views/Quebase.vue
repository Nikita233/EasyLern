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
             <ol>
                 <li v-for="q in questions" :key="q.id">
                     {{ q.quest  }}
                 </li>
             </ol>
          </article>
            <div class="modalWrap"><!--Wrap-обертка-->
                <button class="btn btn_blue btn_full btn_medium" v-on:click="windowNew">Создать вопрос</button><!--btn-button-->

                <modal v-show="isModalVisible" @close="windowClose" />
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
  components:
    {
        Modal,
    Nav_Main,
    Menu
  },
    data () {
        return {
            isModalVisible: false,
        };
    },
    methods: {

        windowNew() {
            this.isModalVisible = true;
        },
        windowClose() {
            this.isModalVisible = false;
        }
    },
    computed:mapState(['questions'] ),
}
</script>

<style lang="scss" scoped>
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
    .btn{
        border: none;
        background: transparent;
        font-weight: bold;
        cursor: pointer;
    }
    .btn_blue{
        color: #0000ff;
    }

    .btn_medium{
        padding: 10px 15px;
        font-size: 18px;
    }
    .btn_full{
        background: #d88d00;
    }

</style>