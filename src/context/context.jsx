import React, { createContext, useState } from 'react';

export const authContext = createContext(null);

export default function ContextAuth(props) {
  const [currentUser, setCurrentUser] = useState({});
  const handleCurrentUser = (data)=>{
    setCurrentUser(data);
  }
  const context = {
    currentUser,
    handleCurrentUser
  };
  return (
    <div>
      <authContext.Provider value={context}>
        {props.children}
      </authContext.Provider>
    </div>
  );
}
