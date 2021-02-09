import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Logout.scoped.css';
import { unAuthenticate } from 'lib/redux/actions/action_creators/auth/auth_async_actions';


function Logout({ token, isLoading , unAuthenticate }) {

    let history  = useHistory();

    const cancel = () => {
        history.replace("/housemates")
    }

    const logout = () => {
        const args = {
            endPoint: "/logout",
            method: 'POST',
            token: token
        }
        unAuthenticate(args)
        if(!token) {
            history.replace('/')
        }
    }
    return (

        <div className="logout-container">
            
        {!isLoading && 
            <div className="modal">
                <h1> Log out { isLoading }  </h1>
                <button className="btn-cancel" onClick={() => cancel()}> Cancel </button>
                <button className="btn-logout" onClick={() => logout() }> Log out </button>
            </div>
        }
        {isLoading && <div className="loading"></div>}
        </div>

    );
}

const mapStateToProps = (state) => ({
    token: state.auth.token,
    isLoading: state.auth.isLoading
})
const mapDispatchToProps = (dispatch) => ({
    unAuthenticate: (value) => dispatch(unAuthenticate(value))
})

export default connect(mapStateToProps,mapDispatchToProps)(Logout);
