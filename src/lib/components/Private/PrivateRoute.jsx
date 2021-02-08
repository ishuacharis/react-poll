
import { token } from 'lib/redux/actions/action_creators/auth';
import React from 'react';
import { connect, } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';


function PrivateRoute({children, token,  ...rest }) {

    return (
        <Route
            { ...rest }
            render ={ ({props}) => token ? (children)
            :
            (
                <Redirect
                    to={{
                        pathname: "auth",
                        search: "?a=login",
                        
                    }}
                />
            )
        
        
        }

        />
    );
}

const mapStateToProps = state => ({
    token: state.auth.token,
});
const mapDispatchToProps = dispatch => ({
    isAuthenticated: () => {
        dispatch(token())
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(PrivateRoute);