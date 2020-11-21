<template>
	<swiper>
		<swiper-item v-for="(item, index) in banners" :key="index">
			<a :href="item.link"> <img :src="item.image" alt="" @load="imgload"/></a>
		</swiper-item>
	</swiper>
</template>
<script>
import Swiper from "@/components/common/swiper/Swiper.vue";
import SwiperItem from "@/components/common/swiper/SwiperItem.vue";
export default {
	name: "homeswiper",
	data() {
		return {
			issend: true,
		};
	},
	components: {
		Swiper,
		SwiperItem,
	},
	props: {
		banners: {
			type: Array,
			default() {
				return [];
			},
		},
	},
	methods: {
		imgload() {
			if (this.issend) {
				this.$emit("imgload");
				this.issend = false;
			}
		},
	},
};
</script>
<style scoped></style>
