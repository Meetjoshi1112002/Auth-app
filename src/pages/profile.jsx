import React, { useContext } from 'react'
import { authContext } from '../context/context'

export default function Profile() {
  const {currentUser} = useContext(authContext);
  return (
    <div className='p-3 mx-auto max-w-lg'>
      <h1 className='my-7 font-semibold text-3xl text-center'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img src={currentUser?.photo} className='cursor-pointer w-24 h-24 rounded-full self-center object-cover' />
        <input defaultValue={currentUser?.username} id='username' type="text" placeholder="username" className='p-3 rounded-lg bg-slate-100' />
        <input defaultValue={currentUser?.email} id='email' type="email" placeholder="email" className='p-3 rounded-lg bg-slate-100' />
        <input id='password' type="password" className='p-3 rounded-lg bg-slate-100' />
        <button  className='p-3 uppercase bg-slate-700 rounded-lg text-white hover:opacity-95'>Update </button>
        <div className='flex justify-between'>
          <span className='text-red-700 hover:cursor-pointer'>Delete Account</span>
          <span className='text-red-700 hover:cursor-pointer'>Sign  out</span>
        </div>
      </form>
    </div>
  )
}
