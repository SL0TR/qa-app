import React, { useState } from 'react';
import { login, setUserLocalStorage, getUserLocalStorage } from '../../services/authService';
export const GlobalContext = React.createContext();

const GLobalState = ({ children }) => {

  const [currUser, setCurrUser] = useState(getUserLocalStorage());
  const [questions, setQuestions] = useState([]);
  const [isAdmin, setIsAdmin] = useState(window.localStorage.userIsAdmin);
  

  const onSubmit = async userData => {
    const { data: { user } } = await login(userData);
    if(user) {
      setUserLocalStorage(user);
      setCurrUser(user);
      setIsAdmin(user.isAdmin);
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