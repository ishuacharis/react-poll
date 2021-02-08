import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';


function PublicRoute({children, token ,  ...rest }) {
    return (
        <Route
            { ...rest }
            render ={ ({location}) => token ? 
            (<Redirect
                to={{
                        pathname:'/housemates'
                    }}
            />)
            : (children)
        
        
        
        }

        />
    );
}

const mapStateToProps = state => ({
    token: state.auth.token,
});

export default connect(mapStateToProps)(PublicRoute);