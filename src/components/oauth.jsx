import React, { useContext } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { authContext } from "../context/context";
import { useNavigate } from "react-router-dom";

export default function Oauth() {
  const {handleCurrentUser} = useContext(authContext);
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const res = await fetch("http://localhost:3000/api/user/googlein", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      console.log(data);
      handleCurrentUser(data);
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="text-white bg-red-500 hover:opacity-95 p-3 rounded-lg uppercase"
    >
      Continue with google
    </button>
  );
}
