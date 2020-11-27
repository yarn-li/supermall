<template>
	<div>
		<swiper class="mulitdataswiper">
			<swiper-item v-for="(item, index) in topImg" :key="index">
				<img :src="item" alt="" />
			</swiper-item>
		</swiper>
	</div>
</template>
<script>
import Swiper from "@/components/common/swiper/Swiper.vue";
import SwiperItem from "@/components/common/swiper/SwiperItem.vue";

export default {
	name: "mulitdataswiper",
	components: {
		Swiper,
		SwiperItem,
	},
	props: {
		topImg: {
			type: Array,
			default() {
				return [];
			},
		},
	},
};
</script>
<style scoped>
.mulitdataswiper {
	height: 35vh;
	overflow: hidden;
}
</style>
