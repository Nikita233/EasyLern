<template>
<nav class="navbar container" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <strong class="is-size-4">El</strong>
    </a>
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div id="navbar" class="navbar-menu">
      <div class="navbar-start"></div>
    <div class="navbar-center">
        <div class="navbar-item">
            <h2>Имя Фамилия Отчество</h2>
        </div>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
          <div class="avatar">
            <img src="https://lh3.googleusercontent.com/proxy/YU9jGeuhkAhA034FftTCT2FtqX50Z4jj2FMUT66K0U9i8WKCr4fdZEqeqvEBUWEk46Pf77xgikJuIlhYpCD5s09P7iBuPqaZ5Pukq5ZmHbNBHMPeHbjdzf8CogL9tHanNY_Xk-x94A" alt="Avatar">
          </div>
      </div>
    </div>
  </div>
</nav>
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
</style>