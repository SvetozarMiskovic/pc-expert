import { createContext, useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { getUserRoleQuery } from "../queries/getUserRoleQuery";
import { useUser } from "../hooks/useUser";
import { getUserQuery } from "../queries/getUserQuery";
import { listenForChangeQuery } from "../queries/listenForChangeQuery";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, loading, error, fetched] = useAuthState(auth);

  // console.log(user, loading, error);

  const [isLoged, setIsLoged] = useState();
  const [logedUser, setLogedUser] = useState();
  const [role, setRole] = useState();
  const [activeUser, setActiveUser] = useState();
  // useEffect(() => {
  //   const checkLoginUser = async () => {
  //     const res = await checkLogin();

  //     setIsLoged(!!res.data?.isValid);
  //     setLogedUser(res.data?.userId);
  //     setRole(res.data?.role);
  //   };
  //   checkLoginUser();
  // }, [isLoged]);

  useEffect(() => {
    if (user) {
      updateLogedUser(user?.uid);
      updateLoged(true);
      const f = async () => {
        const activeUser = await getUserQuery(user?.uid);

        updateRole(activeUser?.role);
        updateActiveUser(activeUser);
        // const data = listenForChangeQuery(user?.uid);
        // console.log("SLUSAM", data);
      };
      f();
    } else {
      updateLoged(false);
      updateLogedUser(false);
      updateRole(false);
      updateActiveUser(false);
    }
  }, [user]);

  const updateLoged = val => {
    setIsLoged(val);
  };

  const updateLogedUser = userId => {
    setLogedUser(userId);
  };

  const updateRole = role => {
    setRole(role);
  };

  const updateActiveUser = user => {
    setActiveUser(user);
  };
  return (
    <AuthContext.Provider
      value={{
        updateLoged,
        isLoged,
        updateLogedUser,
        logedUser,
        role,
        updateRole,
        activeUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
