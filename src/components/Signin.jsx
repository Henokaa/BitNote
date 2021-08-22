import React from 'react'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();
export default function Signin() {
    const [user] = useAuthState(auth);
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
      }

      
    return (
      
        <div >
        <div id="main-wrapper" class="oxyy-login-register" style={{backgroundColor: "#dc3545"}}>
  <div class="hero-wrap d-flex align-items-center h-100">
    <div class="hero-mask bg-primary"></div>
    <div class="hero-content mx-auto w-100 min-vh-100 d-flex flex-column">
      <div class="container pt-5">
        <div class="row">
          <div class="col-sm-6 text-uppercase text-4 text-white text-center text-sm-left" style={{fontSize: "18px"}}>Sign Up to BitNotes</div>
          <div class="col-sm-6 text-2 text-white font-weight-300 text-center text-sm-right"> Already a member? <a class="text-white text-3 font-weight-600" onClick={signInWithGoogle}>Sign in</a> </div>
        </div>
      </div>
      <div class="container my-auto py-5">
        <div class="row"> 
          <div class="col-md-6 col-lg-7 col-xl-8">
            <div class="row d-flex h-100 text-center text-md-left">
              <div class="col-lg-9 col-xl-8 mt-auto">
                <h1 class="text-13 font-weight-200 text-white mb-5" style={{fontWeight: "200" ,fontSize: "52px"}}>Welcome, Looks like you're new here!</h1>
              </div>
              <div class="col-lg-12 mx-auto mt-auto mb-4 mb-md-0">
                <div class="logo" style={{fontFamily: "Rampart One" ,fontSize: "52px", color: "#ffffff"}}> BitNotes </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-5 col-xl-4">
            <div class="container my-auto py-4 bg-white shadow-lg rounded">
              <div class="row mt-2">
                <div class="col-11 col-lg-11 mx-auto">
                  <form id="registerForm" class="form-border" method="post">
                    <div class="form-group icon-group">
                      <input type="text" class="form-control" id="fullName" required placeholder="Full Name" />
                      <span class="icon-inside text-primary"><i class="fas fa-user"></i></span> </div>
                    <div class="form-group icon-group">
                      <input type="email" class="form-control" id="emailAddress" required placeholder="Email Address" />
                      <span class="icon-inside text-primary"><i class="fas fa-envelope"></i></span> </div>
                    <div class="form-group icon-group">
                      {/* <input type="password" class="form-control" id="loginPassword" required placeholder="Password" /> */}
                      <span class="icon-inside text-primary"><i class="fas fa-lock"></i></span> </div>
                    <button class="btn btn-primary btn-block text-uppercase mt-4" onClick={signInWithGoogle} >Sign Up</button>
                  </form>
                  <div class="d-flex align-items-center my-2">
                    <hr class="flex-grow-1"/> 
                    {/* <span class="mx-2 text-2 text-muted">OR</span> */}
                    <hr class="flex-grow-1" ></hr>
                  </div>
                  <div class="d-flex  flex-column align-items-center">
                    {/* <ul class="social-icons social-icons-rounded">
                      <li class="social-icons-facebook"><a href="#" data-toggle="tooltip" data-original-title="Log In with Facebook"><i class="fab fa-facebook-f"></i></a></li>
                      <li class="social-icons-twitter"><a href="#" data-toggle="tooltip" data-original-title="Log In with Twitter"><i class="fab fa-twitter"></i></a></li>
                      <li class="social-icons-google"><a href="#" data-toggle="tooltip" data-original-title="Log In with Google"><i class="fab fa-google"></i></a></li>
                      <li class="social-icons-linkedin"><a href="#" data-toggle="tooltip" data-original-title="Log In with Linkedin"><i class="fab fa-linkedin-in"></i></a></li>
                    </ul> */}
                  </div>
                </div>
              </div>
            </div>
            <p class="text-2 text-white font-weight-300 text-center mt-4 mb-0">Copyright © 2021 <a class="text-white font-weight-600" href="#">BitNotes</a>. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      {/* <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button> */}
    </div>
    )
  }