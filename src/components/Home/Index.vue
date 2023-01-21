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
      <Title titleName="Karimjon Umarov" size="large" />
      <el-divider />
      <Title titleName="See the Top Realtors In Your Market" size="small" />
      <Title titleName="We analyze millions of home sales to find real estate agents that sell homes faster and for more money." size="small" />
      <Button size="large" type="success" @click="handleClick('buying')" round >I'M BUYING</Button> <br/>
      <Button size="large" type="success" @click="handleClick('selling')" round>I'M SELLING</Button> <br/>
      <Button size="large" type="primary" @click="handleClick('buyingAndSelling')" round>I'M BUYING & SELLING</Button> <br/>
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