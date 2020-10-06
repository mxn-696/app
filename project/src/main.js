import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import request from './utils/request'
import Vant from 'vant';
import 'vant/lib/index.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.prototype.$http=request
Vue.use(ElementUI);
Vue.use(MintUI)
Vue.use(Vant);
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
