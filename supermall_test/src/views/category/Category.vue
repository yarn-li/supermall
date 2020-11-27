<template>
	<div class="category">
		<top-bar class="category-nav">
			<p slot="center">商品分类</p>
		</top-bar>
		<scroll class="side-scroll">
			<category-side
				:category="category"
				@getSubategory="getSubategory($event)"
			/>
		</scroll>
		<scroll class="info-scroll">
			<categrop-info
				:subCategory="subCategory"
				@load="imgload"
				ref="categrop-info"
			/>
		</scroll>
	</div>
</template>
<script>
import {
	getcategory,
	getsubCategory,
	getCategoryDetail,
} from "@/network/category";

import { debounce } from "@/common/debounce.js";

import TopBar from "@/components/content/topBar/topBar.vue";
import categorySide from "./categorycomponents/categorySide.vue";
import Scroll from "../../components/common/scroll/scroll.vue";
import CategropInfo from "./categorycomponents/categropInfo.vue";
export default {
	name: "Category",
	components: { categorySide, TopBar, Scroll, CategropInfo },
	data() {
		return {
			category: [],
			subCategory: [],
			isshow: true,
		};
	},
	methods: {
		getSubategory(maitKey) {
			getsubCategory(maitKey).then((res) => {
				this.subCategory = res.data.list;
			});
		},
		imgload() {
			debounce(this.$refs.categrop - info.scroll.refresh());
		},
	},
	mounted() {
		getcategory().then((res) => {
			this.category = res.data.category.list;
			getsubCategory(this.category[0].maitKey).then((res) => {
				this.subCategory = res.data.list;
			});
		});
	},
	created() {},
};
</script>

<style scoped>
.category-nav {
	background-color: var(--color-tint);
	color: #fff;
	font-weight: 700;
}
.side-scroll {
	width: 25vw;
}
.info-scroll {
	width: 75vw;
	left: 25vw;
}
</style>
