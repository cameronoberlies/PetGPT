import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    zipcode: "",
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

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
      console.log("Beginning of try")
      const { data } = await addUser({
        
        variables: { ...formState },
      })
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <section className="">
        {/* Jumbotron */}
        <div
          className="px-4 py-5 px-md-5 text-center text-lg-start"
          style={{ backgroundColor: "hsl(0, 0%, 96%)" }}
        >
          <div className="container">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="my-5 display-3 fw-bold ls-tight">
                  <br />
                  <span className="text-primary">Pet-Matcher</span>
                </h1>
                <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                Discover your perfect canine companion with our innovative 
                app that combines OpenAI's powerful language model and the Petfinder
                 API. Take a quick test to provide insights into your lifestyle,
                  home, and preferences, and receive top dog breed choices tailored just 
                  for you. Explore real-time access to Petfinder's database of adoptable dogs in 
                  your area and find your forever furry friend. Embrace the future of pet adoption 
                  with our AI-powered app and discover the paw-fect match for a lifetime of love and happiness. 
                </p>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card">
                  <div className="card-body py-5 px-md-5">
                    {data ? (
                      <p>
                        Success! You may now{" "}
                        <Link to="/test">begin the test!</Link>
                      </p>
                    ) : (
                      <form onSubmit={handleFormSubmit}>
                        {/* 2 column grid layout with text inputs for the first and last names */}
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="form3Example1"
                                className="form-control"
                                value={formState.username}
                                onChange={handleChange}
                                name="username"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Example1"
                              >
                                Username
                              </label>
                            </div>
                          </div>
                        </div>

                        {/* Email input */}
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form3Example3"
                            className="form-control"
                            value={formState.email}
                            onChange={handleChange}
                            name="email"
                          />
                          <label className="form-label" htmlFor="form3Example3">
                            Email address
                          </label>
                        </div>

                        {/* Password input */}
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form3Example4"
                            className="form-control"
                            placeholder="********"
                            value={formState.password}
                            onChange={handleChange}
                            name="password"
                          />
                          <label className="form-label" htmlFor="form3Example4">
                            Password
                          </label>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Example2"
                              className="form-control"
                              value={formState.zipcode}
                              onChange={handleChange}
                              name="zipcode"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example2"
                            >
                              Zip code
                            </label>
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="btn btn-primary btn-block mb-4"
                          onClick={handleFormSubmit}
                        >
                          Sign up
                        </button>
                      </form>
                    )}
                    {error && (
                      <div className="my-3 p-3 bg-danger text-white">
                        {error.message}
                      </div>
                    )}
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Jumbotron */}
      </section>
    </>
  );
};

export default Signup;

                

               
