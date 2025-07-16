import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function capitalizeWords(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const humanizeFirebaseError = (code) => {
  return capitalizeWords(code.replace("auth/", "").replace(/-/g, ' '));
};

const signUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await updateProfile(user, {
      displayName: name,
    });

    toast.success(`Account Created ${user.displayName}`)

    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(humanizeFirebaseError(error.code));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Logged In")
  } catch (error) {
    console.log(error);
    toast.error(humanizeFirebaseError(error.code))
  }
};

const logOut = () => {
  signOut(auth);
  toast.info("Signed Out")
};

export { auth, db, login, signUp, logOut };
