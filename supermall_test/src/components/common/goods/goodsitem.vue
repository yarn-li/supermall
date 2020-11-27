<template>
	<div class="goodsitem" @click="itemclick">
		<div class="item-img">
			<img :src="showImage" @load="imageLoad" alt="" />
		</div>
		<div class="item-info">
			<p>{{ gooditem.title }}</p>
			<p>
				<span>{{ gooditem.price }}</span>
				<span>
					<img src="@/assets/img/common/collect.svg" alt="" />
					{{ gooditem.cfav }}
				</span>
			</p>
		</div>
	</div>
</template>
<script>
import { debounce } from "@/common/debounce";
export default {
	name: "goodsitem",
	props: {
		iid: {
			type: String,
			default: "",
		},
		gooditem: {
			type: Object,
			default() {
				return {};
			},
		},
	},
	computed: {
		showImage() {
			return this.gooditem.image || this.gooditem.show.img;
		},
	},
	methods: {
		itemclick() {
			this.$router.push(`/mulitdata/${this.iid}`);
		},
		imageLoad() {
			debounce(() => {
				this.$bus.$emit("ItemImageLoad");
			}, 100);
		},
	},
};
</script>
<style scoped>
.goodsitem {
	position: relative;
	width: 48vw;
	height: 331px;
}
.goodsitem img {
	width: 100%;
}
.item-info {
	width: 100%;
	position: absolute;
	bottom: 0px;
	margin-top: 1vh;
	margin-bottom: 2vh;
	text-align: center;
}
.item-info p:first-child {
	font-size: 14px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	margin-bottom: 0.5vh;
}
.item-info p:last-child {
	padding: 0 5vw 0 0;
	display: flex;
	justify-content: space-between;
}
.item-info p span:first-child {
	color: red;
}
.item-info p img {
	width: 16px;
	vertical-align: top;
}
</style>
