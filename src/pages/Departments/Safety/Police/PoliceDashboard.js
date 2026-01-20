'use client';

import React, { useState } from 'react';
import { getMockComplaints } from '../../../../services/mockDataService';
import { formatDate, getStatusBadgeClass } from '../../../../utils/helpers';
import '../../../../styles/dashboard.css';
import '../../../../styles/safety-department.css';

const PoliceDashboard = ({ user, onNavigate }) => {
    const complaints = getMockComplaints().filter(c => c.departmentId === 11);
    const [activeTab, setActiveTab] = useState('overview');

    const policeData = {
        stations: [
            { id: 1, name: 'Central Police Station', officers: 45, area: 'Downtown', status: 'Active', emergencyCalls: 12 },
            { id: 2, name: 'East Division', officers: 38, area: 'East District', status: 'Active', emergencyCalls: 8 },
            { id: 3, name: 'West Division', officers: 42, area: 'West District', status: 'Active', emergencyCalls: 15 },
            { id: 4, name: 'Traffic Control Unit', officers: 25, area: 'City Wide', status: 'Active', emergencyCalls: 5 }
        ],
        patrolUnits: [
            { id: 'P001', status: 'On Patrol', area: 'Sector 1-5', officers: 2, lastUpdate: '10:30 AM' },
            { id: 'P002', status: 'Responding', area: 'Main Street', officers: 2, lastUpdate: '10:45 AM' },
            { id: 'P003', status: 'Available', area: 'Station', officers: 2, lastUpdate: '10:20 AM' },
            { id: 'P004', status: 'On Patrol', area: 'Industrial Zone', officers: 2, lastUpdate: '10:35 AM' }
        ],
        crimeStats: {
            today: { reported: 15, resolved: 12, pending: 3 },
            thisWeek: { reported: 89, resolved: 76, pending: 13 },
            thisMonth: { reported: 342, resolved: 298, pending: 44 }
        },
        emergencyResponse: {
            averageTime: '8.5 minutes',
            totalCalls: 156,
            resolved: 142,
            pending: 14
        },
        trafficViolations: [
            { type: 'Speeding', count: 45, fines: '₹2,25,000' },
            { type: 'Signal Jumping', count: 32, fines: '₹1,60,000' },
            { type: 'Wrong Parking', count: 78, fines: '₹1,56,000' },
            { type: 'No Helmet', count: 156, fines: '₹1,56,000' }
        ]
    };

    const stats = {
        totalOfficers: policeData.stations.reduce((sum, station) => sum + station.officers, 0),
        activePatrols: policeData.patrolUnits.filter(unit => unit.status !== 'Available').length,
        emergencyCalls: policeData.stations.reduce((sum, station) => sum + station.emergencyCalls, 0),
        responseTime: policeData.emergencyResponse.averageTime
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Police Department</h1>
                <p>Public safety, law enforcement, and emergency response</p>
            </div>

            <section className="statistics-section">
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#dbeafe', color: '#3b82f6' }}>
                        <i className="fas fa-shield-alt"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.totalOfficers}</h3>
                        <p>Active Officers</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#d1fae5', color: '#10b981' }}>
                        <i className="fas fa-car"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.activePatrols}</h3>
                        <p>Active Patrols</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#fee2e2', color: '#ef4444' }}>
                        <i className="fas fa-phone"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.emergencyCalls}</h3>
                        <p>Emergency Calls</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#fef3c7', color: '#f59e0b' }}>
                        <i className="fas fa-clock"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.responseTime}</h3>
                        <p>Avg Response Time</p>
                    </div>
                </div>
            </section>

            <div style={{display: 'flex', gap: '10px', marginBottom: '20px', borderBottom: '1px solid #e5e7eb'}}>
                <button onClick={() => setActiveTab('overview')} style={{padding: '10px 20px', background: activeTab === 'overview' ? '#0052cc' : 'transparent', color: activeTab === 'overview' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Stations</button>
                <button onClick={() => setActiveTab('patrols')} style={{padding: '10px 20px', background: activeTab === 'patrols' ? '#0052cc' : 'transparent', color: activeTab === 'patrols' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Patrol Units</button>
                <button onClick={() => setActiveTab('crime')} style={{padding: '10px 20px', background: activeTab === 'crime' ? '#0052cc' : 'transparent', color: activeTab === 'crime' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Crime Stats</button>
                <button onClick={() => setActiveTab('traffic')} style={{padding: '10px 20px', background: activeTab === 'traffic' ? '#0052cc' : 'transparent', color: activeTab === 'traffic' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Traffic</button>
            </div>

            {activeTab === 'overview' && (
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px'}}>
                    {policeData.stations.map(station => (
                        <div key={station.id} style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                            <h3>{station.name}</h3>
                            <div style={{display: 'grid', gap: '10px', marginTop: '15px'}}>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Officers:</span>
                                    <span style={{fontWeight: 'bold'}}>{station.officers}</span>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Area:</span>
                                    <span>{station.area}</span>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Emergency Calls:</span>
                                    <span style={{color: station.emergencyCalls > 10 ? '#ef4444' : '#10b981', fontWeight: 'bold'}}>{station.emergencyCalls}</span>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Status:</span>
                                    <span style={{color: '#10b981', fontWeight: 'bold'}}>{station.status}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === 'patrols' && (
                <div style={{background: '#fff', borderRadius: '8px', padding: '20px'}}>
                    <h2>Patrol Unit Status</h2>
                    <table style={{width: '100%', marginTop: '20px'}}>
                        <thead>
                            <tr style={{background: '#f3f4f6'}}>
                                <th style={{padding: '12px', textAlign: 'left'}}>Unit ID</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Status</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Area</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Officers</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Last Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {policeData.patrolUnits.map((unit, index) => (
                                <tr key={index}>
                                    <td style={{padding: '12px', fontWeight: 'bold'}}>{unit.id}</td>
                                    <td style={{padding: '12px'}}>
                                        <span style={{
                                            background: unit.status === 'Available' ? '#d1fae5' : unit.status === 'On Patrol' ? '#dbeafe' : '#fee2e2',
                                            color: unit.status === 'Available' ? '#065f46' : unit.status === 'On Patrol' ? '#1e40af' : '#991b1b',
                                            padding: '4px 8px', borderRadius: '4px', fontSize: '12px'
                                        }}>
                                            {unit.status}
                                        </span>
                                    </td>
                                    <td style={{padding: '12px'}}>{unit.area}</td>
                                    <td style={{padding: '12px'}}>{unit.officers}</td>
                                    <td style={{padding: '12px'}}>{unit.lastUpdate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {activeTab === 'crime' && (
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px'}}>
                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                        <h3>Today's Statistics</h3>
                        <div style={{display: 'grid', gap: '10px', marginTop: '15px'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Reported:</span>
                                <span style={{fontWeight: 'bold'}}>{policeData.crimeStats.today.reported}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Resolved:</span>
                                <span style={{color: '#10b981'}}>{policeData.crimeStats.today.resolved}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Pending:</span>
                                <span style={{color: '#f59e0b'}}>{policeData.crimeStats.today.pending}</span>
                            </div>
                        </div>
                    </div>

                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                        <h3>This Week</h3>
                        <div style={{display: 'grid', gap: '10px', marginTop: '15px'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Reported:</span>
                                <span style={{fontWeight: 'bold'}}>{policeData.crimeStats.thisWeek.reported}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Resolved:</span>
                                <span style={{color: '#10b981'}}>{policeData.crimeStats.thisWeek.resolved}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Pending:</span>
                                <span style={{color: '#f59e0b'}}>{policeData.crimeStats.thisWeek.pending}</span>
                            </div>
                        </div>
                    </div>

                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                        <h3>This Month</h3>
                        <div style={{display: 'grid', gap: '10px', marginTop: '15px'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Reported:</span>
                                <span style={{fontWeight: 'bold'}}>{policeData.crimeStats.thisMonth.reported}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Resolved:</span>
                                <span style={{color: '#10b981'}}>{policeData.crimeStats.thisMonth.resolved}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Pending:</span>
                                <span style={{color: '#f59e0b'}}>{policeData.crimeStats.thisMonth.pending}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'traffic' && (
                <div style={{background: '#fff', borderRadius: '8px', padding: '20px'}}>
                    <h2>Traffic Violations Summary</h2>
                    <table style={{width: '100%', marginTop: '20px'}}>
                        <thead>
                            <tr style={{background: '#f3f4f6'}}>
                                <th style={{padding: '12px', textAlign: 'left'}}>Violation Type</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Count</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Total Fines</th>
                            </tr>
                        </thead>
                        <tbody>
                            {policeData.trafficViolations.map((violation, index) => (
                                <tr key={index}>
                                    <td style={{padding: '12px', fontWeight: 'bold'}}>{violation.type}</td>
                                    <td style={{padding: '12px'}}>{violation.count}</td>
                                    <td style={{padding: '12px', color: '#10b981', fontWeight: 'bold'}}>{violation.fines}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default PoliceDashboard;