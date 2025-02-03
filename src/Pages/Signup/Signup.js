import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import log from "../../assist/log.jpeg";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../FireBase/firebase";

const Signup = () => {
  const navigate = useNavigate();
  const error = () => toast.error("All field are required");
  const success = () => toast.success("Registered Successfully");

  const [Data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  //  save data in local storage
  //  const submit = (e)=>{
  //   e.preventDefault();
  //   localStorage.setItem("key", JSON.stringify(Data));
  //   alert("Registration Successful!");
  //   setData({ name: "", email: "", password: "" });
  //   navigate("/Login")
  //   }

  // use backend firebase
  const submit = (e) => {
    e.preventDefault();
    if (!Data.name || !Data.email || !Data.password) {
      error();
    } else {
      createUserWithEmailAndPassword(auth, Data.email, Data.password)
        .then(async(res) => {
          const user = res.user
           await updateProfile(user,{
            displayName:Data.name
           })
            success()
           navigate("/Login");
          })
          .catch((err) => toast.error(err.message));
          setData({ name: "", email: "", password: "" });
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
            Signup
          </h2>
          <div className="relative text-white mb-4">
            <label forHtml="name" className="leading-7 text-sm">
              Full name
            </label>
            <input
              type="text"
              name="name"
              value={Data.name}
              onChange={handleChange}
              required
              className="w-full bg-gray-600  bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative text-white mb-4">
            <label forHtml="email" className="leading-7 text-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={Data.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-600  bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label forHtml="Password" className="leading-7 text-sm ">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={Data.password}
              onChange={handleChange}
              required
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            onClick={submit}
            className="text-white bg-indigo-500 border-0 py-2 px-8 cursor-pointer focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Register
          </button>
          <p className="text-xsl text-white mt-5">
            Create your account!
            <Link to="/Login">
              <button className="hover:text-blue-300 hover:underline cursor-pointer p-1">
                Login
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
