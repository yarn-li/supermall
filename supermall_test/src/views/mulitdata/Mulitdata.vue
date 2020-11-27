<template>
	<div class="mulitdata">
		<top-bar class="home_nav">
			<p slot="left" @click="backpage">
				<img src="../../assets/img/common/back.svg" alt="" />
			</p>
			<p
				v-for="(item, index) in option"
				:class="{ click: currentindex == index }"
				:key="index"
				slot="center"
				@click="isclick(index)"
			>
				{{ item }}
			</p>
		</top-bar>
		<scroll class="scroll" ref="detailscroll" @contentscroll="contentscroll">
			<mulitdataswiper :topImg="data.topImages" />
			<item-info :data="data" />
			<itemshop-info :shopInfo="data.shopInfo" />
			<itemrate :rate="data.rate" ref="itemrate" />
			<detail-info :detailInfo="data.detailInfo" ref="detailInfo" />
			<item-params :itemParams="data.itemParams" />
			<goods :good="recommend" ref="detailgoods" />
		</scroll>
		<detailtabbar @addcart="addcart" />
		<img
			@click="backTop"
			v-show="backtop"
			class="backtop"
			src="@/assets/img/common/top.png"
			alt=""
		/>
	</div>
</template>
<script>
import { getDetaildata, detail, getRecommend } from "@/network/detail";

import TopBar from "@/components/content/topBar/topBar.vue";
import Scroll from "@/components/common/scroll/scroll.vue";

import mulitdataswiper from "./mulitdatacomponents/mulitdataswiper";
import itemInfo from "./mulitdatacomponents/itemInfo";
import ItemshopInfo from "./mulitdatacomponents/itemshopInfo.vue";
import Itemrate from "./mulitdatacomponents/itemrate.vue";
import DetailInfo from "./mulitdatacomponents/detailInfo.vue";
import ItemParams from "./mulitdatacomponents/itemParams.vue";
import Goods from "@/components/common/goods/goods.vue";
import Detailtabbar from "./mulitdatacomponents/detailtabbar.vue";

export default {
	name: "Mulitdata",
	data() {
		return {
			iid: null,
			option: ["商品", "评论", "参数", "推荐"],
			data: {},
			currentindex: 0,
			scrollTo: [],
			recommend: [],
			isshow: false,
			backtop: false,
			cratdata: {},
		};
	},
	components: {
		TopBar,
		mulitdataswiper,
		itemInfo,
		ItemshopInfo,
		Scroll,
		Itemrate,
		DetailInfo,
		ItemParams,
		Goods,
		Detailtabbar,
	},
	methods: {
		backpage() {
			this.$router.back();
		},
		isclick(index) {
			this.currentindex = index;
			this.$refs.detailscroll.scroll.scrollTo(0, -this.scrollTo[index], 200);
		},
		contentscroll(position) {
			if (position.y > -this.scrollTo[1]) {
				this.currentindex = 0;
			} else if (position.y > -this.scrollTo[2]) {
				this.currentindex = 1;
			} else if (position.y > -this.scrollTo[3]) {
				this.currentindex = 2;
			} else {
				this.currentindex = 3;
			}
			if (position.y < -1000) {
				this.backtop = true;
			} else {
				this.backtop = false;
			}
		},
		backTop() {
			this.$refs.detailscroll.scroll.scrollTo(0, 0, 500);
		},
		addcart() {
			this.cratdata.img = this.data.itemInfo.topImages[0];
			this.cratdata.title = this.data.itemInfo.title;
			this.cratdata.iid = this.data.itemInfo.iid;
			this.cratdata.lowPrice = this.data.itemInfo.lowPrice;
			this.$store.commit("addCart", this.cratdata);
		},
	},
	created() {
		this.iid = this.$route.params.iid;

		getDetaildata(this.iid).then((res) => {
			this.data = new detail(
				res.result.itemInfo,
				res.result.columns,
				res.result.shopInfo,
				res.result.rate,
				res.result.detailInfo,
				res.result.itemParams
			);
		});
		getRecommend().then((res) => {
			this.recommend = res.data.list;
		});
	},
	updated() {
		this.scrollTo = [];
		this.scrollTo.push(0);
		this.scrollTo.push(this.$refs.itemrate.$el.offsetTop);
		this.scrollTo.push(this.$refs.detailInfo.$el.offsetTop);
		this.scrollTo.push(this.$refs.detailgoods.$el.offsetTop);
	},
};
</script>
<style scoped>
.mulitdata .scroll {
	z-index: 10;
	background-color: white;
}
.home_nav {
	font-size: 13px;
	color: black;
	background-color: wheat;
}
.home_nav img {
	vertical-align: middle;
}
.click {
	color: red;
}
.backtop {
	width: 60px;
	position: relative;
	z-index: 20;
	top: 70vh;
	left: 80vw;
}
</style>
