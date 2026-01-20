'use client';

import React, { useState } from 'react';
import { getMockAnalytics } from '../../services/mockDataService';
import '../../styles/dashboard.css';

const SuperAdminDashboard = ({ user, onNavigate }) => {
    const analytics = getMockAnalytics();
    const [activeTab, setActiveTab] = useState('system');

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Super Admin Dashboard</h1>
                <p>System-level monitoring and control</p>
            </div>

            <section className="statistics-section">
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#e0e7ff', color: '#0052cc' }}>
                        <i className="fas fa-server"></i>
                    </div>
                    <div className="stat-content">
                        <h3>99.9%</h3>
                        <p>System Uptime</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#d1fae5', color: '#10b981' }}>
                        <i className="fas fa-users"></i>
                    </div>
                    <div className="stat-content">
                        <h3>1,250</h3>
                        <p>Active Users</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#fef3c7', color: '#f59e0b' }}>
                        <i className="fas fa-database"></i>
                    </div>
                    <div className="stat-content">
                        <h3>85%</h3>
                        <p>Storage Used</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#fee2e2', color: '#ef4444' }}>
                        <i className="fas fa-shield-alt"></i>
                    </div>
                    <div className="stat-content">
                        <h3>0</h3>
                        <p>Security Alerts</p>
                    </div>
                </div>
            </section>

            <div style={{display: 'flex', gap: '10px', marginBottom: '30px', borderBottom: '1px solid #e5e7eb'}}>
                <button onClick={() => setActiveTab('system')} style={{padding: '10px 20px', background: activeTab === 'system' ? '#0052cc' : 'transparent', color: activeTab === 'system' ? '#fff' : '#6b7280', border: 'none', borderRadius: '4px 4px 0 0', cursor: 'pointer'}}>
                    System Health
                </button>
                <button onClick={() => setActiveTab('users')} style={{padding: '10px 20px', background: activeTab === 'users' ? '#0052cc' : 'transparent', color: activeTab === 'users' ? '#fff' : '#6b7280', border: 'none', borderRadius: '4px 4px 0 0', cursor: 'pointer'}}>
                    User Management
                </button>
                <button onClick={() => setActiveTab('backup')} style={{padding: '10px 20px', background: activeTab === 'backup' ? '#0052cc' : 'transparent', color: activeTab === 'backup' ? '#fff' : '#6b7280', border: 'none', borderRadius: '4px 4px 0 0', cursor: 'pointer'}}>
                    Backup & Maintenance
                </button>
                <button onClick={() => setActiveTab('security')} style={{padding: '10px 20px', background: activeTab === 'security' ? '#0052cc' : 'transparent', color: activeTab === 'security' ? '#fff' : '#6b7280', border: 'none', borderRadius: '4px 4px 0 0', cursor: 'pointer'}}>
                    Security
                </button>
            </div>

            {activeTab === 'system' && (
                <section style={{background: '#fff', borderRadius: '8px', padding: '20px'}}>
                    <h2>System Health Monitoring</h2>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginTop: '20px'}}>
                        <div style={{padding: '15px', border: '1px solid #e5e7eb', borderRadius: '8px'}}>
                            <h4>CPU Usage</h4>
                            <div style={{background: '#f3f4f6', height: '10px', borderRadius: '5px', overflow: 'hidden'}}>
                                <div style={{background: '#10b981', width: '45%', height: '100%'}}></div>
                            </div>
                            <p style={{margin: '5px 0 0', fontSize: '14px'}}>45%</p>
                        </div>
                        <div style={{padding: '15px', border: '1px solid #e5e7eb', borderRadius: '8px'}}>
                            <h4>Memory Usage</h4>
                            <div style={{background: '#f3f4f6', height: '10px', borderRadius: '5px', overflow: 'hidden'}}>
                                <div style={{background: '#f59e0b', width: '72%', height: '100%'}}></div>
                            </div>
                            <p style={{margin: '5px 0 0', fontSize: '14px'}}>72%</p>
                        </div>
                        <div style={{padding: '15px', border: '1px solid #e5e7eb', borderRadius: '8px'}}>
                            <h4>Disk Usage</h4>
                            <div style={{background: '#f3f4f6', height: '10px', borderRadius: '5px', overflow: 'hidden'}}>
                                <div style={{background: '#ef4444', width: '85%', height: '100%'}}></div>
                            </div>
                            <p style={{margin: '5px 0 0', fontSize: '14px'}}>85%</p>
                        </div>
                    </div>
                </section>
            )}

            {activeTab === 'backup' && (
                <section style={{background: '#fff', borderRadius: '8px', padding: '20px'}}>
                    <h2>Backup & Maintenance</h2>
                    <div style={{marginTop: '20px'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', border: '1px solid #e5e7eb', borderRadius: '8px', marginBottom: '10px'}}>
                            <div>
                                <h4>Last Backup</h4>
                                <p style={{margin: 0, color: '#6b7280'}}>Today at 2:00 AM</p>
                            </div>
                            <span style={{background: '#d1fae5', color: '#065f46', padding: '4px 12px', borderRadius: '20px', fontSize: '12px'}}>Success</span>
                        </div>
                        <div style={{display: 'flex', gap: '10px', marginTop: '20px'}}>
                            <button className="btn btn-primary">Create Backup</button>
                            <button className="btn btn-outline">Schedule Maintenance</button>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default SuperAdminDashboard;