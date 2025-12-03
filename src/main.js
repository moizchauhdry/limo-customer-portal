import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers";
import "./axios";
import "./index.css";

// V-Calendar (Vue 3 version)
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

// import Echo from 'laravel-echo';
// import Pusher from 'pusher-js';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
const options = {};

library.add(faUserSecret, faUser);

const vue = createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(Toast, options)
  .use(VCalendar);

// Initialize AOS
AOS.init({
  duration: 1000, // smooth animation
  easing: "ease-in-out",
  offset: 120, // reduce jerky trigger
  once: true, // animation runs once only
  delay: 100, // optional, for even smoother feel
});

vue.mount("#app");