<script>
import Home from "../components/Home/Index.vue";

export default {
  components: {
    Home,
  },
}
</script>

<template>
  <main>
    <Home class="home-view" />
  </main>
</template>

<style scoped>
.home-view {
  background-image: url('background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
}
</style>
