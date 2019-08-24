import React, { useState } from 'react';
import { login, setUserLocalStorage } from '../../services/authService';
export const GlobalContext = React.createContext();

const GLobalState = ({ children, history }) => {

  const [currUser, setCurrUser] = useState(null);
  const [questions, setQuestions] = useState([]);
  

  const onSubmit = async userData => {
    const { data: { user } } = await login(userData);
    if(user) {
      console.log(user);
      setUserLocalStorage(user);
      setCurrUser(user);
      history.push('/');
    }
  };

  return ( 
    <GlobalContext.Provider value={{
      onSubmit,
      currUser,
      setCurrUser,
      setQuestions,
      questions
    }}>
      {children}
    </GlobalContext.Provider>
   );
}
 
export default GLobalState;