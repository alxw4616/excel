<template>
	<div>
		<t-h @change="selectFn" title="中油黑龙江农垦石油有限公司进、销、存月报表" title_s="时间段:2020年5月29日17时-2020年5月31日17时"></t-h >
		<div class="t-b">
			<el-table ref=eTable :data="tableData" style="width: 100%" :height="eTableHeight" class="m-t" :row-class-name="tableRowClassName">
				<el-table-column label-class-name="d1-h" class-name="d1-c" fixed prop="column" label="" width="100">
				</el-table-column>
				<el-table-column label-class-name="d1-h" class-name=" d1-c" fixed align=center prop="date" label="汽柴油合计" width=270>
					<el-table-column label-class-name="d1-h " class-name="d1-c " label="本期销售" align=center>
						<el-table-column label-class-name="d1-h " class-name="d1-c " prop="d1"  header-align=center align=right label="合计" width=90>
						</el-table-column>
						<el-table-column label-class-name="d1-h " class-name="d1-c" prop="d2" header-align=center align=right label="枪销" width=90>
						</el-table-column>
						<el-table-column label-class-name="d1-h " class-name="d1-c" prop="d3" header-align=center align=right label="批发" width=90>
						</el-table-column>
					</el-table-column>
				</el-table-column>
				<el-table-column  label-class-name="d1-h" class-name="d1-c" prop="date" label="汽油合计" header-align=center>
					<el-table-column label-class-name="d1-h" class-name="d1-c" label="前期库存" width=60 header-align=center></el-table-column>
					<el-table-column label-class-name="d1-h" class-name="d1-c" label="本期进货" width=60 header-align=center></el-table-column>
					<el-table-column label-class-name="d1-h  " class-name="d1-c" label="本期销售"  width=180 header-align=center>
						<el-table-column label-class-name="d1-h  " class-name="d1-c  " prop="d1"  label="合计" header-align=center align=right width=90>
						</el-table-column>
						<el-table-column label-class-name="d1-h  " class-name="d1-c" prop="d2" label="枪销" header-align=center align=right width=90>
						</el-table-column>
						<el-table-column label-class-name="d1-h  " class-name="d1-c" prop="d3" label="批发" header-align=center align=right width=90>
						</el-table-column>
					</el-table-column>
					<el-table-column label-class-name="d1-h" class-name="d1-c" prop="d3" label="本期库存" header-align=center align=right width=60></el-table-column>
				</el-table-column>

				<el-table-column v-if="selectOption==''||selectOption=='92#车用'" label-class-name="d1-h c-y" class-name="d1-c" prop="date" label="92#汽油" header-align=center align=right>
					<el-table-column label-class-name="d1-h c-y" class-name="d1-c" label="期初库存" width=60 header-align=center align=right></el-table-column>
					<el-table-column label-class-name="d1-h c-y" class-name="d1-c" label="本日进货" width=60 header-align=center align=right></el-table-column>
					<el-table-column label-class-name="d1-h c-y" class-name="d1-c" label="损溢处理" width=60 header-align=center align=right></el-table-column>
					<el-table-column label-class-name="d1-h c-y" class-name="d1-c" label="本期销售"  width=180 header-align=center>
						<el-table-column label-class-name="d1-h  c-y" class-name="d1-c  c-y" prop="d1"  label="合计" width=90 header-align=center align=right>
						</el-table-column>
						<el-table-column label-class-name="d1-h  c-y" class-name="d1-c" prop="d2" label="枪销" width=90 header-align=center align=right>
						</el-table-column>
						<el-table-column label-class-name="d1-h  c-y" class-name="d1-c" prop="d3" label="批发" width=90 header-align=center align=right>
						</el-table-column>
					</el-table-column>
					<el-table-column label-class-name="d1-h c-y" class-name="d1-c" prop="d3" label="期末库存" width=60 header-align=center align=right></el-table-column>

					<el-table-column label-class-name="d1-h c-y" class-name="d1-c" prop="d3" label="实际库存" width=60 header-align=center align=right></el-table-column>

					<el-table-column label-class-name="d1-h c-y" class-name="d1-c" prop="d3" label="规定密度" width=60 header-align=center align=right></el-table-column>
					<el-table-column label-class-name="d1-h c-y" class-name="d1-c" prop="d3" label="实际库存" width=60 header-align=center align=right></el-table-column>

					<el-table-column label-class-name="d1-h c-y" class-name="d1-c" prop="d3" label="92#库存差异" width=60 header-align=center align=right></el-table-column>
				</el-table-column>

				<el-table-column v-if="selectOption==''||selectOption=='95#车用'" label-class-name="d1-h c-r" class-name="d1-c" prop="date" label="95#汽油" header-align=center align=right>
					<el-table-column label-class-name="d1-h c-r" class-name="d1-c" label="期初库存" width=60 header-align=center align=right></el-table-column>
					<el-table-column label-class-name="d1-h c-r" class-name="d1-c" label="本日进货" width=60 header-align=center align=right></el-table-column>
					<el-table-column label-class-name="d1-h c-r" class-name="d1-c" label="损溢处理" width=60 header-align=center align=right></el-table-column>
					<el-table-column label-class-name="d1-h c-r" class-name="d1-c" label="本期销售"  width=180 header-align=center>
						<el-table-column label-class-name="d1-h  c-r" class-name="d1-c  c-r" prop="d1"  label="合计" width=90 header-align=center align=right>
						</el-table-column>
						<el-table-column label-class-name="d1-h  c-r" class-name="d1-c" prop="d2" label="枪销" width=90 header-align=center align=right>
						</el-table-column>
						<el-table-column label-class-name="d1-h  c-r" class-name="d1-c" prop="d3" label="批发" width=90 header-align=center align=right>
						</el-table-column>
					</el-table-column>
					<el-table-column label-class-name="d1-h c-r" class-name="d1-c" prop="d3" label="期末库存" width=60 header-align=center align=right></el-table-column>

					<el-table-column label-class-name="d1-h c-r" class-name="d1-c" prop="d3" label="实际库存" width=60 header-align=center align=right></el-table-column>

					<el-table-column label-class-name="d1-h c-r" class-name="d1-c" prop="d3" label="规定密度" width=60 header-align=center align=right></el-table-column>
					<el-table-column label-class-name="d1-h c-r" class-name="d1-c" prop="d3" label="实际库存" width=60 header-align=center align=right></el-table-column>

					<el-table-column label-class-name="d1-h c-r" class-name="d1-c" prop="d3" label="95#库存差异" width=60 header-align=center align=right></el-table-column>
				</el-table-column>

				<el-table-column v-if="selectOption==''||selectOption=='0#柴油'" label-class-name="d1-h c-g" class-name="d1-c" prop="date" label="0#柴油" header-align=center align=right>
					<el-table-column label-class-name="d1-h c-g" class-name="d1-c" label="期初库存" width=60 header-align=center align=right></el-table-column>
					<el-table-column label-class-name="d1-h c-g" class-name="d1-c" label="本日进货" width=60 header-align=center align=right></el-table-column>
					<el-table-column label-class-name="d1-h c-g" class-name="d1-c" label="损溢处理" width=60 header-align=center align=right></el-table-column>
					<el-table-column label-class-name="d1-h c-g" class-name="d1-c" label="本期销售"  width=180 header-align=center>
						<el-table-column label-class-name="d1-h  c-g" class-name="d1-c  c-g" prop="d1"  label="合计" width=90 header-align=center align=right>
						</el-table-column>
						<el-table-column label-class-name="d1-h  c-g" class-name="d1-c" prop="d2" label="枪销" width=90 header-align=center align=right>
						</el-table-column>
						<el-table-column label-class-name="d1-h  c-g" class-name="d1-c" prop="d3" label="批发" width=90 header-align=center align=right>
						</el-table-column>
					</el-table-column>
					<el-table-column label-class-name="d1-h c-g" class-name="d1-c" prop="d3" label="期末库存" width=60 header-align=center align=right></el-table-column>

					<el-table-column label-class-name="d1-h c-g" class-name="d1-c" prop="d3" label="实际库存" width=60 header-align=center align=right></el-table-column>

					<el-table-column label-class-name="d1-h c-g" class-name="d1-c" prop="d3" label="规定密度" width=60 header-align=center align=right></el-table-column>
					<el-table-column label-class-name="d1-h c-g" class-name="d1-c" prop="d3" label="实际库存" width=60 header-align=center align=right></el-table-column>

					<el-table-column label-class-name="d1-h c-g" class-name="d1-c" prop="d3" label="0#柴油" width=60 header-align=center align=right></el-table-column>
				</el-table-column>

				<el-table-column v-if="selectOption==''||selectOption=='-35#柴油'" label-class-name="d1-h c-g2" class-name="d1-c" prop="date" label="-35#柴油" header-align=center align=right>
					<el-table-column label-class-name="d1-h c-g2" class-name="d1-c" label="期初库存" width=60 header-align=center align=right></el-table-column>
					<el-table-column label-class-name="d1-h c-g2" class-name="d1-c" label="本日进货" width=60 header-align=center align=right></el-table-column>
					<el-table-column label-class-name="d1-h c-g2" class-name="d1-c" label="损溢处理" width=60 header-align=center align=right></el-table-column>
					<el-table-column label-class-name="d1-h c-g2" class-name="d1-c" label="本期销售"  width=180 header-align=center>
						<el-table-column label-class-name="d1-h  c-g2" class-name="d1-c  c-g2" prop="d1"  label="合计" width=90 header-align=center align=right>
						</el-table-column>
						<el-table-column label-class-name="d1-h  c-g2" class-name="d1-c" prop="d2" label="枪销" width=90 header-align=center align=right>
						</el-table-column>
						<el-table-column label-class-name="d1-h  c-g2" class-name="d1-c" prop="d3" label="批发" width=90 header-align=center align=right>
						</el-table-column>
					</el-table-column>
					<el-table-column label-class-name="d1-h c-g2" class-name="d1-c" prop="d3" label="期末库存" width=60 header-align=center align=right></el-table-column>

					<el-table-column label-class-name="d1-h c-g2" class-name="d1-c" prop="d3" label="实际库存" width=60 header-align=center align=right></el-table-column>

					<el-table-column label-class-name="d1-h c-g2" class-name="d1-c" prop="d3" label="规定密度" width=60 header-align=center align=right></el-table-column>
					<el-table-column label-class-name="d1-h c-g2" class-name="d1-c" prop="d3" label="实际库存" width=60 header-align=center align=right></el-table-column>

					<el-table-column label-class-name="d1-h c-g2" class-name="d1-c" prop="d3" label="-35#柴油" width=60 header-align=center align=right></el-table-column>
				</el-table-column>

			</el-table>
		</div>
	</div>
</template>

<script>
import TH from '@/views/table-h.vue';
export default {
	components: {
		TH
	},
	data() {
		return {
			eTableHeight:'380',
			selectOption:'',
			tableData: [{
				column: '公司合计',
				d1: "1881.711",
				d2: '1809.711',
				d3: '72.000'
		  }, {
				column: '区域小计',
				d1: "1881.711",
				d2: '1809.711',
				d3: '72.000'
		  }, {
				column: '小额配送',
				date: '2016-05-01',
				d1: "",
				d2: '',
				d3: ''
		  }, {
				column: '哈区滨区域',
				d1: "196.477",
				d2: '196.477',
				d3: ''
		  }, {
				column: '佳木斯区域',
				d1: "103.583",
				d2: '86.583',
				d3: '17.000'
		  }, {
				column: '牡丹江区域',
				d1: "213.599",
				d2: '213.599',
				d3: ''
		  }, {
				column: '红兴隆区域',
				d1: "332.712",
				d2: '332.712',
				d3: '5.000'
		  }, {
				column: '宝泉岭区域',
				d1: "184.35",
				d2: '184.35',
				d3: ''
		  }, {
				column: '建三江区域',
				d1: "491.173",
				d2: '484.173',
				d3: '7'
		  }, {
				column: '九三区域',
				d1: "175.914",
				d2: '170.914',
				d3: '5.000'
		  }, {
				column: '北安区域',
				d1: "183.903",
				d2: '145.903',
				d3: '38.000'
		  }, {
				column: '总部小计',
				d1: "",
				d2: '',
				d3: ''
		  }, {
				column: '海拉尔',
				d1: "",
				d2: '',
				d3: ''
		  }, {
				column: '华  垦',
				d1: "",
				d2: '',
				d3: ''
		  }, {
				column: '中心站',
				d1: "",
				d2: '',
				d3: ''
		  }, {
				column: '其  它',
				d1: "",
				d2: '',
				d3: ''
		  }]
		}
	},
	methods: {
		selectFn(v){
			this.selectOption=v;

			this.$nextTick(()=>{
				this.$refs.eTable.doLayout();
			})
		},
		tableRowClassName(v){
			if (v.rowIndex == 1) {
				return 'd-g'
			}
			if (v.rowIndex == 0) {
				return 'd-r'
			}
			if (v.rowIndex == 11) {
				return 'd-e'
			}
			return ''
		}
	},
	created(){
			this.eTableHeight = document.body.offsetHeight - 170
		},
}

</script>
<style lang="less">
.m-t {
	border-radius: 8px;
}

.t-b {
	position: absolute;
	top: 70px;
	bottom: 10px;
	left: 10px;
	right: 10px;
	overflow: auto;
	border-radius: 8px;
}
.d1-c{
	font-size: 12px;
}
.d1-h{
	font-size: 16px;
}
.d-r,.t-b .el-table thead.is-group th.d-r,.el-table tr.d-r{
	background: #ee8734;
	color: #000;
}

.c-y,.t-b .el-table thead.is-group th.c-y,.el-table tr.c-y{
	background: #ffc000;
	color: #000;
}


.c-r,.t-b .el-table thead.is-group th.c-r,.el-table tr.c-r{
	background: #ff0000;
	color: #000;
}

.c-g,.t-b .el-table thead.is-group th.c-g,.el-table tr.c-g{
	background: #77fb6d;
	color: #000;
}

.c-g2,.t-b .el-table thead.is-group th.c-g2,.el-table tr.c-g2{
	background: #00b050;
	color: #000;
}

.d-g,.el-table thead.is-group th.d-g,.el-table tr.d-g{
	background: #5af431;
	color: #000;
}



.d-g,.el-table thead.is-group th.d-e,.el-table tr.d-e{
	background: #fff;
	color: #000;
}


.el-table thead.is-group th{
	background:#fff;
	color: #000;
}
</style>
