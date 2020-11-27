<template>
	<div class="categropInfo">
		<div class="info-item" v-for="(item, index) in subCategory" :key="index">
			<a :href="item.link">
				<img :src="item.image" alt="" />
				<p>{{ item.title }}</p></a
			>
		</div>
	</div>
</template>
<script>
import { getsubCategory } from "@/network/category";
export default {
	name: "categropInfo",
	props: {
		subCategory: {
			type: Array,
			default() {
				return [];
			},
		},
	},
	mounted() {},
};
</script>
<style scoped>
.categropInfo {
	width: 75vw;
	display: flex;
	flex-wrap: wrap;
	text-align: center;
	font-size: 14px;
}
.info-item {
	padding: 5px;
	width: calc(100% / 3);
	border: 1px solid rgba(0, 0, 0, 0.1);
}
.info-item img {
	width: 100%;
	padding: 10px;
}
</style>
