<template>
	<div>
		<top-bar class="home_nav">
			<p slot="center">购物街</p>
		</top-bar>
		<tabcontrolbar
			ref="tabcontrolbar_copy"
			v-show="isshow"
			class="tab_one"
			:options="['流行', '新款', '精选']"
			:taboffsettop="taboffsettop"
			@tabcontrolclick="tabcontrolclick"
		/>
		<scroll ref="scroll" @scrollend="scrollend" @contentscroll="contentscroll">
			<homeswiper :banners="banners" @imgload="imgload" />
			<recommends :recommends="recommends" />
			<featureview />
			<tabcontrolbar
				ref="tabcontrolbar"
				class="tab_two"
				:options="['流行', '新款', '精选']"
				@tabcontrolclick="tabcontrolclick"
			/>
			<goods :good="good" />
		</scroll>
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
import TopBar from "@/components/content/topBar/topBar.vue";
import {
	getHomeMultidata,
	getHomePopdata,
	getHomeSelldata,
	getHomeNewdata,
} from "@/network/home_request";
import Homeswiper from "./homecompoents/homeswiper.vue";
import Recommends from "./homecompoents/recommends.vue";
import Featureview from "./homecompoents/featureview.vue";
import Tabcontrolbar from "@/components/common/tabcontrolbar/tabcontrolbar.vue";
import Goods from "@/components/common/goods/goods.vue";
import Scroll from "@/components/common/scroll/scroll.vue";

export default {
	name: "Home",
	data() {
		return {
			banners: [],
			recommends: [],
			options: [],
			goods: {
				pop: {
					page: 1,
					list: [],
				},
				new: {
					page: 1,
					list: [],
				},
				sell: {
					page: 1,
					list: [],
				},
			},
			good: [],
			index: 0,
			taboffsettop: 0,
			isshow: false,
			backtop: false,
		};
	},
	components: {
		TopBar,
		Homeswiper,
		Recommends,
		Featureview,
		Tabcontrolbar,
		Goods,
		Scroll,
	},
	methods: {
		tabcontrolclick(index) {
			this.$refs.scroll.scroll.scrollTo(0, -this.taboffsettop, 0);
			this.index = index;
			if (index == 0) {
				this.good = this.goods.pop.list;
			} else if (index == 1) {
				this.good = this.goods.new.list;
			} else if (index == 2) {
				this.good = this.goods.sell.list;
			}
			this.$refs.tabcontrolbar.currentindex = index;
			this.$refs.tabcontrolbar_copy.currentindex = index;
		},
		scrollend() {
			if (this.index == 0) {
				this.goods.pop.page = this.goods.pop.page + 1;
				getHomePopdata(this.goods.pop.page).then((res) => {
					this.goods.pop.list.push(...res.data.list);
				});
			} else if (this.index == 1) {
				this.goods.new.page = this.goods.new.page + 1;
				getHomeNewdata(this.goods.new.page).then((res) => {
					this.goods.new.list.push(...res.data.list);
				});
			} else if (this.index == 2) {
				this.goods.sell.page = this.goods.sell.page + 1;
				getHomeSelldata(this.goods.sell.page).then((res) => {
					this.goods.sell.list.push(...res.data.list);
				});
			}
		},
		imgload() {
			this.taboffsettop = this.$refs.tabcontrolbar.$el.offsetTop;
		},
		contentscroll(position) {
			if (position.y < -1000) {
				this.backtop = true;
			} else {
				this.backtop = false;
			}
			if (this.taboffsettop <= -position.y) {
				this.isshow = true;
			} else {
				this.isshow = false;
			}
		},
		backTop() {
			this.$refs.scroll.scroll.scrollTo(0, 0, 500);
		},
	},
	created() {
		getHomeMultidata().then((res) => {
			this.banners = res.data.banner.list;
			this.recommends = res.data.recommend.list;
		});
		getHomePopdata(1).then((res) => {
			this.goods.pop.list.push(...res.data.list);
		});
		getHomeSelldata(1).then((res) => {
			this.goods.sell.list.push(...res.data.list);
		});
		getHomeNewdata(1).then((res) => {
			this.goods.new.list.push(...res.data.list);
		});

		this.good = this.goods.pop.list;
	},
};
</script>

<style scoped>
.home_nav {
	background-color: var(--color-tint);
	color: #fff;
	font-weight: 700;
}
.tab_one {
	position: relative;
	z-index: 9;
}
.backtop {
	width: 60px;
	position: relative;
	z-index: 9;
	top: 70vh;
	left: 80vw;
}
</style>
