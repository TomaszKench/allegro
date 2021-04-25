import './scss/app.scss'
import Vue from 'vue'
import App from './App.vue'
import { endpoint } from './plugins/endpoint';
import { translate } from './plugins/translate';
import { hasEveryProperties } from './plugins/hasEveryProperties';

Vue.config.productionTip = false
Vue.use(translate);
Vue.use(endpoint);
Vue.use(hasEveryProperties);



new Vue({
  render: h => h(App),
}).$mount('#app')
