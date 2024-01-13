import { ParentsProps, UserLogin } from "@/@types/user";
import api from "@/services/authService";
import { createContext, ReactNode, useState } from "react";
import { toast } from "react-toastify";

interface AuthContextData {
  user: null;
  Login: (dataUser: UserLogin) => void;
  registerUser: (dataUser: ParentsProps) => void;
}

export const UserContext = createContext({} as AuthContextData);

function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(null);

  async function Login(dataUser: UserLogin) {
    try {
      const response = await api.post("/api/users", { dataUser });
      if (response.statusText === "OK") {
        toast.success("Login Successful...");
      }
      setUser(response.data);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(message);
    }
  }
  const registerUser = async (dataUser: ParentsProps) => {
    try {
      const response = await api.post("/api/users/signup", dataUser, {
        withCredentials: true,
      });
      if (response.statusText === "OK") {
        toast.success("User Registered successfully");
      }
      return response.data;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(message);
    }
  };
  return (
    <UserContext.Provider value={{ user, Login, registerUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
