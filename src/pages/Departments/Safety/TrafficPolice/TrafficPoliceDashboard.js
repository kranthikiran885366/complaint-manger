'use client';

import React, { useState } from 'react';
import { getMockComplaints } from '../../../../services/mockDataService';
import '../../../../styles/dashboard.css';
import '../../../../styles/safety-department.css';

const TrafficPoliceDashboard = ({ user, onNavigate }) => {
    const complaints = getMockComplaints().filter(c => c.departmentId === 12);
    const [activeTab, setActiveTab] = useState('overview');

    const trafficData = {
        personnel: {
            totalOfficers: 180,
            onDuty: 145,
            patrolUnits: 25,
            trafficPoints: 85
        },
        violations: [
            { type: 'Speeding', count: 245, fines: '₹12,25,000', trend: '+15%' },
            { type: 'Signal Jumping', count: 189, fines: '₹9,45,000', trend: '+8%' },
            { type: 'Wrong Parking', count: 356, fines: '₹7,12,000', trend: '-5%' },
            { type: 'No Helmet', count: 478, fines: '₹4,78,000', trend: '+12%' },
            { type: 'Drunk Driving', count: 45, fines: '₹4,50,000', trend: '-20%' },
            { type: 'Mobile Usage', count: 167, fines: '₹1,67,000', trend: '+25%' }
        ],
        trafficSignals: {
            total: 245,
            working: 230,
            faulty: 15,
            underMaintenance: 5,
            efficiency: '93.9%'
        },
        accidents: {
            today: 8,
            thisWeek: 45,
            thisMonth: 156,
            fatal: 3,
            minor: 142,
            major: 11
        },
        checkpoints: [
            { location: 'Highway Junction', officers: 4, violations: 25, status: 'Active' },
            { location: 'City Center', officers: 6, violations: 18, status: 'Active' },
            { location: 'School Zone', officers: 3, violations: 12, status: 'Active' },
            { location: 'Market Area', officers: 5, violations: 22, status: 'Break' }
        ]
    };

    const stats = {
        totalOfficers: trafficData.personnel.totalOfficers,
        onDuty: trafficData.personnel.onDuty,
        totalViolations: trafficData.violations.reduce((sum, v) => sum + v.count, 0),
        totalFines: '₹40,77,000'
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Traffic Police Department</h1>
                <p>Traffic management, violation enforcement, and road safety</p>
            </div>

            <section className="statistics-section">
                <div className="stat-card">
                    <div className="stat-icon">
                        <i className="fas fa-user-shield"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.totalOfficers}</h3>
                        <p>Traffic Officers</p>
                        <div className="stat-trend positive">
                            <i className="fas fa-users"></i>
                            <span>Full strength</span>
                        </div>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">
                        <i className="fas fa-car"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.onDuty}</h3>
                        <p>On Duty</p>
                        <div className="stat-trend positive">
                            <i className="fas fa-check"></i>
                            <span>{((stats.onDuty / stats.totalOfficers) * 100).toFixed(0)}% deployment</span>
                        </div>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">
                        <i className="fas fa-exclamation-triangle"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.totalViolations}</h3>
                        <p>Violations Today</p>
                        <div className="stat-trend negative">
                            <i className="fas fa-arrow-up"></i>
                            <span>+18% from yesterday</span>
                        </div>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">
                        <i className="fas fa-rupee-sign"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.totalFines}</h3>
                        <p>Fines Collected</p>
                        <div className="stat-trend positive">
                            <i className="fas fa-chart-line"></i>
                            <span>Revenue generated</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="dashboard-widgets">
                <div className="widget">
                    <div className="widget-header">
                        <h3 className="widget-title">Traffic Management Sections</h3>
                        <div className="widget-icon">
                            <i className="fas fa-traffic-light"></i>
                        </div>
                    </div>
                    <div className="filter-buttons">
                        <button onClick={() => setActiveTab('overview')} className={`filter-btn ${activeTab === 'overview' ? 'active' : ''}`}>
                            <i className="fas fa-users"></i> Personnel
                        </button>
                        <button onClick={() => setActiveTab('violations')} className={`filter-btn ${activeTab === 'violations' ? 'active' : ''}`}>
                            <i className="fas fa-exclamation-triangle"></i> Violations
                        </button>
                        <button onClick={() => setActiveTab('signals')} className={`filter-btn ${activeTab === 'signals' ? 'active' : ''}`}>
                            <i className="fas fa-traffic-light"></i> Signals
                        </button>
                        <button onClick={() => setActiveTab('accidents')} className={`filter-btn ${activeTab === 'accidents' ? 'active' : ''}`}>
                            <i className="fas fa-car-crash"></i> Accidents
                        </button>
                        <button onClick={() => setActiveTab('checkpoints')} className={`filter-btn ${activeTab === 'checkpoints' ? 'active' : ''}`}>
                            <i className="fas fa-map-marker-alt"></i> Checkpoints
                        </button>
                    </div>
                </div>
            </div>

            {activeTab === 'overview' && (
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                        <h3>Personnel Deployment</h3>
                        <div style={{display: 'grid', gap: '15px', marginTop: '20px'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Total Officers:</span>
                                <span style={{fontWeight: 'bold'}}>{trafficData.personnel.totalOfficers}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>On Duty:</span>
                                <span style={{color: '#10b981'}}>{trafficData.personnel.onDuty}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Off Duty:</span>
                                <span style={{color: '#6b7280'}}>{trafficData.personnel.totalOfficers - trafficData.personnel.onDuty}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Patrol Units:</span>
                                <span style={{color: '#3b82f6'}}>{trafficData.personnel.patrolUnits}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Traffic Points:</span>
                                <span style={{color: '#f59e0b'}}>{trafficData.personnel.trafficPoints}</span>
                            </div>
                        </div>
                    </div>

                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                        <h3>Today's Summary</h3>
                        <div style={{display: 'grid', gap: '15px', marginTop: '20px'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Total Violations:</span>
                                <span style={{fontWeight: 'bold', color: '#ef4444'}}>{stats.totalViolations}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Fines Collected:</span>
                                <span style={{color: '#10b981', fontWeight: 'bold'}}>{stats.totalFines}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Accidents:</span>
                                <span style={{color: '#ef4444'}}>{trafficData.accidents.today}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Active Checkpoints:</span>
                                <span style={{color: '#3b82f6'}}>{trafficData.checkpoints.filter(c => c.status === 'Active').length}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'violations' && (
                <div style={{background: '#fff', borderRadius: '8px', padding: '20px'}}>
                    <h2>Traffic Violations Summary</h2>
                    <table style={{width: '100%', marginTop: '20px'}}>
                        <thead>
                            <tr style={{background: '#f3f4f6'}}>
                                <th style={{padding: '12px', textAlign: 'left'}}>Violation Type</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Count</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Fines Collected</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Trend</th>
                            </tr>
                        </thead>
                        <tbody>
                            {trafficData.violations.map((violation, index) => (
                                <tr key={index}>
                                    <td style={{padding: '12px', fontWeight: 'bold'}}>{violation.type}</td>
                                    <td style={{padding: '12px'}}>{violation.count}</td>
                                    <td style={{padding: '12px', color: '#10b981', fontWeight: 'bold'}}>{violation.fines}</td>
                                    <td style={{padding: '12px'}}>
                                        <span style={{
                                            color: violation.trend.startsWith('+') ? '#ef4444' : '#10b981',
                                            fontWeight: 'bold'
                                        }}>
                                            {violation.trend}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {activeTab === 'signals' && (
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px'}}>
                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb', textAlign: 'center'}}>
                        <h3 style={{color: '#0052cc', fontSize: '2rem', margin: 0}}>{trafficData.trafficSignals.total}</h3>
                        <p style={{margin: '5px 0 0', color: '#6b7280'}}>Total Signals</p>
                    </div>
                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb', textAlign: 'center'}}>
                        <h3 style={{color: '#10b981', fontSize: '2rem', margin: 0}}>{trafficData.trafficSignals.working}</h3>
                        <p style={{margin: '5px 0 0', color: '#6b7280'}}>Working</p>
                    </div>
                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb', textAlign: 'center'}}>
                        <h3 style={{color: '#ef4444', fontSize: '2rem', margin: 0}}>{trafficData.trafficSignals.faulty}</h3>
                        <p style={{margin: '5px 0 0', color: '#6b7280'}}>Faulty</p>
                    </div>
                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb', textAlign: 'center'}}>
                        <h3 style={{color: '#f59e0b', fontSize: '2rem', margin: 0}}>{trafficData.trafficSignals.underMaintenance}</h3>
                        <p style={{margin: '5px 0 0', color: '#6b7280'}}>Under Maintenance</p>
                    </div>
                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb', textAlign: 'center'}}>
                        <h3 style={{color: '#10b981', fontSize: '2rem', margin: 0}}>{trafficData.trafficSignals.efficiency}</h3>
                        <p style={{margin: '5px 0 0', color: '#6b7280'}}>Efficiency</p>
                    </div>
                </div>
            )}

            {activeTab === 'accidents' && (
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px'}}>
                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                        <h3>Today's Accidents</h3>
                        <div style={{display: 'grid', gap: '10px', marginTop: '15px'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Total:</span>
                                <span style={{fontWeight: 'bold', color: '#ef4444'}}>{trafficData.accidents.today}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Fatal:</span>
                                <span style={{color: '#ef4444'}}>{trafficData.accidents.fatal}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Major:</span>
                                <span style={{color: '#f59e0b'}}>{trafficData.accidents.major}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Minor:</span>
                                <span style={{color: '#10b981'}}>{trafficData.accidents.minor}</span>
                            </div>
                        </div>
                    </div>

                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                        <h3>This Week</h3>
                        <div style={{textAlign: 'center', marginTop: '20px'}}>
                            <h2 style={{color: '#ef4444', fontSize: '3rem', margin: 0}}>{trafficData.accidents.thisWeek}</h2>
                            <p style={{margin: '5px 0 0', color: '#6b7280'}}>Total Accidents</p>
                        </div>
                    </div>

                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                        <h3>This Month</h3>
                        <div style={{textAlign: 'center', marginTop: '20px'}}>
                            <h2 style={{color: '#ef4444', fontSize: '3rem', margin: 0}}>{trafficData.accidents.thisMonth}</h2>
                            <p style={{margin: '5px 0 0', color: '#6b7280'}}>Total Accidents</p>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'checkpoints' && (
                <div style={{background: '#fff', borderRadius: '8px', padding: '20px'}}>
                    <h2>Traffic Checkpoints</h2>
                    <table style={{width: '100%', marginTop: '20px'}}>
                        <thead>
                            <tr style={{background: '#f3f4f6'}}>
                                <th style={{padding: '12px', textAlign: 'left'}}>Location</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Officers</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Violations</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {trafficData.checkpoints.map((checkpoint, index) => (
                                <tr key={index}>
                                    <td style={{padding: '12px', fontWeight: 'bold'}}>{checkpoint.location}</td>
                                    <td style={{padding: '12px'}}>{checkpoint.officers}</td>
                                    <td style={{padding: '12px'}}>{checkpoint.violations}</td>
                                    <td style={{padding: '12px'}}>
                                        <span style={{
                                            background: checkpoint.status === 'Active' ? '#d1fae5' : '#fef3c7',
                                            color: checkpoint.status === 'Active' ? '#065f46' : '#92400e',
                                            padding: '4px 8px', borderRadius: '4px', fontSize: '12px'
                                        }}>
                                            {checkpoint.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default TrafficPoliceDashboard;