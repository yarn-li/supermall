<template>
	<div>
		<top-bar class="profile-nav">
			<div slot="center">我的信息</div>
		</top-bar>
		<user-bar />
		<user-info />
		<userdetail />
		<useroption />
	</div>
</template>
<script>
import TopBar from "@/components/content/topBar/topBar.vue";
import userBar from "./profileComponents/userBar.vue";
import Userdetail from "./profileComponents/userdetail.vue";
import UserInfo from "./profileComponents/userInfo.vue";
import Useroption from "./profileComponents/useroption.vue";
export default {
	components: { userBar, UserInfo, Userdetail, Useroption, TopBar },
	name: "Profile",
};
</script>

<style scoped>
.topbar {
	color: white;
}
</style>
