<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Login msg="Login"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Login from '@/components/Login.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'LoginView',
  components: {
    Login,
  },
});
</script>
