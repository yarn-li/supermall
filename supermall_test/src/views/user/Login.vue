<template>
	<div>
		<top-bar class="login-nav">
			<div slot="center">登录</div>
		</top-bar>
		<loginform />
	</div>
</template>
<script>
import TopBar from "@/components/content/topBar/topBar.vue";
import Loginform from "./usercomponents/loginform.vue";
export default {
	name: "Login",
	components: {
		TopBar,
		Loginform,
	},
};
</script>
<style scoped>
.login-nav {
	color: white;
	font-weight: 600;
}
</style>
