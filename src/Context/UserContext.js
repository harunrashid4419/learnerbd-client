import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {
   createUserWithEmailAndPassword,
   getAuth,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
   updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const userLogIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   const googleSignIn = (googleProvider) => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   };

   const githubSignIn = (githubProvider) => {
      setLoading(true);
      return signInWithPopup(auth, githubProvider);
   };

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         setLoading(false);
         setUser(currentUser);
      });
      return () => {
         unSubscribe();
      };
   }, []);

   const logOut = () => {
      setLoading(true);
      return signOut(auth);
   };

   const profileUpdate = (profile) => {
      setLoading(true);
      return updateProfile(auth.currentUser, profile);
   };

   const authInfo = {
      createUser,
      user,
      userLogIn,
      logOut,
      googleSignIn,
      profileUpdate,
      githubSignIn,
      loading,
   };
   return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
   );
};

export default UserContext;
