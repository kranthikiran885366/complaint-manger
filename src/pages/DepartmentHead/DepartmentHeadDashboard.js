'use client';

import React, { useState } from 'react';
import { getMockComplaints, getMockOfficers } from '../../services/mockDataService';
import '../../styles/dashboard.css';

const DepartmentHeadDashboard = ({ user, onNavigate }) => {
    const userDepartment = user?.department || 'Water Supply';
    const complaints = getMockComplaints().filter(c => c.department === userDepartment);
    const officers = getMockOfficers().filter(o => o.department === userDepartment);
    const [activeTab, setActiveTab] = useState('overview');

    const stats = {
        total: complaints.length,
        pending: complaints.filter(c => c.status === 'Pending').length,
        inProgress: complaints.filter(c => c.status === 'In Progress').length,
        resolved: complaints.filter(c => c.status === 'Resolved').length,
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>{userDepartment} - Department Head</h1>
                <p>Manage department operations and performance</p>
            </div>

            <section className="statistics-section">
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#e0e7ff', color: '#0052cc' }}>
                        <i className="fas fa-list"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.total}</h3>
                        <p>Total Complaints</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#fef3c7', color: '#f59e0b' }}>
                        <i className="fas fa-clock"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.pending}</h3>
                        <p>Pending</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#dbeafe', color: '#3b82f6' }}>
                        <i className="fas fa-spinner"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.inProgress}</h3>
                        <p>In Progress</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#d1fae5', color: '#10b981' }}>
                        <i className="fas fa-check-circle"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.resolved}</h3>
                        <p>Resolved</p>
                    </div>
                </div>
            </section>

            <div style={{display: 'flex', gap: '10px', marginBottom: '30px', borderBottom: '1px solid #e5e7eb'}}>
                <button onClick={() => setActiveTab('overview')} style={{padding: '10px 20px', background: activeTab === 'overview' ? '#0052cc' : 'transparent', color: activeTab === 'overview' ? '#fff' : '#6b7280', border: 'none', borderRadius: '4px 4px 0 0', cursor: 'pointer'}}>
                    Overview
                </button>
                <button onClick={() => setActiveTab('officers')} style={{padding: '10px 20px', background: activeTab === 'officers' ? '#0052cc' : 'transparent', color: activeTab === 'officers' ? '#fff' : '#6b7280', border: 'none', borderRadius: '4px 4px 0 0', cursor: 'pointer'}}>
                    Officers
                </button>
                <button onClick={() => setActiveTab('performance')} style={{padding: '10px 20px', background: activeTab === 'performance' ? '#0052cc' : 'transparent', color: activeTab === 'performance' ? '#fff' : '#6b7280', border: 'none', borderRadius: '4px 4px 0 0', cursor: 'pointer'}}>
                    Performance
                </button>
            </div>

            {activeTab === 'officers' && (
                <section className="complaints-section">
                    <div className="section-header">
                        <h2>Department Officers</h2>
                    </div>
                    <div className="officers-grid">
                        {officers && officers.length > 0 ? officers.map(officer => (
                            <div key={officer.id} className="officer-card">
                                <h3>{officer.name}</h3>
                                <p>{officer.email}</p>
                                <div className="officer-stats">
                                    <div className="stat">
                                        <span className="value">{officer.complaintsAssigned || 0}</span>
                                        <span className="label">Assigned</span>
                                    </div>
                                    <div className="stat">
                                        <span className="value">{officer.resolved || 0}</span>
                                        <span className="label">Resolved</span>
                                    </div>
                                </div>
                            </div>
                        )) : (
                            <div style={{padding: '20px', textAlign: 'center', color: '#6b7280'}}>
                                No officers assigned to this department
                            </div>
                        )}
                    </div>
                </section>
            )}
        </div>
    );
};

export default DepartmentHeadDashboard;