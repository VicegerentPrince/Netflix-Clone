import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPsCIVKOrITEbtc-hC47qZR9dKgBNj1bM",
  authDomain: "netflix-clone-f9eb5.firebaseapp.com",
  projectId: "netflix-clone-f9eb5",
  storageBucket: "netflix-clone-f9eb5.firebasestorage.app",
  messagingSenderId: "393093860747",
  appId: "1:393093860747:web:6f407af8134eca3b1d338e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email
        })
    } catch (error) {
        console.log(error);
        alert(error)
    }
}

const login = async (email, password) => {
    try {
        signInWithEmailAndPassword(auth, email. password)
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

const logOut = () => {
    signOut(auth);
}

export {auth, db, login, signUp, logOut};