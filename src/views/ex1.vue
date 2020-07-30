<template>
	<div>
		<t-h></t-h>
		<div class="t-b">
			<el-table :data="tableData" style="width: 100%" height="780" class="m-t">
				<el-table-column label-class-name="d1-h" class-name="d1-c" fixed prop="column" label="" width="100">
				</el-table-column>
				<el-table-column label-class-name="d1-h" class-name="d1-c" fixed align=center prop="date" label="汽柴油合计" width=270>
					<el-table-column label-class-name="d1-h" class-name="d1-c" label="本期销售" align=center>
						<el-table-column label-class-name="d1-h" class-name="d1-c" prop="d1"  header-align=center align=right label="合计" width=90>
						</el-table-column>
						<el-table-column label-class-name="d1-h" class-name="d1-c" prop="d2" header-align=center align=right label="枪销" width=90>
						</el-table-column>
						<el-table-column label-class-name="d1-h" class-name="d1-c" prop="d3" header-align=center align=right label="批发" width=90>
						</el-table-column>
					</el-table-column>
				</el-table-column>
				<el-table-column label-class-name="d1-h" class-name="d1-c" prop="date" label="汽油合计" header-align=center>
					<el-table-column label-class-name="d1-h" class-name="d1-c" label="前期库存" width=60 header-align=center></el-table-column>
					<el-table-column label-class-name="d1-h" class-name="d1-c" label="本期进货" width=60 header-align=center></el-table-column>
					<el-table-column label-class-name="d1-h" class-name="d1-c" label="本期销售" width=180 header-align=center>
						<el-table-column label-class-name="d1-h" class-name="d1-c" prop="d1"  label="合计" header-align=center align=right width=90>
						</el-table-column>
						<el-table-column label-class-name="d1-h" class-name="d1-c" prop="d2" label="枪销" header-align=center align=right width=90>
						</el-table-column>
						<el-table-column label-class-name="d1-h" class-name="d1-c" prop="d3" label="批发" header-align=center align=right width=90>
						</el-table-column>
					</el-table-column>
					<el-table-column label-class-name="d1-h" class-name="d1-c" prop="d3" label="本期库存" header-align=center align=right width=60></el-table-column>
				</el-table-column>

				<el-table-column label-class-name="d1-h" class-name="d1-c" prop="date" label="92#车用（乙醇）" header-align=center align=right>
					<el-table-column label-class-name="d1-h" class-name="d1-c" label="前期库存" width=60></el-table-column>
					<el-table-column label-class-name="d1-h" class-name="d1-c" label="本期进货" width=60></el-table-column>
					<el-table-column label-class-name="d1-h" class-name="d1-c" label="本期销售" width=180>
						<el-table-column label-class-name="d1-h" class-name="d1-c" prop="d1"  label="合计" width=90 header-align=center align=right>
						</el-table-column>
						<el-table-column label-class-name="d1-h" class-name="d1-c" prop="d2" label="枪销" width=90 header-align=center align=right>
						</el-table-column>
						<el-table-column label-class-name="d1-h" class-name="d1-c" prop="d3" label="批发" width=90 header-align=center align=right>
						</el-table-column>
					</el-table-column>
					<el-table-column label-class-name="d1-h" class-name="d1-c" prop="d3" label="本期库存" width=60 header-align=center align=right></el-table-column>
				</el-table-column>

				<el-table-column label-class-name="d1-h" class-name="d1-c" prop="date" label="95#车用（乙醇）" header-align=center align=right>
					<el-table-column label-class-name="d1-h" class-name="d1-c" label="前期库存" width=60></el-table-column>
					<el-table-column label-class-name="d1-h" class-name="d1-c" label="本期进货" width=60></el-table-column>
					<el-table-column label-class-name="d1-h" class-name="d1-c" label="本期销售" width=180>
						<el-table-column label-class-name="d1-h" class-name="d1-c" prop="d1"  label="合计" width=90 header-align=center align=right>
						</el-table-column>
						<el-table-column label-class-name="d1-h" class-name="d1-c" prop="d2" label="枪销" width=90 header-align=center align=right>
						</el-table-column>
						<el-table-column label-class-name="d1-h" class-name="d1-c" prop="d3" label="批发" width=90 header-align=center align=right>
						</el-table-column>
					</el-table-column>
					<el-table-column label-class-name="d1-h" class-name="d1-c" prop="d3" label="本期库存" width=60 header-align=center align=right></el-table-column>
				</el-table-column>

				<el-table-column label-class-name="d1-h" class-name="d1-c" prop="date" label="0#车用（国Ⅵ）" header-align=center align=right>
					<el-table-column label-class-name="d1-h" class-name="d1-c" label="前期库存" width=60  header-align=center align=right></el-table-column>
					<el-table-column label-class-name="d1-h" class-name="d1-c" label="本期进货" width=60 header-align=center align=right></el-table-column>
					<el-table-column label-class-name="d1-h" class-name="d1-c" label="本期销售" width=180>
						<el-table-column label-class-name="d1-h" class-name="d1-c" prop="d1"  label="合计" width=90 header-align=center align=right>
						</el-table-column>
						<el-table-column label-class-name="d1-h" class-name="d1-c" prop="d2" label="枪销" width=90 header-align=center align=right>
						</el-table-column>
						<el-table-column label-class-name="d1-h" class-name="d1-c" prop="d3" label="批发" width=90 header-align=center align=right>
						</el-table-column>
					</el-table-column>
					<el-table-column label-class-name="d1-h" class-name="d1-c" prop="d3" label="本期库存" width=60 header-align=center align=right></el-table-column>
				</el-table-column>

				<el-table-column label-class-name="d1-h" class-name="d1-c" prop="date" label="-35#车用（Ⅵ）">
					<el-table-column label-class-name="d1-h" class-name="d1-c" label="前期库存" width=60 header-align=center align=right></el-table-column>
					<el-table-column label-class-name="d1-h" class-name="d1-c" label="本期进货" width=60 header-align=center align=right></el-table-column>
					<el-table-column label-class-name="d1-h" class-name="d1-c" label="本期销售" width=180 header-align=center align=right>
						<el-table-column label-class-name="d1-h" class-name="d1-c" prop="d1"  label="合计" width=90 header-align=center align=right>
						</el-table-column>
						<el-table-column label-class-name="d1-h" class-name="d1-c" prop="d2" label="枪销" width=90 header-align=center align=right>
						</el-table-column>
						<el-table-column label-class-name="d1-h" class-name="d1-c" prop="d3" label="批发" width=90 header-align=center align=right>
						</el-table-column>
					</el-table-column>
					<el-table-column label-class-name="d1-h" class-name="d1-c" prop="d3" label="本期库存" width=60 header-align=center align=right></el-table-column>
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
	}
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
</style>
