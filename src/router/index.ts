import { createRouter, createWebHistory } from 'vue-router'
import Home from "../components/Home.vue"
import LoginPage from "../pages/LoginPage.vue"
import RegisterPage from "../pages/RegisterPage.vue"
import UserManager from "../pages/admin/Users.vue"
import Editer from "../components/Editer.vue"
import Run from "../components/Run.vue"
import Result from "../components/Result.vue"
import About from "../pages/About.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/login", component: LoginPage },
    { path: "/register", component: RegisterPage },
    { path: "/admin/users", component: UserManager },
    { path: "/edit/:id", component: Editer },
    { path: "/run/:id", component: Run },
    { path: "/result/:id", component: Result },
    
  ]
})

export default router
