<template>
	<div class="topbar">
		<div class="left"><slot name="left"></slot></div>
		<div class="center"><slot name="center"></slot></div>
		<div class="right"><slot name="right"></slot></div>
	</div>
</template>
<script>
export default {
	name: "topBar",
};
</script>
<style scoped>
.topbar {
	display: flex;
	height: 44px;
	background-color: var(--color-high-text);
	line-height: 44px;
	text-align: center;
}
.left,
.right {
	width: 70px;
}
.center {
	display: flex;
	flex: 1;
	justify-content: space-around;
}
</style>
