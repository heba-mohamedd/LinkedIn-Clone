import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

/**
 * Login user using email and password
 */
export const LoginAPI = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    console.error("Login error:", err);
    throw err;
  }
};

/**
 * Register new user with email and password
 */
export const RegisterAPI = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return response;
  } catch (err) {
    console.error("Register error:", err);
    throw err;
  }
};

/**
 * Sign in with Google popup
 */
export const GoogleSignInAPI = async () => {
  try {
    const googleProvider = new GoogleAuthProvider();
    const response = await signInWithPopup(auth, googleProvider);
    return response;
  } catch (err) {
    console.error("Google Sign-In error:", err);
    throw err;
  }
};

/**
 * Logout the current user
 */
export const onLogout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.error("Logout error:", err);
    throw err;
  }
};
