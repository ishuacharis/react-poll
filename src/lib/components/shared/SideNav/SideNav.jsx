import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './SideNav.scoped.css';
function SideNav({ user }) {
    return (
        <div className="sidenav">
            <ul className="sidenav-links">
                <div className="sidenav-top">
                    <li className="sidenav-link">
                        <Link to="#" className="sidenav-item">
                            Home
                        </Link>
                    </li>
                    <li className="sidenav-link">
                        <Link to="#" className="sidenav-item">
                            Dashboard
                        </Link>
                    </li>
                    <li className="sidenav-link">
                        <Link to="#" className="sidenav-item">
                            Profile
                        </Link>
                    </li>
                    <li className="sidenav-link">
                        <Link to="/notifications" className="sidenav-item">
                            Notifications
                        </Link>
                    </li>
                    <li className="sidenav-link">
                        <Link to="#" className="sidenav-item">
                            Messages
                        </Link>
                    </li>
                </div>
                <div className="bottom">
                    <li className="sidenav-link">
                        <Link to="/logout" className="sidenav-item">
                            <div className="logout">
                                <div className="avatar avatar-small">
                                    <img src={require("lib/assets/vee.jpg")} alt="avatar"/>
                                </div>
                                <div className="handle">
                                    <span> { user.name } </span>
                                    <span>@Olawaley</span>
                                </div>
                            </div>
                        </Link>
                    </li>
                </div>
            </ul>
        </div>
    )
}

const mapStateToProps =  (state) => ({
    user: state.auth.user
})

export default connect(mapStateToProps)(SideNav);