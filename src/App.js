import "./App.css";
import React, { Component } from "react";
import Signin from "./components/Signin";

import Note from "./components/Note";
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();
function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
  
      {user ? <Note /> : <Signin />}
     
      <header>
        <SignOut />
      </header>
    </div>
  );
}

// function SignIn() {

//   const signInWithGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider);
//   }

//   return (
//     <>
//       <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
//       <p>Do not violate the community guidelines or you will be banned for life!</p>
//     </>
//   )

// }

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}
export default App;
