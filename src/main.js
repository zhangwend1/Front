import {createApp} from 'vue'
import App from './App.vue'
import {VuesticPlugin} from 'vuestic-ui' // <-
import 'vuestic-ui/dist/vuestic-ui.css' // <-
import router from "./router";
import store from "./state";
import axios from "axios";

axios.defaults.baseURL = 'http://192.168.212.220:8080';

createApp(App)
    .use(router)
    .use(VuesticPlugin)
    .use(store)
    .mount('#app')

