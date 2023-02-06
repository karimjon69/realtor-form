import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import QuestionsView from "../views/QuestionsView.vue";
import SuccessView from "../views/SuccessView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/questions/:questionType",
      name: "questions",
      component: QuestionsView,
      props: route => ({ questionType: route.params.questionType })
    },
    {
      path: "/success",
      name: "success",
      component: SuccessView,
    },
  ],
});

export default router;
