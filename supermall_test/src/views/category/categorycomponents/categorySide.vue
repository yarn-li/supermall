<template>
	<div class="categorySide">
		<div
			class="side-item"
			v-for="(item, index) in category"
			:class="{ isactive: currentindex == index }"
			@click="itemclick(index, item.maitKey)"
			:key="index"
		>
			<p>{{ item.title }}</p>
		</div>
	</div>
</template>
<script>
export default {
	name: "categorySide",
	data() {
		return {
			currentindex: 0,
		};
	},
	props: {
		category: {
			type: Array,
			defaule() {
				return {};
			},
		},
	},
	methods: {
		itemclick(index, maitKey) {
			this.currentindex = index;
			this.$emit("getSubategory", maitKey);
		},
	},
	mounted() {},
};
</script>
<style scoped>
.categorySide {
	position: relative;
	background-color: #f6f6f6;
	width: 25vw;
	text-align: center;
}
.side-item {
	padding: 15px 0;
	border-left: 1vw solid rgba(0, 0, 0, 0.1);
}
.isactive {
	border-color: hotpink;
	background-color: #fff;
}
</style>
