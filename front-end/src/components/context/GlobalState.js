import React, { useState } from 'react';
import { login, setUserLocalStorage } from '../../services/authService';
export const GlobalContext = React.createContext();

const GLobalState = ({ children, history }) => {

  const [currUser, setCurrUser] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  

  const onSubmit = async userData => {
    const { data: { user } } = await login(userData);
    if(user) {
      setUserLocalStorage(user);
      setCurrUser(user);
      window.location.href = '/';
    }
  };

  return ( 
    <GlobalContext.Provider value={{
      onSubmit,
      currUser,
      setCurrUser,
      setQuestions,
      questions,
      isAdmin,
      setIsAdmin
    }}>
      {children}
    </GlobalContext.Provider>
   );
}
 
export default GLobalState;