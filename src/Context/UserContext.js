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

   const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const userLogIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   };

   const googleSignIn = (googleProvider) => {
      return signInWithPopup(auth, googleProvider);
   };

   const githubSignIn = (githubProvider) => {
      return signInWithPopup(auth, githubProvider);
   };

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
      });
      return () => {
         unSubscribe();
      };
   }, []);

   const logOut = () => {
      return signOut(auth);
   };

   const profileUpdate = (profile) => {
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
   };
   return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
   );
};

export default UserContext;
