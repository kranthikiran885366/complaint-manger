'use client';

import React, { useState } from 'react';
import { getMockComplaints } from '../../services/mockDataService';
import { getStatusBadgeClass, formatDate } from '../../utils/helpers';
import { DEPARTMENTS } from '../../utils/constants';
import '../../styles/dashboard.css';

const CitizenDashboard = ({ user, onNavigate }) => {
    const complaints = getMockComplaints();
    const [filter, setFilter] = useState('all');

    const getStatistics = () => {
        const total = complaints.length;
        const pending = complaints.filter(c => c.status === 'Pending').length;
        const inProgress = complaints.filter(c => c.status === 'In Progress').length;
        const resolved = complaints.filter(c => c.status === 'Resolved').length;
        return { total, pending, inProgress, resolved };
    };

    const getFilteredComplaints = () => {
        switch (filter) {
            case 'pending':
                return complaints.filter(c => c.status === 'Pending');
            case 'in-progress':
                return complaints.filter(c => c.status === 'In Progress');
            case 'resolved':
                return complaints.filter(c => c.status === 'Resolved');
            default:
                return complaints;
        }
    };

    const stats = getStatistics();
    const filteredComplaints = getFilteredComplaints();

    const departmentImages = {
        1: '/images/water-supply-dept.jpg',
        2: '/images/electricity-dept.jpg',
        3: '/images/roads-dept.jpg',
        4: '/images/sanitation-dept.jpg',
        5: '/images/telecom-dept.jpg',
        6: '/images/health-dept.jpg',
        7: '/images/police-dept.jpg',
        8: '/images/education-dept.jpg'
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Welcome back, {user?.name}!</h1>
                <p>Manage and track your complaints with ease</p>
            </div>

            {/* Statistics Cards */}
            <section className="statistics-section">
                <div className="stat-card">
                    <div className="stat-icon">
                        <i className="fas fa-list"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.total}</h3>
                        <p>Total Complaints</p>
                        <div className="stat-trend positive">
                            <i className="fas fa-arrow-up"></i>
                            <span>+12% this month</span>
                        </div>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">
                        <i className="fas fa-clock"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.pending}</h3>
                        <p>Pending</p>
                        <div className="stat-trend">
                            <span>Awaiting response</span>
                        </div>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">
                        <i className="fas fa-spinner"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.inProgress}</h3>
                        <p>In Progress</p>
                        <div className="stat-trend positive">
                            <i className="fas fa-arrow-up"></i>
                            <span>Being resolved</span>
                        </div>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">
                        <i className="fas fa-check-circle"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.resolved}</h3>
                        <p>Resolved</p>
                        <div className="stat-trend positive">
                            <i className="fas fa-check"></i>
                            <span>Successfully closed</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Action */}
            <section className="quick-action">
                <button className="btn btn-primary" onClick={() => onNavigate('register-complaint')}>
                    <i className="fas fa-plus-circle"></i>
                    File New Complaint
                </button>
            </section>

            {/* Complaints List */}
            <section className="complaints-section">
                <div className="section-header">
                    <h2>Your Complaints</h2>
                    <div className="filter-buttons">
                        <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
                            All
                        </button>
                        <button className={`filter-btn ${filter === 'pending' ? 'active' : ''}`} onClick={() => setFilter('pending')}>
                            Pending
                        </button>
                        <button className={`filter-btn ${filter === 'in-progress' ? 'active' : ''}`} onClick={() => setFilter('in-progress')}>
                            In Progress
                        </button>
                        <button className={`filter-btn ${filter === 'resolved' ? 'active' : ''}`} onClick={() => setFilter('resolved')}>
                            Resolved
                        </button>
                    </div>
                </div>

                {filteredComplaints.length > 0 ? (
                    <div className="complaints-table">
                        <table>
                            <thead>
                                <tr>
                                    <th><i className="fas fa-hashtag"></i> ID</th>
                                    <th><i className="fas fa-file-alt"></i> Title</th>
                                    <th><i className="fas fa-building"></i> Department</th>
                                    <th><i className="fas fa-calendar"></i> Date</th>
                                    <th><i className="fas fa-info-circle"></i> Status</th>
                                    <th><i className="fas fa-cog"></i> Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredComplaints.map(complaint => (
                                    <tr key={complaint.id}>
                                        <td>
                                            <strong>#{complaint.id}</strong>
                                        </td>
                                        <td>
                                            <div style={{fontWeight: '600', color: 'var(--text-primary)'}}>
                                                {complaint.title}
                                            </div>
                                        </td>
                                        <td>
                                            <span style={{color: 'var(--text-secondary)'}}>
                                                {complaint.department}
                                            </span>
                                        </td>
                                        <td>{formatDate(complaint.reportedDate)}</td>
                                        <td>
                                            <span className={`badge ${getStatusBadgeClass(complaint.status)}`}>
                                                {complaint.status}
                                            </span>
                                        </td>
                                        <td>
                                            <button
                                                className="action-btn view"
                                                onClick={() => onNavigate(`complaint-detail-${complaint.id}`)}
                                            >
                                                <i className="fas fa-eye"></i> View
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="empty-state">
                        <i className="fas fa-inbox"></i>
                        <h3>No Complaints Found</h3>
                        <p>You haven't filed any complaints yet. Start by clicking the "File New Complaint" button above to report an issue.</p>
                        <button className="btn btn-primary" onClick={() => onNavigate('register-complaint')}>
                            <i className="fas fa-plus"></i> File Your First Complaint
                        </button>
                    </div>
                )}
            </section>

            {/* Departments Showcase */}
            <section className="complaints-section">
                <div className="section-header">
                    <h2>Departments We Serve</h2>
                    <p>Click on any department to file a complaint</p>
                </div>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px'}}>
                    {DEPARTMENTS.filter(d => d.id !== 9).map(dept => (
                        <div key={dept.id} onClick={() => onNavigate('register-complaint')} style={{cursor: 'pointer', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', transition: 'transform 0.3s'}}>
                            <img src={departmentImages[dept.id]} alt={dept.name} style={{width: '100%', height: '150px', objectFit: 'cover'}} />
                            <div style={{padding: '15px', background: '#fff'}}>
                                <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                                    <i className={`fas ${dept.icon}`} style={{color: dept.color, fontSize: '20px'}}></i>
                                    <h4 style={{margin: 0, fontSize: '14px'}}>{dept.name}</h4>
                                </div>
                                <button className="btn btn-small btn-primary" style={{width: '100%'}}>File Complaint</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default CitizenDashboard;
