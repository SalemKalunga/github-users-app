import { createContext, useEffect, useState } from "react";
import {
  createUserDocumentFromAuthUser,
  onAuthStateChangedListener,
} from "../firebase.tools/firebase.tools";
export const UserContext = createContext({
  userLogged: null,
  setUser: () => null,
});

export const UserContextProvider = ({ children }) => {
  const [userLogged, setUser] = useState(null);
  const value = { userLogged };
  useEffect(() => {
    onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuthUser(user);
      }
      setUser(user);
    });
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
