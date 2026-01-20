import React, { useState, useEffect } from 'react';
import '../../../../styles/dashboard.css';
import '../../../../styles/health-department.css';

const AmbulanceServicesDashboard = () => {
    const [activeTab, setActiveTab] = useState('emergency');
    const [stats, setStats] = useState({
        totalAmbulances: 25,
        activeEmergencies: 8,
        responseTime: '7.2 min',
        completedCalls: 156,
        availableUnits: 17
    });

    const [emergencyCalls, setEmergencyCalls] = useState([
        { id: 'EMG001', location: 'Sector 15, Block A', priority: 'Critical', status: 'En Route', time: '14:25', eta: '3 min' },
        { id: 'EMG002', location: 'MG Road, Near Mall', priority: 'High', status: 'Dispatched', time: '14:20', eta: '5 min' },
        { id: 'EMG003', location: 'Hospital Road', priority: 'Medium', status: 'Completed', time: '14:15', eta: 'N/A' }
    ]);

    const [ambulanceFleet, setAmbulanceFleet] = useState([
        { id: 'AMB001', type: 'Advanced Life Support', status: 'Available', location: 'Station 1', fuel: '85%' },
        { id: 'AMB002', type: 'Basic Life Support', status: 'On Call', location: 'Sector 12', fuel: '60%' },
        { id: 'AMB003', type: 'Patient Transport', status: 'Maintenance', location: 'Workshop', fuel: '0%' }
    ]);

    const renderEmergencyTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card emergency">
                    <h3>Active Emergencies</h3>
                    <p className="stat-number">{stats.activeEmergencies}</p>
                </div>
                <div className="stat-card">
                    <h3>Avg Response Time</h3>
                    <p className="stat-number">{stats.responseTime}</p>
                </div>
                <div className="stat-card">
                    <h3>Available Units</h3>
                    <p className="stat-number">{stats.availableUnits}</p>
                </div>
            </div>
            
            <div className="emergency-board">
                <h3>Live Emergency Calls</h3>
                <div className="emergency-list">
                    {emergencyCalls.map(call => (
                        <div key={call.id} className={`emergency-item ${call.priority.toLowerCase()}`}>
                            <div className="emergency-header">
                                <span className="call-id">{call.id}</span>
                                <span className={`priority ${call.priority.toLowerCase()}`}>{call.priority}</span>
                                <span className="call-time">{call.time}</span>
                            </div>
                            <div className="emergency-details">
                                <p><i className="fas fa-map-marker-alt"></i> {call.location}</p>
                                <p><i className="fas fa-clock"></i> ETA: {call.eta}</p>
                                <span className={`status ${call.status.toLowerCase().replace(' ', '-')}`}>{call.status}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderFleetTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Total Fleet</h3>
                    <p className="stat-number">{stats.totalAmbulances}</p>
                </div>
                <div className="stat-card">
                    <h3>Available</h3>
                    <p className="stat-number">{stats.availableUnits}</p>
                </div>
                <div className="stat-card">
                    <h3>On Call</h3>
                    <p className="stat-number">6</p>
                </div>
                <div className="stat-card">
                    <h3>Maintenance</h3>
                    <p className="stat-number">2</p>
                </div>
            </div>
            
            <div className="data-table">
                <h3>Ambulance Fleet Status</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Unit ID</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Location</th>
                            <th>Fuel Level</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ambulanceFleet.map(ambulance => (
                            <tr key={ambulance.id}>
                                <td>{ambulance.id}</td>
                                <td>{ambulance.type}</td>
                                <td><span className={`status ${ambulance.status.toLowerCase().replace(' ', '-')}`}>{ambulance.status}</span></td>
                                <td>{ambulance.location}</td>
                                <td>
                                    <div className="fuel-indicator">
                                        <div className="fuel-bar" style={{width: ambulance.fuel}}></div>
                                        <span>{ambulance.fuel}</span>
                                    </div>
                                </td>
                                <td>
                                    <button className="btn-small">Track</button>
                                    <button className="btn-small">Dispatch</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderResponseTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Calls Today</h3>
                    <p className="stat-number">23</p>
                </div>
                <div className="stat-card">
                    <h3>Avg Response Time</h3>
                    <p className="stat-number">7.2 min</p>
                </div>
                <div className="stat-card">
                    <h3>Success Rate</h3>
                    <p className="stat-number">96%</p>
                </div>
            </div>
            
            <div className="response-metrics">
                <h3>Response Time Analysis</h3>
                <div className="time-zones">
                    <div className="zone-item excellent">
                        <span className="zone-label">Under 5 min</span>
                        <span className="zone-percentage">45%</span>
                    </div>
                    <div className="zone-item good">
                        <span className="zone-label">5-10 min</span>
                        <span className="zone-percentage">35%</span>
                    </div>
                    <div className="zone-item average">
                        <span className="zone-label">10-15 min</span>
                        <span className="zone-percentage">15%</span>
                    </div>
                    <div className="zone-item poor">
                        <span className="zone-label">Over 15 min</span>
                        <span className="zone-percentage">5%</span>
                    </div>
                </div>
            </div>
            
            <div className="coverage-map">
                <h3>Coverage Areas</h3>
                <div className="coverage-zones">
                    <div className="coverage-item">
                        <span>Zone A (Central)</span>
                        <span className="coverage-time">Avg: 5.2 min</span>
                    </div>
                    <div className="coverage-item">
                        <span>Zone B (North)</span>
                        <span className="coverage-time">Avg: 7.8 min</span>
                    </div>
                    <div className="coverage-item">
                        <span>Zone C (South)</span>
                        <span className="coverage-time">Avg: 6.5 min</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderMedicalTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Medical Transports</h3>
                    <p className="stat-number">89</p>
                </div>
                <div className="stat-card">
                    <h3>ICU Transfers</h3>
                    <p className="stat-number">12</p>
                </div>
                <div className="stat-card">
                    <h3>Dialysis Trips</h3>
                    <p className="stat-number">34</p>
                </div>
            </div>
            
            <div className="medical-equipment">
                <h3>Medical Equipment Status</h3>
                <div className="equipment-grid">
                    <div className="equipment-item">
                        <i className="fas fa-heartbeat"></i>
                        <span>Defibrillators</span>
                        <span className="count">25/25</span>
                    </div>
                    <div className="equipment-item">
                        <i className="fas fa-lungs"></i>
                        <span>Oxygen Cylinders</span>
                        <span className="count">48/50</span>
                    </div>
                    <div className="equipment-item">
                        <i className="fas fa-syringe"></i>
                        <span>Emergency Kits</span>
                        <span className="count">25/25</span>
                    </div>
                    <div className="equipment-item">
                        <i className="fas fa-bed"></i>
                        <span>Stretchers</span>
                        <span className="count">25/25</span>
                    </div>
                </div>
            </div>
            
            <div className="patient-categories">
                <h3>Patient Transport Categories</h3>
                <div className="category-stats">
                    <div className="category-item">
                        <span>Emergency Cases</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '60%'}}></div>
                        </div>
                        <span>60%</span>
                    </div>
                    <div className="category-item">
                        <span>Scheduled Transfers</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '25%'}}></div>
                        </div>
                        <span>25%</span>
                    </div>
                    <div className="category-item">
                        <span>Routine Transport</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '15%'}}></div>
                        </div>
                        <span>15%</span>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="department-dashboard">
            <div className="dashboard-header">
                <h1><i className="fas fa-ambulance"></i> Ambulance Services</h1>
                <p>Emergency medical response and patient transport services</p>
            </div>

            <div className="dashboard-tabs">
                <button 
                    className={activeTab === 'emergency' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('emergency')}
                >
                    <i className="fas fa-exclamation-circle"></i> Emergency Calls
                </button>
                <button 
                    className={activeTab === 'fleet' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('fleet')}
                >
                    <i className="fas fa-ambulance"></i> Fleet Management
                </button>
                <button 
                    className={activeTab === 'response' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('response')}
                >
                    <i className="fas fa-clock"></i> Response Times
                </button>
                <button 
                    className={activeTab === 'medical' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('medical')}
                >
                    <i className="fas fa-heartbeat"></i> Medical Transport
                </button>
            </div>

            <div className="dashboard-content">
                {activeTab === 'emergency' && renderEmergencyTab()}
                {activeTab === 'fleet' && renderFleetTab()}
                {activeTab === 'response' && renderResponseTab()}
                {activeTab === 'medical' && renderMedicalTab()}
            </div>
        </div>
    );
};

export default AmbulanceServicesDashboard;