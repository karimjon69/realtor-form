<script>
import Title from "@/components/shared/title.vue";
import { ElButton as Button} from 'element-plus'

export default {
  components: {
    Button,
    Title,
  }, 
  methods: {
    handleClick(questionType){
      this.$router.push({ name: 'questions', params: { questionType: questionType } })
    },
  }
}
</script>

<template>
  <div class="home-container">
    <div class="home-container--contents">
      <Title titleName="Real Estate Seattle" size="medium" />
      <el-divider />
      <Title titleName="Find the Top Realtors In Your Market" size="small" />
      <Title titleName="We recommend the best real estate agents in your market area who sell properties quickly and for higher prices, as well as buyer's agents who assist in finding the best house within your budget." size="small" />
      <Button size="large" type="success" @click="handleClick('buying')" round >
        I'M BUYING
        <font-awesome-icon icon="fa-solid fa-cart-shopping" />
      </Button> <br/>
      <Button size="large" type="success" @click="handleClick('selling')" round>
        I'M SELLING
        <font-awesome-icon icon="fa-solid fa-house-flag" />
      </Button> <br/>
      <Button size="large" type="primary" @click="handleClick('buyingAndSelling')" round>
        I'M BUYING & SELLING!!!!
        <font-awesome-icon icon="fa-solid fa-handshake" />
      </Button> <br/>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-container--contents > * {
  padding-left: 1em;
  padding-right: 1em;
  margin-bottom: 10px;
}
</style>