import { useContext } from "react";
import Context from "./Context";
import jwt_decode from 'jwt-decode';

export const useStore = () => {
  const [state, dispatch] = useContext(Context);
  const isAuthen = () => {
    const token = localStorage.getItem("token");
    let isAuth = false;
    // axios
    //     .get(`http://localhost:5000/api/UserMxhs/me`, {
    //         headers: { Authorization: token },
    //     })
    //     .then((res) => {
    //         if (res.status === 401) {
    //             isAuth = false;
    //         }
    //         if (res.data) {
    //             isAuth = true;
    //         }
    //     });

    if(token) {
      try {
        const info = jwt_decode(token);
        return (info._id !== undefined);
      } catch (error) {
        return false;
      }
    } 
    return isAuth;
  }
  return [state, dispatch, isAuthen];
};
