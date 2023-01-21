<template>
  <div class="questionnaire" v-if="questionNumber == visibleQuestionNumber">
    <div>{{questionnaire.verbiage}}</div>
    <i style="font-size: 14px;">{{questionnaire.subVerbiage}}</i>
    <el-radio-group
      v-if="questionnaire.type === 'radio'" 
      v-model="input"
      @change="handleAnswerChange"
    >
    <div class="custom-radio-group">
      <el-radio 
        v-for="option in questionnaire.options" 
        :label="option" 
        :key="option"
      >
        {{option}}
      </el-radio>
    </div>
    </el-radio-group>
    <el-input v-if="questionnaire.type === 'input'" v-model="input" @input="handleAnswerChange"/>
  </div>
</template>

<script>
export default {
  props: { 
    questionnaire: { type: Object, required: true },
    questionNumber: { type: Number, required: false, default: 0 },
    visibleQuestionNumber: { type: Number, required: true, default: 0}
  },
  data(){
    return {
      input: "",
    }
  },
  methods: {
    handleAnswerChange(){
      this.$emit('answered', {
        question: this.questionnaire.verbiage,
        answer: this.input
      });
    }
  },
}
</script>

<style scoped>
.questionnaire {
  font-size: 1.5em;
  margin-bottom: 1.5em;
  text-align: left;
}
.custom-radio-group {
  display: flex;
  flex-direction: column;
  text-align: left;
}
</style>

<style>
.el-radio-group {
  width: 100%;
}
</style>