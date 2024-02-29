import React, { useContext } from 'react'
import { authContext } from '../context/context'
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute(prop) {
    const {currentUser} = useContext(authContext);
    console.log("In private route",currentUser)
  return currentUser? <Outlet /> : <Navigate to={"/sign-in"} />
}
