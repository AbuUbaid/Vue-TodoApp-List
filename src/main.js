import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'


import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
Vue.config.productionTip = false

Vue.use(VueRouter);
const router = new VueRouter({
     routes: Routes
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
