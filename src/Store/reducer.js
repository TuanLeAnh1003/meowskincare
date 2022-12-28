import { LOGIN, SETUSER, GETUSER, GETSEARCHINPUT } from "./constants";
import jwt_decode from "jwt-decode";

const initState = {
  user: {},
  searchInput: ""
};

function reducer(state, action) {
  switch (action.type) {
    case LOGIN:
      // localStorage.setItem("token", action.payload);
      const info = jwt_decode(action.payload);

      // console.log(info.id.email, action.payload);
      localStorage.setItem("userid", info._id);
      localStorage.setItem("role", info.role)
      console.log("payload",action.payload, info);
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload
        }
      }
    case SETUSER:
      return {
        ...state,
        userId: action.payload.id,
      };
    
    case GETSEARCHINPUT: {
      return {
        ...state, 
        searchInput: action.payload
      }
    }
      
  }
}

export { initState };
export default reducer;
