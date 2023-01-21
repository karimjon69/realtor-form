<script>
import Home from "../components/Home/Index.vue";

export default {
  components: {
    Home,
  },
  props: {
    showSuccess: { type: Boolean, default: false }
  }
}
</script>

<template>
  <main>
    <div>
      <el-alert
        v-if="showSuccess"
        title="Success"
        type="success"
        description="We will reach out to you as soon as possible"
        show-icon
      />
      <Home class="home-view" />
    </div>
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
