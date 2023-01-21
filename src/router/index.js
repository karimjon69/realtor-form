import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import QuestionsView from "../views/QuestionsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/success",
      name: "home-success",
      component: HomeView,
      props: route => ({ showSuccess: true })
    },
    {
      path: "/questions/:questionType",
      name: "questions",
      component: QuestionsView,
      props: route => ({ questionType: route.params.questionType })
    }
  ],
});

export default router;
