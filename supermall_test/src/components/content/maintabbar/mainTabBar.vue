<template>
	<div>
		<tab-bar>
			<tab-bar-item path="/home">
				<img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="" />
				<img
					slot="item-active"
					src="@/assets/img/tabbar/home_active.svg"
					alt=""
				/>
				<p slot="item-text">首页</p>
			</tab-bar-item>
			<tab-bar-item path="/category">
				<img slot="item-icon" src="@/assets/img/tabbar/category.svg" alt="" />
				<img
					slot="item-active"
					src="@/assets/img/tabbar/category_active.svg"
					alt=""
				/>
				<p slot="item-text">分类</p>
			</tab-bar-item>
			<tab-bar-item path="/cart">
				<img slot="item-icon" src="@/assets/img/tabbar/shopcart.svg" alt="" />
				<img
					slot="item-active"
					src="@/assets/img/tabbar/shopcart_active.svg"
					alt=""
				/>
				<p slot="item-text">购物车</p>
			</tab-bar-item>
			<tab-bar-item path="/profile">
				<img slot="item-icon" src="@/assets/img/tabbar/profile.svg" alt="" />
				<img
					slot="item-active"
					src="@/assets/img/tabbar/profile_active.svg"
					alt=""
				/>
				<p slot="item-text">我的</p>
			</tab-bar-item>
		</tab-bar>
	</div>
</template>
<script>
import tabBar from "@/components/common/tabbar/tabbar";
import tabBarItem from "@/components/common/tabbar/tabitem";

export default {
	name: "mainTabBar",
	components: {
		tabBar,
		tabBarItem,
	},
};
</script>
<style scoped></style>
