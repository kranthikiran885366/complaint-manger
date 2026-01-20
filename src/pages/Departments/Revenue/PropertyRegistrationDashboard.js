import React, { useState, useEffect } from 'react';
import '../../../styles/dashboard.css';
import '../../../styles/revenue-department.css';

const PropertyRegistrationDashboard = () => {
    const [activeTab, setActiveTab] = useState('registrations');
    const [stats, setStats] = useState({
        dailyRegistrations: 45,
        monthlyRegistrations: 1250,
        pendingApplications: 156,
        registrationRevenue: '₹3.2 Cr',
        averageProcessingTime: '3.5 days',
        digitalRegistrations: '78%'
    });

    const [applications, setApplications] = useState([
        { id: 'PR001', applicant: 'Rajesh Kumar', property: 'Residential Plot', value: '₹45 L', status: 'Under Review', date: '2024-01-15' },
        { id: 'PR002', applicant: 'Priya Sharma', property: 'Commercial Building', value: '₹1.2 Cr', status: 'Approved', date: '2024-01-14' },
        { id: 'PR003', applicant: 'ABC Developers', property: 'Apartment Complex', value: '₹5.8 Cr', status: 'Document Verification', date: '2024-01-13' }
    ]);

    const renderRegistrationsTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Today's Registrations</h3>
                    <p className="stat-number">{stats.dailyRegistrations}</p>
                </div>
                <div className="stat-card">
                    <h3>This Month</h3>
                    <p className="stat-number">{stats.monthlyRegistrations}</p>
                </div>
                <div className="stat-card">
                    <h3>Pending Applications</h3>
                    <p className="stat-number">{stats.pendingApplications}</p>
                </div>
                <div className="stat-card">
                    <h3>Processing Time</h3>
                    <p className="stat-number">{stats.averageProcessingTime}</p>
                </div>
            </div>
            
            <div className="data-table">
                <h3>Recent Registration Applications</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Application ID</th>
                            <th>Applicant</th>
                            <th>Property Type</th>
                            <th>Property Value</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map(app => (
                            <tr key={app.id}>
                                <td>{app.id}</td>
                                <td>{app.applicant}</td>
                                <td>{app.property}</td>
                                <td>{app.value}</td>
                                <td><span className={`status ${app.status.toLowerCase().replace(' ', '-')}`}>{app.status}</span></td>
                                <td>{app.date}</td>
                                <td>
                                    <button className="btn-small">View</button>
                                    <button className="btn-small">Process</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <div className="registration-types">
                <h3>Registration by Property Type</h3>
                <div className="type-breakdown">
                    <div className="type-item">
                        <span>Residential Properties</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '55%'}}></div>
                        </div>
                        <span>55% (687 registrations)</span>
                    </div>
                    <div className="type-item">
                        <span>Commercial Properties</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '30%'}}></div>
                        </div>
                        <span>30% (375 registrations)</span>
                    </div>
                    <div className="type-item">
                        <span>Industrial Properties</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '15%'}}></div>
                        </div>
                        <span>15% (188 registrations)</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderDocumentsTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Documents Processed</h3>
                    <p className="stat-number">2,450</p>
                    <small>This Month</small>
                </div>
                <div className="stat-card">
                    <h3>Digital Submissions</h3>
                    <p className="stat-number">{stats.digitalRegistrations}</p>
                </div>
                <div className="stat-card">
                    <h3>Verification Pending</h3>
                    <p className="stat-number">89</p>
                </div>
                <div className="stat-card">
                    <h3>Rejected Documents</h3>
                    <p className="stat-number">23</p>
                </div>
            </div>
            
            <div className="document-workflow">
                <h3>Document Processing Workflow</h3>
                <div className="workflow-stages">
                    <div className="stage-item">
                        <div className="stage-icon">📄</div>
                        <div className="stage-details">
                            <h4>Document Submission</h4>
                            <span className="stage-count">156 applications</span>
                        </div>
                    </div>
                    <div className="stage-item">
                        <div className="stage-icon">🔍</div>
                        <div className="stage-details">
                            <h4>Initial Verification</h4>
                            <span className="stage-count">89 applications</span>
                        </div>
                    </div>
                    <div className="stage-item">
                        <div className="stage-icon">✅</div>
                        <div className="stage-details">
                            <h4>Legal Verification</h4>
                            <span className="stage-count">67 applications</span>
                        </div>
                    </div>
                    <div className="stage-item">
                        <div className="stage-icon">📋</div>
                        <div className="stage-details">
                            <h4>Final Approval</h4>
                            <span className="stage-count">45 applications</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="document-requirements">
                <h3>Required Documents Checklist</h3>
                <div className="checklist-grid">
                    <div className="checklist-item">
                        <i className="fas fa-file-alt"></i>
                        <span>Sale Deed</span>
                        <span className="requirement">Mandatory</span>
                    </div>
                    <div className="checklist-item">
                        <i className="fas fa-id-card"></i>
                        <span>Identity Proof</span>
                        <span className="requirement">Mandatory</span>
                    </div>
                    <div className="checklist-item">
                        <i className="fas fa-home"></i>
                        <span>Property Documents</span>
                        <span className="requirement">Mandatory</span>
                    </div>
                    <div className="checklist-item">
                        <i className="fas fa-receipt"></i>
                        <span>Tax Receipts</span>
                        <span className="requirement">Required</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderRevenueTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Monthly Revenue</h3>
                    <p className="stat-number">{stats.registrationRevenue}</p>
                </div>
                <div className="stat-card">
                    <h3>Stamp Duty</h3>
                    <p className="stat-number">₹2.1 Cr</p>
                </div>
                <div className="stat-card">
                    <h3>Registration Fees</h3>
                    <p className="stat-number">₹1.1 Cr</p>
                </div>
                <div className="stat-card">
                    <h3>Collection Rate</h3>
                    <p className="stat-number">96%</p>
                </div>
            </div>
            
            <div className="revenue-breakdown">
                <h3>Revenue Breakdown by Property Value</h3>
                <div className="value-ranges">
                    <div className="range-item">
                        <span>Below ₹50 L</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '35%'}}></div>
                        </div>
                        <span>35% (₹1.12 Cr)</span>
                    </div>
                    <div className="range-item">
                        <span>₹50 L - ₹1 Cr</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '40%'}}></div>
                        </div>
                        <span>40% (₹1.28 Cr)</span>
                    </div>
                    <div className="range-item">
                        <span>Above ₹1 Cr</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '25%'}}></div>
                        </div>
                        <span>25% (₹80 L)</span>
                    </div>
                </div>
            </div>
            
            <div className="fee-structure">
                <h3>Registration Fee Structure</h3>
                <div className="fee-table">
                    <div className="fee-row">
                        <span className="property-type">Residential (up to ₹50 L)</span>
                        <span className="fee-rate">1% + ₹500</span>
                    </div>
                    <div className="fee-row">
                        <span className="property-type">Commercial (up to ₹1 Cr)</span>
                        <span className="fee-rate">3% + ₹1,000</span>
                    </div>
                    <div className="fee-row">
                        <span className="property-type">Industrial (above ₹1 Cr)</span>
                        <span className="fee-rate">5% + ₹2,000</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderRecordsTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Total Records</h3>
                    <p className="stat-number">2,45,600</p>
                </div>
                <div className="stat-card">
                    <h3>Digitized Records</h3>
                    <p className="stat-number">1,89,450</p>
                </div>
                <div className="stat-card">
                    <h3>Search Queries</h3>
                    <p className="stat-number">1,560</p>
                    <small>Today</small>
                </div>
                <div className="stat-card">
                    <h3>Record Accuracy</h3>
                    <p className="stat-number">99.2%</p>
                </div>
            </div>
            
            <div className="digitization-progress">
                <h3>Record Digitization Progress</h3>
                <div className="digitization-stats">
                    <div className="digit-item">
                        <span>Property Deeds</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '85%'}}></div>
                        </div>
                        <span>85% Complete</span>
                    </div>
                    <div className="digit-item">
                        <span>Survey Records</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '72%'}}></div>
                        </div>
                        <span>72% Complete</span>
                    </div>
                    <div className="digit-item">
                        <span>Revenue Records</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '68%'}}></div>
                        </div>
                        <span>68% Complete</span>
                    </div>
                </div>
            </div>
            
            <div className="record-services">
                <h3>Record Services</h3>
                <div className="service-grid">
                    <div className="service-item">
                        <i className="fas fa-search"></i>
                        <h4>Property Search</h4>
                        <p>Search property records by various parameters</p>
                        <span className="usage">1,560 searches today</span>
                    </div>
                    <div className="service-item">
                        <i className="fas fa-certificate"></i>
                        <h4>Certified Copies</h4>
                        <p>Issue certified copies of property documents</p>
                        <span className="usage">89 copies issued</span>
                    </div>
                    <div className="service-item">
                        <i className="fas fa-history"></i>
                        <h4>Property History</h4>
                        <p>Complete ownership history of properties</p>
                        <span className="usage">234 history reports</span>
                    </div>
                    <div className="service-item">
                        <i className="fas fa-map"></i>
                        <h4>Survey Records</h4>
                        <p>Land survey and boundary information</p>
                        <span className="usage">156 survey records</span>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="department-dashboard">
            <div className="dashboard-header">
                <h1><i className="fas fa-file-contract"></i> Property Registration Department</h1>
                <p>Property registration services and land records management</p>
            </div>

            <div className="dashboard-tabs">
                <button 
                    className={activeTab === 'registrations' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('registrations')}
                >
                    <i className="fas fa-file-signature"></i> Registrations
                </button>
                <button 
                    className={activeTab === 'documents' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('documents')}
                >
                    <i className="fas fa-folder-open"></i> Document Processing
                </button>
                <button 
                    className={activeTab === 'revenue' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('revenue')}
                >
                    <i className="fas fa-coins"></i> Revenue Collection
                </button>
                <button 
                    className={activeTab === 'records' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('records')}
                >
                    <i className="fas fa-database"></i> Property Records
                </button>
            </div>

            <div className="dashboard-content">
                {activeTab === 'registrations' && renderRegistrationsTab()}
                {activeTab === 'documents' && renderDocumentsTab()}
                {activeTab === 'revenue' && renderRevenueTab()}
                {activeTab === 'records' && renderRecordsTab()}
            </div>
        </div>
    );
};

export default PropertyRegistrationDashboard;