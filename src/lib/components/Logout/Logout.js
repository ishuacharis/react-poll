import AuthContext from 'lib/Context/AuthContext';
import React, { useContext,  } from 'react';
import { useHistory } from 'react-router-dom';
import './Logout.scoped.css';
function Logout() {
    
    let auth = useContext(AuthContext);
    let history  = useHistory();
    const cancel = () => {

    }

    const logout = () => {
        console.log('logout')
        auth.unAuthenticate(() => {
            history.push("/auth")
        })
    }
    return (

    <div className="logout-container">
       {!auth.isLoading && <div className="modal">
            <h1> Log out </h1>
            <button className="btn-cancel" onClick={() => cancel()}> Cancel </button>
            <button className="btn-logout" onClick={() => logout() }> Log out </button>
        </div>}
        {auth.isLoading && <div className="loading"></div>}
    </div>

    );
}

export default Logout;
