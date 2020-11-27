<template>
	<div id="app">
		<keep-alive exclude="Mulitdata,Cart">
			<router-view />
		</keep-alive>
		<main-tab-bar />
	</div>
</template>
<script>
import mainTabBar from "@/components/content/maintabbar/mainTabBar";
export default {
	name: "app",
	components: {
		mainTabBar,
	},
};
</script>
<style>
@import url("./assets/css/base.css");
</style>
