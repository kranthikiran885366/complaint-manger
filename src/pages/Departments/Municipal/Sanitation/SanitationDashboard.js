'use client';

import React, { useState } from 'react';
import { getMockComplaints } from '../../../../services/mockDataService';
import { formatDate, getStatusBadgeClass } from '../../../../utils/helpers';
import '../../../../styles/dashboard.css';
import '../../../../styles/municipal-department.css';

const SanitationDashboard = ({ user, onNavigate }) => {
    const complaints = getMockComplaints().filter(c => c.departmentId === 4);
    const [activeTab, setActiveTab] = useState('overview');

    const sanitationData = {
        wasteCollection: {
            dailyCapacity: '2500 tons',
            collected: '2350 tons',
            recycled: '850 tons',
            efficiency: '94%'
        },
        vehicles: [
            { id: 'GC001', type: 'Garbage Truck', status: 'Active', route: 'Zone A', capacity: '10 tons' },
            { id: 'GC002', type: 'Compactor', status: 'Active', route: 'Zone B', capacity: '15 tons' },
            { id: 'GC003', type: 'Garbage Truck', status: 'Maintenance', route: 'Zone C', capacity: '10 tons' },
            { id: 'GC004', type: 'Street Sweeper', status: 'Active', route: 'Main Roads', capacity: '5 tons' }
        ],
        collectionRoutes: [
            { zone: 'Zone A', households: 5420, frequency: 'Daily', lastCollection: '2024-01-20', nextCollection: '2024-01-21' },
            { zone: 'Zone B', households: 6850, frequency: 'Daily', lastCollection: '2024-01-20', nextCollection: '2024-01-21' },
            { zone: 'Zone C', households: 4200, frequency: 'Alternate Days', lastCollection: '2024-01-19', nextCollection: '2024-01-21' },
            { zone: 'Commercial', establishments: 850, frequency: 'Daily', lastCollection: '2024-01-20', nextCollection: '2024-01-21' }
        ],
        recyclingCenters: [
            { name: 'Central Recycling Plant', capacity: '500 tons/day', current: '420 tons', efficiency: '84%' },
            { name: 'East Processing Unit', capacity: '300 tons/day', current: '280 tons', efficiency: '93%' },
            { name: 'Composting Facility', capacity: '200 tons/day', current: '150 tons', efficiency: '75%' }
        ],
        publicToilets: {
            total: 245,
            functional: 230,
            underMaintenance: 15,
            cleaningFrequency: '4 times/day'
        }
    };

    const stats = {
        collectionRate: sanitationData.wasteCollection.efficiency,
        vehiclesActive: sanitationData.vehicles.filter(v => v.status === 'Active').length,
        totalVehicles: sanitationData.vehicles.length,
        recyclingRate: '34%',
        complaints: complaints.length
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Sanitation Department</h1>
                <p>Waste management, recycling, and public cleanliness</p>
            </div>

            <section className="statistics-section">
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#d1fae5', color: '#10b981' }}>
                        <i className="fas fa-recycle"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.collectionRate}</h3>
                        <p>Collection Rate</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#dbeafe', color: '#3b82f6' }}>
                        <i className="fas fa-truck"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.vehiclesActive}/{stats.totalVehicles}</h3>
                        <p>Active Vehicles</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#fef3c7', color: '#f59e0b' }}>
                        <i className="fas fa-leaf"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.recyclingRate}</h3>
                        <p>Recycling Rate</p>
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
                <button onClick={() => setActiveTab('overview')} style={{padding: '10px 20px', background: activeTab === 'overview' ? '#0052cc' : 'transparent', color: activeTab === 'overview' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Collection Status</button>
                <button onClick={() => setActiveTab('vehicles')} style={{padding: '10px 20px', background: activeTab === 'vehicles' ? '#0052cc' : 'transparent', color: activeTab === 'vehicles' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Fleet Management</button>
                <button onClick={() => setActiveTab('routes')} style={{padding: '10px 20px', background: activeTab === 'routes' ? '#0052cc' : 'transparent', color: activeTab === 'routes' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Collection Routes</button>
                <button onClick={() => setActiveTab('recycling')} style={{padding: '10px 20px', background: activeTab === 'recycling' ? '#0052cc' : 'transparent', color: activeTab === 'recycling' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Recycling</button>
            </div>

            {activeTab === 'overview' && (
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                        <h3>Daily Waste Collection</h3>
                        <div style={{display: 'grid', gap: '15px', marginTop: '20px'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Daily Capacity:</span>
                                <span style={{fontWeight: 'bold'}}>{sanitationData.wasteCollection.dailyCapacity}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Collected Today:</span>
                                <span style={{color: '#10b981'}}>{sanitationData.wasteCollection.collected}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Recycled:</span>
                                <span style={{color: '#f59e0b'}}>{sanitationData.wasteCollection.recycled}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Efficiency:</span>
                                <span style={{color: '#10b981', fontWeight: 'bold'}}>{sanitationData.wasteCollection.efficiency}</span>
                            </div>
                        </div>
                    </div>

                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                        <h3>Public Toilets Status</h3>
                        <div style={{display: 'grid', gap: '15px', marginTop: '20px'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Total Facilities:</span>
                                <span style={{fontWeight: 'bold'}}>{sanitationData.publicToilets.total}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Functional:</span>
                                <span style={{color: '#10b981'}}>{sanitationData.publicToilets.functional}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Under Maintenance:</span>
                                <span style={{color: '#f59e0b'}}>{sanitationData.publicToilets.underMaintenance}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Cleaning Frequency:</span>
                                <span>{sanitationData.publicToilets.cleaningFrequency}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'vehicles' && (
                <div style={{background: '#fff', borderRadius: '8px', padding: '20px'}}>
                    <h2>Fleet Management</h2>
                    <table style={{width: '100%', marginTop: '20px'}}>
                        <thead>
                            <tr style={{background: '#f3f4f6'}}>
                                <th style={{padding: '12px', textAlign: 'left'}}>Vehicle ID</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Type</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Status</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Route</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Capacity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sanitationData.vehicles.map((vehicle, index) => (
                                <tr key={index}>
                                    <td style={{padding: '12px', fontWeight: 'bold'}}>{vehicle.id}</td>
                                    <td style={{padding: '12px'}}>{vehicle.type}</td>
                                    <td style={{padding: '12px'}}>
                                        <span style={{background: vehicle.status === 'Active' ? '#d1fae5' : '#fef3c7', color: vehicle.status === 'Active' ? '#065f46' : '#92400e', padding: '4px 8px', borderRadius: '4px', fontSize: '12px'}}>
                                            {vehicle.status}
                                        </span>
                                    </td>
                                    <td style={{padding: '12px'}}>{vehicle.route}</td>
                                    <td style={{padding: '12px'}}>{vehicle.capacity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {activeTab === 'routes' && (
                <div style={{background: '#fff', borderRadius: '8px', padding: '20px'}}>
                    <h2>Collection Routes Schedule</h2>
                    <div style={{marginTop: '20px'}}>
                        {sanitationData.collectionRoutes.map((route, index) => (
                            <div key={index} style={{padding: '20px', border: '1px solid #e5e7eb', borderRadius: '8px', marginBottom: '15px'}}>
                                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
                                    <h4 style={{margin: 0}}>{route.zone}</h4>
                                    <span style={{background: '#d1fae5', color: '#065f46', padding: '4px 12px', borderRadius: '20px', fontSize: '12px'}}>{route.frequency}</span>
                                </div>
                                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px', fontSize: '14px', color: '#6b7280'}}>
                                    <div>
                                        <span style={{fontWeight: 'bold'}}>Coverage:</span> {route.households || route.establishments} {route.households ? 'households' : 'establishments'}
                                    </div>
                                    <div>
                                        <span style={{fontWeight: 'bold'}}>Last Collection:</span> {route.lastCollection}
                                    </div>
                                    <div>
                                        <span style={{fontWeight: 'bold'}}>Next Collection:</span> {route.nextCollection}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === 'recycling' && (
                <div style={{background: '#fff', borderRadius: '8px', padding: '20px'}}>
                    <h2>Recycling Centers</h2>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '20px'}}>
                        {sanitationData.recyclingCenters.map((center, index) => (
                            <div key={index} style={{padding: '20px', border: '1px solid #e5e7eb', borderRadius: '8px'}}>
                                <h4 style={{margin: '0 0 15px'}}>{center.name}</h4>
                                <div style={{display: 'grid', gap: '10px', marginBottom: '15px'}}>
                                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <span>Capacity:</span>
                                        <span>{center.capacity}</span>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <span>Current Load:</span>
                                        <span>{center.current}</span>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <span>Efficiency:</span>
                                        <span style={{color: '#10b981', fontWeight: 'bold'}}>{center.efficiency}</span>
                                    </div>
                                </div>
                                <div style={{background: '#f3f4f6', height: '8px', borderRadius: '4px', overflow: 'hidden'}}>
                                    <div style={{background: '#10b981', width: center.efficiency, height: '100%'}}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SanitationDashboard;