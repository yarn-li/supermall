<template>
	<div id="app">
		<router-view />
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
