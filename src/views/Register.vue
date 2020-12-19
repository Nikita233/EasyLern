<template>
    <div class="register">
            <h1>Введите данные</h1>
            <RegForm/>
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

