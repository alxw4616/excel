<template>
	<div id="app">
		<div class="logo">
			<logo></logo>
		</div>
		<div class="lm">
			<ss-menu></ss-menu>
		</div>
		<div class="view-main">
			<router-view class="view-main-c"></router-view>
		</div>

	</div>
</template>

<script>
import logo from '@/components/logo.vue';
import ssMenu from '@/components/menu.vue';
export default {
	name: 'app',
	components: {
		logo,
		ssMenu
	},
	data(){
		return {
		}
	},
	mounted(){
		// console.log(this.$root.user);
	}
};

</script>

<style lang="less">
// 这样引用会使 esbase.css参与编译.
// 自动补全前缀等,px转vw等
// 全局样式只在入口文件引用一次
// @import 'esbase/assets/css/esbase.css';
// @import '~vux/src/styles/reset.less';
#app{
	width: 100vw;
	height: 100vh;
}
.logo{
	height: 60px;
}
.lm{
	width: 200px;
	position: absolute;
	top: 60px;
	bottom: 0;
	overflow: auto;
}
.view-main{
	background: #e5e9f2;
	position: absolute;
	top: 60px;
	bottom: 0;
	left: 200px;
	right: 0;
	overflow: auto;
	padding: 10px;
}
</style>
