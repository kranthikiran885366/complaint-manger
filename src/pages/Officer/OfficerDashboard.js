'use client';

import React, { useState } from 'react';
import { getMockComplaints } from '../../services/mockDataService';
import { getStatusBadgeClass, formatDate } from '../../utils/helpers';
import '../../styles/dashboard.css';

const OfficerDashboard = ({ user, onNavigate }) => {
    const complaints = getMockComplaints();
    const [filter, setFilter] = useState('in-progress');

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

    const filteredComplaints = getFilteredComplaints();

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Officer Dashboard</h1>
                <p>Manage and resolve assigned complaints efficiently</p>
            </div>

            {/* Quick Stats */}
            <section className="statistics-section">
                <div className="stat-card">
                    <div className="stat-icon">
                        <i className="fas fa-tasks"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{complaints.length}</h3>
                        <p>Total Assigned</p>
                        <div className="stat-trend">
                            <span>Active workload</span>
                        </div>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">
                        <i className="fas fa-spinner"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{complaints.filter(c => c.status === 'In Progress').length}</h3>
                        <p>In Progress</p>
                        <div className="stat-trend positive">
                            <i className="fas fa-arrow-up"></i>
                            <span>Being processed</span>
                        </div>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">
                        <i className="fas fa-check-circle"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{complaints.filter(c => c.status === 'Resolved').length}</h3>
                        <p>Resolved</p>
                        <div className="stat-trend positive">
                            <i className="fas fa-trophy"></i>
                            <span>{((complaints.filter(c => c.status === 'Resolved').length / complaints.length) * 100).toFixed(0)}% success rate</span>
                        </div>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">
                        <i className="fas fa-clock"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{complaints.filter(c => c.status === 'Pending').length}</h3>
                        <p>Pending Review</p>
                        <div className="stat-trend">
                            <span>Needs attention</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Complaints List */}
            <section className="complaints-section">
                <div className="section-header">
                    <h2>Assigned Complaints</h2>
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
                                    <th><i className="fas fa-user"></i> Citizen</th>
                                    <th><i className="fas fa-calendar"></i> Date</th>
                                    <th><i className="fas fa-info-circle"></i> Status</th>
                                    <th><i className="fas fa-chart-line"></i> Progress</th>
                                    <th><i className="fas fa-cog"></i> Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredComplaints.map(complaint => (
                                    <tr key={complaint.id}>
                                        <td><strong>#{complaint.id}</strong></td>
                                        <td>
                                            <div style={{fontWeight: '600', color: 'var(--text-primary)'}}>
                                                {complaint.title}
                                            </div>
                                        </td>
                                        <td>
                                            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                                <i className="fas fa-user-circle" style={{color: 'var(--primary-blue)'}}></i>
                                                {complaint.citizenName}
                                            </div>
                                        </td>
                                        <td>{formatDate(complaint.reportedDate)}</td>
                                        <td>
                                            <span className={`badge ${getStatusBadgeClass(complaint.status)}`}>
                                                {complaint.status}
                                            </span>
                                        </td>
                                        <td>
                                            <div className="mini-progress" style={{background: 'var(--light-grey)', borderRadius: '10px', height: '8px', width: '80px', overflow: 'hidden'}}>
                                                <div className="mini-fill" style={{ 
                                                    width: `${complaint.progress}%`, 
                                                    height: '100%',
                                                    background: complaint.progress < 30 ? '#ef4444' : complaint.progress < 70 ? '#f59e0b' : '#10b981',
                                                    borderRadius: '10px',
                                                    transition: 'width 0.3s ease'
                                                }}></div>
                                            </div>
                                            <small style={{color: 'var(--text-secondary)', fontSize: '12px'}}>{complaint.progress}%</small>
                                        </td>
                                        <td>
                                            <button className="action-btn edit">
                                                <i className="fas fa-edit"></i> Update
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="empty-state">
                        <i className="fas fa-clipboard-check"></i>
                        <h3>No Complaints Found</h3>
                        <p>No complaints match the selected filter. Try changing the filter or check back later for new assignments.</p>
                    </div>
                )}
            </section>
        </div>
    );
};

export default OfficerDashboard;
