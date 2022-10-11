import {createContext, useContext} from "react";
import {User} from "../types/types";

export const AuthContext = createContext<any>(null)

export const useAuthContext = () => {
  return useContext(AuthContext)
}
