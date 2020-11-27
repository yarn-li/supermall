<template>
	<div>
		<cart-item v-for="(item, index) in itemList" :key="index" :item="item" />
	</div>
</template>
<script>
import cartItem from "./cartItem.vue";
export default {
	components: { cartItem },
	name: "carts",
	data() {
		return {
			itemList: this.$store.state.cart,
		};
	},
};
</script>
<style scoped></style>
