import React, { useEffect, useState, useContext } from 'react';
import { login, me } from '../../services/authService';
export const GlobalContext = React.createContext();

const GLobalState = ({ children, history }) => {

  const [currUser, setCurrUser] = useState(null);
  
  useEffect(() => {
    ( async () => {
      const { data: user } = await me();
      console.log(user)
      setCurrUser(user);
    })()
  }, [])

  const onSubmit = async userData => {
    const { data: { user } } = await login(userData);
    console.log(user);
    setCurrUser(user);
    history.push('/');
  };

  return ( 
    <GlobalContext.Provider value={{
      onSubmit,
      currUser,
      setCurrUser
    }}>
      {children}
    </GlobalContext.Provider>
   );
}
 
export default GLobalState;