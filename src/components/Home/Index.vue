<script>
import Title from "@/components/shared/title.vue";
import { ElButton as Button} from 'element-plus'
import QuestionsModal from './questions-modal.vue';

export default {
  components: {
    Button,
    Title,
    QuestionsModal,
  }, 
  data() {
    return {
      isModalVisible: false
    }
  },
  methods: {
    handleVisibleChanged(){
      this.isModalVisible = false;
    },
    handleBuying(){
      this.isModalVisible = true;
    }
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
      <Button 
        size="large" 
        type="success" 
        @click="handleBuying"
        round 
      >I'M BUYING
      </Button> <br/>
      <Button size="large" type="success" round>I'M SELLING</Button> <br/>
      <Button size="large" type="primary" round>I'M BUYING & SELLING</Button> <br/>
    </div>
    <questions-modal 
      :is-visible="isModalVisible"
      @visible-changed="handleVisibleChanged"
    />
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
  margin-bottom: 10px;
}
</style>