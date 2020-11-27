<template>
	<div class="Cart">
		<top-bar class="topbar">
			<p slot="center">购物车({{ countItem }})</p>
		</top-bar>
		<scroll>
			<carts />
		</scroll>
		<cartbar />
	</div>
</template>
<script>
import topBar from "@/components/content/topBar/topBar.vue";
import Scroll from "@/components/common/scroll/scroll.vue";
import Cartbar from "./cartcomponents/cartbar.vue";
import Carts from "./cartcomponents/carts.vue";

export default {
	components: { topBar, Scroll, Cartbar, Carts },
	name: "Cart",
	data() {
		return {
			countItem: this.$store.state.cart.length,
		};
	},
	updated() {
		console.log("upadta");
	},
};
</script>

<style scoped>
.topbar {
	background-color: var(--color-tint);
	color: #fff;
	font-weight: 700;
}
</style>
