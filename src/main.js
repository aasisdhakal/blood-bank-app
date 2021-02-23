import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Router from "vue-router";
import axios from 'axios'
import VueAxios from 'vue-axios'
import routes from "@/routes";
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';



Vue.config.productionTip = false
Vue.use(VueToast);
Vue.use(Router)
Vue.use(VueAxios, axios)

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

let instance = Vue.$toast.open('You did it!');

// Force dismiss specific toast
instance.dismiss();
// Dismiss all opened toast immediately
Vue.$toast.clear();
const router = new Router({
    mode: 'history',
    routes:routes
}
)

new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')
