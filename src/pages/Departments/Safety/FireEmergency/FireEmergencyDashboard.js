'use client';

import React, { useState } from 'react';
import { getMockComplaints } from '../../../../services/mockDataService';
import { formatDate, getStatusBadgeClass } from '../../../../utils/helpers';
import '../../../../styles/dashboard.css';
import '../../../../styles/safety-department.css';

const FireEmergencyDashboard = ({ user, onNavigate }) => {
    const complaints = getMockComplaints().filter(c => c.departmentId === 13);
    const [activeTab, setActiveTab] = useState('overview');

    const fireData = {
        stations: [
            { id: 1, name: 'Central Fire Station', vehicles: 8, personnel: 25, area: 'Downtown', status: 'Active', emergencyCalls: 5 },
            { id: 2, name: 'East Fire Station', vehicles: 6, personnel: 18, area: 'East District', status: 'Active', emergencyCalls: 3 },
            { id: 3, name: 'West Fire Station', vehicles: 7, personnel: 22, area: 'West District', status: 'Active', emergencyCalls: 7 },
            { id: 4, name: 'Industrial Fire Unit', vehicles: 4, personnel: 15, area: 'Industrial Zone', status: 'Active', emergencyCalls: 2 }
        ],
        emergencyVehicles: [
            { id: 'FT001', type: 'Fire Truck', status: 'Available', station: 'Central', capacity: '3000L', lastMaintenance: '2024-01-15' },
            { id: 'FT002', type: 'Ladder Truck', status: 'On Call', station: 'Central', capacity: '30m Ladder', lastMaintenance: '2024-01-10' },
            { id: 'AMB001', type: 'Ambulance', status: 'Available', station: 'East', capacity: '2 Patients', lastMaintenance: '2024-01-18' },
            { id: 'RT001', type: 'Rescue Truck', status: 'Maintenance', station: 'West', capacity: 'Heavy Rescue', lastMaintenance: '2024-01-20' }
        ],
        emergencyStats: {
            totalCalls: 156,
            fireIncidents: 45,
            medicalEmergencies: 89,
            rescueOperations: 22,
            averageResponseTime: '6.2 minutes'
        },
        safetyInspections: [
            { building: 'Shopping Mall Complex', date: '2024-01-22', status: 'Scheduled', inspector: 'Officer Smith' },
            { building: 'Industrial Plant A', date: '2024-01-20', status: 'Completed', inspector: 'Officer Johnson', result: 'Passed' },
            { building: 'Hotel Grand Plaza', date: '2024-01-25', status: 'Scheduled', inspector: 'Officer Brown' },
            { building: 'School Building', date: '2024-01-18', status: 'Completed', inspector: 'Officer Davis', result: 'Minor Issues' }
        ],
        equipment: {
            fireExtinguishers: { total: 1250, functional: 1180, expired: 70 },
            smokeDetectors: { total: 3500, functional: 3420, faulty: 80 },
            hydrants: { total: 450, functional: 435, needRepair: 15 }
        }
    };

    const stats = {
        totalPersonnel: fireData.stations.reduce((sum, station) => sum + station.personnel, 0),
        totalVehicles: fireData.emergencyVehicles.length,
        activeCalls: fireData.stations.reduce((sum, station) => sum + station.emergencyCalls, 0),
        responseTime: fireData.emergencyStats.averageResponseTime
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Fire & Emergency Services</h1>
                <p>Fire safety, emergency response, and rescue operations</p>
            </div>

            <section className="statistics-section">
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#fee2e2', color: '#ef4444' }}>
                        <i className="fas fa-fire-extinguisher"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.totalPersonnel}</h3>
                        <p>Fire Personnel</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#dbeafe', color: '#3b82f6' }}>
                        <i className="fas fa-truck"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.totalVehicles}</h3>
                        <p>Emergency Vehicles</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#fef3c7', color: '#f59e0b' }}>
                        <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.activeCalls}</h3>
                        <p>Active Calls</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#d1fae5', color: '#10b981' }}>
                        <i className="fas fa-clock"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.responseTime}</h3>
                        <p>Avg Response Time</p>
                    </div>
                </div>
            </section>

            <div style={{display: 'flex', gap: '10px', marginBottom: '20px', borderBottom: '1px solid #e5e7eb'}}>
                <button onClick={() => setActiveTab('overview')} style={{padding: '10px 20px', background: activeTab === 'overview' ? '#0052cc' : 'transparent', color: activeTab === 'overview' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Fire Stations</button>
                <button onClick={() => setActiveTab('vehicles')} style={{padding: '10px 20px', background: activeTab === 'vehicles' ? '#0052cc' : 'transparent', color: activeTab === 'vehicles' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Emergency Fleet</button>
                <button onClick={() => setActiveTab('inspections')} style={{padding: '10px 20px', background: activeTab === 'inspections' ? '#0052cc' : 'transparent', color: activeTab === 'inspections' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Safety Inspections</button>
                <button onClick={() => setActiveTab('equipment')} style={{padding: '10px 20px', background: activeTab === 'equipment' ? '#0052cc' : 'transparent', color: activeTab === 'equipment' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Equipment</button>
            </div>

            {activeTab === 'overview' && (
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px'}}>
                    {fireData.stations.map(station => (
                        <div key={station.id} style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                            <h3>{station.name}</h3>
                            <div style={{display: 'grid', gap: '10px', marginTop: '15px'}}>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Personnel:</span>
                                    <span style={{fontWeight: 'bold'}}>{station.personnel}</span>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Vehicles:</span>
                                    <span>{station.vehicles}</span>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Coverage Area:</span>
                                    <span>{station.area}</span>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Emergency Calls:</span>
                                    <span style={{color: station.emergencyCalls > 5 ? '#ef4444' : '#10b981', fontWeight: 'bold'}}>{station.emergencyCalls}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === 'vehicles' && (
                <div style={{background: '#fff', borderRadius: '8px', padding: '20px'}}>
                    <h2>Emergency Vehicle Fleet</h2>
                    <table style={{width: '100%', marginTop: '20px'}}>
                        <thead>
                            <tr style={{background: '#f3f4f6'}}>
                                <th style={{padding: '12px', textAlign: 'left'}}>Vehicle ID</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Type</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Status</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Station</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Capacity</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Last Maintenance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fireData.emergencyVehicles.map((vehicle, index) => (
                                <tr key={index}>
                                    <td style={{padding: '12px', fontWeight: 'bold'}}>{vehicle.id}</td>
                                    <td style={{padding: '12px'}}>{vehicle.type}</td>
                                    <td style={{padding: '12px'}}>
                                        <span style={{
                                            background: vehicle.status === 'Available' ? '#d1fae5' : vehicle.status === 'On Call' ? '#fee2e2' : '#fef3c7',
                                            color: vehicle.status === 'Available' ? '#065f46' : vehicle.status === 'On Call' ? '#991b1b' : '#92400e',
                                            padding: '4px 8px', borderRadius: '4px', fontSize: '12px'
                                        }}>
                                            {vehicle.status}
                                        </span>
                                    </td>
                                    <td style={{padding: '12px'}}>{vehicle.station}</td>
                                    <td style={{padding: '12px'}}>{vehicle.capacity}</td>
                                    <td style={{padding: '12px'}}>{vehicle.lastMaintenance}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {activeTab === 'inspections' && (
                <div style={{background: '#fff', borderRadius: '8px', padding: '20px'}}>
                    <h2>Fire Safety Inspections</h2>
                    <div style={{marginTop: '20px'}}>
                        {fireData.safetyInspections.map((inspection, index) => (
                            <div key={index} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', border: '1px solid #e5e7eb', borderRadius: '8px', marginBottom: '10px'}}>
                                <div>
                                    <h4 style={{margin: 0}}>{inspection.building}</h4>
                                    <p style={{margin: '5px 0 0', color: '#6b7280'}}>Inspector: {inspection.inspector}</p>
                                    {inspection.result && <p style={{margin: '5px 0 0', color: inspection.result === 'Passed' ? '#10b981' : '#f59e0b', fontWeight: 'bold'}}>Result: {inspection.result}</p>}
                                </div>
                                <div style={{textAlign: 'right'}}>
                                    <p style={{margin: 0, fontWeight: 'bold'}}>{inspection.date}</p>
                                    <span style={{
                                        background: inspection.status === 'Completed' ? '#d1fae5' : '#fef3c7',
                                        color: inspection.status === 'Completed' ? '#065f46' : '#92400e',
                                        padding: '4px 8px', borderRadius: '4px', fontSize: '12px'
                                    }}>
                                        {inspection.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === 'equipment' && (
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px'}}>
                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                        <h3>Fire Extinguishers</h3>
                        <div style={{display: 'grid', gap: '10px', marginTop: '15px'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Total:</span>
                                <span style={{fontWeight: 'bold'}}>{fireData.equipment.fireExtinguishers.total}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Functional:</span>
                                <span style={{color: '#10b981'}}>{fireData.equipment.fireExtinguishers.functional}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Expired:</span>
                                <span style={{color: '#ef4444'}}>{fireData.equipment.fireExtinguishers.expired}</span>
                            </div>
                        </div>
                    </div>

                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                        <h3>Smoke Detectors</h3>
                        <div style={{display: 'grid', gap: '10px', marginTop: '15px'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Total:</span>
                                <span style={{fontWeight: 'bold'}}>{fireData.equipment.smokeDetectors.total}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Functional:</span>
                                <span style={{color: '#10b981'}}>{fireData.equipment.smokeDetectors.functional}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Faulty:</span>
                                <span style={{color: '#ef4444'}}>{fireData.equipment.smokeDetectors.faulty}</span>
                            </div>
                        </div>
                    </div>

                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                        <h3>Fire Hydrants</h3>
                        <div style={{display: 'grid', gap: '10px', marginTop: '15px'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Total:</span>
                                <span style={{fontWeight: 'bold'}}>{fireData.equipment.hydrants.total}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Functional:</span>
                                <span style={{color: '#10b981'}}>{fireData.equipment.hydrants.functional}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Need Repair:</span>
                                <span style={{color: '#f59e0b'}}>{fireData.equipment.hydrants.needRepair}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FireEmergencyDashboard;