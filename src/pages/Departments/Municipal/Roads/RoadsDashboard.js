'use client';

import React, { useState } from 'react';
import { getMockComplaints } from '../../../../services/mockDataService';
import { formatDate, getStatusBadgeClass } from '../../../../utils/helpers';
import '../../../../styles/dashboard.css';
import '../../../../styles/municipal-department.css';

const RoadsDashboard = ({ user, onNavigate }) => {
    const complaints = getMockComplaints().filter(c => c.departmentId === 3);
    const [activeTab, setActiveTab] = useState('overview');

    const roadsData = {
        roadNetwork: {
            totalKm: 2450,
            mainRoads: 850,
            localRoads: 1600,
            underConstruction: 120
        },
        trafficSignals: {
            total: 245,
            working: 230,
            faulty: 15,
            efficiency: '93.9%'
        },
        ongoingProjects: [
            { name: 'Highway Extension', progress: 75, budget: '₹50Cr', completion: '2024-03-15' },
            { name: 'Bridge Construction', progress: 45, budget: '₹25Cr', completion: '2024-06-30' },
            { name: 'Road Widening Project', progress: 90, budget: '₹15Cr', completion: '2024-02-28' }
        ],
        contractors: [
            { name: 'ABC Construction', projects: 5, rating: 4.5, status: 'Active' },
            { name: 'XYZ Infrastructure', projects: 3, rating: 4.2, status: 'Active' },
            { name: 'PQR Builders', projects: 2, rating: 3.8, status: 'Under Review' }
        ],
        maintenanceSchedule: [
            { road: 'Main Street', type: 'Pothole Repair', date: '2024-01-25', crew: 'Team A' },
            { road: 'Park Avenue', type: 'Resurfacing', date: '2024-01-28', crew: 'Team B' },
            { road: 'Industrial Road', type: 'Marking Renewal', date: '2024-01-30', crew: 'Team C' }
        ]
    };

    const stats = {
        totalRoads: roadsData.roadNetwork.totalKm + ' km',
        activeProjects: roadsData.ongoingProjects.length,
        signalEfficiency: roadsData.trafficSignals.efficiency,
        complaints: complaints.length
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Roads & Transport Department</h1>
                <p>Road construction, maintenance, and traffic management</p>
            </div>

            <section className="statistics-section">
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#dbeafe', color: '#3b82f6' }}>
                        <i className="fas fa-road"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.totalRoads}</h3>
                        <p>Road Network</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#d1fae5', color: '#10b981' }}>
                        <i className="fas fa-hammer"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.activeProjects}</h3>
                        <p>Active Projects</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#fef3c7', color: '#f59e0b' }}>
                        <i className="fas fa-traffic-light"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.signalEfficiency}</h3>
                        <p>Signal Efficiency</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#fee2e2', color: '#ef4444' }}>
                        <i className="fas fa-exclamation-triangle"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.complaints}</h3>
                        <p>Open Issues</p>
                    </div>
                </div>
            </section>

            <div style={{display: 'flex', gap: '10px', marginBottom: '20px', borderBottom: '1px solid #e5e7eb'}}>
                <button onClick={() => setActiveTab('overview')} style={{padding: '10px 20px', background: activeTab === 'overview' ? '#0052cc' : 'transparent', color: activeTab === 'overview' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Network Status</button>
                <button onClick={() => setActiveTab('projects')} style={{padding: '10px 20px', background: activeTab === 'projects' ? '#0052cc' : 'transparent', color: activeTab === 'projects' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Projects</button>
                <button onClick={() => setActiveTab('contractors')} style={{padding: '10px 20px', background: activeTab === 'contractors' ? '#0052cc' : 'transparent', color: activeTab === 'contractors' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Contractors</button>
                <button onClick={() => setActiveTab('maintenance')} style={{padding: '10px 20px', background: activeTab === 'maintenance' ? '#0052cc' : 'transparent', color: activeTab === 'maintenance' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Maintenance</button>
            </div>

            {activeTab === 'overview' && (
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                        <h3>Road Network Overview</h3>
                        <div style={{display: 'grid', gap: '15px', marginTop: '20px'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <span>Total Network:</span>
                                <span style={{fontWeight: 'bold', fontSize: '18px'}}>{roadsData.roadNetwork.totalKm} km</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Main Roads:</span>
                                <span>{roadsData.roadNetwork.mainRoads} km</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Local Roads:</span>
                                <span>{roadsData.roadNetwork.localRoads} km</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Under Construction:</span>
                                <span style={{color: '#f59e0b', fontWeight: 'bold'}}>{roadsData.roadNetwork.underConstruction} km</span>
                            </div>
                        </div>
                    </div>

                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                        <h3>Traffic Signal Status</h3>
                        <div style={{display: 'grid', gap: '15px', marginTop: '20px'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Total Signals:</span>
                                <span style={{fontWeight: 'bold'}}>{roadsData.trafficSignals.total}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Working:</span>
                                <span style={{color: '#10b981'}}>{roadsData.trafficSignals.working}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Faulty:</span>
                                <span style={{color: '#ef4444'}}>{roadsData.trafficSignals.faulty}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Efficiency:</span>
                                <span style={{color: '#10b981', fontWeight: 'bold'}}>{roadsData.trafficSignals.efficiency}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'projects' && (
                <div style={{background: '#fff', borderRadius: '8px', padding: '20px'}}>
                    <h2>Ongoing Construction Projects</h2>
                    <div style={{marginTop: '20px'}}>
                        {roadsData.ongoingProjects.map((project, index) => (
                            <div key={index} style={{padding: '20px', border: '1px solid #e5e7eb', borderRadius: '8px', marginBottom: '15px'}}>
                                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
                                    <h4 style={{margin: 0}}>{project.name}</h4>
                                    <span style={{background: '#d1fae5', color: '#065f46', padding: '4px 12px', borderRadius: '20px', fontSize: '12px'}}>{project.progress}% Complete</span>
                                </div>
                                <div style={{background: '#f3f4f6', height: '8px', borderRadius: '4px', overflow: 'hidden', marginBottom: '15px'}}>
                                    <div style={{background: '#10b981', width: `${project.progress}%`, height: '100%'}}></div>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#6b7280'}}>
                                    <span>Budget: {project.budget}</span>
                                    <span>Expected Completion: {project.completion}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === 'contractors' && (
                <div style={{background: '#fff', borderRadius: '8px', padding: '20px'}}>
                    <h2>Contractor Management</h2>
                    <table style={{width: '100%', marginTop: '20px'}}>
                        <thead>
                            <tr style={{background: '#f3f4f6'}}>
                                <th style={{padding: '12px', textAlign: 'left'}}>Contractor</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Active Projects</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Rating</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {roadsData.contractors.map((contractor, index) => (
                                <tr key={index}>
                                    <td style={{padding: '12px'}}>{contractor.name}</td>
                                    <td style={{padding: '12px'}}>{contractor.projects}</td>
                                    <td style={{padding: '12px'}}>
                                        <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                                            <span>{contractor.rating}</span>
                                            <div style={{display: 'flex'}}>
                                                {[...Array(5)].map((_, i) => (
                                                    <i key={i} className={`fas fa-star`} style={{color: i < Math.floor(contractor.rating) ? '#f59e0b' : '#e5e7eb', fontSize: '12px'}}></i>
                                                ))}
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{padding: '12px'}}>
                                        <span style={{background: contractor.status === 'Active' ? '#d1fae5' : '#fef3c7', color: contractor.status === 'Active' ? '#065f46' : '#92400e', padding: '4px 8px', borderRadius: '4px', fontSize: '12px'}}>
                                            {contractor.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {activeTab === 'maintenance' && (
                <div style={{background: '#fff', borderRadius: '8px', padding: '20px'}}>
                    <h2>Maintenance Schedule</h2>
                    <div style={{marginTop: '20px'}}>
                        {roadsData.maintenanceSchedule.map((item, index) => (
                            <div key={index} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', border: '1px solid #e5e7eb', borderRadius: '8px', marginBottom: '10px'}}>
                                <div>
                                    <h4 style={{margin: 0}}>{item.road}</h4>
                                    <p style={{margin: '5px 0 0', color: '#6b7280'}}>{item.type}</p>
                                </div>
                                <div style={{textAlign: 'right'}}>
                                    <p style={{margin: 0, fontWeight: 'bold'}}>{item.date}</p>
                                    <p style={{margin: '5px 0 0', color: '#6b7280'}}>{item.crew}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default RoadsDashboard;