import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import Button from "@/components/Button";

const app = createApp( App );
app.component( 'custom-button', Button );

app.use(store)
  .mount("#app");
