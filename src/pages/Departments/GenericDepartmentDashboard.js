'use client';

import React, { useState } from 'react';
import { getMockComplaints } from '../../services/mockDataService';
import { formatDate, getStatusBadgeClass } from '../../utils/helpers';
import { DEPARTMENTS } from '../../utils/constants';
import '../../styles/dashboard.css';

const GenericDepartmentDashboard = ({ departmentId, user, onNavigate }) => {
    const department = DEPARTMENTS.find(d => d.id === departmentId);
    const complaints = getMockComplaints().filter(c => c.departmentId === departmentId);
    const [filter, setFilter] = useState('all');

    const departmentServices = {
        1: ['Water Connection', 'Pipe Repair', 'Water Quality Testing', 'Billing Issues', 'Pressure Problems', 'Leakage Complaints'],
        2: ['Power Connection', 'Outage Complaints', 'Meter Issues', 'Billing Problems', 'Voltage Issues', 'Street Light Repair'],
        3: ['Road Repair', 'Pothole Complaints', 'Traffic Signal Issues', 'Road Construction', 'Speed Breaker Issues', 'Road Marking'],
        4: ['Garbage Collection', 'Waste Management', 'Cleaning Services', 'Bin Placement', 'Recycling', 'Composting'],
        5: ['Drain Cleaning', 'Sewerage Issues', 'Manhole Problems', 'Water Logging', 'Pipe Blockage', 'Overflow Issues'],
        6: ['Street Light Installation', 'Bulb Replacement', 'Pole Repair', 'Electrical Issues', 'Timer Problems', 'Energy Saving'],
        11: ['Crime Reporting', 'Public Safety', 'Traffic Violations', 'Noise Complaints', 'Security Issues', 'Emergency Response'],
        13: ['Fire Safety', 'Emergency Response', 'Rescue Operations', 'Fire Prevention', 'Safety Inspections', 'Equipment Maintenance'],
        15: ['Medical Services', 'Hospital Issues', 'Medicine Availability', 'Staff Complaints', 'Facility Problems', 'Emergency Care'],
        19: ['School Issues', 'Teacher Problems', 'Infrastructure', 'Exam Issues', 'Admission Problems', 'Facility Maintenance']
    };

    const contactInfo = {
        phone: `+91-11-${Math.floor(Math.random() * 9000) + 1000}-${Math.floor(Math.random() * 9000) + 1000}`,
        email: `${department?.name.toLowerCase().replace(/[^a-z]/g, '')}@municipal.gov.in`,
        address: `${department?.name} Office, Municipal Building`
    };

    const stats = {
        total: complaints.length,
        pending: complaints.filter(c => c.status === 'Pending').length,
        inProgress: complaints.filter(c => c.status === 'In Progress').length,
        resolved: complaints.filter(c => c.status === 'Resolved').length,
    };

    const getFilteredComplaints = () => {
        switch (filter) {
            case 'pending': return complaints.filter(c => c.status === 'Pending');
            case 'in-progress': return complaints.filter(c => c.status === 'In Progress');
            case 'resolved': return complaints.filter(c => c.status === 'Resolved');
            default: return complaints;
        }
    };

    if (!department) {
        return <div>Department not found</div>;
    }

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>{department.name} Department</h1>
                <p>Managing {department.name.toLowerCase()} services across the city</p>
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

            <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px'}}>
                <section className="complaints-section">
                    <div className="section-header">
                        <h2>Recent Complaints</h2>
                        <div className="filter-buttons">
                            <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
                            <button className={`filter-btn ${filter === 'pending' ? 'active' : ''}`} onClick={() => setFilter('pending')}>Pending</button>
                            <button className={`filter-btn ${filter === 'in-progress' ? 'active' : ''}`} onClick={() => setFilter('in-progress')}>In Progress</button>
                            <button className={`filter-btn ${filter === 'resolved' ? 'active' : ''}`} onClick={() => setFilter('resolved')}>Resolved</button>
                        </div>
                    </div>

                    <div className="complaints-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getFilteredComplaints().slice(0, 5).map(complaint => (
                                    <tr key={complaint.id}>
                                        <td>{complaint.id}</td>
                                        <td>{complaint.title}</td>
                                        <td>{formatDate(complaint.reportedDate)}</td>
                                        <td>
                                            <span className={`badge ${getStatusBadgeClass(complaint.status)}`}>
                                                {complaint.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section style={{background: '#fff', borderRadius: '8px', padding: '20px', border: '1px solid #e5e7eb'}}>
                    <h3>Department Services</h3>
                    <ul style={{listStyle: 'none', padding: 0}}>
                        {(departmentServices[departmentId] || ['General Services', 'Complaint Resolution', 'Public Support']).map((service, index) => (
                            <li key={index} style={{padding: '8px 0', borderBottom: '1px solid #f3f4f6'}}>
                                <i className="fas fa-check-circle" style={{color: '#10b981', marginRight: '8px'}}></i>
                                {service}
                            </li>
                        ))}
                    </ul>

                    <h3 style={{marginTop: '20px'}}>Contact Information</h3>
                    <div style={{fontSize: '14px', lineHeight: '1.6'}}>
                        <p><i className="fas fa-phone" style={{marginRight: '8px', color: '#6b7280'}}></i>{contactInfo.phone}</p>
                        <p><i className="fas fa-envelope" style={{marginRight: '8px', color: '#6b7280'}}></i>{contactInfo.email}</p>
                        <p><i className="fas fa-map-marker-alt" style={{marginRight: '8px', color: '#6b7280'}}></i>{contactInfo.address}</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default GenericDepartmentDashboard;