import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

const PrivateRoute = ({ component: Component, admin, ...rest }) => {
  const { currUser, isAdmin } = useContext(GlobalContext);
  
  let isAuthenticated = Boolean(currUser._id);

  if(admin) {
    isAuthenticated = (isAdmin && isAdmin !== 'false' && isAdmin !== '');
  }

  return (
    <Route {...rest} render={(props) => (
      isAuthenticated
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )
}

export default PrivateRoute;