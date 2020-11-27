<template>
	<div class="userInfo">
		<div>
			<p><span>0.00 </span></p>
			<p>我的余额</p>
		</div>
		<div class="center">
			<p><span>0</span>个</p>
			<p>我的优惠</p>
		</div>
		<div>
			<p><span>0</span>分</p>
			<p>我的积分</p>
		</div>
	</div>
</template>
<script>
export default {
	name: "userInfo",
};
</script>
<style scoped>
.userInfo {
	display: flex;
	border-bottom: 1vh solid rgba(0, 0, 0, 0.1);
}
.userInfo div {
	padding: 30px;
	flex: 1;
	text-align: center;
}
p span {
	color: red;
}
.center {
	border-right: 1px solid rgba(0, 0, 0, 0.1);
	border-left: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
