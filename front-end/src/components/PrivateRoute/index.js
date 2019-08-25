import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currUser } = useContext(GlobalContext);
  return (
    <Route {...rest} render={(props) => (
      currUser._id
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )
}

export default PrivateRoute;