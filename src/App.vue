<script>
import { RouterView } from "vue-router";
import Title from "@/components/shared/title.vue";
import { ElButton as Button} from 'element-plus'

export default {
  components: {
    RouterView, 
    Button,
    Title
  }, 
  data() {
    return {
      subTitle: `See the Top Realtors In Your Market
          We analyze millions of home sales to find real estate agents that sell homes faster and for more money.`
    }
  } 
}
</script>

<template>
  <div class="app-container">
    <div class="app-content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.app-container {
  background-image: url('background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  font-family: 'Sofia Sans Extra Condensed', sans-serif;
}

.app-content {
  padding: 1em;
}
</style>