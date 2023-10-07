import React, { useState } from "react";
import { auth, googleProvider } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import googleLogo from "../assets/googleLogo.png";

export const Registration = () => {
  const [signIn, setSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signUp = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  const logOut = async () => {
    await signOut(auth);
  };

  return (
    <div id="books-bg">
      <div className="container">
        <div className="row">
          <div className="registration-form">
            {signIn ? (
              <div className="sign-in">
                <h2 className="">
                  Sign <span className="purple">In</span>
                </h2>

                <div className="input">
                  <label for="email">Email: </label>
                  <input type="email" id="email" name="email" />
                </div>
                <div className="input">
                  <label for="password">Password: </label>
                  <input type="password" id="password" name="password" />
                </div>
                <div className="form-action">
                  <p className="form-para">
                    Haven't got an account yet?{" "}
                    <span
                      className="form-link"
                      onClick={() => setSignIn(!signIn)}
                    >
                      Sign up
                    </span>
                  </p>
                  <button className="btn click register">Sign In</button>
                </div>

                <div className="providers">
                  <div className="provider click" onClick={signInWithGoogle}>
                    <img src={googleLogo} alt="" className="providerLogo" />
                  </div>
                  <div className="provider click"></div>
                  <div className="provider click"></div>
                </div>
              </div>
            ) : (
              <div className="sign-up">
                <h2>
                  Sign <span className="purple">Up</span>
                </h2>

                <div className="input">
                  <label for="email">Email: </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="input">
                  <label for="password">Password: </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="input">
                  <label for="confirm-password">Confirm Password: </label>
                  <input
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <div className="form-action">
                  <p className="form-para">
                    Already got an account?{" "}
                    <span
                      className="form-link"
                      onClick={() => setSignIn(!signIn)}
                    >
                      Sign in
                    </span>
                  </p>
                  <button className="btn click register" onClick={signUp}>
                    Sign Up
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
