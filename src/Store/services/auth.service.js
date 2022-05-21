const AuthService = {
  is_Logged() {
    if (localStorage.getItem("access_token")) {
      return true;
    }
    return false;
  },
  logout_User_successfull() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    window.location.href = "/auth/signin";
  },
};

export default AuthService;
