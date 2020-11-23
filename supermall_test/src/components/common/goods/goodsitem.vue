<template>
	<div class="goodsitem" @click="itemclick">
		<div class="item-img"><slot name="item-img"></slot></div>
		<div class="item-info"><slot name="item-info"></slot></div>
	</div>
</template>
<script>
export default {
	name: "goodsitem",
	props: {
		iid: {
			type: String,
			default: "",
		},
	},
	methods: {
		itemclick() {
			this.$router.push(`/mulitdata?iid=${this.iid}`);
		},
	},
};
</script>
<style scoped>
.goodsitem {
	position: relative;
	width: 48vw;
	height: 331px;
}
.goodsitem img {
	width: 100%;
}
.item-info {
	width: 100%;
	position: absolute;
	bottom: 0px;
	margin-top: 1vh;
	margin-bottom: 2vh;
	text-align: center;
}
.item-info p:first-child {
	font-size: 14px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	margin-bottom: 0.5vh;
}
.item-info p:last-child {
	padding: 0 5vw 0 0;
	display: flex;
	justify-content: space-between;
}
.item-info p span:first-child {
	color: red;
}
.item-info p img {
	width: 16px;
	vertical-align: top;
}
</style>
