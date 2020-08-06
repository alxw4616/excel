import Vue from 'vue';
import 'reset-css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import '@/assets/css/stylesheet.css';
import '@/assets/css/stylesheet-2.css';

Vue.use(ElementUI);
import router from '@/config/router.js';
import App from './App.vue';
// Vue.prototype.jquery = jq;

// 捕获 js错误.可用于手机端调试
// Vue.config.warnHandler = function (msg, vm, trace) {
	// console.log(msg);
	// alert(msg)
	// alert(JSON.stringify(vm))
	// alert(trace)
// };

// new User() 将返回一个对象.该对象应该是本用中唯一"保存/操作"用户账号数据的对象.
// 组件中 通过 this.$root.user 访问用户账号数据;
// const rootUser = new User();

new Vue({
	data(){
		return {
		}
	},
	router:router,
	render: h => h(App)
}).$mount('#app-box');
