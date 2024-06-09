<template>
    <h1>Create an Account</h1>
    <p class="">
        <input type="text" placeholder="Email" v-model="email" class="" />
    </p>
    <p class="">
        <input type="password" placeholder="Password" v-model="password" class="" />
    </p>
    <p v-if="errMsg">{{ errMsg }}</p>

    <p><button @click="register">Submit</button></p>
</template>
<script setup>
import { ref } from 'vue'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebase';
import { useRouter } from 'vue-router' // import router
const router = useRouter() // get a reference to our vue router

const email = ref('')
const password = ref('')
const errMsg = ref() // ERROR MESSAGE

const register = async () => {
    await createUserWithEmailAndPassword(auth, email.value, password.value)
        .then(() => {
            router.push('/login');
        })
        .catch(error => {
            switch (error.code) {
                case 'auth/weak-password':
                    errMsg.value = 'Password should be at least 6 characters'
                    break;
                case 'auth/email-already-in-use':
                    errMsg.value = 'Email is exists!'
                    break;
                default:
                    break;
            }
        })
}
</script>