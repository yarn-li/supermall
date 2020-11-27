<template>
	<div class="item">
		<div class="image">
			<img
				class="select"
				src="@/assets/img/cart/tick.svg"
				alt=""
				@click="itemclick"
				:class="{ active: isactive }"
			/>
			<img class="item-icon" :src="item.img" alt="" />
		</div>
		<div class="item-info">
			<div class="title">{{ item.title }}</div>
			<span class="price">￥{{ item.lowPrice }}</span>
			<span class="count">x{{ item.count }}</span>
		</div>
	</div>
</template>
<script>
export default {
	name: "cartItem",
	data() {
		return {
			isactive: false,
		};
	},
	props: {
		item: {
			type: Object,
			defaule() {
				return {};
			},
		},
	},
	methods: {
		itemclick() {
			this.isactive = !this.isactive;
			this.item.itemselect = this.isactive;
			this.$bus.$emit("itemselect", this.item);
		},
	},
	mounted() {
		this.isactive = this.item.itemselect;
		this.$bus.$on("isselectAll", (bool) => {
			this.isactive = bool;
		});
	},
};
</script>
<style scoped>
.item {
	padding: 10px;
	display: flex;
	border: 1px solid red;
}
.item-icon {
	width: 24vw;
	vertical-align: top;
	padding-right: 10px;
}
.item-info {
	position: relative;
}
.title {
	color: black;
}

.price {
	position: absolute;
	bottom: 10px;
	left: 10px;
	font-size: 18px;
	color: red;
}
.count {
	position: absolute;
	bottom: 10px;
	right: 10px;
}
.image {
	display: flex;
	align-items: center;
}
.select {
	height: 18px;

	border: 1px solid rgba(0, 0, 0, 0.5);
	border-radius: 50%;
	margin-right: 5px;
}
.active {
	background-color: hotpink;
}
</style>
