// 路由懒加载
// const Foo = () => import('./Foo.vue')
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


const views = {
	ex1: () => import('@/views/ex1.vue'),
};

const routes = [{
	path: '/',
	name: 'index',
	component: views.ex1
}];

for (let f1 in views) {
	routes.push({
		path: '/' + f1,
		name: f1,
		component: views[f1]
	});
}
export default new VueRouter({
	routes
})