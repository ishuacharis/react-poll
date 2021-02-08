import {  createContext  } from 'react';



const AuthContext  = createContext({
    isAuthenticated: false,
    isLoading: false,
    authenticate: () => {},
    unAuthenticate: () => {}
});

AuthContext.displayName = 'AuthContext';

export default AuthContext