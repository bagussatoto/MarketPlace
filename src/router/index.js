import { createRouter, createWebHistory } from 'vue-router'

//import views component
import Home from '@/views/Home.vue'
import Detail from '@/views/Detail.vue'

//Routes
const routes = [
	{
		name: 'home',
		path: '/',
		component: Home
	},
	{
		name: 'detail',
		path: '/detail',
		component: Detail
	}
]

//Init router
const router = createRouter({ history: createWebHistory(process.env.BASE_URL), routes })
export default router