import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createI18n } from "vue-i18n";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const i18n = createI18n({
  locale: "en",
  messages: {
    en: {},
    th: {},
  },
});

createApp(App).use(i18n).use(store).use(router).mount("#app");
