import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.scoped.css';
function SideNav() {
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
                        <Link to="#" className="sidenav-item">
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
                                    <img src={require("../../../assets/vee.jpg")} alt="avatar"/>
                                </div>
                                <div className="handle">
                                    <span>Olawaley</span>
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

export default SideNav;