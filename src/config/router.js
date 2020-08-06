// 路由懒加载
// const Foo = () => import('./Foo.vue')
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


const views = {
	ex1: () => import('@/views/ex1.vue'),
	'ex1-1': () => import('@/views/ex1-1.vue'),
	'ex1-2': () => import('@/views/ex1-1.vue'),
	'ex1-3': () => import('@/views/ex1-1.vue'),
	'ex1-4': () => import('@/views/ex1-1.vue'),
	'ex1-5': () => import('@/views/ex1-1.vue'),
	'ex1-6': () => import('@/views/ex1-1.vue'),
	'ex1-7': () => import('@/views/ex1-1.vue'),
	'ex1-8': () => import('@/views/ex1-1.vue'),
	'ex1-9': () => import('@/views/ex1-1.vue'),
	'ex1-10': () => import('@/views/ex1-1.vue'),
	'ex1-11': () => import('@/views/ex1-1.vue'),
	'ex2-0': () => import('@/views/ex2-0.vue'),
	'ex2-1': () => import('@/views/ex2-1.vue'),
	'ex2-2': () => import('@/views/ex2-2.vue'),
	'ex2-3': () => import('@/views/ex2-3.vue'),
	'ex2-4': () => import('@/views/ex2-4.vue'),
	'ex2-5': () => import('@/views/ex2-5.vue'),
	'ex2-6': () => import('@/views/ex2-6.vue'),
	'ex2-7': () => import('@/views/ex2-7.vue'),
	'ex2-8': () => import('@/views/ex2-8.vue'),

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
