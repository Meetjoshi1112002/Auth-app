import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { authContext } from '../context/context'

export default function Header() {
  const {currentUser} = useContext(authContext);
  // console.log(currentUser);
  return (
    <div className="bg-slate-200">
        <div className="flex justify-between max-w-6xl mx-auto items-center p-3">
            <h1>Auth app</h1>
            <ul className="flex gap-4">
                <Link to="/">
                <li>Home</li>
                </Link>
                <Link to="/about">
                <li>About</li>
                </Link>
                <Link to="/profile">
                  {
                    currentUser?(<img className='w-7 h-7 rounded-full object-cover'  alt='userImage' src={currentUser?.photo} referrerPolicy="no-referrer"/>):(<li>Sign in</li>)
                  }
                
                </Link>
            </ul>
        </div>
      
    </div>
  )
}
