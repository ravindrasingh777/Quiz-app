import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Layout from './pages/layout';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import AddQuiz from './pages/AddQuiz';
import ViewQuiz from './pages/ViewQuiz';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6mECF47J4basUsmO_U9Hl80GeYgkKXxk",
  authDomain: "myfirstdatastore.firebaseapp.com",
  databaseURL: "https://myfirstdatastore-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "myfirstdatastore",
  storageBucket: "myfirstdatastore.firebasestorage.app",
  messagingSenderId: "826582519805",
  appId: "1:826582519805:web:20f75ceff212ecc0fdd394",
  measurementId: "G-JV784QWQ73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const App = () => {
  const routes=createBrowserRouter(
    [
      {
        path:"/",
        element:<Layout/>,
        children:[
          {
            path:"",
            element:<Home/>
          },
          {
            path:"addquiz",
            element:<AddQuiz/>
          },
          {
            path:"viewquiz",
            element:<ViewQuiz/>
          }
        ]
      },

      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      }
    ]
  )
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  );
}

export default App;
