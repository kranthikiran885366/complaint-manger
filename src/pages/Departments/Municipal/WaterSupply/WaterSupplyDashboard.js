'use client';

import React, { useState } from 'react';
import { getMockComplaints } from '../../../../services/mockDataService';
import { formatDate, getStatusBadgeClass } from '../../../../utils/helpers';
import '../../../../styles/dashboard.css';
import '../../../../styles/municipal-department.css';

const WaterSupplyDashboard = ({ user, onNavigate }) => {
    const complaints = getMockComplaints().filter(c => c.departmentId === 1);
    const [filter, setFilter] = useState('all');
    const [activeTab, setActiveTab] = useState('overview');

    const waterSupplyData = {
        zones: [
            { id: 1, name: 'Zone A', status: 'Normal', pressure: '45 PSI', quality: 'Good' },
            { id: 2, name: 'Zone B', status: 'Low Pressure', pressure: '25 PSI', quality: 'Good' },
            { id: 3, name: 'Zone C', status: 'Maintenance', pressure: '0 PSI', quality: 'Testing' }
        ],
        reservoirs: [
            { name: 'Main Reservoir', capacity: '50,000L', current: '42,000L', status: 'Normal' },
            { name: 'East Reservoir', capacity: '30,000L', current: '28,000L', status: 'Normal' },
            { name: 'West Reservoir', capacity: '25,000L', current: '15,000L', status: 'Low' }
        ],
        qualityTests: [
            { date: '2024-01-20', location: 'Zone A', ph: '7.2', chlorine: '0.5mg/L', result: 'Safe' },
            { date: '2024-01-19', location: 'Zone B', ph: '7.1', chlorine: '0.4mg/L', result: 'Safe' }
        ],
        maintenanceSchedule: [
            { date: '2024-01-25', area: 'Main Street', type: 'Pipe Replacement', duration: '4 hours' },
            { date: '2024-01-27', area: 'Park Road', type: 'Valve Maintenance', duration: '2 hours' }
        ]
    };

    const stats = {
        total: complaints.length,
        pending: complaints.filter(c => c.status === 'Pending').length,
        inProgress: complaints.filter(c => c.status === 'In Progress').length,
        resolved: complaints.filter(c => c.status === 'Resolved').length,
        connections: 15420,
        avgPressure: '38 PSI',
        qualityScore: '98%'
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Water Supply Department</h1>
                <p>Managing water distribution, quality, and infrastructure</p>
            </div>

            <section className="statistics-section">
                <div className="stat-card">
                    <div className="stat-icon">
                        <i className="fas fa-tint"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.connections}</h3>
                        <p>Active Connections</p>
                        <div className="stat-trend positive">
                            <i className="fas fa-arrow-up"></i>
                            <span>+2.5% growth</span>
                        </div>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">
                        <i className="fas fa-gauge"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.avgPressure}</h3>
                        <p>Avg Pressure</p>
                        <div className="stat-trend positive">
                            <i className="fas fa-check"></i>
                            <span>Optimal range</span>
                        </div>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">
                        <i className="fas fa-flask"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.qualityScore}</h3>
                        <p>Quality Score</p>
                        <div className="stat-trend positive">
                            <i className="fas fa-trophy"></i>
                            <span>Excellent rating</span>
                        </div>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">
                        <i className="fas fa-exclamation-triangle"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.pending}</h3>
                        <p>Pending Issues</p>
                        <div className="stat-trend">
                            <span>Needs attention</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="dashboard-widgets">
                <div className="widget">
                    <div className="widget-header">
                        <h3 className="widget-title">Department Sections</h3>
                        <div className="widget-icon">
                            <i className="fas fa-water"></i>
                        </div>
                    </div>
                    <div className="filter-buttons">
                        <button onClick={() => setActiveTab('overview')} className={`filter-btn ${activeTab === 'overview' ? 'active' : ''}`}>
                            <i className="fas fa-chart-pie"></i> Overview
                        </button>
                        <button onClick={() => setActiveTab('zones')} className={`filter-btn ${activeTab === 'zones' ? 'active' : ''}`}>
                            <i className="fas fa-map"></i> Water Zones
                        </button>
                        <button onClick={() => setActiveTab('quality')} className={`filter-btn ${activeTab === 'quality' ? 'active' : ''}`}>
                            <i className="fas fa-flask"></i> Quality Tests
                        </button>
                        <button onClick={() => setActiveTab('maintenance')} className={`filter-btn ${activeTab === 'maintenance' ? 'active' : ''}`}>
                            <i className="fas fa-tools"></i> Maintenance
                        </button>
                    </div>
                </div>
            </div>

            {activeTab === 'zones' && (
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px'}}>
                    {waterSupplyData.zones.map(zone => (
                        <div key={zone.id} style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                            <h3>{zone.name}</h3>
                            <div style={{display: 'grid', gap: '10px'}}>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Status:</span>
                                    <span style={{color: zone.status === 'Normal' ? '#10b981' : '#ef4444', fontWeight: 'bold'}}>{zone.status}</span>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Pressure:</span>
                                    <span>{zone.pressure}</span>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Quality:</span>
                                    <span>{zone.quality}</span>
                                </div>
                            </div>
                            <button className="btn btn-small btn-primary" style={{marginTop: '15px', width: '100%'}}>Monitor Zone</button>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === 'quality' && (
                <div style={{background: '#fff', borderRadius: '8px', padding: '20px'}}>
                    <h2>Water Quality Test Results</h2>
                    <table style={{width: '100%', marginTop: '20px'}}>
                        <thead>
                            <tr style={{background: '#f3f4f6'}}>
                                <th style={{padding: '12px', textAlign: 'left'}}>Date</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Location</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>pH Level</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Chlorine</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            {waterSupplyData.qualityTests.map((test, index) => (
                                <tr key={index}>
                                    <td style={{padding: '12px'}}>{test.date}</td>
                                    <td style={{padding: '12px'}}>{test.location}</td>
                                    <td style={{padding: '12px'}}>{test.ph}</td>
                                    <td style={{padding: '12px'}}>{test.chlorine}</td>
                                    <td style={{padding: '12px'}}>
                                        <span style={{background: '#d1fae5', color: '#065f46', padding: '4px 8px', borderRadius: '4px'}}>{test.result}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {activeTab === 'maintenance' && (
                <div style={{background: '#fff', borderRadius: '8px', padding: '20px'}}>
                    <h2>Scheduled Maintenance</h2>
                    <div style={{marginTop: '20px'}}>
                        {waterSupplyData.maintenanceSchedule.map((item, index) => (
                            <div key={index} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', border: '1px solid #e5e7eb', borderRadius: '8px', marginBottom: '10px'}}>
                                <div>
                                    <h4 style={{margin: 0}}>{item.type}</h4>
                                    <p style={{margin: '5px 0 0', color: '#6b7280'}}>{item.area}</p>
                                </div>
                                <div style={{textAlign: 'right'}}>
                                    <p style={{margin: 0, fontWeight: 'bold'}}>{item.date}</p>
                                    <p style={{margin: '5px 0 0', color: '#6b7280'}}>{item.duration}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default WaterSupplyDashboard;