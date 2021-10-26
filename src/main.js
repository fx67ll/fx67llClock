import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/index.js'

Vue.config.productionTip = false

import less from 'less'
Vue.use(less)

import fx67llClock from '@c/index';
Vue.use(fx67llClock);

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
