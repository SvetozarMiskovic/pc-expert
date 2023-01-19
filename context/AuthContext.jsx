import { createContext, useContext, useEffect, useState } from "react";
import { checkLogin } from "../fetchFunctions/checkLogin";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLoged, setIsLoged] = useState(false);
  const [logedUser, setLogedUser] = useState();

  useEffect(() => {
    const checkLoginUser = async () => {
      const res = await checkLogin();

      setIsLoged(!!res.data?.isValid);
      setLogedUser(res.data?.userId);
    };
    checkLoginUser();
  }, []);

  const updateLoged = val => {
    setIsLoged(val);
  };

  const updateLogedUser = userId => {
    setLogedUser(userId);
  };

  return (
    <AuthContext.Provider
      value={{
        updateLoged,
        isLoged,
        updateLogedUser,
        logedUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
