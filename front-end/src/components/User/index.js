import React, { useEffect , useContext} from 'react';
import { me, checkUserLocalStorate, getUserLocalStorage } from '../../services/authService';
import { GlobalContext } from '../context/GlobalState';

const User = ({ children }) => {

  const { setCurrUser } = useContext(GlobalContext);

 
  useEffect(() => {
    ( async () => {
      if ( checkUserLocalStorate() ) {
        setCurrUser(getUserLocalStorage())
      } else {
        const { data: user } = await me();
        if (user) {
          setCurrUser(user);
        }
      }

    })()
  }, [setCurrUser])

  return <>{children} </>
}
 
export default User;