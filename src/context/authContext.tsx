import { ParentsProps, UserLogin } from "@/@types/user";
import api from "@/services/authService";
import { createContext, ReactNode, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface AuthContextData {
  user: User | null;
  Login: (dataUser: UserLogin) => void;
  registerUser: (dataUser: ParentsProps) => void;
  isAuthenticated: boolean;
  logout: () => void;
}
export interface User {
  data: {
    user: {
      _id: string;
      role: string;
      firstName: string;
      lastName: string;
      phone: number;
      address: string;
      email: string;
      photo: string;
      children: [];
      kindergarden: [];
      createdAt: Date;
      updatedAt: Date;
      __v: number;
    };
  };
}

export const UserContext = createContext({} as AuthContextData);

function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  async function Login(dataUser: UserLogin) {
    try {
      const response = await api.post("/api/users/login", dataUser);

      toast.success("Login Successful...");
      setUser(response.data);
      setIsAuthenticated(true);
      navigate("/dashboard");
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
      const response = await api.post("api/users/signup", dataUser, {
        withCredentials: true,
      });

      toast.success("User Registered successfully");
      setUser(response.data);
      setIsAuthenticated(true);

      return response.data;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(message);
      console.log(message);
    }
  };

  const logout = async () => {
    try {
      const response = await api.get("api/users/logout");
      toast.success("logout Sucess");
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{ user, Login, registerUser, isAuthenticated, logout }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
