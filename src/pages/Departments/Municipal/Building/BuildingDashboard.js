import React, { useState, useEffect } from 'react';
import '../../../../styles/dashboard.css';
import '../../../../styles/municipal-department.css';

const BuildingDashboard = () => {
    const [activeTab, setActiveTab] = useState('permits');
    const [stats, setStats] = useState({
        totalPermits: 156,
        pendingApprovals: 23,
        approvedToday: 8,
        violations: 12,
        inspections: 45
    });

    const [permits, setPermits] = useState([
        { id: 'BP001', type: 'Residential', applicant: 'Rajesh Kumar', status: 'Under Review', date: '2024-01-15' },
        { id: 'BP002', type: 'Commercial', applicant: 'ABC Builders', status: 'Approved', date: '2024-01-14' },
        { id: 'BP003', type: 'Industrial', applicant: 'XYZ Industries', status: 'Pending', date: '2024-01-13' }
    ]);

    const [inspections, setInspections] = useState([
        { id: 'INS001', location: 'Sector 15, Plot 23', type: 'Foundation', status: 'Scheduled', date: '2024-01-20' },
        { id: 'INS002', location: 'MG Road, Building 45', type: 'Final', status: 'Completed', date: '2024-01-18' }
    ]);

    const renderPermitsTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Total Permits</h3>
                    <p className="stat-number">{stats.totalPermits}</p>
                </div>
                <div className="stat-card">
                    <h3>Pending Approvals</h3>
                    <p className="stat-number">{stats.pendingApprovals}</p>
                </div>
                <div className="stat-card">
                    <h3>Approved Today</h3>
                    <p className="stat-number">{stats.approvedToday}</p>
                </div>
            </div>
            
            <div className="data-table">
                <h3>Building Permits</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Permit ID</th>
                            <th>Type</th>
                            <th>Applicant</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {permits.map(permit => (
                            <tr key={permit.id}>
                                <td>{permit.id}</td>
                                <td>{permit.type}</td>
                                <td>{permit.applicant}</td>
                                <td><span className={`status ${permit.status.toLowerCase().replace(' ', '-')}`}>{permit.status}</span></td>
                                <td>{permit.date}</td>
                                <td>
                                    <button className="btn-small">Review</button>
                                    <button className="btn-small">Approve</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderInspectionsTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Total Inspections</h3>
                    <p className="stat-number">{stats.inspections}</p>
                </div>
                <div className="stat-card">
                    <h3>Scheduled</h3>
                    <p className="stat-number">12</p>
                </div>
                <div className="stat-card">
                    <h3>Completed</h3>
                    <p className="stat-number">33</p>
                </div>
            </div>
            
            <div className="data-table">
                <h3>Building Inspections</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Inspection ID</th>
                            <th>Location</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inspections.map(inspection => (
                            <tr key={inspection.id}>
                                <td>{inspection.id}</td>
                                <td>{inspection.location}</td>
                                <td>{inspection.type}</td>
                                <td><span className={`status ${inspection.status.toLowerCase()}`}>{inspection.status}</span></td>
                                <td>{inspection.date}</td>
                                <td>
                                    <button className="btn-small">View</button>
                                    <button className="btn-small">Schedule</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderViolationsTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Active Violations</h3>
                    <p className="stat-number">{stats.violations}</p>
                </div>
                <div className="stat-card">
                    <h3>Resolved This Month</h3>
                    <p className="stat-number">28</p>
                </div>
                <div className="stat-card">
                    <h3>Penalty Collected</h3>
                    <p className="stat-number">₹2.5L</p>
                </div>
            </div>
            
            <div className="violation-list">
                <h3>Building Code Violations</h3>
                <div className="violation-item">
                    <h4>Unauthorized Construction - Sector 12</h4>
                    <p>Building constructed without proper permits</p>
                    <span className="status high">High Priority</span>
                </div>
                <div className="violation-item">
                    <h4>Safety Code Violation - MG Road</h4>
                    <p>Fire safety measures not implemented</p>
                    <span className="status medium">Medium Priority</span>
                </div>
            </div>
        </div>
    );

    const renderComplianceTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Compliance Rate</h3>
                    <p className="stat-number">87%</p>
                </div>
                <div className="stat-card">
                    <h3>Certified Buildings</h3>
                    <p className="stat-number">234</p>
                </div>
                <div className="stat-card">
                    <h3>Pending Certifications</h3>
                    <p className="stat-number">18</p>
                </div>
            </div>
            
            <div className="compliance-checklist">
                <h3>Building Code Compliance</h3>
                <div className="checklist-item">
                    <span className="check-icon">✓</span>
                    <span>Fire Safety Compliance</span>
                    <span className="percentage">92%</span>
                </div>
                <div className="checklist-item">
                    <span className="check-icon">✓</span>
                    <span>Structural Safety</span>
                    <span className="percentage">95%</span>
                </div>
                <div className="checklist-item">
                    <span className="check-icon">⚠</span>
                    <span>Environmental Compliance</span>
                    <span className="percentage">78%</span>
                </div>
            </div>
        </div>
    );

    return (
        <div className="department-dashboard">
            <div className="dashboard-header">
                <h1><i className="fas fa-hammer"></i> Building & Construction Department</h1>
                <p>Manage building permits, inspections, and code compliance</p>
            </div>

            <div className="dashboard-tabs">
                <button 
                    className={activeTab === 'permits' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('permits')}
                >
                    <i className="fas fa-file-alt"></i> Building Permits
                </button>
                <button 
                    className={activeTab === 'inspections' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('inspections')}
                >
                    <i className="fas fa-search"></i> Inspections
                </button>
                <button 
                    className={activeTab === 'violations' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('violations')}
                >
                    <i className="fas fa-exclamation-triangle"></i> Violations
                </button>
                <button 
                    className={activeTab === 'compliance' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('compliance')}
                >
                    <i className="fas fa-check-circle"></i> Compliance
                </button>
            </div>

            <div className="dashboard-content">
                {activeTab === 'permits' && renderPermitsTab()}
                {activeTab === 'inspections' && renderInspectionsTab()}
                {activeTab === 'violations' && renderViolationsTab()}
                {activeTab === 'compliance' && renderComplianceTab()}
            </div>
        </div>
    );
};

export default BuildingDashboard;