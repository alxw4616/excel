/**
* vue 的基础模板
* 包含 vue 常用的 属性/方法
*/
<template>
	<div class="m">
		<div class="logo"><img src="@/assets/img/logo.png" style="height: 60px" alt=""></div>
	</div>
</template>
<script>
	// import Lib from 'assets/js/Lib';
	export default {
		// 组件
		components: {},
		data() {
			return {
				msg: 'HelloWorld',
				checked: true
			};
		},
		// 计算属性
		computed: {
			total: {
				get() {},
				set(val) {}
			}
		},
		// 侦听属性
		watch: {},
		filters: {
			// 显示 带*号的身份证号码
			showCert(val) {
				if (!val) {
					return;
				}
				let left = val.slice(0, 6);
				let right = val.slice(-4);
				console.log(left, right);
				return left + '*'.repeat(6) + right;
			},
		},
		methods: {},
		mounted() {}
		// beforeDestroy(){}
		// destroyed(){}
	};

</script>

<!-- 用来污染公共css -->
<style lang="less">
</style>

<!-- 这里用来写私有的css -->
<style lang="less"
       scoped>
	@import '../assets/css/base.less';
	@import '~otwo-base/otwo-base.less';
	.m{
		background: #324057;
		height: 100%;
		width: 100%;
	}
	.logo{
		font-size: 26px;
		color: #cbcfd4;
		line-height: 60px;
		margin-left: 24px;
	}
</style>
