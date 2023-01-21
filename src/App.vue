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
  },
  methods: {
    handleHome(){
      this.$router.push({ name: 'home' });
    }
  }
}
</script>

<template>
  <div class="app-content">
    <div class="navbar">
      <a class="home-logo" @click="handleHome">
        <img src="/logo.ico" style="width: 30px; padding-left: 10px; padding-top: 10px"/>
      </a>
    </div>
    <RouterView class="router-view"/>
  </div>
</template>

<style scoped>
.app-content {
  height: 100vh;
  font-family: 'Sofia Sans Extra Condensed', sans-serif;
}

.navbar {
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background-image: radial-gradient( circle farthest-corner at 16.5% 28.1%,  rgba(15,27,49,1) 0%, rgba(0,112,218,1) 90% );
}

.home-logo:hover {
  cursor: pointer
}

.router-view {
  margin-top: 50px;
  position: fixed;
}
</style>