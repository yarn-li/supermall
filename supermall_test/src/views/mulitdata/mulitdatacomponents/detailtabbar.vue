<template>
	<div class="tabbar">
		<div class="left">
			<div>
				<div class="item-kefu item"></div>
				<p>客服</p>
			</div>
			<div>
				<div class="item-dianpu item"></div>
				<p>店铺</p>
			</div>
			<div @click="itemclick">
				<div class="item-shoucang item" :class="{ itemclick: isclick }"></div>
				<p>收藏</p>
			</div>
		</div>
		<div class="right">
			<div class="cart" @click="addcart">
				<p>加入购物车</p>
			</div>
			<div class="buy">
				<p>购买</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "detailtabbar",
	data() {
		return {
			isclick: false,
		};
	},
	methods: {
		itemclick() {
			this.isclick = !this.isclick;
			if (this.isclick) {
				alert("收藏成功");
			} else {
				alert("取消成功");
			}
		},
		addcart() {
			this.$emit("addcart");
			alert("购物车添加成功");
		},
	},
};
</script>
<style scoped>
.tabbar {
	background-color: white;
	width: 100%;
	height: 49px;
	position: absolute;
	bottom: 0;
	left: 0;
	z-index: 100;
	display: flex;
}
.tabbar > div {
	flex: 1;
}
.right,
.left {
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.left {
	font-size: 12px;
}
.right {
	font-size: 18px;
	text-align: center;
	line-height: 49px;
}
.right > div {
	width: 50%;
	height: 100%;
}
.item {
	width: 25px;
	height: 25px;
	background: url("../../../assets/img/detail/detail_bottom.png");
	background-size: 100%;
}
.itemclick {
	background-position: 0 -30px;
}
.item-dianpu {
	background-position: 0 -112px;
}
.item-kefu {
	background-position: 0 -61px;
}
.cart {
	background-color: yellow;
	color: black;
}
.buy {
	color: white;
	background-color: red;
}
</style>
