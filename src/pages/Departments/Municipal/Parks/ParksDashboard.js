'use client';

import React, { useState } from 'react';
import { getMockComplaints } from '../../../../services/mockDataService';
import '../../../../styles/dashboard.css';
import '../../../../styles/municipal-department.css';

const ParksDashboard = ({ user, onNavigate }) => {
    const complaints = getMockComplaints().filter(c => c.departmentId === 8);
    const [activeTab, setActiveTab] = useState('overview');

    const parksData = {
        facilities: {
            totalParks: 85,
            gardens: 45,
            playgrounds: 25,
            sportsComplexes: 15,
            totalArea: '2,450 acres'
        },
        maintenance: {
            gardeningStaff: 120,
            maintenanceTeams: 8,
            equipmentUnits: 45,
            dailyWatering: '15,000 gallons'
        },
        parksList: [
            { id: 1, name: 'Central City Park', area: '150 acres', type: 'Public Park', status: 'Well Maintained', visitors: 2500, rating: 4.5 },
            { id: 2, name: 'Rose Garden', area: '25 acres', type: 'Botanical Garden', status: 'Excellent', visitors: 800, rating: 4.8 },
            { id: 3, name: 'Sports Complex', area: '80 acres', type: 'Sports Facility', status: 'Good', visitors: 1200, rating: 4.2 },
            { id: 4, name: 'Children\'s Park', area: '15 acres', type: 'Playground', status: 'Under Renovation', visitors: 600, rating: 3.9 }
        ],
        plantInventory: [
            { type: 'Trees', count: 15420, newPlantings: 450, maintenance: 'Pruning' },
            { type: 'Flowering Plants', count: 25600, newPlantings: 1200, maintenance: 'Watering' },
            { type: 'Grass Areas', count: '850 acres', newPlantings: '25 acres', maintenance: 'Mowing' },
            { type: 'Shrubs', count: 8900, newPlantings: 300, maintenance: 'Trimming' }
        ],
        events: [
            { name: 'Flower Show', date: '2024-02-15', location: 'Rose Garden', expected: 5000 },
            { name: 'Marathon Event', date: '2024-02-20', location: 'Central Park', expected: 2000 },
            { name: 'Tree Plantation Drive', date: '2024-02-25', location: 'Multiple Parks', expected: 1000 }
        ]
    };

    const stats = {
        totalParks: parksData.facilities.totalParks,
        totalArea: parksData.facilities.totalArea,
        gardeningStaff: parksData.maintenance.gardeningStaff,
        dailyVisitors: parksData.parksList.reduce((sum, park) => sum + park.visitors, 0)
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Parks & Gardens Department</h1>
                <p>Public parks, gardens, recreational facilities, and green space management</p>
            </div>

            <section className="statistics-section">
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#d1fae5', color: '#10b981' }}>
                        <i className="fas fa-tree"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.totalParks}</h3>
                        <p>Total Parks</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#dcfce7', color: '#22c55e' }}>
                        <i className="fas fa-map"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.totalArea}</h3>
                        <p>Total Area</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#dbeafe', color: '#3b82f6' }}>
                        <i className="fas fa-users"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.gardeningStaff}</h3>
                        <p>Gardening Staff</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#fef3c7', color: '#f59e0b' }}>
                        <i className="fas fa-walking"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.dailyVisitors}</h3>
                        <p>Daily Visitors</p>
                    </div>
                </div>
            </section>

            <div style={{display: 'flex', gap: '10px', marginBottom: '20px', borderBottom: '1px solid #e5e7eb'}}>
                <button onClick={() => setActiveTab('overview')} style={{padding: '10px 20px', background: activeTab === 'overview' ? '#0052cc' : 'transparent', color: activeTab === 'overview' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Facilities</button>
                <button onClick={() => setActiveTab('parks')} style={{padding: '10px 20px', background: activeTab === 'parks' ? '#0052cc' : 'transparent', color: activeTab === 'parks' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Parks List</button>
                <button onClick={() => setActiveTab('plants')} style={{padding: '10px 20px', background: activeTab === 'plants' ? '#0052cc' : 'transparent', color: activeTab === 'plants' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Plant Inventory</button>
                <button onClick={() => setActiveTab('events')} style={{padding: '10px 20px', background: activeTab === 'events' ? '#0052cc' : 'transparent', color: activeTab === 'events' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Events</button>
            </div>

            {activeTab === 'overview' && (
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                        <h3>Facility Breakdown</h3>
                        <div style={{display: 'grid', gap: '15px', marginTop: '20px'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Total Parks:</span>
                                <span style={{fontWeight: 'bold'}}>{parksData.facilities.totalParks}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Gardens:</span>
                                <span style={{color: '#10b981'}}>{parksData.facilities.gardens}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Playgrounds:</span>
                                <span style={{color: '#3b82f6'}}>{parksData.facilities.playgrounds}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Sports Complexes:</span>
                                <span style={{color: '#f59e0b'}}>{parksData.facilities.sportsComplexes}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Total Area:</span>
                                <span style={{color: '#22c55e', fontWeight: 'bold'}}>{parksData.facilities.totalArea}</span>
                            </div>
                        </div>
                    </div>

                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                        <h3>Maintenance Resources</h3>
                        <div style={{display: 'grid', gap: '15px', marginTop: '20px'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Gardening Staff:</span>
                                <span style={{fontWeight: 'bold'}}>{parksData.maintenance.gardeningStaff}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Maintenance Teams:</span>
                                <span>{parksData.maintenance.maintenanceTeams}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Equipment Units:</span>
                                <span>{parksData.maintenance.equipmentUnits}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Daily Watering:</span>
                                <span style={{color: '#3b82f6'}}>{parksData.maintenance.dailyWatering}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'parks' && (
                <div style={{background: '#fff', borderRadius: '8px', padding: '20px'}}>
                    <h2>Parks & Facilities</h2>
                    <table style={{width: '100%', marginTop: '20px'}}>
                        <thead>
                            <tr style={{background: '#f3f4f6'}}>
                                <th style={{padding: '12px', textAlign: 'left'}}>Park Name</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Area</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Type</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Status</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Daily Visitors</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {parksData.parksList.map((park, index) => (
                                <tr key={index}>
                                    <td style={{padding: '12px', fontWeight: 'bold'}}>{park.name}</td>
                                    <td style={{padding: '12px'}}>{park.area}</td>
                                    <td style={{padding: '12px'}}>{park.type}</td>
                                    <td style={{padding: '12px'}}>
                                        <span style={{
                                            background: park.status === 'Excellent' ? '#d1fae5' : park.status === 'Well Maintained' ? '#dbeafe' : park.status === 'Good' ? '#fef3c7' : '#fee2e2',
                                            color: park.status === 'Excellent' ? '#065f46' : park.status === 'Well Maintained' ? '#1e40af' : park.status === 'Good' ? '#92400e' : '#991b1b',
                                            padding: '4px 8px', borderRadius: '4px', fontSize: '12px'
                                        }}>
                                            {park.status}
                                        </span>
                                    </td>
                                    <td style={{padding: '12px'}}>{park.visitors}</td>
                                    <td style={{padding: '12px'}}>
                                        <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                                            <span>{park.rating}</span>
                                            <div style={{display: 'flex'}}>
                                                {[...Array(5)].map((_, i) => (
                                                    <i key={i} className="fas fa-star" style={{color: i < Math.floor(park.rating) ? '#f59e0b' : '#e5e7eb', fontSize: '12px'}}></i>
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

            {activeTab === 'plants' && (
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px'}}>
                    {parksData.plantInventory.map((plant, index) => (
                        <div key={index} style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                            <h3>{plant.type}</h3>
                            <div style={{display: 'grid', gap: '10px', marginTop: '15px'}}>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Current Count:</span>
                                    <span style={{fontWeight: 'bold'}}>{plant.count}</span>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>New Plantings:</span>
                                    <span style={{color: '#10b981'}}>{plant.newPlantings}</span>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Maintenance:</span>
                                    <span style={{color: '#f59e0b'}}>{plant.maintenance}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === 'events' && (
                <div style={{background: '#fff', borderRadius: '8px', padding: '20px'}}>
                    <h2>Upcoming Events</h2>
                    <div style={{marginTop: '20px'}}>
                        {parksData.events.map((event, index) => (
                            <div key={index} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', border: '1px solid #e5e7eb', borderRadius: '8px', marginBottom: '10px'}}>
                                <div>
                                    <h4 style={{margin: 0}}>{event.name}</h4>
                                    <p style={{margin: '5px 0 0', color: '#6b7280'}}>{event.location}</p>
                                </div>
                                <div style={{textAlign: 'right'}}>
                                    <p style={{margin: 0, fontWeight: 'bold'}}>{event.date}</p>
                                    <p style={{margin: '5px 0 0', color: '#6b7280'}}>Expected: {event.expected} visitors</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ParksDashboard;