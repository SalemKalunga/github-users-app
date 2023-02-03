import { createContext, useState } from "react";

export const UserContext = createContext({
  userLogged: null,
  setUser: () => null,
});

export const UserContextProvider = ({ children }) => {
  const [userLogged, setUser] = useState(null);
  const value = { userLogged, setUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
