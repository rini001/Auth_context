import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState("");

    const login = (token) => {
        setToken(token);
        setIsAuth(true);
    }
     
    const logOut = () => {
        setToken('');
        setIsAuth(false);
    }

    return <AuthContext.Provider value={
        {
            isAuth,
            token,
            login,
            logOut
        }
    }>
        {children}
    </AuthContext.Provider>
}