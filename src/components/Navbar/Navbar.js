'use client';

import React, { useState } from 'react';
import '../../styles/navbar-professional.css';

const Navbar = ({ user, onLogout, onNotificationClick, notificationsCount = 0 }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <header className="header" style={{boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'}}>
            <div className="header-logo">
                <i className="fas fa-shield-alt" style={{marginRight: '8px', color: '#1e40af'}}></i>
                Smart Complaint Management
            </div>

            {user && (
                <div style={{display: 'flex', alignItems: 'center', gap: '24px'}}>
                    <button 
                        className="btn btn-secondary btn-small"
                        onClick={onNotificationClick}
                        style={{position: 'relative'}}
                    >
                        <i className="fas fa-bell"></i>
                        {notificationsCount > 0 && (
                            <span style={{
                                position: 'absolute',
                                top: '-6px',
                                right: '-6px',
                                background: '#dc2626',
                                color: 'white',
                                borderRadius: '50%',
                                width: '20px',
                                height: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '11px',
                                fontWeight: 'bold'
                            }}>
                                {notificationsCount}
                            </span>
                        )}
                    </button>

                    <div style={{position: 'relative'}}>
                        <button 
                            className="btn btn-secondary btn-small"
                            onClick={() => setShowDropdown(!showDropdown)}
                            style={{display: 'flex', gap: '8px', alignItems: 'center'}}
                        >
                            <img 
                                src={user.profileImage || `https://ui-avatars.com/api/?name=${user.name}`} 
                                alt={user.name}
                                style={{width: '24px', height: '24px', borderRadius: '50%'}}
                            />
                            <span>{user.name}</span>
                            <i className={`fas fa-chevron-${showDropdown ? 'up' : 'down'}`}></i>
                        </button>

                        {showDropdown && (
                            <div style={{
                                position: 'absolute',
                                top: '100%',
                                right: 0,
                                marginTop: '8px',
                                background: 'white',
                                border: '1px solid #e5e7eb',
                                borderRadius: '8px',
                                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                                zIndex: 1000,
                                minWidth: '180px',
                                overflow: 'hidden'
                            }}>
                                <button style={{width: '100%', background: 'none', border: 'none', padding: '10px 16px', textAlign: 'left', cursor: 'pointer', color: '#374151', fontSize: '14px', display: 'flex', gap: '8px', alignItems: 'center', transition: 'background 0.2s'}}>
                                    <i className="fas fa-user" style={{color: '#1e40af'}}></i> Profile
                                </button>
                                <button style={{width: '100%', background: 'none', border: 'none', padding: '10px 16px', textAlign: 'left', cursor: 'pointer', color: '#374151', fontSize: '14px', display: 'flex', gap: '8px', alignItems: 'center', transition: 'background 0.2s'}}>
                                    <i className="fas fa-cog" style={{color: '#1e40af'}}></i> Settings
                                </button>
                                <button style={{width: '100%', background: 'none', border: 'none', padding: '10px 16px', textAlign: 'left', cursor: 'pointer', color: '#374151', fontSize: '14px', display: 'flex', gap: '8px', alignItems: 'center', transition: 'background 0.2s'}}>
                                    <i className="fas fa-file-download" style={{color: '#1e40af'}}></i> Reports
                                </button>
                                <div style={{borderTop: '1px solid #e5e7eb'}}></div>
                                <button 
                                    onClick={onLogout}
                                    style={{width: '100%', background: 'none', border: 'none', padding: '10px 16px', textAlign: 'left', cursor: 'pointer', color: '#dc2626', fontSize: '14px', display: 'flex', gap: '8px', alignItems: 'center', transition: 'background 0.2s'}}
                                >
                                    <i className="fas fa-sign-out-alt"></i> Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
