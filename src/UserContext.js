import React, { createContext, useState } from "react";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [email, setEmail] = useState("admin@admin.com");
    const [pass, setPass] = useState("admin");
    const [status, setStatus] = useState(false);

    return (
        <UserContext.Provider
          value={{
           email,setEmail,pass,setPass,status,setStatus
          }}
        >
          {children}
        </UserContext.Provider>
      );
    };