import { collection, getDocs, addDoc, getDoc, doc, deleteDoc, updateDoc, query, where } from 'firebase/firestore';
import { db } from "@/firebase";
import { getAuth,signInWithPopup,GithubAuthProvider,GoogleAuthProvider } from 'firebase/auth';
export async function getUsers() {
    const users = await getDocs(collection(db, 'users'));
    const documents = users.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    return documents
}
export async function createUser(user:any) {
    const newObj = {
        email:user.email,
        name:user.displayName,
        emailVerified:user.emailVerified,
        phoneNumber:user.phoneNumber,
        photo:user.photoURL
    };
    const doc = await addDoc(collection(db, 'users'), newObj);
    console.log(doc, '4444444444');
}
export async function registerWithGithub() {
    const auth = getAuth();
    const provider = new GithubAuthProvider();
    signInWithPopup(auth,provider)
    .then(async result=>{
        const user = result.user;
        await createUser(user)
    })
    .catch(()=>{
        console.log('error with git auth')
    })
}
export async function registerWithGoogle() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    auth.languageCode = 'it';
    signInWithPopup(auth, provider)
    .then(async (result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const user = result.user;
      await createUser(user)
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch(() => {
        console.log('error---');
        
    });
}
export async function loginWithGithub() {
    const auth = getAuth();
    const provider = new GithubAuthProvider();
    signInWithPopup(auth,provider)
    .then(async result=>{
        console.log('success to login with github')
    })
    .catch(()=>{
        console.log('error with git auth')
    })

}
export async function loginWithGoogle() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    auth.languageCode = 'it';
    signInWithPopup(auth, provider)
    .then(async (result) => {
        console.log('success to login with google')
    }).catch(() => {
        console.log('error---');
        
    });
}