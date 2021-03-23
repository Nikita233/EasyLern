<template>
<header class="navbar " role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <strong class="is-size-4">Et</strong>
    </a>
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
        <div class="navbar-item">
            <h2>Имя Фамилия Отчество</h2>
        </div>
      <div class="navbar-item">
          <div class="avatar">
              <router-link to="/Cabinet">
              <img src="https://pngimg.com/uploads/avatar/avatar_PNG9.png" alt="Avatar">
                </router-link>
            </div>
      </div>
</header>
</template>
<script>
export default {
    name: 'Nav_Main'
}
</script>
<style lang="scss" scoped>
  nav {
    margin-top: 25px;
    margin-bottom: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #d88d00;
      }
    }
  }
    .navbar{
        display: flex;
        justify-content: space-between;
    }
</style>