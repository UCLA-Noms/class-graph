import { signInWithPopup, signInWithRedirect, signOut } from 'firebase/auth'
import {auth, provider} from './firebase'

const login = async () => {
    try {
        console.log("bruh")
        const res = await signInWithPopup(auth, provider); // getting content security policy error, not sure how to fix
        // const credential = GoogleAuthProvider.credentialFromResult(res);
        // const token = credential.accessToken;
        // const user = res.user;
        return 0;
    } catch (e: any) {
        console.log(e.code)
        return 1
    }
}

const logout = async () => {
    try {
        const res = signOut(auth);
        return 0;
    } catch (e: any) {
        console.log(e.code)
        return 1
    }
}

export {login, logout}