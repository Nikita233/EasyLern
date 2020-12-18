<template>
    <div class="register">
            <h1>Введите данные</h1>
            <form action="/register" method="post">
                <label>Имя</label><br>
                <input type="text" name="userName" /><br><br>
                <label>Возраст</label><br>
                <input type="password" name="password" /><br><br>
                <input type="submit" value="Отправить" />
        `   </form>
    </div>
</template>
<script>
import RegForm from '@/components/RegForm.vue'

export default {
    name: 'Register',
    components: {
    RegForm
  }
}
</script>

