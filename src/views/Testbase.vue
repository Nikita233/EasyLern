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

          </article>
            <div id="buttons">
                <button v-on:click="windowNew">Создать тест</button>
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

export default {
    name: 'Home',
  components: {
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
        }

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

