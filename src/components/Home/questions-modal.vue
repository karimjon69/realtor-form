<template>
  <el-dialog 
    width="100%"
    v-model="isModalVisible" 
    title="Please answer the following questions so that we can help you">
    <Questionnaire
      v-for="(questionnaire, index) in questionnaires" 
      :key="index"
      :questionnaire="questionnaire"
      :questionNumber="index + 1"
      @answered="handleAnswered"
    />
    <el-divider content-position="left">Contact Details</el-divider>
    <Questionnaire
      v-for="(questionnaire, index) in contactQuestions" 
      :key="index"
      :questionnaire="questionnaire"
      @answered="handleContactDetails"
    />
    <template #footer>
      <span class="dialog-footer">
        <el-button 
          type="primary" 
          :disabled="!allQuestionsAnswered"
          @click="handleSubmit">
          Submit
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import Questionnaire from "@/components/shared/questionnaire.vue";
import { buyingQuestions, contactQuestions } from "./questions";
import axios from 'axios';

export default {
  props: {
    isVisible: { type: Boolean, required: true }
  },
  data(){
    return {
      answers: {},
      contactDetails: {}
    }
  },
  components: {
    Questionnaire
  },
  computed: {
    isModalVisible: {
      get() {
        return this.isVisible;
      },
      set(value){
        if (!value)
          this.$emit('visible-changed');
      }
    }, 
    questionnaires(){
      return buyingQuestions;
    },
    contactQuestions(){
      return contactQuestions;
    },
    allQuestionsAnswered(){
      return true;
      return Object.keys(this.answers).length === this.questionnaires.length
        && Object.keys(this.contactDetails).length === this.contactQuestions.length;
    }
  },
  methods: {
    handleAnswered(payload){
      this.answers[payload.question] = payload.answer;
    },
    handleContactDetails(payload){
      this.contactDetails[payload.question] = payload.answer;
    },
    handleSubmit(){
      const client = axios.create({
        baseURL: `http://localhost:${import.meta.env.VITE_SERVER_PORT}`,
      });

      client.post('/sendSms', {
        message: `${JSON.stringify(this.answers)}\n${JSON.stringify(this.contactDetails)}`,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      this.answers = {};
      this.contactDetails = {};
      this.isModalVisible = false;
    }
  },
  watch: {
    answers: {
      handler(newValue) {
        console.log(newValue);
      },
      deep: true
    },
    contactDetails: {
      handler(newValue) {
        console.log(newValue);
      },
      deep: true
    },
  }
}
</script>