'use client';

import React, { useState } from 'react';
import '../../styles/profile.css';

const Profile = ({ user, onNavigate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        phone: user?.phone || '',
        address: user?.address || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        setIsEditing(false);
        // Save logic would go here
    };

    return (
        <div className="dashboard-container">
            <div className="profile-container">
                <div className="profile-header">
                    <img src={user?.profileImage || `https://ui-avatars.com/api/?name=${user?.name}`} alt={user?.name} className="profile-image" />
                    <div className="profile-info">
                        <h1>{user?.name}</h1>
                        <p className="role">
                            <i className="fas fa-badge"></i>
                            {user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1)} Account
                        </p>
                    </div>
                </div>

                <div className="profile-card">
                    <div className="card-header">
                        <h2>Personal Information</h2>
                        <button className="btn btn-small" onClick={() => setIsEditing(!isEditing)}>
                            {isEditing ? 'Cancel' : 'Edit'}
                        </button>
                    </div>

                    <form className="profile-form">
                        <div className="form-group">
                            <label>Full Name</label>
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            ) : (
                                <p>{formData.name}</p>
                            )}
                        </div>

                        <div className="form-group">
                            <label>Email Address</label>
                            {isEditing ? (
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            ) : (
                                <p>{formData.email}</p>
                            )}
                        </div>

                        <div className="form-group">
                            <label>Phone Number</label>
                            {isEditing ? (
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            ) : (
                                <p>{formData.phone}</p>
                            )}
                        </div>

                        <div className="form-group">
                            <label>Address</label>
                            {isEditing ? (
                                <textarea
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    rows="3"
                                ></textarea>
                            ) : (
                                <p>{formData.address}</p>
                            )}
                        </div>

                        {isEditing && (
                            <button type="button" className="btn btn-primary" onClick={handleSave}>
                                Save Changes
                            </button>
                        )}
                    </form>
                </div>

                <div className="profile-card">
                    <h2>Account Settings</h2>
                    <div className="settings-list">
                        <div className="setting-item">
                            <span>Change Password</span>
                            <button className="btn btn-small btn-outline">Change</button>
                        </div>
                        <div className="setting-item">
                            <span>Two-Factor Authentication</span>
                            <button className="btn btn-small btn-outline">Enable</button>
                        </div>
                        <div className="setting-item">
                            <span>Email Notifications</span>
                            <button className="btn btn-small btn-outline">Manage</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
