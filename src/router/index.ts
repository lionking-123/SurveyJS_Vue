import { createRouter, createWebHistory } from 'vue-router'
import Home from "../components/Home.vue"
import LoginPage from "../pages/LoginPage.vue"
import RegisterPage from "../pages/RegisterPage.vue"
import Editer from "../components/Editer.vue"
import CompanyLogin from "../pages/admin/LoginPage.vue"
import CompanyRegister from "../pages/admin/RegisterPage.vue"
import Run from "../components/Run.vue"
import Result from "../components/Result.vue"
import About from "../pages/About.vue"
import store from '@/store';
import MySurvey from "../components/MySurvey.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: LoginPage },
    { path: "/survey", component: Home,props: () => ({ user: store.state.user }) },
    { path: "/my_survey", component: MySurvey,props: () => ({ user: store.state.user }) },
    { path: "/about", component: About },
    { path: "/login", component: LoginPage },
    { path: "/register", component: RegisterPage },
    { path: "/admin/login", component: CompanyLogin },
    { path: "/admin/register", component: CompanyRegister },
    { path: "/edit/:id", component: Editer },
    { path: "/run/:id", component: Run },
    { path: "/result/:id", component: Result },
    
  ]
})

export default router
