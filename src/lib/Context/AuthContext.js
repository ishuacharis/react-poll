import {  createContext  } from 'react';



const AuthContext  = createContext({
    isAuthenticated: false,
    isLoading: false,
    authenticate: () => {},
    unAuthenticate: () => {}
});

AuthContext.displayName = 'AuthCOntext';

export default AuthContext