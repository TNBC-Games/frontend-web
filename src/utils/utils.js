

export const isLogin = () => {
    if (sessionStorage.getItem("accesstoken") && sessionStorage.getItem("userEmail") ) {
      return true;
    }
    return false;
};