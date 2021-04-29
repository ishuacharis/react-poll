import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './SideNav.scoped.css';
function SideNav({ user:{name} }) {
    return (
        <div className="sidenav">
            <div className="logout__tooltip">
                <div className="logout-tooltip__content">
                    <div className="logout-tooltip__item">
                        <div className="logout">
                            <div className="logout-left">
                                <div className="avatar avatar-small">
                                    <img src={require("lib/assets/boy.jpg")} />
                                </div>
                                <div className="handle">
                                    <span>{ name }</span>
                                    <span>@{name}</span>
                                </div>
                            </div>
                            <div className="logout-right">
                                <i className='bx bx-check'></i>
                            </div>
                        </div>
                    </div>
                    <div className="logout-tooltip__item">
                        <div className="logout">
                            <div className="logout-left">
                                <Link to="/" className="bottom-sidenav__item">
                                    <li className="bottom-sidenav__link">
                                        Add an existing account
                                    </li>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="logout-tooltip__item">
                        <div className="logout">
                            <div className="logout-left">
                                <div className="bottom-sidenav__link">
                                    <Link to="/" className="bottom-sidenav__item">
                                        Log out @wale
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="sidenav-top">
                <ul className="sidenav-links">
                    <Link to="/housemates" className="sidenav-item">
                        <li className="sidenav-link">
                            <span>
                                <i className='bx bx-home'></i>
                            </span>
                            <span>
                                Home
                            </span>
                        </li>                        
                    </Link>
                    <Link to="/" className="sidenav-item">
                        <li className="sidenav-link">
                            <span>
                                <i className='bx bx-folder'></i>
                            </span>
                            <span>
                                Dashboard
                            </span>
                        </li> 
                    </Link>
                    <Link to="/profile" className="sidenav-item">
                        <li className="sidenav-link">
                            <span>
                                <i className='bx bx-user'></i>  
                            </span>
                            <span>
                                Profile
                            </span>
                        </li>
                    </Link>
                    <Link to="/notifications" className="sidenav-item">
                        <li className="sidenav-link">
                            <span>
                                <span><i className='bx bx-bell'></i></span>
                            </span>
                            <span>
                                Notifications
                            </span>
                        </li>
                    </Link>
                    <Link to="/" className="sidenav-item">
                        <li className="sidenav-link">
                            <span>
                                <i className='bx bx-envelope'></i>
                            </span>
                            <span>
                                Messages
                            </span>
                        </li>
                    </Link>               
                </ul>
            </div>
            <div className="bottom">
                <li className="sidenav__link-bottom">
                    <button type="button" className="bottom-logout__btn">
                        <div className="logout">
                            <div className="logout-left">
                                <div className="avatar avatar-small">
                                    <img src={require("lib/assets/boy.jpg")} />
                                </div>
                                <div className="handle">
                                    <span>{ name }</span>
                                    <span>@ { name } </span>
                                </div>
                            </div>
                            <div className="logout-right">
                                <i className='bx bx-dots-horizontal-rounded'></i>
                            </div>
                        </div>
                    </button>
                </li>
            </div>

    </div>
    )
}

const mapStateToProps =  (state) => ({
    user: state.auth.user
})

export default connect(mapStateToProps)(SideNav);