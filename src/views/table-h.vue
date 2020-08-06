/**
* vue 的基础模板
* 包含 vue 常用的 属性/方法
*/
<template>
	<div class="hello">
		<h1 class="msg">{{title}} <em>{{title_s}}</em></h1>
		<div class="r" v-if="changeDiv">
			<div class="block">
				<el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
				</el-date-picker>
			</div>
			<div style="width: 10px;"></div>
			<el-select  @change="sub" v-model="value" placeholder="请选择">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>

		</div>
	</div>
</template>
<script>
// import Lib from 'assets/js/Lib';
export default {
	// 组件
	components: {},
	props: {
		title: {
			type: String,
			// 对象或数组默认值必须从一个工厂函数获取
			default: function() {
				return ''
			}
		},
		title_s: {
			type: String,
			// 对象或数组默认值必须从一个工厂函数获取
			default: function() {
				return ''
			}
		},
		changeDiv:{
			type: Boolean,
			// 对象或数组默认值必须从一个工厂函数获取
			default: true
		}
	},
	data() {
		return {
			options: [{
				value: '',
				label: '全部'
        }, {
				value: '92#车用',
				label: '92#车用（乙醇）'
        }, {
				value: '95#车用',
				label: '95#车用（乙醇）'
        }, {
				value: '0#车用',
				label: '0#车用（国Ⅵ）'
        }, {
				value: '-35#车用',
				label: '-35#车用（Ⅵ）'
        }],
			value: '',
			value1: ''
		}
	},
	// 计算属性
	computed: {},
	// 侦听属性
	watch: {},
	filters: {},
	methods: {
		sub(v) {
			this.$emit('change', v)
		}
	},
	mounted() {}
	// beforeDestroy(){}
	// destroyed(){}
};

</script>

<!-- 用来污染公共css -->
<style lang="less">
</style>

<!-- 这里用来写私有的css -->
<style lang="less" scoped>
@import '../assets/css/base.less';
@import '~otwo-base/otwo-base.less';

h2 {
	font-weight: normal;
	color: @c;
	.border-radius(4px);
}

em {
	font-size: 12px;
	color: #999;
}

.msg {
	font-size: 26px;
	text-indent: 0.3em;
}

.hello {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;
}

.r {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

</style>
