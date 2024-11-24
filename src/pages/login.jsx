import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { maincontext } from "../components/context";
const LoginPage = () => {
    const[error,seterror]=useState("")
    const {login}=useContext(maincontext);
    const navigate=useNavigate();

    const submithandler=(e)=>{
     e.preventDefault()
      let email=e.target.email.value;
      let pass=e.target.password.value;


    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
   .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    login(user.toJSON())
    navigate("/")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorname="Password not match with Email"
    const errorMessage = `${errorname}`;
    seterror(errorMessage)
    
    // ..
  });


    }

    


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        <p className="text-red-600 ">{error}</p>
        <form onSubmit={submithandler}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
          >
            Login
          </button>
        </form>

        <p className="mt-4">Don't have an account 
            <Link className="pl-2 underline  text-blue-600" to={"/register"}>Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
