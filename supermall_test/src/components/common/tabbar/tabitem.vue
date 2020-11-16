<template>
	<div class="tabbar-item" @click="itemclick">
		<div v-if="!isActive"><slot name="item-icon"></slot></div>
		<div v-else><slot name="item-active"></slot></div>
		<div :style="active"><slot name="item-text"></slot></div>
	</div>
</template>
<script>
export default {
	name: "tabBarItem",
	props: {
		path: String,
		activeColor: {
			type: String,
			default: "red",
		},
	},
	methods: {
		itemclick() {
			this.$router.replace(this.path);
		},
	},
	computed: {
		isActive() {
			return this.$route.path.indexOf(this.path) != -1;
		},
		active() {
			return this.isActive ? { color: this.activeColor } : {};
		},
	},
};
</script>
<style scoped>
.tabbar-item {
	margin-top: 4px;
	flex: 1;
}
.tabbar-item img {
	width: 26px;
	height: 26px;
	vertical-align: middle;
	margin-bottom: 2px;
}
</style>
