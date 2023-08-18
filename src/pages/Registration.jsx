import React, { useState } from "react";

export const Registration = () => {
  const [signIn, setSignIn] = useState(true);
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
                  <button className="btn">Sign In</button>
                </div>
              </div>
            ) : (
              <div className="sign-up">
                <h2>
                  Sign <span className="purple">Up</span>
                </h2>

                <div className="input">
                  <label for="email">Email: </label>
                  <input type="email" id="email" name="email" />
                </div>

                <div className="input">
                  <label for="password">Password: </label>
                  <input type="password" id="password" name="password" />
                </div>

                <div className="input">
                  <label for="confirm-password">Confirm Password: </label>
                  <input
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
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
                  <button className="btn click">Sign Up</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
