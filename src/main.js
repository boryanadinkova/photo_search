import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import JwPagination from 'jw-vue-pagination';

Vue.component('jw-pagination', JwPagination);

import './index.css';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

Vue.use(VueAxios, axios);
