import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../context/context";
import Oauth from "../components/oauth";

export default function Signup() {
  const {handleCurrentUser} = useContext(authContext);
  const [form, setForm] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      const result = await fetch("http://localhost:3000/api/user/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await result.json();
      console.log(data);
      setError(false);
      if (data.success === false) {
        setError(true);
        setLoading(false);
        return;
      }
      handleCurrentUser(data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  console.log(form);
  return (
    <div className="p-3 max-w-lg mx-auto ">
      <h1 className="my-7 text-center font-semibold text-3xl">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          onChange={handleChange}
          className="bg-slate-100 rounded-lg p-3"
          type="text"
          name=""
          id="username"
          placeholder="username"
        />
        <input
          onChange={handleChange}
          className="bg-slate-100 rounded-lg p-3"
          type="email"
          name=""
          id="email"
          placeholder="email"
        />
        <input
          onChange={handleChange}
          className="bg-slate-100 rounded-lg p-3"
          type="password"
          name=""
          id="password"
          placeholder="password"
        />
        <button
          disabled={isLoading}
          className="rounded-lg bg-slate-700 text-white p-3 hover:opacity-95"
        >
          {isLoading ? "Loading" : "Sign up"}
        </button>
        <Oauth />
      </form>
      <div className="flex gap-5">
        <p>Have an account ?</p>
        <span>
          <Link to="/sign-in" className="text-blue-500">
            Sign in
          </Link>
        </span>
      </div>
      <p className="text-red">{error && "Something went wrong"}</p>
    </div>
  );
}
