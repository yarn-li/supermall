<template>
	<div class="detailInfo" v-if="detailInfo.detailImage">
		<div class="info-desc clear-fix">
			<div class="start"></div>
			<div class="desc">{{ detailInfo.desc }}</div>
			<div class="end"></div>
		</div>
		<div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
		<div
			class="info-list"
			v-for="(item, index) in detailInfo.detailImage[0].list"
			:key="index"
		>
			<img :src="item" alt="" @load="imageLoad" />
		</div>
	</div>
</template>
<script>
import { debounce } from "@/common/debounce";
export default {
	name: "detailInfo",
	props: {
		detailInfo: {
			type: Object,
			default() {
				return {};
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
.detailInfo {
	position: relative;
	padding: 20px;
	border-bottom: 1vh solid rgba(0, 0, 0, 0.1);
}
.info-desc {
	padding: 0 15px;
}

.info-desc .start,
.info-desc .end {
	width: 90px;
	height: 1px;
	background-color: #a3a3a5;
	position: relative;
}

.info-desc .start {
	float: left;
}

.info-desc .end {
	float: right;
}

.info-desc .start::before,
.info-desc .end::after {
	content: "";
	position: absolute;
	width: 5px;
	height: 5px;
	background-color: #333;
	bottom: 0;
}

.info-desc .end::after {
	right: 0;
}

.info-desc .desc {
	padding: 15px 0;
	font-size: 14px;
}
.info-key {
	padding: 10px;
	color: black;
	text-align: center;
}
.info-list {
	margin-left: -20px;
}
.info-list img {
	width: 100vw;
}
</style>
