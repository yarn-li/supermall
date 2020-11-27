<template>
	<div class="useroption">
		<div>
			<img src="@/assets/img/profile/cart.svg" alt="" />
			<p>我的购物车</p>
		</div>
		<div>
			<img src="@/assets/img/profile/shopping.svg" alt="" />
			<p>
				下载购物App
			</p>
		</div>
	</div>
</template>
<script>
export default {
	name: "useroption",
};
</script>
<style scoped>
.useroption div {
	display: flex;
	padding: 10px 20px;
	border-top: 1px solid rgba(0, 0, 0, 0.1);
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
div img {
	width: 30px;
	vertical-align: middle;
}
div p {
	padding-left: 10px;
	line-height: 30px;
}
</style>
