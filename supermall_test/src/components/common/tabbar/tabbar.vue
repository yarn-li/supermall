<template>
	<div class="tabbar">
		<slot></slot>
	</div>
</template>
<script>
export default {
	name: "tabBar",
};
</script>
<style scoped>
.tabbar {
	width: 100%;
	height: 49px;
	position: fixed;
	bottom: 0;
	left: 0;
	background-color: #f6f6f6;
	display: flex;
	text-align: center;
	font-size: 14px;
}
</style>
