import React, { PropsWithChildren, useContext, useState } from "react";

type User = {
  name: string;
  email: string;
}

type UserContextType = {
  user: User | null,
  login: (user: User) => void;
  logout: () => void;
}

const UserContext = React.createContext<UserContextType>({} as unknown as UserContextType);

export function UserContextProvider({children}: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);

  function login(user: User) {
    setUser(user);
  }

  function logout() {
    setUser(null);
  }

  return <UserContext.Provider value={{
    user,
    login,
    logout
  }}>
    {children}
  </UserContext.Provider>

}

export const useUser = () => useContext(UserContext);