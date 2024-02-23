import React, { useContext } from 'react'
import { authContext } from '../context/context'

export default function Home() {
  const {currentUser} = useContext(authContext)
  return (
    <div>
      welcome {currentUser.username}
    </div>
  )
}
