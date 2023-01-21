<script>
import Questions from "../components/Questions/Index.vue";

export default {
  props: {
    questionType: { type: String, required: true }
  },
  components: {
    Questions
  },
}
</script>

<template>
  <Questions class="questions-view" :questionType="questionType"/>
</template>

<style scoped>
.questions-view {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  width: 100%;
}
</style>