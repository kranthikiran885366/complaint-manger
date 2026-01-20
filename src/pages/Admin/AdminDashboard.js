'use client';

import React, { useState } from 'react';
import { getMockAnalytics, getMockOfficers } from '../../services/mockDataService';
import { DEPARTMENTS } from '../../utils/constants';
import '../../styles/dashboard.css';

const AdminDashboard = ({ user, onNavigate }) => {
    const analytics = getMockAnalytics();
    const officers = getMockOfficers();
    const [activeTab, setActiveTab] = useState('overview');
    const [showComplaintControl, setShowComplaintControl] = useState(false);

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Admin Dashboard</h1>
                <p>Monitor system-wide metrics and performance analytics</p>
            </div>

            {/* Analytics Stats */}
            <section className="statistics-section">
                <div className="stat-card">
                    <div className="stat-icon">
                        <i className="fas fa-chart-bar"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{analytics.totalComplaints}</h3>
                        <p>Total Complaints</p>
                        <div className="stat-trend positive">
                            <i className="fas fa-arrow-up"></i>
                            <span>+15% this month</span>
                        </div>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">
                        <i className="fas fa-check-circle"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{analytics.resolvedComplaints}</h3>
                        <p>Resolved</p>
                        <div className="stat-trend positive">
                            <i className="fas fa-trophy"></i>
                            <span>{((analytics.resolvedComplaints / analytics.totalComplaints) * 100).toFixed(1)}% success rate</span>
                        </div>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">
                        <i className="fas fa-clock"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{analytics.pendingComplaints}</h3>
                        <p>Pending</p>
                        <div className="stat-trend">
                            <span>Awaiting action</span>
                        </div>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">
                        <i className="fas fa-exclamation-triangle"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{analytics.slaViolations}</h3>
                        <p>SLA Violations</p>
                        <div className="stat-trend negative">
                            <i className="fas fa-arrow-down"></i>
                            <span>-8% improvement</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Department Stats */}
            <section className="complaints-section">
                <div className="section-header">
                    <h2>Department Performance</h2>
                </div>

                <div className="complaints-table">
                    <table>
                        <thead>
                            <tr>
                                <th><i className="fas fa-building"></i> Department</th>
                                <th><i className="fas fa-list"></i> Total</th>
                                <th><i className="fas fa-check"></i> Resolved</th>
                                <th><i className="fas fa-clock"></i> Pending</th>
                                <th><i className="fas fa-percentage"></i> Success Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {analytics.departmentStats.map((dept, index) => {
                                const pending = dept.complaints - dept.resolved;
                                const rate = ((dept.resolved / dept.complaints) * 100).toFixed(1);
                                return (
                                    <tr key={index}>
                                        <td>
                                            <div style={{fontWeight: '600', color: 'var(--text-primary)'}}>
                                                {dept.name}
                                            </div>
                                        </td>
                                        <td><strong>{dept.complaints}</strong></td>
                                        <td>
                                            <span style={{color: 'var(--secondary-green)', fontWeight: '600'}}>
                                                {dept.resolved}
                                            </span>
                                        </td>
                                        <td>
                                            <span style={{color: pending > 5 ? 'var(--danger)' : 'var(--text-secondary)'}}>
                                                {pending}
                                            </span>
                                        </td>
                                        <td>
                                            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                                <div style={{
                                                    width: '60px',
                                                    height: '6px',
                                                    background: 'var(--light-grey)',
                                                    borderRadius: '3px',
                                                    overflow: 'hidden'
                                                }}>
                                                    <div style={{
                                                        width: `${rate}%`,
                                                        height: '100%',
                                                        background: rate >= 80 ? 'var(--secondary-green)' : rate >= 60 ? '#f59e0b' : 'var(--danger)',
                                                        borderRadius: '3px'
                                                    }}></div>
                                                </div>
                                                <span style={{fontWeight: '600', color: 'var(--text-primary)'}}>{rate}%</span>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Enhanced Tab Navigation */}
            <div className="dashboard-widgets">
                <div className="widget">
                    <div className="widget-header">
                        <h3 className="widget-title">Quick Actions</h3>
                        <div className="widget-icon">
                            <i className="fas fa-bolt"></i>
                        </div>
                    </div>
                    <div style={{display: 'flex', gap: '10px', marginBottom: '20px'}}>
                        <button onClick={() => setActiveTab('overview')} className={`filter-btn ${activeTab === 'overview' ? 'active' : ''}`}>
                            <i className="fas fa-chart-pie"></i> Overview
                        </button>
                        <button onClick={() => setActiveTab('complaints')} className={`filter-btn ${activeTab === 'complaints' ? 'active' : ''}`}>
                            <i className="fas fa-folder"></i> Complaints
                        </button>
                        <button onClick={() => setActiveTab('users')} className={`filter-btn ${activeTab === 'users' ? 'active' : ''}`}>
                            <i className="fas fa-users"></i> Users
                        </button>
                        <button onClick={() => setActiveTab('settings')} className={`filter-btn ${activeTab === 'settings' ? 'active' : ''}`}>
                            <i className="fas fa-cog"></i> Settings
                        </button>
                    </div>
                </div>
            </div>

            {activeTab === 'overview' && (
                <>
                    {/* Officer Performance */}
                    <section className="complaints-section">
                        <div className="section-header">
                            <h2>Officer Performance</h2>
                        </div>

                        <div className="officers-grid">
                            {officers.map(officer => (
                                <div key={officer.id} className="officer-card">
                                    <h3>{officer.name}</h3>
                                    <p className="department">{officer.department}</p>
                                    <div className="officer-stats">
                                        <div className="stat">
                                            <span className="value">{officer.complaintsAssigned}</span>
                                            <span className="label">Assigned</span>
                                        </div>
                                        <div className="stat">
                                            <span className="value">{officer.resolved}</span>
                                            <span className="label">Resolved</span>
                                        </div>
                                        <div className="stat">
                                            <span className="value">{((officer.resolved / officer.complaintsAssigned) * 100).toFixed(0)}%</span>
                                            <span className="label">Rate</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </>
            )}

            {activeTab === 'complaints' && (
                <section style={{background: '#fff', borderRadius: '8px', padding: '20px'}}>
                    <h2>Complaint Management</h2>
                    <div style={{marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px'}}>
                        <button style={{padding: '20px', border: '2px solid #0052cc', borderRadius: '8px', background: '#fff', cursor: 'pointer', textAlign: 'center'}}>
                            <i className="fas fa-search" style={{fontSize: '24px', color: '#0052cc'}}></i>
                            <p style={{marginTop: '10px', color: '#0052cc', fontWeight: 'bold'}}>Search Complaints</p>
                        </button>
                        <button style={{padding: '20px', border: '2px solid #f59e0b', borderRadius: '8px', background: '#fff', cursor: 'pointer', textAlign: 'center'}}>
                            <i className="fas fa-sync" style={{fontSize: '24px', color: '#f59e0b'}}></i>
                            <p style={{marginTop: '10px', color: '#f59e0b', fontWeight: 'bold'}}>Reassign</p>
                        </button>
                        <button style={{padding: '20px', border: '2px solid #ef4444', borderRadius: '8px', background: '#fff', cursor: 'pointer', textAlign: 'center'}}>
                            <i className="fas fa-trash" style={{fontSize: '24px', color: '#ef4444'}}></i>
                            <p style={{marginTop: '10px', color: '#ef4444', fontWeight: 'bold'}}>Delete (Legal)</p>
                        </button>
                        <button style={{padding: '20px', border: '2px solid #10b981', borderRadius: '8px', background: '#fff', cursor: 'pointer', textAlign: 'center'}}>
                            <i className="fas fa-merge" style={{fontSize: '24px', color: '#10b981'}}></i>
                            <p style={{marginTop: '10px', color: '#10b981', fontWeight: 'bold'}}>Merge Duplicate</p>
                        </button>
                    </div>
                </section>
            )}

            {activeTab === 'users' && (
                <section style={{background: '#fff', borderRadius: '8px', padding: '20px'}}>
                    <h2>User Management</h2>
                    <table style={{width: '100%', marginTop: '20px', borderCollapse: 'collapse'}}>
                        <thead>
                            <tr style={{background: '#f3f4f6'}}>
                                <th style={{padding: '12px', textAlign: 'left', border: '1px solid #e5e7eb'}}>User</th>
                                <th style={{padding: '12px', textAlign: 'left', border: '1px solid #e5e7eb'}}>Role</th>
                                <th style={{padding: '12px', textAlign: 'left', border: '1px solid #e5e7eb'}}>Department</th>
                                <th style={{padding: '12px', textAlign: 'left', border: '1px solid #e5e7eb'}}>Status</th>
                                <th style={{padding: '12px', textAlign: 'left', border: '1px solid #e5e7eb'}}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {officers.slice(0, 5).map(officer => (
                                <tr key={officer.id}>
                                    <td style={{padding: '12px', border: '1px solid #e5e7eb'}}>{officer.name}</td>
                                    <td style={{padding: '12px', border: '1px solid #e5e7eb'}}>Officer</td>
                                    <td style={{padding: '12px', border: '1px solid #e5e7eb'}}>{officer.department}</td>
                                    <td style={{padding: '12px', border: '1px solid #e5e7eb'}}><span style={{background: '#d1fae5', color: '#10b981', padding: '4px 8px', borderRadius: '4px'}}>Active</span></td>
                                    <td style={{padding: '12px', border: '1px solid #e5e7eb'}}>
                                        <button style={{background: 'none', border: 'none', color: '#0052cc', cursor: 'pointer', marginRight: '10px'}}>Edit</button>
                                        <button style={{background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer'}}>Block</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            )}

            {activeTab === 'settings' && (
                <section style={{background: '#fff', borderRadius: '8px', padding: '20px'}}>
                    <h2>System Configuration</h2>
                    <div style={{marginTop: '20px'}}>
                        <h3>SLA Configuration</h3>
                        {['Low', 'Medium', 'High', 'Critical'].map(priority => (
                            <div key={priority} style={{marginBottom: '15px', display: 'flex', gap: '15px', alignItems: 'center'}}>
                                <label style={{minWidth: '80px', fontWeight: 'bold'}}>{priority}:</label>
                                <input type="number" placeholder="Days" defaultValue={priority === 'Critical' ? 1 : priority === 'High' ? 3 : priority === 'Medium' ? 7 : 15} style={{padding: '8px', border: '1px solid #e5e7eb', borderRadius: '4px', width: '100px'}} />
                                <span>days</span>
                            </div>
                        ))}
                        <button className="btn btn-primary" style={{marginTop: '20px'}}>Save SLA Settings</button>
                    </div>
                </section>
            )}
        </div>
    );
};

export default AdminDashboard;
