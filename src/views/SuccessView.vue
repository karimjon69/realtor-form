<script>
import Title from "@/components/shared/title.vue";
export default {
  components: {
    Title
  }
}
</script>

<template>
  <main>
    <div class="home-view">
      <br/><br/>
      <Title titleName="Thanks, we'll email selecting  the top Realtor in your market in a few minutes!" size="small" />
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
  text-align: center;
}


</style>
