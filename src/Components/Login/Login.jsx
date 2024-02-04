import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const usenavigate = useNavigate();

  const login = () => {

    const payload = users.find(
      (user) => user.email === email && user.pwd === pwd
    );
    if (payload) {
      dispatch({
        type: "LOGIN",
        payload,
      });
      alert("Success!");
      usenavigate('/home')
    } else {
      alert("Wrong Credentials!");
    }
  };
  return (
    <div className="align-middle flex justify-center items-center my-auto h-full">
      <div className="bg-white px-10 py-8 shadow-lg flex-col ">
        <h1 className="text-3xl font-bold">Login</h1>
        <form action="" className="flex-col" onSubmit={login}>
          <div className="flex-col space-y-4 my-6">
            <div>
              <input
                type="email"
                className="bg-slate-100 rounded-3xl p-2 px-4 w-full"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                className="bg-slate-100 rounded-3xl p-2 px-4 w-full"
                placeholder="Password"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-6">
              <Link
                to="/register"
                className="flex w-1/2 text-xs text-blue-500 my-auto"
              >
                New User? Create an account
              </Link>
              <button
                type="Submit"
                className="bg-blue-500 rounded-2xl py-1 px-9 text-white"
              >
                Login
              </button>
            </div>
          </div>
        </form>
        <Link to="/home" className="text-center px-16 text-gray-400">
          Continue as guest
        </Link>
      </div>
    </div>
  );
};

export default Login;
