<template>
    <div>
        <v-img class="mx-auto my-6" max-width="228" src="../../assets/login.png"></v-img>
        <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
            <div class="text-subtitle-1 text-medium-emphasis">Account</div>
            <v-text-field v-model="email" density="compact" placeholder="Email address"
                prepend-inner-icon="mdi-email-outline" variant="outlined"></v-text-field>
            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                Password
            </div>
            <v-text-field v-model="password" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible ? 'text' : 'password'" density="compact" placeholder="Enter your password"
                prepend-inner-icon="mdi-lock-outline" variant="outlined"
                @click:append-inner="visible = !visible"></v-text-field>
            <v-card v-if="errMsg" class="mb-4" color="surface-variant" variant="tonal">
                <v-card-text class="text-medium-emphasis text-caption">
                    <p>{{ errMsg }}</p>
                </v-card-text>
            </v-card>
            <v-btn class="mb-8" color="blue" size="large" variant="tonal" block @click="register">
                Sign up
            </v-btn>
            <v-card-text class="text-center">
                <a class="text-blue text-decoration-none" href="#" rel="noopener noreferrer" @click="login">
                    Login now <v-icon icon="mdi-chevron-right"></v-icon>
                </a>
            </v-card-text>
        </v-card>
    </div>
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
                    errMsg.value = "invalid email"
                    break;
            }
        })
}
const login = ()=>{
    router.push("/login")
}
</script>