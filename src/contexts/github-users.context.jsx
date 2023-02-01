import { createContext, useEffect, useState } from "react";

export const GithubUsersContext = createContext({
  gitHubUsers: null,
  setGithubUsers: () => null,
});

export const GithubUsersContextProvider = ({ children }) => {
  const [gitHubUsers, setGithubUsers] = useState([]);
  useEffect(() => {
    const userList = async () => {
      const response = await fetch("https://api.github.com/users");
      const users = await response.json();
      setGithubUsers(users);
    };
    userList();
  }, []);
  const value = gitHubUsers;
  return (
    <GithubUsersContext.Provider value={value}>
      {children}
    </GithubUsersContext.Provider>
  );
};
