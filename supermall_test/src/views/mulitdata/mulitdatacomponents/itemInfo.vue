<template>
	<div class="iteminfo" v-if="data.itemInfo">
		<div class="title">{{ data.itemInfo.desc }}</div>
		<div class="priceInfo">
			<span class="price">{{ data.itemInfo.price }}</span>
			<span class="oldprice">{{ data.itemInfo.oldPrice }}</span>
			<span class="discountDesc">{{ data.itemInfo.discountDesc }}</span>
		</div>
		<div class="columns">
			<span>{{ data.columns[0] }}</span>
			<span>{{ data.columns[1] }}</span>
			<span>{{
				data.shopInfo.services[data.shopInfo.services.length - 1].name
			}}</span>
		</div>
		<div class="service">
			<p v-for="index in data.shopInfo.services.length - 1" :key="index">
				<img
					class="serviceicon"
					:src="data.shopInfo.services[index - 1].icon"
					alt=""
				/>
				{{ data.shopInfo.services[index - 1].name }}
			</p>
		</div>
	</div>
</template>
<script>
export default {
	name: "itemInfo",
	props: {
		data: {
			type: Object,
			default() {
				return {};
			},
		},
	},
};
</script>
<style scoped>
.iteminfo {
	padding: 1vh;
	margin-top: 2vh;
	border-bottom: 1vh solid rgba(0, 0, 0, 0.1);
}
.title {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	color: black;
}
.priceInfo {
	margin-top: 1vh;
}
.price {
	color: var(--color-high-text);
	font-size: 23px;
	font-weight: 700;
}
.oldprice {
	margin: 0 2vw;
	text-decoration: line-through;
}
.discountDesc {
	position: relative;
	background-color: var(--color-high-text);
	font-size: 14px;
	padding: 0.5vw;
	color: white;
	border-radius: 2vh;
	top: -10px;
}
.columns,
.service {
	margin-top: 2vh;
	display: flex;
	justify-content: space-between;
	font-size: 12px;
	padding-bottom: 1vh;
	border-bottom: 1px solid lightgray;
}
.service {
	padding-top: 2vh;
	padding-bottom: 4vh;
	border: none;
}
.serviceicon {
	width: 13px;
	height: 13px;
	width: 13px;
	vertical-align: middle;
}
</style>
