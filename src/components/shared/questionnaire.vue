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
    <div>
      <el-input 
        v-if="questionnaire.type === 'input'"
        autofocus="autofocus"
        v-model="input" 
        @input="handleAnswerChange"
        :placeholder="questionnaire.placeholder"
      />
    </div>
    <el-select 
      v-if="questionnaire.type === 'dropdown'" 
      v-model="input" placeholder="Select" 
      size="large"
      placement="bottom-end"
      @change="handleAnswerChange"
    >
      <el-option
        v-for="item in questionnaire.options"
        :key="item"
        :label="item"
        :value="item"
      />
    </el-select>
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
    isValidEmail(email) {
      const valid = String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      const isValid = valid !== null
      this.$emit('valid', isValid);
      return isValid;
    },
    isValidPhoneNumber(number) {
      const valid = String(number).toLowerCase().match(
        /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
      )
      const isValid = valid !== null
      this.$emit('valid', isValid);
      return isValid;
    },
    handleAnswerChange(){
      if (this.questionnaire.validation === 'email') {
        if (!this.isValidEmail(this.input)) return;    
      }
      if (this.questionnaire.validation === 'phone') {
        if (!this.isValidPhoneNumber(this.input)) return;
      }
      this.$emit('answered', {
        question: this.questionnaire.verbiage,
        answer: this.input
      });
    },
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