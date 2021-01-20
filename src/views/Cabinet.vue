<template>
  <div class="about">
    <Nav_Main />
    <div class="hero">
      <div class="hero-body">
        <div class="container">
          <aside class="menu-right">
            <p class="menu-label">
              General
            </p>
            <ul class="menu-list">
              <li><a>База вопросов</a></li>
              <li><a>База тестов</a></li>
              <li><a>Статистика</a></li>
              <li><a>Настройки</a></li>
            </ul>
          </aside>
          <article>
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Имя Фамилия</p>
                    <p class="subtitle is-6">@firstname</p>
                  </div>
                </div>

                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris.
                </div>
              </div>
            </div>
          </article>
        </div>
        
        
      </div>
    </div>
    
    
  </div>
</template>

<script>
import Nav_Main from '@/components/Nav_Main.vue'
export default {
    name: 'Home',
  components: {
    Nav_Main
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