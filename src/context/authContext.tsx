import { createContext, ReactNode, useState } from "react";

export const UserContext = createContext({});

function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}

export default UserProvider;
