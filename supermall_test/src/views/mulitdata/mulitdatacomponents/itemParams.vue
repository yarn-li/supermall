<template>
	<div class="itemParams" v-if="itemParams.rule">
		<table class="param-info">
			<p>{{ itemParams.rule.key }}</p>
			<tr v-for="(itema, indexa) in itemParams.rule.tables[0]" :key="indexa">
				<td v-for="(item, index) in itema" :key="index">
					{{ item }}
				</td>
			</tr>
			<tr class="infoset" v-for="item in itemParams.info.set" :key="item.key">
				<td>{{ item.key }}</td>
				<td class="value">{{ item.value }}</td>
			</tr>
		</table>
	</div>
</template>
<script>
export default {
	name: "itemParams",
	props: {
		itemParams: {
			type: Object,
			default() {
				return {};
			},
		},
	},
};
</script>
<style scoped>
.param-info {
	width: 100%;
	border-collapse: collapse;
}
.param-info p {
	color: red;
	text-align: center;
	padding-bottom: 5px;
}
.param-info tr {
	padding: 10px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: space-between;
}
.value {
	text-align: left;
	font-size: 12px;
	color: red;
}
.infoset {
	display: block !important;
}
.infoset td:first-child {
	padding-right: 90px;
}
</style>
