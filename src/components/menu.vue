<template>
	<el-menu :router="true" default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
		<el-menu-item index="2">
			<i class="el-icon-menu"></i>
			<span slot="title">日 报</span>
		</el-menu-item>
		<el-menu-item index="ex1">
			<i class="el-icon-document"></i>
			<span slot="title">月 报</span>
		</el-menu-item>
		<el-menu-item index="4">
			<i class="el-icon-setting"></i>
			<span slot="title">年 报</span>
		</el-menu-item>
		<el-submenu index="3">
			<template slot="title"> <i class="el-icon-location"></i> <span>综合计划完成进度</span> </template>
			<el-menu-item-group> <template slot="title">2020年</template>
				<el-menu-item index="ex1-1">HSE部</el-menu-item>
				<el-menu-item index="ex1-2">运作部</el-menu-item>
				<el-menu-item index="ex1-3">市场部</el-menu-item>
				<el-menu-item index="ex1-4">供应配送部</el-menu-item>
				<el-menu-item index="ex1-5">资产部</el-menu-item>
				<el-menu-item index="ex1-6">企管部</el-menu-item>
				<el-menu-item index="ex1-7">财务部</el-menu-item>
				<el-menu-item index="ex1-8">人力资源部</el-menu-item>
				<el-menu-item index="ex1-9">党群工作部</el-menu-item>
				<el-menu-item index="ex1-10">内控监察部</el-menu-item>
				<el-menu-item index="ex1-11">总经理办公室 </el-menu-item>
			</el-menu-item-group>
		</el-submenu>
		<el-submenu index="4">
			<template slot="title"> <i class="el-icon-location"></i> <span>综合-各专业计划</span> </template>
			<el-menu-item-group> <template slot="title">2020年</template>
				<el-menu-item index="ex2-0">总表</el-menu-item>
				<el-menu-item index="ex2-1">（1）隐患整改计划</el-menu-item>
				<el-menu-item index="ex2-2">（2）成品油销售计划</el-menu-item>
				<el-menu-item index="ex2-3">（3）非油销售计划</el-menu-item>
				<el-menu-item index="ex2-4">（4）油品调运计划及库内费用计划</el-menu-item>
				<el-menu-item index="ex2-5">（5）投资计划</el-menu-item>
				<el-menu-item index="ex2-6">（6）维修计划</el-menu-item>
				<el-menu-item index="ex2-7">（7）信息化项目计划</el-menu-item>
				<el-menu-item index="ex2-8">（8）利润计划及商流费 </el-menu-item>
			</el-menu-item-group>
		</el-submenu>

	</el-menu>
</template>

<script>
export default {
	data() {
		return {
			isCollapse: false
		};
	},
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		}
	}
}

</script>
