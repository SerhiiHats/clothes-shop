import {LOGIN, LOGOUT} from "./authAction";
import initialStore from "../../redux/initialStore";

const authReducer = (auth = initialStore.auth, action) => {
  switch (action.type) {
    case LOGIN: {
      return true;
    }
    case LOGOUT: {
      return false;
    }
    default:
      return auth;
  }
}

export default authReducer;