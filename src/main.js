import Vue from 'vue';
import Vuex from 'vuex';
import vuexStore from './store';
import App from './App.vue';

Vue.use(Vuex);
Vue.config.productionTip = false;

const store = new Vuex.Store(vuexStore);

new Vue({
  render: (h) => h(App),
  store,
}).$mount('#app');
