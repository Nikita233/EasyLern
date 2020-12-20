<template>
    <div class="register">
           <Nav />
            <RegForm/>
        
           <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email">
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Password">
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div class="control">
      <div class="select">
        <select>
          <option>Select dropdown</option>
          <option>With options</option>
        </select>
      </div><div class="field">
          <p class="control">
            <button class="button is-success">
              Login
            </button>
          </p>
        </div>
</div>
    </div>
</template>
<script>
// @ is an alias to /src
import RegForm from '@/components/RegForm.vue'

export default {
    name: 'Register',
    components: {
    RegForm}
}
</script>
<script>
import Nav from '@/components/Nav.vue'
export default {
    name: 'Home',
  components: {
    Nav
  }
}
</script>

