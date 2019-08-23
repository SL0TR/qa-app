import React, { useEffect, useState, useContext } from 'react';
import { login, me } from '../../services/authService';
export const GlobalContext = React.createContext();

const GLobalState = ({ children, history }) => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    ( async () => {
      const { data: user } = await me();
      console.log(user)
      setUser(user);
    })()
  }, [])

  const onSubmit = async userData => {
    const { data: { user } } = await login(userData);
    console.log(user);
    setUser(user);
    history.push('/');
  };

  return ( 
    <GlobalContext.Provider value={{
      onSubmit,
      user,
      setUser
    }}>
      {children}
    </GlobalContext.Provider>
   );
}
 
export default GLobalState;