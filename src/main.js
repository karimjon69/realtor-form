import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import ElementPlus from 'element-plus'
import loadIcons from "./font-awesome-loader";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'element-plus/dist/index.css';


loadIcons();
const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon);
app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.mount("#app");