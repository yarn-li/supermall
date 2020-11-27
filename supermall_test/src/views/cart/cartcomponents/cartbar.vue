<template>
	<div class="cartbar">
		<div class="selectall" @click="selectallclick">
			<img
				:class="{ active: isclick }"
				class="select-icon"
				src="@/assets/img/cart/tick.svg"
				alt=""
			/>
			全选
		</div>
		<div class="count">总计:￥{{ totalprice }}</div>
		<div class="buy">购买</div>
	</div>
</template>
<script>
export default {
	name: "cartbar",
	data() {
		return {
			totalprice: 0,
			isclick: this.$store.state.isselectAll,
		};
	},
	methods: {
		selectallclick() {
			this.$store.state.isselectAll = !this.$store.state.isselectAll;
			this.isclick = this.$store.state.isselectAll;
			this.$bus.$emit("isselectAll", this.$store.state.isselectAll);
			if (!this.$store.state.isselectAll) {
				this.totalprice = 0;
			} else {
				this.totalprice = 0;
				this.$store.state.cart.forEach((item) => {
					this.totalprice += item.lowPrice * item.count;
				});
			}
		},
	},
	mounted() {
		this.totalprice = 0;
		this.$store.state.cart.forEach((item) => {
			this.totalprice += item.lowPrice * item.count;
		});
		this.$bus.$on("itemselect", (cartitem) => {
			this.$store.state.isselectAll = true;
			this.$store.state.cart.forEach((item) => {
				if (!item.itemselect) {
					return (this.$store.state.isselectAll = item.itemselect);
				}
			});
			this.isclick = this.$store.state.isselectAll;
			let sum = cartitem.lowPrice * cartitem.count;
			if (!cartitem.itemselect) {
				this.totalprice = this.totalprice - sum;
			} else {
				this.totalprice = this.totalprice + sum;
			}
		});
	},
};
</script>
<style scoped>
.cartbar {
	width: 100%;
	height: 49px;
	position: fixed;
	bottom: 49px;
	left: 0;
	display: flex;
	line-height: 49px;
}
.select-icon {
	border: 1px solid rgba(0, 0, 0, 0.5);
	border-radius: 50%;
	vertical-align: text-bottom;
}
.selectall {
	color: black;
	text-align: center;
	flex: 1;
}
.buy {
	flex: 1;
	width: 20vw;
	background-color: red;
	text-align: center;
	font-size: 20px;
	color: white;
}
.count {
	color: black;
	font-size: 18px;
	flex: 2;
	font-weight: 600;
}
.active {
	background-color: hotpink;
}
</style>
