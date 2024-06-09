<!-- src/components/Header.vue -->
<template>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="/">SurveyJS + Vue 3</a>
        </div>
        <ul class="nav navbar-nav">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/creator">Survey Creator</router-link>
          </li>
          <li>
            <router-link to="/analytics">Dashboard</router-link>
          </li>
          <li>
            <router-link to="/analyticstabulator">Results Table</router-link>
          </li>
          <li v-if="isLoggedIn">
            <router-link to="#" @click="_signOut">Logout</router-link>
          </li>
          <li v-if="!isLoggedIn">
            <router-link to="/login">Login</router-link>
          </li>
          <li v-if="!isLoggedIn">
            <router-link to="/register">Register</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { onAuthStateChanged, signOut } from 'firebase/auth'
  import { auth } from '@/firebase'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const isLoggedIn = ref(false)
  
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user
  })
  
  const _signOut = () => {
    signOut(auth).then(() => {
      router.push('/login')
    }).catch((error) => {
      console.error("Error signing out:", error)
    })
  }
  </script>
  
  <style scoped>
  .navbar {
    margin-bottom: 20px;
  }
  </style>
  