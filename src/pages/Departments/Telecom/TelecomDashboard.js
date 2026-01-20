'use client';

import React, { useState } from 'react';
import { getMockComplaints } from '../../../services/mockDataService';
import '../../../styles/dashboard.css';
import '../../../styles/telecom-department.css';

const TelecomDashboard = ({ user, onNavigate }) => {
    const complaints = getMockComplaints().filter(c => c.departmentId === 25);
    const [activeTab, setActiveTab] = useState('overview');

    const telecomData = {
        infrastructure: {
            fiberCables: '2,450 km',
            cellTowers: 185,
            broadbandConnections: 125000,
            internetPenetration: '78%'
        },
        serviceProviders: [
            { name: 'Airtel', subscribers: 45000, coverage: '95%', complaints: 25, rating: 4.2 },
            { name: 'Jio', subscribers: 38000, coverage: '92%', complaints: 18, rating: 4.5 },
            { name: 'BSNL', subscribers: 22000, coverage: '88%', complaints: 32, rating: 3.8 },
            { name: 'Vi', subscribers: 20000, coverage: '85%', complaints: 28, rating: 3.9 }
        ],
        networkStatus: {
            uptime: '99.2%',
            avgSpeed: '45 Mbps',
            peakUsage: '2.5 TB/hour',
            activeConnections: 118500
        },
        digitalServices: [
            { service: 'e-Governance Portal', users: 85000, uptime: '99.5%', satisfaction: '4.3/5' },
            { service: 'Digital Payment Gateway', users: 156000, uptime: '99.8%', satisfaction: '4.6/5' },
            { service: 'Online Education Platform', users: 45000, uptime: '98.9%', satisfaction: '4.1/5' },
            { service: 'Telemedicine Service', users: 25000, uptime: '99.1%', satisfaction: '4.4/5' }
        ],
        maintenance: [
            { area: 'Sector A', type: 'Fiber Repair', scheduled: '2024-01-25', duration: '4 hours', impact: 'Low' },
            { area: 'Tower Site 15', type: 'Equipment Upgrade', scheduled: '2024-01-27', duration: '6 hours', impact: 'Medium' },
            { area: 'Central Exchange', type: 'System Maintenance', scheduled: '2024-01-30', duration: '2 hours', impact: 'High' }
        ]
    };

    const stats = {
        totalConnections: telecomData.infrastructure.broadbandConnections,
        networkUptime: telecomData.networkStatus.uptime,
        avgSpeed: telecomData.networkStatus.avgSpeed,
        totalComplaints: telecomData.serviceProviders.reduce((sum, provider) => sum + provider.complaints, 0)
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Internet & Telecom Department</h1>
                <p>Digital infrastructure, connectivity services, and network management</p>
            </div>

            <section className="statistics-section">
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#dbeafe', color: '#3b82f6' }}>
                        <i className="fas fa-wifi"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.totalConnections.toLocaleString()}</h3>
                        <p>Broadband Connections</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#d1fae5', color: '#10b981' }}>
                        <i className="fas fa-signal"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.networkUptime}</h3>
                        <p>Network Uptime</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#fef3c7', color: '#f59e0b' }}>
                        <i className="fas fa-tachometer-alt"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.avgSpeed}</h3>
                        <p>Average Speed</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#fee2e2', color: '#ef4444' }}>
                        <i className="fas fa-exclamation-triangle"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.totalComplaints}</h3>
                        <p>Service Complaints</p>
                    </div>
                </div>
            </section>

            <div style={{display: 'flex', gap: '10px', marginBottom: '20px', borderBottom: '1px solid #e5e7eb'}}>
                <button onClick={() => setActiveTab('overview')} style={{padding: '10px 20px', background: activeTab === 'overview' ? '#0052cc' : 'transparent', color: activeTab === 'overview' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Infrastructure</button>
                <button onClick={() => setActiveTab('providers')} style={{padding: '10px 20px', background: activeTab === 'providers' ? '#0052cc' : 'transparent', color: activeTab === 'providers' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Service Providers</button>
                <button onClick={() => setActiveTab('digital')} style={{padding: '10px 20px', background: activeTab === 'digital' ? '#0052cc' : 'transparent', color: activeTab === 'digital' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Digital Services</button>
                <button onClick={() => setActiveTab('maintenance')} style={{padding: '10px 20px', background: activeTab === 'maintenance' ? '#0052cc' : 'transparent', color: activeTab === 'maintenance' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Maintenance</button>
            </div>

            {activeTab === 'overview' && (
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                        <h3>Network Infrastructure</h3>
                        <div style={{display: 'grid', gap: '15px', marginTop: '20px'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Fiber Cables:</span>
                                <span style={{fontWeight: 'bold'}}>{telecomData.infrastructure.fiberCables}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Cell Towers:</span>
                                <span style={{color: '#3b82f6'}}>{telecomData.infrastructure.cellTowers}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Broadband Connections:</span>
                                <span style={{color: '#10b981'}}>{telecomData.infrastructure.broadbandConnections.toLocaleString()}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Internet Penetration:</span>
                                <span style={{color: '#f59e0b', fontWeight: 'bold'}}>{telecomData.infrastructure.internetPenetration}</span>
                            </div>
                        </div>
                    </div>

                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                        <h3>Network Performance</h3>
                        <div style={{display: 'grid', gap: '15px', marginTop: '20px'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Network Uptime:</span>
                                <span style={{fontWeight: 'bold', color: '#10b981'}}>{telecomData.networkStatus.uptime}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Average Speed:</span>
                                <span style={{color: '#3b82f6'}}>{telecomData.networkStatus.avgSpeed}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Peak Usage:</span>
                                <span style={{color: '#f59e0b'}}>{telecomData.networkStatus.peakUsage}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Active Connections:</span>
                                <span>{telecomData.networkStatus.activeConnections.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'providers' && (
                <div style={{background: '#fff', borderRadius: '8px', padding: '20px'}}>
                    <h2>Service Providers Performance</h2>
                    <table style={{width: '100%', marginTop: '20px'}}>
                        <thead>
                            <tr style={{background: '#f3f4f6'}}>
                                <th style={{padding: '12px', textAlign: 'left'}}>Provider</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Subscribers</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Coverage</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Complaints</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {telecomData.serviceProviders.map((provider, index) => (
                                <tr key={index}>
                                    <td style={{padding: '12px', fontWeight: 'bold'}}>{provider.name}</td>
                                    <td style={{padding: '12px'}}>{provider.subscribers.toLocaleString()}</td>
                                    <td style={{padding: '12px'}}>
                                        <span style={{
                                            color: parseFloat(provider.coverage) >= 90 ? '#10b981' : parseFloat(provider.coverage) >= 80 ? '#f59e0b' : '#ef4444',
                                            fontWeight: 'bold'
                                        }}>
                                            {provider.coverage}
                                        </span>
                                    </td>
                                    <td style={{padding: '12px'}}>
                                        <span style={{
                                            color: provider.complaints <= 20 ? '#10b981' : provider.complaints <= 30 ? '#f59e0b' : '#ef4444'
                                        }}>
                                            {provider.complaints}
                                        </span>
                                    </td>
                                    <td style={{padding: '12px'}}>
                                        <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                                            <span>{provider.rating}</span>
                                            <div style={{display: 'flex'}}>
                                                {[...Array(5)].map((_, i) => (
                                                    <i key={i} className="fas fa-star" style={{color: i < Math.floor(provider.rating) ? '#f59e0b' : '#e5e7eb', fontSize: '12px'}}></i>
                                                ))}
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {activeTab === 'digital' && (
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px'}}>
                    {telecomData.digitalServices.map((service, index) => (
                        <div key={index} style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                            <h3>{service.service}</h3>
                            <div style={{display: 'grid', gap: '10px', marginTop: '15px'}}>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Active Users:</span>
                                    <span style={{fontWeight: 'bold'}}>{service.users.toLocaleString()}</span>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Uptime:</span>
                                    <span style={{color: '#10b981'}}>{service.uptime}</span>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Satisfaction:</span>
                                    <span style={{color: '#f59e0b', fontWeight: 'bold'}}>{service.satisfaction}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === 'maintenance' && (
                <div style={{background: '#fff', borderRadius: '8px', padding: '20px'}}>
                    <h2>Scheduled Maintenance</h2>
                    <div style={{marginTop: '20px'}}>
                        {telecomData.maintenance.map((maintenance, index) => (
                            <div key={index} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', border: '1px solid #e5e7eb', borderRadius: '8px', marginBottom: '10px'}}>
                                <div>
                                    <h4 style={{margin: 0}}>{maintenance.area}</h4>
                                    <p style={{margin: '5px 0 0', color: '#6b7280'}}>{maintenance.type} - {maintenance.duration}</p>
                                </div>
                                <div style={{textAlign: 'right'}}>
                                    <p style={{margin: 0, fontWeight: 'bold'}}>{maintenance.scheduled}</p>
                                    <span style={{
                                        background: maintenance.impact === 'Low' ? '#d1fae5' : maintenance.impact === 'Medium' ? '#fef3c7' : '#fee2e2',
                                        color: maintenance.impact === 'Low' ? '#065f46' : maintenance.impact === 'Medium' ? '#92400e' : '#991b1b',
                                        padding: '4px 8px', borderRadius: '4px', fontSize: '12px'
                                    }}>
                                        {maintenance.impact} Impact
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TelecomDashboard;