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
              <a>Public</a>
              <a>Private</a>
              <a>Sources</a>
              <a>Forks</a>
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
         
        </div>
        
        
      </div>
    </div>
    
    
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import Nav_Main from '@/components/Nav_Main.vue'
export default {
    name: 'Home',
  components: {
    Nav_Main,
    Menu
  }
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

</style>