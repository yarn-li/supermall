<template>
	<div class="tabcontrolbar">
		<div
			v-for="(item, index) in options"
			:key="index"
			@click="itemclick(index)"
			:class="{ active: index === currentindex }"
		>
			<p>{{ item }}</p>
		</div>
	</div>
</template>
<script>
export default {
	name: "tabcontrolbar",
	data() {
		return {
			currentindex: 0,
		};
	},
	props: {
		options: {
			type: Array,
			default() {
				return [];
			},
		},
		taboffsettop: {
			type: Number,
			default: 0,
		},
	},
	methods: {
		itemclick(index) {
			this.currentindex = index;
			this.$emit("tabcontrolclick", index);
		},
	},
};
</script>
vh
<style scoped>
.tabcontrolbar {
	display: flex;
	justify-content: space-around;
	background-color: #fff;
	padding-top: 1vh;
	padding-bottom: 1vh;
}
.tabcontrolbar div {
	padding: 5px;
}
.active {
	box-sizing: border-box;
	color: var(--color-high-text);
	border-bottom: 3px solid var(--color-high-text);
}
</style>
