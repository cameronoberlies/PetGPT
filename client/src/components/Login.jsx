import React, { useState } from "react";
import { Link, RouterLink } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: "",
      password: "",
    });
  };
  return (
    <>
      {/* Pills content */}
      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="pills-login"
          role="tabpanel"
          aria-labelledby="tab-login"
        >
          <div className="form-box">
            {data ? (
              <p>
                Success! You may now start{" "}
                <Link to="/test">the test.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input 
                   type="email"
                   id="loginName" 
                   className="form-control"
                   name="email"
                   value={formState.email}
                   onChange={handleChange}
                    />
                  <label className="form-label" htmlFor="loginName">
                    Email 
                  </label>
                </div>

                {/* Password input */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="loginPassword"
                    className="form-control"
                    name="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                  <label className="form-label" htmlFor="loginPassword">
                    Password
                  </label>
                </div>

                {/* 2 column grid layout */}
                <div className="row mb-4">
                  <div className="col-md-6 d-flex justify-content-center">
                    {/* Checkbox */}
                    {/* <div className="form-check mb-3 mb-md-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="loginCheck"
                        checked
                      />
                      <label className="form-check-label" htmlFor="loginCheck">
                        Remember me
                      </label>
                    </div> */}
                  </div>

                  <div className="col-md-6 d-flex justify-content-center">
                    {/* Simple link */}
                    <a href="#!">Forgot password?</a>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                  
                >
                  < a href="/test">Sign in</a> 
                </button>

                {/* Register buttons */}
                <div className="text-center">
                  <p>
                    Not a member? <a href="/signup">Register</a>
                  </p>
                </div>
              </form>
            )}
            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
        {/* ... */}
      </div>
      {/* Pills content */}
    </>
  );
};

export default Login;
