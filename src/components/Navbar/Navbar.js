'use client';

import React, { useState } from 'react';
import '../../styles/navbar.css';

const Navbar = ({ user, onLogout, onNotificationClick, notificationsCount = 0 }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const notificationCount = notificationsCount; // Declare the variable here

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-left">
                    <h1 className="navbar-title">
                        <i className="fas fa-shield-alt"></i>
                        SCMS
                    </h1>
                </div>

                {user && (
                    <div className="navbar-right">
                        <button className="notification-btn" onClick={onNotificationClick}>
                            <i className="fas fa-bell"></i>
                            {notificationsCount > 0 && <span className="notification-badge">{notificationsCount}</span>}
                        </button>

                        <div className="user-menu">
                            <button className="user-avatar" onClick={() => setShowDropdown(!showDropdown)}>
                                <img src={user.profileImage || `https://ui-avatars.com/api/?name=${user.name}`} alt={user.name} />
                                <span>{user.name}</span>
                                <i className="fas fa-chevron-down"></i>
                            </button>

                            {showDropdown && (
                                <div className="dropdown-menu">
                                    <button style={{width: '100%', background: 'none', border: 'none', padding: '10px 15px', textAlign: 'left', cursor: 'pointer', color: 'inherit', fontSize: 'inherit'}}>
                                        <i className="fas fa-user"></i> Profile
                                    </button>
                                    <button style={{width: '100%', background: 'none', border: 'none', padding: '10px 15px', textAlign: 'left', cursor: 'pointer', color: 'inherit', fontSize: 'inherit'}}>
                                        <i className="fas fa-cog"></i> Settings
                                    </button>
                                    <button style={{width: '100%', background: 'none', border: 'none', padding: '10px 15px', textAlign: 'left', cursor: 'pointer', color: 'inherit', fontSize: 'inherit'}}>
                                        <i className="fas fa-file-download"></i> Reports
                                    </button>
                                    <hr style={{margin: '5px 0'}} />
                                    <button onClick={onLogout} style={{width: '100%', background: 'none', border: 'none', padding: '10px 15px', textAlign: 'left', cursor: 'pointer', color: '#ef4444', fontSize: 'inherit'}}>
                                        <i className="fas fa-sign-out-alt"></i> Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
