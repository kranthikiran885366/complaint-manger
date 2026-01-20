'use client';

import React from 'react';
import { getMockAnalytics } from '../../services/mockDataService';
import '../../styles/dashboard.css';

const PublicTransparencyDashboard = () => {
    const analytics = getMockAnalytics();

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Public Transparency Dashboard</h1>
                <p>Open data on complaint resolution and government performance</p>
            </div>

            <section className="statistics-section">
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#e0e7ff', color: '#0052cc' }}>
                        <i className="fas fa-list"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{analytics.totalComplaints}</h3>
                        <p>Total Complaints</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#d1fae5', color: '#10b981' }}>
                        <i className="fas fa-check-circle"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{analytics.resolvedComplaints}</h3>
                        <p>Resolved</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#fef3c7', color: '#f59e0b' }}>
                        <i className="fas fa-percentage"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{Math.round((analytics.resolvedComplaints / analytics.totalComplaints) * 100)}%</h3>
                        <p>Resolution Rate</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#dbeafe', color: '#3b82f6' }}>
                        <i className="fas fa-clock"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{analytics.averageResolutionTime}</h3>
                        <p>Avg Resolution Time</p>
                    </div>
                </div>
            </section>

            <section className="complaints-section">
                <div className="section-header">
                    <h2>Department Performance</h2>
                    <p>Transparency in government service delivery</p>
                </div>
                <div className="department-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Department</th>
                                <th>Total Complaints</th>
                                <th>Resolved</th>
                                <th>Resolution Rate</th>
                                <th>Performance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {analytics.departmentStats.map((dept, index) => {
                                const rate = ((dept.resolved / dept.complaints) * 100).toFixed(1);
                                const performance = rate >= 90 ? 'Excellent' : rate >= 75 ? 'Good' : rate >= 60 ? 'Average' : 'Needs Improvement';
                                const performanceColor = rate >= 90 ? '#10b981' : rate >= 75 ? '#3b82f6' : rate >= 60 ? '#f59e0b' : '#ef4444';
                                
                                return (
                                    <tr key={index}>
                                        <td>{dept.name}</td>
                                        <td>{dept.complaints}</td>
                                        <td>{dept.resolved}</td>
                                        <td>{rate}%</td>
                                        <td>
                                            <span style={{color: performanceColor, fontWeight: 'bold'}}>
                                                {performance}
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="complaints-section">
                <div className="section-header">
                    <h2>Monthly Complaint Trends</h2>
                </div>
                <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'end', height: '200px', gap: '10px'}}>
                        {analytics.complaintsTrendData.map((data, index) => (
                            <div key={index} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1}}>
                                <div 
                                    style={{
                                        width: '40px',
                                        height: `${(data.complaints / 60) * 150}px`,
                                        background: '#0052cc',
                                        borderRadius: '4px 4px 0 0',
                                        marginBottom: '10px'
                                    }}
                                ></div>
                                <span style={{fontSize: '12px', fontWeight: 'bold'}}>{data.complaints}</span>
                                <span style={{fontSize: '12px', color: '#6b7280'}}>{data.month}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div style={{background: '#f3f4f6', padding: '20px', borderRadius: '8px', marginTop: '30px', textAlign: 'center'}}>
                <p style={{margin: 0, color: '#6b7280'}}>
                    This data is updated in real-time and reflects the commitment to transparency in public service delivery.
                    <br />
                    Last updated: {new Date().toLocaleString()}
                </p>
            </div>
        </div>
    );
};

export default PublicTransparencyDashboard;