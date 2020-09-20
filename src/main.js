import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import Vuelidate from 'vuelidate';
import ToggleButton from 'vue-js-toggle-button';

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(ToggleButton);

new Vue({
  vuetify,
  render: (h) => h(App)
}).$mount('#app');
