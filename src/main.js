import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Button from "primevue/button";

//in main.js
import "primevue/resources/themes/mdc-dark-indigo/theme.css";

const app = createApp(App);

app.use(PrimeVue);
app.component("Button", Button);
app.mount("#app");
