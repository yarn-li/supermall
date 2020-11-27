<template>
	<div class="itemrate" v-if="rate.list">
		<div class="top">
			<span>商品评价({{ rate.cRate }})</span>
			<a href="javacsript:;">查看全部&nbsp;&gt;</a>
		</div>
		<div class="middle">
			<div class="user">
				<img :src="rate.list[0].user.avatar" alt="" />
				<span>{{ rate.list[0].user.uname }}</span>
				<div class="content">
					{{ rate.list[0].content }}
				</div>
			</div>
		</div>
		<div class="bottom">
			{{ rate.list[0].style }}
		</div>
	</div>
</template>
<script>
export default {
	name: "itemrate",
	props: {
		rate: {
			type: Object,
			default() {
				return {};
			},
		},
	},
};
</script>
<style scoped>
.itemrate {
	color: black;
	padding: 10px;
	padding-bottom: 20px;
	border-bottom: 1vh solid rgba(0, 0, 0, 0.1);
}
.top {
	display: flex;
	justify-content: space-between;
}
.top a {
	color: red;
}
.middle {
	margin-top: 2vh;
	margin-bottom: 2vh;
}
.user {
	font-size: 14px;
}
.user img {
	width: 30px;
	border-radius: 50%;
	vertical-align: middle;
	margin-right: 2vw;
}
.content {
	padding-top: 2vh;
	padding-bottom: 2vh;
}
.bottom {
	color: red;
	font-size: 14px;
}
</style>
