import React ,{useContext, useState} from 'react'
import { useNavigate ,Link} from 'react-router-dom';
import { authContext } from '../context/context';
import Oauth from '../components/oauth';

export default function Signin() {
  const {handleCurrentUser} = useContext(authContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // network part
  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      const result = await fetch("http://localhost:3000/api/user/sign-in", {

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
        setError(data.message);
        console.log(data.message);
        setLoading(false);
        return;
      }
      handleCurrentUser(data);
      navigate("/");
    } 
    catch (error) {
      console.log(error);
      setError(error)
    }
    setLoading(false);
  };
  return (
    <div className="p-3 max-w-lg mx-auto ">
      <h1 className="my-7 text-center font-semibold text-3xl text-blue-500">Sign in</h1>
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
          type="password"
          name=""
          id="password"
          placeholder="password"
        />
        <button
          disabled={isLoading}
          className="rounded-lg bg-slate-700 text-white p-3 hover:opacity-95"
        >
          {isLoading ? "Loading" : "Sign in"}
        </button>
        <Oauth />
      </form>
      <div className="flex gap-5">
        <p>Dont have an account ?</p>
        <span>
          <Link to="/sign-up" className="text-blue-500">
            Sign up
          </Link>
        </span>
      </div>
      <p className="text-red-600">{error.length ===0 ? "Something went wrong":error}</p>
    </div>
  );
}
