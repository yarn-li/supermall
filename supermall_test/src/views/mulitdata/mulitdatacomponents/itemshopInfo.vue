<template>
	<div class="shopInfo" v-if="shopInfo">
		<div class="top">
			<img class="shopLogo" :src="shopInfo.shopLogo" alt="" />
			<span>{{ shopInfo.name }}</span>
		</div>
		<div class="middle">
			<div class="middle-left">
				<div>
					<p class="middle-left-top">
						{{ (shopInfo.cSells / 10000).toFixed(1) }}万
					</p>
					<p class="middle-left-bottom">总销量</p>
				</div>
				<div>
					<p class="middle-left-top">339</p>
					<p class="middle-left-bottom">全部宝贝</p>
				</div>
			</div>
			<div class="middle-right">
				<div
					class="right-info"
					v-for="(item, index) in shopInfo.score"
					:key="index"
					:class="{ height: item.isBetter }"
				>
					<span> {{ item.name }}</span>
					<span>{{ item.score }}</span>
					<span v-if="item.isBetter" class="gao">高</span>
					<span v-else class="di">低</span>
				</div>
			</div>
		</div>
		<div class="getin">
			<button class="getinbtn">进店逛逛</button>
		</div>
	</div>
</template>
<script>
export default {
	name: "itemshopInfo",
	props: {
		shopInfo: {
			type: Object,
			defaule() {
				return {};
			},
		},
		computed: {},
	},
};
</script>
<style scoped>
.shopInfo {
	padding: 10px;
	padding-top: 25px;
	font-size: 14px;
	padding-bottom: 20px;
	border-bottom: 1vh solid rgba(0, 0, 0, 0.1);
}
.shopLogo {
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 50%;
	width: 45px;
	vertical-align: middle;
	margin-right: 10px;
}
.middle {
	padding: 20px;
	display: flex;
}
.middle > div {
	flex: 1;
}
.middle-left {
	display: flex;
	justify-content: space-around;
	align-items: center;
	text-align: center;
	color: black;
	border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.middle-left-top {
	font-size: 20px;
}
.middle-right {
	padding-left: 20px;
}
.right-info {
	display: flex;
	justify-content: space-between;
	padding-top: 1vh;
	color: green;
}
.height {
	color: red;
}
.gao {
	background-color: red;
	color: white;
}
.di {
	background-color: green;
	color: white;
}
.getin {
	text-align: center;
}
.getinbtn {
	width: 50%;
	height: 4vh;
	outline: none;
	background-color: rgb(197, 231, 245);
	border-radius: 1vh;
	border: none;
	color: grey;
}
</style>
