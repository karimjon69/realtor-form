<template>
  <div class="questions-container">
    <Questionnaire
      v-for="(questionnaire, index) in questionnaires" 
      :key="index"
      :questionnaire="questionnaire"
      :questionNumber="index + 1"
      :visibleQuestionNumber="visibleQuestionNumber"
      @answered="handleAnswered"
      @valid="handleValid"
    />
    <el-button
      class="form-button"
      v-loading.fullscreen.lock="fullscreenLoading"
      element-loading-text="Loading..."
      type="primary" 
      v-if="!allQuestionsAnswered || !isValidAnswer"
      :disabled="isNextDisabled || !isValidAnswer"
      @click="handleNext">
      Next
    </el-button>
    <el-button
      style="width: 200px;"
      v-loading.fullscreen.lock="fullscreenLoading"
      element-loading-text="We will contact you soon..."
      type="primary" 
      v-if="allQuestionsAnswered && isValidAnswer"
      @click="handleSubmit">
      Show Me Top Realtors
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
    </el-button>
  </div>
</template>

<script>
import Questionnaire from "@/components/shared/questionnaire.vue";
import { buyingQuestions, sellingQuestions } from "./questions";
import axios from 'axios';

export default {
  props: {
    questionType: { type: String, required: true }
  },
  data(){
    return {
      answers: {},
      visibleQuestionNumber: 1,
      fullscreenLoading: false,
      isValidAnswer: true
    }
  },
  components: {
    Questionnaire
  },
  computed: {
    questionnaires(){
      if (this.questionType === 'buying')
        return buyingQuestions;
      if (this.questionType === 'selling' || this.questionType === 'buyingAndSelling')
        return sellingQuestions;
      return [];
    },
    allQuestionsAnswered(){
      return Object.keys(this.answers).length === this.questionnaires.length;
    },
    isNextDisabled(){
      return !Object.keys(this.answers).includes(this.questionnaires[this.visibleQuestionNumber - 1].verbiage);
    }
  },
  methods: {
    handleNext(){
      this.fullscreenLoading = true
      setTimeout(() => {
        this.fullscreenLoading = false
        this.visibleQuestionNumber++;
      }, 2000);
    },
    handleAnswered(payload){
      this.answers[payload.question] = payload.answer;
    },
    handleValid(valid) {
      this.isValidAnswer = valid;
    },
    sendSms(message){
      console.log(message);
      const client = axios.create({
        baseURL: `${import.meta.env.VITE_SERVER_URL}`,
      });
      client.post('/sendSms', {
        message: message,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    handleSubmit() {
      this.fullscreenLoading = true
      let message = '';
      Object.keys(this.answers).forEach(key => {
        message = message + `\n\n${key}`;
        message = message + `\n${this.answers[key]}`;
      })
      this.sendSms(message);
      this.answers = {};
      this.visibleQuestionNumber = 1;
      setTimeout(() => {
        this.fullscreenLoading = false
        this.$router.push({ name: 'success' });
      }, 3000);
    }
  },
}
</script>

<style scoped>
.questions-container {
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  padding-left: 30px;
}

.form-button {
  width: 100px;
}
</style>