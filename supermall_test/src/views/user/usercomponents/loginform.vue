<template>
	<div class="loginform">
		<h2>登录</h2>
		<div class="login">
			<div>
				<label for="username">账号:</label>
				<input
					type="text"
					name="username"
					v-model="username"
					placeholder="邮箱/手机/用户名"
				/>
			</div>
			<div>
				<label for="password">密码:</label>
				<input type="password" name="password" v-model="password" />
			</div>
			<button @click="login">登录</button>
		</div>
	</div>
</template>
<script>
import { Login } from "@/network/user";
export default {
	name: "loginform",
	data() {
		return {
			username: "",
			password: "",
		};
	},
	updated() {
		// console.log(this.password);
	},
	methods: {
		login() {
			console.log(this.username, this.password);
			Login(this.username, this.password).then((res) => {
				if (res.length > 0) {
					alert("登录成功");
					this.$router.replace("/profile");
				} else {
					alert("账号或密码错误！");
				}
			});
		},
	},
};
</script>
<style scoped>
.loginform {
	margin-top: 100px;
	text-align: center;
	color: black;
}
.login div {
	margin-top: 20px;
}
.login div label {
	margin-right: 5px;
}
.login div input {
	width: 200px;
	height: 30px;
}
button {
	color: black;
	width: 100px;
	height: 30px;
	background-color: red;
	border-radius: 10px;
	margin-top: 20px;
	outline: none;
}
</style>
