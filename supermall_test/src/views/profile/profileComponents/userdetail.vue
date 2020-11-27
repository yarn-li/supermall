<template>
	<div class="userdetail">
		<div>
			<img src="@/assets/img/profile/message.svg" alt="" />
			<p>我的消息</p>
		</div>
		<div>
			<img src="@/assets/img/profile/pointer.svg" alt="" />
			<p>
				积分商城
			</p>
		</div>
		<div>
			<img src="@/assets/img/profile/vip.svg" alt="" />
			<p>会员卡</p>
		</div>
	</div>
</template>
<script>
export default {
	name: "userdetail",
};
</script>
<style scoped>
.userdetail {
	border-bottom: 1vh solid rgba(0, 0, 0, 0.1);
}
.userdetail div {
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
