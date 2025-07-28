import { createContext, useState } from "react";
import { getUserInfo } from "../services/authService";

export const AuthContext = createContext();


export default function AuthContextProvider({children}) {
    const [user,setUser] = useState(()=> {
        const storedUser = getUserInfo();
        return storedUser ? JSON.parse(storedUser) : { email:'' , role:'' }
    })
  return (
    <AuthContext.Provider value={{user,setUser}}>
        {children}
    </AuthContext.Provider>
  )
}


