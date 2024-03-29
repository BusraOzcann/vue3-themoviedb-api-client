import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

//Styles
import "./assets/styles/main.scss"

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas, fab, far);

// MIXINS
import globalAPI from "./mixins/GlobalAPI"

const app = createApp(App)

app.component('fa', FontAwesomeIcon)
app.use(store)
app.mixin(globalAPI)
app.mount("#app");
