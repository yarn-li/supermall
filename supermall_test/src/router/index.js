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
const Login = ()=>
	import("@/views/user/Login.vue")
const Register = ()=>
	import("@/views/user/Register.vue")

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
	component: Category
}, {
	path: "/cart",
	component: Cart
}, {
	path: "/profile",
	component: Profile
}, {
	path: "/mulitdata/:iid",
	component: Mulitdata
}, {
	path: "/login",
	component: Login
}, {
	path: "/register",
	component: Register
}]

const router = new VueRouter({
	routes,
	mode: "history"
})

export default router