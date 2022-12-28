import React, {useEffect} from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';
import { useStore } from '../Store/useStore';

function PrivateRoute({ children }) {
  // const location = useLocation();
  const [state, dispatch, isAuthen] = useStore();
  return isAuthen() ? children : <Navigate to="/" />;
}

export default PrivateRoute;