<template>
  <aside class="menu-right">
            <p class="menu-label">
              General
            </p>
            <ul class="menu-list">
              <router-link to=""><li><a>База вопросов</a></li></router-link>
              <router-link to=""><li><a>База тестов</a></li></router-link>
              <router-link to=""><li><a>Статистика</a></li></router-link>
              <router-link to="/Settings"><li><a>Настройки</a></li></router-link>
              
            </ul>
          </aside>
</template>

<script>
export default {
    name: 'Menu'
}
</script>

<style>
aside {
    
    padding: 10px;
    width: 200px;
    float: left;
   }
</style>