<template>
  <div class="questionnaire">
    <div>{{questionLabel}}*</div>
    <el-radio-group 
      v-if="questionnaire.type === 'radio'" 
      v-model="input"
      @change="handleAnswerChange"
    >
      <el-radio 
        v-for="option in questionnaire.options" 
        :label="option" 
        :key="option"
      >
        {{option}}
      </el-radio>
    </el-radio-group>
    <el-input v-if="questionnaire.type === 'input'" v-model="input" @input="handleAnswerChange"/>
  </div>
</template>

<script>
export default {
  props: { 
    questionnaire: { type: Object, required: true },
    questionNumber: { type: Number, required: false, default: 0 },
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
  computed: {
    questionLabel() {
      return this.questionNumber === 0
        ? this.questionnaire.verbiage
        : `${this.questionNumber}) ${this.questionnaire.verbiage}`;
    }
  }
}
</script>

<style scoped>
.questionnaire {
  text-align: left;
  font-size: 1.5em;
  margin-bottom: 1.5em;
}
</style>
