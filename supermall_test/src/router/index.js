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

const routes = [{
	path: "/",
	name: "home",
	redirect: "/home"
}, {
	path: "/home",
	name: "home",
	component: Home
}, {
	path: "/category",
	name: "category",
	component: Category
}, {
	path: "/cart",
	name: "cart",
	component: Cart
}, {
	path: "/profile",
	name: "profile",
	component: Profile
}]

const router = new VueRouter({
	routes,
	mode: "history"
})

export default router