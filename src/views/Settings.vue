<template>
  <div class="about">
    <Nav_Main />
    <div class="hero">
      <div class="hero-body">
        <div class="container">
         <Menu />
         
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
aside {
    
    padding: 10px;
    width: 200px;
    float: left;
   }
   
article{
  height: 300px;
  width: 400px;
  float: right;
  
}
  .org-description {
    margin-top: 50px;
  }

</style>