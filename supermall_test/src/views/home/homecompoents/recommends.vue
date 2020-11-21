<template>
	<div class="recommends">
		<div v-for="(item, index) in recommends" :key="index">
			<img :src="item.image" alt="" />
			<p>{{ item.title }}</p>
		</div>
	</div>
</template>
<script>
export default {
	name: "recommends",
	props: {
		recommends: {
			type: Array,
			default() {
				return [];
			},
		},
	},
};
</script>
<style scoped>
.recommends {
	display: flex;
	justify-content: space-around;
	margin-top: 2vh;
	padding-bottom: 3vh;
	text-align: center;
	border-bottom: 5px solid lightgray;
}
img {
	width: 80px;
	margin-bottom: 2vh;
}
</style>
