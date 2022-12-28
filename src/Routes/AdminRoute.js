import React, {useState, useEffect} from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';
import UserApi from '../Apis/UserApi';

function AdminRoute({ children }) {
  // console.log(JSON.parse(localStorage.getItem("role")))
  return localStorage.getItem("role") === "admin" ? children : <Navigate to="/" />;
}

export default AdminRoute;