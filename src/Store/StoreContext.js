import React, { createContext, useReducer, useContext } from 'react';
import jwt_decode from 'jwt-decode';

const StoreContext = createContext();

const initState = {
  userId: "",
  firstName: "",
  lastName: "",
  image: "",
  searchInput: "",
};


const LOGIN = "login";

export const action = {
  login: (payload) => {
    return {
      type: LOGIN,
      payload,
    };
  },
   
};

function reducer(state, action) {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("token", action.payload);
      const info = jwt_decode(action.payload);
      console.log(info);
      return {
        ...state,
        userId: info.id.userId,
        lastName: info.id.lastName,
        firstName: info.id.firstName,
        image: info.id.image,
      };

    default:
      throw new Error('Invalid action');
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <StoreContext.Provider value={[state, dispatch]}>{children}</StoreContext.Provider>
  );
}


export const useStore = () => {
  const [state, dispatch] = useContext(StoreContext);
  const isAuthen = () => {
    const token = localStorage.getItem("token");
    let isAuth = false;
    if(token) {
      try {
        const info = jwt_decode(token);
        return token.includes("Bearer ") && (info.id.userId !== undefined);
      } catch (error) {
        return false;
      }
    } 
    return isAuth;
  }
  return [state, dispatch, isAuthen];
};