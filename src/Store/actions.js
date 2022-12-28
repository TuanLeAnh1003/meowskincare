import { LOGIN, SETUSER, GETUSER, GETSEARCHINPUT } from "./constants";

export const login = (payload) => {
  return {
    type: LOGIN,
    payload,
  };
};

export const setUser = (payload) => {
  return {
    type: SETUSER,
    payload,
  };
};

export const getUser = (payload) => {
  return {
    type: GETUSER,
    payload,
  };
};

export const getSearchInput = (payload) => {
  return {
    type: GETSEARCHINPUT,
    payload,
  }
}