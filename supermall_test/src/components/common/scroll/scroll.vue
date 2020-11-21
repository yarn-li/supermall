<template>
	<div class=" wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>
<script>
import Bscroll from "better-scroll";
import { debounce } from "@/common/debounce";
export default {
	name: "scroll",
	computed: {},
	methods: {},
	mounted() {
		this.$nextTick(() => {
			this.scroll = new Bscroll(this.$refs.wrapper, {
				scrollbar: true,
				click: true,
				pullUpLoad: true,
			});
			this.scroll.on("scroll", (position) => {
				this.$emit("contentscroll", position);
				debounce(() => {
					this.scroll.refresh();
					if (this.scroll.y <= this.scroll.maxScrollY) {
						this.$emit("scrollend");
					}
				}, 50);
			});
		});
		this.$bus.$on("ItemImageLoad", () => {
			this.scroll.refresh();
		});
	},
};
</script>
<style scoped>
.wrapper {
	position: fixed;
	top: 44px;
	bottom: 49px;
	left: 0;
	right: 0;
	overflow: hidden;
}
</style>
