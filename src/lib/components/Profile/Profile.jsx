import React from 'react'
import "./Profile.css"

import SideNav from '../shared/SideNav/SideNav';
import ProfileContainer from './ProfileContainer';

function Profile() {
    return (
        <div className="container">
            <div className="project">
                <SideNav />
                <ProfileContainer />
            </div>
        </div>
    )
}

export default Profile
