import React  from "react";
import { Link, useNavigate } from "react-router-dom";
import log from "../../assist/log.jpeg";
import { useState } from "react";
import {toast } from "react-toastify";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FireBase/firebase";

const Login = () => { 
const navigate = useNavigate();
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");

const alert = ()=>toast.success("Login Successfully")
const error = ()=>toast.error("Invailid detail")

// Get login data from localstorage
// const handelLogin = (e)=>{
// e.preventDefault()

// const store = localStorage.getItem('key');

// if(store){
//   const parseStore = JSON.parse(store)

// if (email === parseStore.email && password === parseStore.password) {
//   alert()
//   navigate("/")
// }else{
//   error()
// }
// }
// }

// Get login data from firebase

 const [loginData, setLogInData] = useState({
    
    email: "",
    password: "",
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogInData((prevData)=>({ ...prevData, [name]: value }));
  };

const handelLogin = (e) => {
  e.preventDefault();
  if (!loginData.email || !loginData.password) {
    error();
  } else {
    signInWithEmailAndPassword (auth, loginData.email, loginData.password)
      .then(() => {
          alert()
         navigate("/");
        })
        .catch((err) => toast.error(err.message));
        setLogInData({email: "", password: "" });
  }
};

return (
      <div>
        <div className="relative bg-blue-100">
          <img
            src={log}
            alt=""
            className=" object-cover w-full object-center h-[200px]"
          />
          <div className="bg-white w-full h-[200px] absolute top-0 left-0 opacity-[0.5] "></div>
        </div>
        <div className="container px-5 py-24 mx-auto text-white flex flex-wrap items-center">
          <div className=" mx-auto bg-gray-800  rounded-lg p-8 flex flex-col md:ml-auto  mt-8 md:mt-0">
            <h2 className="text-white  text-2xl font-medium title-font mb-5">
              Login
            </h2>
            <div className="relative text-white mb-4">
              <label         
                forHtml="email"
                className="leading-7 text-sm"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                required 
                className="w-full bg-gray-600  bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                forHtml="Password"
                className="leading-7 text-sm "
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                required
                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button onClick={handelLogin} className="text-white bg-indigo-500 border-0 py-2 px-8 cursor-pointer focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Submit
            </button>
            <p className="text-xsl text-white mt-5" >Create your account!
              <Link to='/Signup' >
              <button className="hover:text-blue-300 hover:underline cursor-pointer p-1" > Signup </button>
              </Link>
            </p>
             
          </div>
        </div>
      </div>
  );
};

export default Login;
