import { createContext, useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { getUserQuery } from "../queries/getUserQuery";
import { useLoginUser } from "../hooks/useLoginUser";
const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user] = useAuthState(auth);
  const { mutateAsync: loginUser } = useLoginUser();
  const [isLoged, setIsLoged] = useState();
  const [logedUser, setLogedUser] = useState();
  const [role, setRole] = useState();
  const [activeUser, setActiveUser] = useState();

  useEffect(() => {
    if (user) {
      updateLogedUser(user?.uid);
      updateLoged(true);
      const f = async () => {
        const activeUser = await getUserQuery(user?.uid);
        await loginUser({ token: user?.accessToken });

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
