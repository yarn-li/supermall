<template>
	<div class="userBar">
		<img class="head" src="@/assets/img/profile/avatar.svg" alt="" />
		<div class="login">
			<p @click="login">登录/注册</p>
			<p class="phone">
				<img src="@/assets/img/profile/phone.svg" alt="" />
				暂无绑定手机号
			</p>
			<img class="arrow" src="@/assets/img/common/arrow-left.svg" alt="" />
		</div>
	</div>
</template>
<script>
export default {
	name: "userBar",
	methods: {
		login() {
			this.$router.replace("/login");
		},
	},
};
</script>
<style scoped>
.userBar {
	width: 100%;
	height: 15vh;
	background-color: var(--color-high-text);
	display: flex;
	align-items: center;
}
.head {
	width: 100px;
	padding: 10px;
}
.login {
	position: relative;
	color: white;
	font-size: 20px;
}
.phone {
	padding-top: 5px;
	font-size: 14px;
}
.phone img {
	vertical-align: middle;
	width: 20px;
}
.arrow {
	position: absolute;
	width: 30px;
	top: 10px;
	right: -140px;
}
</style>
