<template>
	<div class="goods">
		<goodsitem
			v-for="(item, index) in good"
			:key="index"
			:iid="item.iid"
			:gooditem="item"
		>
		</goodsitem>
	</div>
</template>
<script>
import goodsitem from "./goodsitem.vue";
export default {
	name: "goods",
	components: { goodsitem },
	props: {
		good: {
			type: Array,
			default() {
				return [];
			},
		},
	},
};
</script>
<style scoped>
.goods {
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
}
</style>
