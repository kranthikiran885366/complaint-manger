'use client';

import React, { useState } from 'react';
import { getMockComplaints } from '../../../../services/mockDataService';
import { formatDate, getStatusBadgeClass } from '../../../../utils/helpers';
import '../../../../styles/dashboard.css';
import '../../../../styles/municipal-department.css';

const ElectricityDashboard = ({ user, onNavigate }) => {
    const complaints = getMockComplaints().filter(c => c.departmentId === 2);
    const [activeTab, setActiveTab] = useState('overview');

    const electricityData = {
        powerStations: [
            { id: 1, name: 'Main Grid Station', capacity: '500MW', load: '420MW', status: 'Normal' },
            { id: 2, name: 'East Substation', capacity: '200MW', load: '180MW', status: 'High Load' },
            { id: 3, name: 'West Substation', capacity: '150MW', load: '95MW', status: 'Normal' }
        ],
        outages: [
            { area: 'Sector 15', duration: '2 hours', reason: 'Transformer Maintenance', eta: '6:00 PM' },
            { area: 'Industrial Zone', duration: '4 hours', reason: 'Cable Fault', eta: '8:00 PM' }
        ],
        streetLights: {
            total: 15420,
            working: 14850,
            faulty: 570,
            efficiency: '96.3%'
        },
        emergencyTeams: [
            { id: 1, name: 'Team Alpha', status: 'Available', location: 'Central Office' },
            { id: 2, name: 'Team Beta', status: 'On Field', location: 'Sector 12' },
            { id: 3, name: 'Team Gamma', status: 'Available', location: 'East Office' }
        ]
    };

    const stats = {
        totalLoad: '695MW',
        peakDemand: '750MW',
        efficiency: '94.2%',
        outages: electricityData.outages.length,
        connections: 125000,
        revenue: '₹2.5Cr'
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Electricity Department</h1>
                <p>Power generation, distribution, and maintenance services</p>
            </div>

            <section className="statistics-section">
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#fef3c7', color: '#f59e0b' }}>
                        <i className="fas fa-bolt"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.totalLoad}</h3>
                        <p>Current Load</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#d1fae5', color: '#10b981' }}>
                        <i className="fas fa-chart-line"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.efficiency}</h3>
                        <p>Grid Efficiency</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#dbeafe', color: '#3b82f6' }}>
                        <i className="fas fa-home"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.connections}</h3>
                        <p>Connections</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#fee2e2', color: '#ef4444' }}>
                        <i className="fas fa-exclamation-triangle"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.outages}</h3>
                        <p>Active Outages</p>
                    </div>
                </div>
            </section>

            <div style={{display: 'flex', gap: '10px', marginBottom: '20px', borderBottom: '1px solid #e5e7eb'}}>
                <button onClick={() => setActiveTab('overview')} style={{padding: '10px 20px', background: activeTab === 'overview' ? '#0052cc' : 'transparent', color: activeTab === 'overview' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Grid Status</button>
                <button onClick={() => setActiveTab('outages')} style={{padding: '10px 20px', background: activeTab === 'outages' ? '#0052cc' : 'transparent', color: activeTab === 'outages' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Outages</button>
                <button onClick={() => setActiveTab('streetlights')} style={{padding: '10px 20px', background: activeTab === 'streetlights' ? '#0052cc' : 'transparent', color: activeTab === 'streetlights' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Street Lights</button>
                <button onClick={() => setActiveTab('teams')} style={{padding: '10px 20px', background: activeTab === 'teams' ? '#0052cc' : 'transparent', color: activeTab === 'teams' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Emergency Teams</button>
            </div>

            {activeTab === 'overview' && (
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px'}}>
                    {electricityData.powerStations.map(station => (
                        <div key={station.id} style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                            <h3>{station.name}</h3>
                            <div style={{display: 'grid', gap: '10px'}}>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Capacity:</span>
                                    <span style={{fontWeight: 'bold'}}>{station.capacity}</span>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Current Load:</span>
                                    <span>{station.load}</span>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Status:</span>
                                    <span style={{color: station.status === 'Normal' ? '#10b981' : '#f59e0b', fontWeight: 'bold'}}>{station.status}</span>
                                </div>
                                <div style={{background: '#f3f4f6', height: '10px', borderRadius: '5px', overflow: 'hidden', marginTop: '10px'}}>
                                    <div style={{background: station.status === 'Normal' ? '#10b981' : '#f59e0b', width: `${(parseInt(station.load) / parseInt(station.capacity)) * 100}%`, height: '100%'}}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === 'outages' && (
                <div style={{background: '#fff', borderRadius: '8px', padding: '20px'}}>
                    <h2>Current Power Outages</h2>
                    <div style={{marginTop: '20px'}}>
                        {electricityData.outages.map((outage, index) => (
                            <div key={index} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', border: '1px solid #fee2e2', borderRadius: '8px', marginBottom: '10px', background: '#fef2f2'}}>
                                <div>
                                    <h4 style={{margin: 0, color: '#dc2626'}}>{outage.area}</h4>
                                    <p style={{margin: '5px 0 0', color: '#6b7280'}}>{outage.reason}</p>
                                </div>
                                <div style={{textAlign: 'right'}}>
                                    <p style={{margin: 0, fontWeight: 'bold'}}>{outage.duration}</p>
                                    <p style={{margin: '5px 0 0', color: '#6b7280'}}>ETA: {outage.eta}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === 'streetlights' && (
                <div style={{background: '#fff', borderRadius: '8px', padding: '20px'}}>
                    <h2>Street Lighting Management</h2>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '20px'}}>
                        <div style={{textAlign: 'center', padding: '20px', border: '1px solid #e5e7eb', borderRadius: '8px'}}>
                            <h3 style={{color: '#0052cc', fontSize: '2rem', margin: 0}}>{electricityData.streetLights.total}</h3>
                            <p style={{margin: '5px 0 0', color: '#6b7280'}}>Total Lights</p>
                        </div>
                        <div style={{textAlign: 'center', padding: '20px', border: '1px solid #e5e7eb', borderRadius: '8px'}}>
                            <h3 style={{color: '#10b981', fontSize: '2rem', margin: 0}}>{electricityData.streetLights.working}</h3>
                            <p style={{margin: '5px 0 0', color: '#6b7280'}}>Working</p>
                        </div>
                        <div style={{textAlign: 'center', padding: '20px', border: '1px solid #e5e7eb', borderRadius: '8px'}}>
                            <h3 style={{color: '#ef4444', fontSize: '2rem', margin: 0}}>{electricityData.streetLights.faulty}</h3>
                            <p style={{margin: '5px 0 0', color: '#6b7280'}}>Faulty</p>
                        </div>
                        <div style={{textAlign: 'center', padding: '20px', border: '1px solid #e5e7eb', borderRadius: '8px'}}>
                            <h3 style={{color: '#f59e0b', fontSize: '2rem', margin: 0}}>{electricityData.streetLights.efficiency}</h3>
                            <p style={{margin: '5px 0 0', color: '#6b7280'}}>Efficiency</p>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'teams' && (
                <div style={{background: '#fff', borderRadius: '8px', padding: '20px'}}>
                    <h2>Emergency Response Teams</h2>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', marginTop: '20px'}}>
                        {electricityData.emergencyTeams.map(team => (
                            <div key={team.id} style={{padding: '15px', border: '1px solid #e5e7eb', borderRadius: '8px'}}>
                                <h4 style={{margin: '0 0 10px'}}>{team.name}</h4>
                                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '5px'}}>
                                    <span>Status:</span>
                                    <span style={{color: team.status === 'Available' ? '#10b981' : '#f59e0b', fontWeight: 'bold'}}>{team.status}</span>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Location:</span>
                                    <span>{team.location}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ElectricityDashboard;