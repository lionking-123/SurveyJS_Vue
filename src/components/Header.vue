<!-- src/components/Header.vue -->
<template>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <img src='/assets/logo.svg' class="" alt="logo" height="50px">
        </div>
        <ul class="nav navbar-nav">
          <li v-if="isLoggedIn && role == 'user'">
            <router-link to="/survey" class="white">Surveys</router-link>
          </li>
          <li v-if="isLoggedIn && role == 'company'">
            <router-link to="/my_survey" class="white">My Survey</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
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
          <!-- <li>
            <router-link to="/admin/users">User Manager</router-link>
          </li> -->
        </ul>
      </div>
    </nav>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { onAuthStateChanged, signOut } from 'firebase/auth'
  import { auth } from '@/firebase'
  import { useRouter } from 'vue-router'
  import { getCurrentUser } from '@/models/users';

  const router = useRouter()
  const isLoggedIn = ref(false)
  var role = 'false';
  onAuthStateChanged(auth, async(user) => {
    if(user){
      role = await getCurrentUser(user.email);
    }
    isLoggedIn.value = !!user;    
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
  .container-fluid{
    background-color: #19b394;
  }
  .navbar-nav li a{
    color: white;
    font-size: 22px;
  }
  </style>
  