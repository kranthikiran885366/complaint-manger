'use client';

import React, { useState } from 'react';
import { getMockComplaints } from '../../../../services/mockDataService';
import '../../../../styles/dashboard.css';
import '../../../../styles/municipal-department.css';

const DrainageDashboard = ({ user, onNavigate }) => {
    const complaints = getMockComplaints().filter(c => c.departmentId === 5);
    const [activeTab, setActiveTab] = useState('overview');

    const drainageData = {
        network: {
            totalLength: '850 km',
            mainDrains: '120 km',
            subDrains: '730 km',
            pumpingStations: 15
        },
        sewerageSystem: {
            totalConnections: 85000,
            treatmentPlants: 3,
            dailyCapacity: '450 MLD',
            currentLoad: '380 MLD'
        },
        maintenanceTeams: [
            { id: 1, name: 'Team Alpha', area: 'North Zone', status: 'Active', equipment: 'Jetting Machine' },
            { id: 2, name: 'Team Beta', area: 'South Zone', status: 'On Field', equipment: 'Suction Truck' },
            { id: 3, name: 'Team Gamma', area: 'East Zone', status: 'Available', equipment: 'Rodding Machine' }
        ],
        treatmentPlants: [
            { name: 'Central STP', capacity: '200 MLD', current: '180 MLD', efficiency: '90%', status: 'Normal' },
            { name: 'East STP', capacity: '150 MLD', current: '120 MLD', efficiency: '88%', status: 'Normal' },
            { name: 'West STP', capacity: '100 MLD', current: '80 MLD', efficiency: '85%', status: 'Maintenance' }
        ],
        emergencyIssues: [
            { location: 'Main Street', issue: 'Manhole Overflow', priority: 'High', eta: '2 hours' },
            { location: 'Park Road', issue: 'Drain Blockage', priority: 'Medium', eta: '4 hours' }
        ]
    };

    const stats = {
        networkLength: drainageData.network.totalLength,
        connections: drainageData.sewerageSystem.totalConnections,
        treatmentCapacity: drainageData.sewerageSystem.dailyCapacity,
        activeIssues: drainageData.emergencyIssues.length
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Drainage & Sewerage Department</h1>
                <p>Stormwater management, sewerage treatment, and drainage maintenance</p>
            </div>

            <section className="statistics-section">
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#dbeafe', color: '#3b82f6' }}>
                        <i className="fas fa-tint"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.networkLength}</h3>
                        <p>Drainage Network</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#d1fae5', color: '#10b981' }}>
                        <i className="fas fa-home"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.connections}</h3>
                        <p>Sewer Connections</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#fef3c7', color: '#f59e0b' }}>
                        <i className="fas fa-industry"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.treatmentCapacity}</h3>
                        <p>Treatment Capacity</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#fee2e2', color: '#ef4444' }}>
                        <i className="fas fa-exclamation-triangle"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.activeIssues}</h3>
                        <p>Emergency Issues</p>
                    </div>
                </div>
            </section>

            <div style={{display: 'flex', gap: '10px', marginBottom: '20px', borderBottom: '1px solid #e5e7eb'}}>
                <button onClick={() => setActiveTab('overview')} style={{padding: '10px 20px', background: activeTab === 'overview' ? '#0052cc' : 'transparent', color: activeTab === 'overview' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Network Status</button>
                <button onClick={() => setActiveTab('treatment')} style={{padding: '10px 20px', background: activeTab === 'treatment' ? '#0052cc' : 'transparent', color: activeTab === 'treatment' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Treatment Plants</button>
                <button onClick={() => setActiveTab('maintenance')} style={{padding: '10px 20px', background: activeTab === 'maintenance' ? '#0052cc' : 'transparent', color: activeTab === 'maintenance' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Maintenance Teams</button>
                <button onClick={() => setActiveTab('emergency')} style={{padding: '10px 20px', background: activeTab === 'emergency' ? '#0052cc' : 'transparent', color: activeTab === 'emergency' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Emergency Issues</button>
            </div>

            {activeTab === 'overview' && (
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                        <h3>Drainage Network</h3>
                        <div style={{display: 'grid', gap: '15px', marginTop: '20px'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Total Length:</span>
                                <span style={{fontWeight: 'bold'}}>{drainageData.network.totalLength}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Main Drains:</span>
                                <span>{drainageData.network.mainDrains}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Sub Drains:</span>
                                <span>{drainageData.network.subDrains}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Pumping Stations:</span>
                                <span style={{color: '#10b981', fontWeight: 'bold'}}>{drainageData.network.pumpingStations}</span>
                            </div>
                        </div>
                    </div>

                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                        <h3>Sewerage System</h3>
                        <div style={{display: 'grid', gap: '15px', marginTop: '20px'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Total Connections:</span>
                                <span style={{fontWeight: 'bold'}}>{drainageData.sewerageSystem.totalConnections.toLocaleString()}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Treatment Plants:</span>
                                <span>{drainageData.sewerageSystem.treatmentPlants}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Daily Capacity:</span>
                                <span>{drainageData.sewerageSystem.dailyCapacity}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Current Load:</span>
                                <span style={{color: '#f59e0b'}}>{drainageData.sewerageSystem.currentLoad}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'treatment' && (
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px'}}>
                    {drainageData.treatmentPlants.map((plant, index) => (
                        <div key={index} style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                            <h3>{plant.name}</h3>
                            <div style={{display: 'grid', gap: '10px', marginTop: '15px'}}>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Capacity:</span>
                                    <span style={{fontWeight: 'bold'}}>{plant.capacity}</span>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Current Load:</span>
                                    <span>{plant.current}</span>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Efficiency:</span>
                                    <span style={{color: '#10b981'}}>{plant.efficiency}</span>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Status:</span>
                                    <span style={{color: plant.status === 'Normal' ? '#10b981' : '#f59e0b', fontWeight: 'bold'}}>{plant.status}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === 'maintenance' && (
                <div style={{background: '#fff', borderRadius: '8px', padding: '20px'}}>
                    <h2>Maintenance Teams</h2>
                    <table style={{width: '100%', marginTop: '20px'}}>
                        <thead>
                            <tr style={{background: '#f3f4f6'}}>
                                <th style={{padding: '12px', textAlign: 'left'}}>Team</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Area</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Status</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Equipment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {drainageData.maintenanceTeams.map((team, index) => (
                                <tr key={index}>
                                    <td style={{padding: '12px', fontWeight: 'bold'}}>{team.name}</td>
                                    <td style={{padding: '12px'}}>{team.area}</td>
                                    <td style={{padding: '12px'}}>
                                        <span style={{
                                            background: team.status === 'Available' ? '#d1fae5' : team.status === 'Active' ? '#dbeafe' : '#fef3c7',
                                            color: team.status === 'Available' ? '#065f46' : team.status === 'Active' ? '#1e40af' : '#92400e',
                                            padding: '4px 8px', borderRadius: '4px', fontSize: '12px'
                                        }}>
                                            {team.status}
                                        </span>
                                    </td>
                                    <td style={{padding: '12px'}}>{team.equipment}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {activeTab === 'emergency' && (
                <div style={{background: '#fff', borderRadius: '8px', padding: '20px'}}>
                    <h2>Emergency Issues</h2>
                    <div style={{marginTop: '20px'}}>
                        {drainageData.emergencyIssues.map((issue, index) => (
                            <div key={index} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', border: '1px solid #fee2e2', borderRadius: '8px', marginBottom: '10px', background: '#fef2f2'}}>
                                <div>
                                    <h4 style={{margin: 0, color: '#dc2626'}}>{issue.location}</h4>
                                    <p style={{margin: '5px 0 0', color: '#6b7280'}}>{issue.issue}</p>
                                </div>
                                <div style={{textAlign: 'right'}}>
                                    <span style={{
                                        background: issue.priority === 'High' ? '#fee2e2' : '#fef3c7',
                                        color: issue.priority === 'High' ? '#991b1b' : '#92400e',
                                        padding: '4px 8px', borderRadius: '4px', fontSize: '12px'
                                    }}>
                                        {issue.priority}
                                    </span>
                                    <p style={{margin: '5px 0 0', color: '#6b7280'}}>ETA: {issue.eta}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DrainageDashboard;