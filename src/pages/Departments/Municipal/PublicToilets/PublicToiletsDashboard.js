'use client';

import React, { useState } from 'react';
import { getMockComplaints } from '../../../../services/mockDataService';
import '../../../../styles/dashboard.css';
import '../../../../styles/municipal-department.css';

const PublicToiletsDashboard = ({ user, onNavigate }) => {
    const complaints = getMockComplaints().filter(c => c.departmentId === 7);
    const [activeTab, setActiveTab] = useState('overview');

    const toiletData = {
        facilities: {
            total: 245,
            functional: 230,
            underMaintenance: 10,
            underConstruction: 5,
            maleToilets: 125,
            femaleToilets: 120
        },
        cleaningSchedule: {
            frequency: '4 times/day',
            lastCleaned: '2 hours ago',
            nextCleaning: '2 hours',
            cleaningStaff: 48
        },
        locations: [
            { id: 1, name: 'Central Market', type: 'Public', status: 'Functional', lastCleaned: '1 hour ago', rating: 4.2 },
            { id: 2, name: 'Bus Terminal', type: 'Transport Hub', status: 'Functional', lastCleaned: '30 min ago', rating: 4.5 },
            { id: 3, name: 'City Park', type: 'Recreation', status: 'Maintenance', lastCleaned: '3 hours ago', rating: 3.8 },
            { id: 4, name: 'Hospital Complex', type: 'Medical', status: 'Functional', lastCleaned: '45 min ago', rating: 4.7 }
        ],
        maintenanceTeams: [
            { id: 1, name: 'Team A', area: 'Central Zone', facilities: 60, status: 'Active' },
            { id: 2, name: 'Team B', area: 'East Zone', facilities: 65, status: 'Active' },
            { id: 3, name: 'Team C', area: 'West Zone', facilities: 55, status: 'On Break' },
            { id: 4, name: 'Team D', area: 'South Zone', facilities: 65, status: 'Active' }
        ],
        supplies: [
            { item: 'Toilet Paper', stock: 2500, required: 3000, status: 'Low Stock' },
            { item: 'Hand Soap', stock: 180, required: 200, status: 'Adequate' },
            { item: 'Sanitizer', stock: 95, required: 150, status: 'Low Stock' },
            { item: 'Cleaning Supplies', stock: 450, required: 500, status: 'Adequate' }
        ]
    };

    const stats = {
        totalFacilities: toiletData.facilities.total,
        functionalRate: Math.round((toiletData.facilities.functional / toiletData.facilities.total) * 100) + '%',
        cleaningFrequency: toiletData.cleaningSchedule.frequency,
        maintenanceTeams: toiletData.maintenanceTeams.length
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Public Toilets Department</h1>
                <p>Public sanitation facilities, maintenance, and hygiene management</p>
            </div>

            <section className="statistics-section">
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#dbeafe', color: '#3b82f6' }}>
                        <i className="fas fa-restroom"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.totalFacilities}</h3>
                        <p>Total Facilities</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#d1fae5', color: '#10b981' }}>
                        <i className="fas fa-check-circle"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.functionalRate}</h3>
                        <p>Functional Rate</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#fef3c7', color: '#f59e0b' }}>
                        <i className="fas fa-broom"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.cleaningFrequency}</h3>
                        <p>Cleaning Frequency</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#fee2e2', color: '#ef4444' }}>
                        <i className="fas fa-users"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.maintenanceTeams}</h3>
                        <p>Maintenance Teams</p>
                    </div>
                </div>
            </section>

            <div style={{display: 'flex', gap: '10px', marginBottom: '20px', borderBottom: '1px solid #e5e7eb'}}>
                <button onClick={() => setActiveTab('overview')} style={{padding: '10px 20px', background: activeTab === 'overview' ? '#0052cc' : 'transparent', color: activeTab === 'overview' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Facilities</button>
                <button onClick={() => setActiveTab('locations')} style={{padding: '10px 20px', background: activeTab === 'locations' ? '#0052cc' : 'transparent', color: activeTab === 'locations' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Locations</button>
                <button onClick={() => setActiveTab('maintenance')} style={{padding: '10px 20px', background: activeTab === 'maintenance' ? '#0052cc' : 'transparent', color: activeTab === 'maintenance' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Maintenance Teams</button>
                <button onClick={() => setActiveTab('supplies')} style={{padding: '10px 20px', background: activeTab === 'supplies' ? '#0052cc' : 'transparent', color: activeTab === 'supplies' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Supplies</button>
            </div>

            {activeTab === 'overview' && (
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                        <h3>Facility Status</h3>
                        <div style={{display: 'grid', gap: '15px', marginTop: '20px'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Total Facilities:</span>
                                <span style={{fontWeight: 'bold'}}>{toiletData.facilities.total}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Functional:</span>
                                <span style={{color: '#10b981'}}>{toiletData.facilities.functional}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Under Maintenance:</span>
                                <span style={{color: '#f59e0b'}}>{toiletData.facilities.underMaintenance}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Under Construction:</span>
                                <span style={{color: '#3b82f6'}}>{toiletData.facilities.underConstruction}</span>
                            </div>
                        </div>
                    </div>

                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                        <h3>Cleaning Schedule</h3>
                        <div style={{display: 'grid', gap: '15px', marginTop: '20px'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Frequency:</span>
                                <span style={{fontWeight: 'bold'}}>{toiletData.cleaningSchedule.frequency}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Last Cleaned:</span>
                                <span style={{color: '#10b981'}}>{toiletData.cleaningSchedule.lastCleaned}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Next Cleaning:</span>
                                <span style={{color: '#f59e0b'}}>{toiletData.cleaningSchedule.nextCleaning}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Cleaning Staff:</span>
                                <span>{toiletData.cleaningSchedule.cleaningStaff}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'locations' && (
                <div style={{background: '#fff', borderRadius: '8px', padding: '20px'}}>
                    <h2>Facility Locations</h2>
                    <table style={{width: '100%', marginTop: '20px'}}>
                        <thead>
                            <tr style={{background: '#f3f4f6'}}>
                                <th style={{padding: '12px', textAlign: 'left'}}>Location</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Type</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Status</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Last Cleaned</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {toiletData.locations.map((location, index) => (
                                <tr key={index}>
                                    <td style={{padding: '12px', fontWeight: 'bold'}}>{location.name}</td>
                                    <td style={{padding: '12px'}}>{location.type}</td>
                                    <td style={{padding: '12px'}}>
                                        <span style={{
                                            background: location.status === 'Functional' ? '#d1fae5' : '#fef3c7',
                                            color: location.status === 'Functional' ? '#065f46' : '#92400e',
                                            padding: '4px 8px', borderRadius: '4px', fontSize: '12px'
                                        }}>
                                            {location.status}
                                        </span>
                                    </td>
                                    <td style={{padding: '12px'}}>{location.lastCleaned}</td>
                                    <td style={{padding: '12px'}}>
                                        <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                                            <span>{location.rating}</span>
                                            <div style={{display: 'flex'}}>
                                                {[...Array(5)].map((_, i) => (
                                                    <i key={i} className="fas fa-star" style={{color: i < Math.floor(location.rating) ? '#f59e0b' : '#e5e7eb', fontSize: '12px'}}></i>
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

            {activeTab === 'maintenance' && (
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px'}}>
                    {toiletData.maintenanceTeams.map(team => (
                        <div key={team.id} style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                            <h3>{team.name}</h3>
                            <div style={{display: 'grid', gap: '10px', marginTop: '15px'}}>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Area:</span>
                                    <span>{team.area}</span>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Facilities:</span>
                                    <span style={{fontWeight: 'bold'}}>{team.facilities}</span>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Status:</span>
                                    <span style={{
                                        color: team.status === 'Active' ? '#10b981' : '#f59e0b',
                                        fontWeight: 'bold'
                                    }}>
                                        {team.status}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === 'supplies' && (
                <div style={{background: '#fff', borderRadius: '8px', padding: '20px'}}>
                    <h2>Supply Inventory</h2>
                    <table style={{width: '100%', marginTop: '20px'}}>
                        <thead>
                            <tr style={{background: '#f3f4f6'}}>
                                <th style={{padding: '12px', textAlign: 'left'}}>Item</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Current Stock</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Required</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {toiletData.supplies.map((supply, index) => (
                                <tr key={index}>
                                    <td style={{padding: '12px', fontWeight: 'bold'}}>{supply.item}</td>
                                    <td style={{padding: '12px'}}>{supply.stock}</td>
                                    <td style={{padding: '12px'}}>{supply.required}</td>
                                    <td style={{padding: '12px'}}>
                                        <span style={{
                                            background: supply.status === 'Adequate' ? '#d1fae5' : '#fef3c7',
                                            color: supply.status === 'Adequate' ? '#065f46' : '#92400e',
                                            padding: '4px 8px', borderRadius: '4px', fontSize: '12px'
                                        }}>
                                            {supply.status}
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

export default PublicToiletsDashboard;