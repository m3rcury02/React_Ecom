import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [pwd, setpwd] = useState("");
  const [confirmpwd, setconfirmpwd] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const reg = (event) => {
    if (pwd !== confirmpwd) {
      alert("Passwords do not match!");
    } else {
      event.preventDefault();
      let regobj = { email, pwd };
      console.table(email, pwd);
      dispatch({
        type: "REGISTER",
        payload: {
          id: new Date().getTime(),
          email,
          pwd,
        },
      });
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regobj),
      })
        .then((res) => {
          alert("success!");
          navigate("/");
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  return (
    <div className="align-middle flex justify-center items-center my-auto h-full">
      <div className="bg-white px-10 py-8 shadow-lg flex-col ">
        <h1 className="text-3xl font-bold">Register</h1>
        <form className="flex-col" onSubmit={reg}>
          <div className="flex-col space-y-4 my-6">
            <div>
              <input
                type="email"
                className="bg-slate-100 rounded-3xl p-2 px-4 w-full"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="password"
                className="bg-slate-100 rounded-3xl p-2 px-4 w-full"
                placeholder="Password"
                value={pwd}
                onChange={(e) => setpwd(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="password"
                className="bg-slate-100 rounded-3xl p-2 px-4 w-full"
                placeholder="Retype password"
                value={confirmpwd}
                onChange={(e) => setconfirmpwd(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between gap-4">
              <Link to="/" className="flex text-xs text-blue-500 my-auto">
                Have an account? Login
              </Link>
              <button
                type="submit"
                className="bg-blue-500 rounded-2xl py-1 px-9 text-white"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
