import apiCall from "../apiCall";
import Store from "../Store";
import AuthService from "./auth.service";
import { successToaster } from "./notify.service";

const UserService = {
  Get_myUsers() {
    apiCall.get("users/list").then((res) => {
      Store.dispatch({ type: "Set_myUsers", payload: res.data });
    });
  },
  Add_User(form) {
    return apiCall.post("users/add", form);
  },
  Edit_User(form, id) {
    return apiCall.post("users/update/" + id, form);
  },
  Signup_User(form) {
    return apiCall.post("users/signup", form);
  },
  Login_User(form) {
    return apiCall.post("users/login", form);
  },
  Logout_User() {
    apiCall.get("users/logout").then((res) => {
      AuthService.logout_User_successfull();
    });
  },
};

export default UserService;
