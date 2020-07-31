<template>
	<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
		<el-menu-item index="2">
			<i class="el-icon-menu"></i>
			<span slot="title">日 报</span>
		</el-menu-item>
		<el-menu-item index="3">
			<i class="el-icon-document"></i>
			<span slot="title">月 报</span>
		</el-menu-item>
		<el-menu-item index="4">
			<i class="el-icon-setting"></i>
			<span slot="title">年 报</span>
		</el-menu-item>
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
