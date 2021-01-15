import AuthContext from 'lib/Context/AuthContext';
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';


function PrivateRoute({children, ...rest }) {
    let auth  = useContext(AuthContext);
    return (
        <Route
            { ...rest }
            render ={({location}) => auth.isAuthenticated ? (children)
            :
            (
                <Redirect
                    to={{
                        pathname: "auth",
                        search: "?a=login",
                        state: {from: location}
                    }}
                />
            )
        
        
        }

        />
    );
}

export default PrivateRoute;