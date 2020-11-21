<template>
	<div>
		<top-bar class="home_nav">
			<p slot="left" @click="backpage">
				<img src="../../assets/img/common/back.svg" alt="" />
			</p>
			<p slot="center">购物街</p>
		</top-bar>
	</div>
</template>
<script>
import TopBar from "@/components/content/topBar/topBar.vue";
export default {
	name: "Mulitdata",
	components: {
		TopBar,
	},
	methods: {
		backpage() {
			this.$router.go(-1);
		},
	},
};
</script>
<style scoped>
.home_nav img {
	vertical-align: middle;
}
</style>
