import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const Home = () =>
	import("@/views/home/Home.vue")
const Cart = () =>
	import("@/views/cart/Cart.vue")
const Category = () =>
	import("@/views/category/Category.vue")
const Profile = () =>
	import("@/views/profile/Profile.vue")
const Mulitdata = ()=>
	import("@/views/mulitdata/Mulitdata.vue")

const routes = [{
	path: "/",
	// name: "home",
	redirect: "/home"
}, {
	path: "/home",
	// name: "home",
	component: Home,
	meta: { 
		keepAlive: true // 需要缓存 
		}, 
}, {
	path: "/category",
	// name: "category",
	component: Category
}, {
	path: "/cart",
	// name: "cart",
	component: Cart
}, {
	path: "/profile",
	// name: "profile",
	component: Profile
}, {
	path: "/mulitdata",
	// name: "profile",
	component: Mulitdata
}]

const router = new VueRouter({
	routes,
	mode: "history"
})

export default router