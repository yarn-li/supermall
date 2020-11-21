<template>
	<div class="goods">
		<goodsitem v-for="(item, index) in good" :key="index">
			<img slot="item-img" :src="item.show.img" @load="imageLoad" alt="" />
			<div slot="item-info">
				<p>{{ item.title }}</p>
				<p>
					<span>{{ item.orgPrice,}}</span>
					<span>
						<img src="@/assets/img/common/collect.svg" alt="" />
						{{ item.cfav }}
					</span>
				</p>
			</div>
		</goodsitem>
	</div>
</template>
<script>
import goodsitem from "./goodsitem.vue";
import { debounce } from "@/common/debounce";

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
	methods: {
		imageLoad() {
			debounce(() => {
				this.$bus.$emit("ItemImageLoad");
			}, 100);
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
