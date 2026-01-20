import React, { useState, useEffect } from 'react';
import '../../../../styles/dashboard.css';
import '../../../../styles/safety-department.css';

const DisasterManagementDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [stats, setStats] = useState({
        riskLevel: 'Medium',
        activeAlerts: 2,
        emergencyTeams: 12,
        shelters: 25,
        evacuationPlans: 45,
        resourceStocks: '85%'
    });

    const [alerts, setAlerts] = useState([
        { id: 'ALT001', type: 'Flood Warning', severity: 'High', area: 'River Basin Area', status: 'Active', time: '14:30' },
        { id: 'ALT002', type: 'Heat Wave', severity: 'Medium', area: 'City Center', status: 'Monitoring', time: '12:15' }
    ]);

    const [emergencyTeams, setEmergencyTeams] = useState([
        { id: 'TEAM001', name: 'Rescue Team Alpha', members: 8, status: 'Standby', location: 'Station 1', specialization: 'Water Rescue' },
        { id: 'TEAM002', name: 'Medical Response Team', members: 6, status: 'Deployed', location: 'Sector 15', specialization: 'Medical Aid' },
        { id: 'TEAM003', name: 'Fire & Rescue Team', members: 10, status: 'Available', location: 'Station 2', specialization: 'Fire Fighting' }
    ]);

    const renderOverviewTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Current Risk Level</h3>
                    <p className={`stat-number risk-${stats.riskLevel.toLowerCase()}`}>{stats.riskLevel}</p>
                </div>
                <div className="stat-card">
                    <h3>Active Alerts</h3>
                    <p className="stat-number">{stats.activeAlerts}</p>
                </div>
                <div className="stat-card">
                    <h3>Emergency Teams</h3>
                    <p className="stat-number">{stats.emergencyTeams}</p>
                </div>
                <div className="stat-card">
                    <h3>Resource Stocks</h3>
                    <p className="stat-number">{stats.resourceStocks}</p>
                </div>
            </div>
            
            <div className="risk-assessment">
                <h3>Current Risk Assessment</h3>
                <div className="risk-factors">
                    <div className="risk-item">
                        <span className="risk-type">Flood Risk</span>
                        <div className="risk-meter">
                            <div className="risk-level high" style={{width: '75%'}}></div>
                        </div>
                        <span className="risk-status">High</span>
                    </div>
                    <div className="risk-item">
                        <span className="risk-type">Fire Risk</span>
                        <div className="risk-meter">
                            <div className="risk-level medium" style={{width: '45%'}}></div>
                        </div>
                        <span className="risk-status">Medium</span>
                    </div>
                    <div className="risk-item">
                        <span className="risk-type">Earthquake Risk</span>
                        <div className="risk-meter">
                            <div className="risk-level low" style={{width: '25%'}}></div>
                        </div>
                        <span className="risk-status">Low</span>
                    </div>
                    <div className="risk-item">
                        <span className="risk-type">Cyclone Risk</span>
                        <div className="risk-meter">
                            <div className="risk-level low" style={{width: '20%'}}></div>
                        </div>
                        <span className="risk-status">Low</span>
                    </div>
                </div>
            </div>
            
            <div className="weather-monitoring">
                <h3>Weather Monitoring</h3>
                <div className="weather-stats">
                    <div className="weather-item">
                        <i className="fas fa-thermometer-half"></i>
                        <span>Temperature</span>
                        <span className="value">32°C</span>
                    </div>
                    <div className="weather-item">
                        <i className="fas fa-tint"></i>
                        <span>Humidity</span>
                        <span className="value">68%</span>
                    </div>
                    <div className="weather-item">
                        <i className="fas fa-wind"></i>
                        <span>Wind Speed</span>
                        <span className="value">15 km/h</span>
                    </div>
                    <div className="weather-item">
                        <i className="fas fa-cloud-rain"></i>
                        <span>Rainfall</span>
                        <span className="value">12 mm</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderAlertsTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Active Alerts</h3>
                    <p className="stat-number">{stats.activeAlerts}</p>
                </div>
                <div className="stat-card">
                    <h3>High Priority</h3>
                    <p className="stat-number">1</p>
                </div>
                <div className="stat-card">
                    <h3>Medium Priority</h3>
                    <p className="stat-number">1</p>
                </div>
                <div className="stat-card">
                    <h3>Resolved Today</h3>
                    <p className="stat-number">3</p>
                </div>
            </div>
            
            <div className="alerts-board">
                <h3>Active Emergency Alerts</h3>
                <div className="alerts-list">
                    {alerts.map(alert => (
                        <div key={alert.id} className={`alert-item ${alert.severity.toLowerCase()}`}>
                            <div className="alert-header">
                                <span className="alert-id">{alert.id}</span>
                                <span className={`severity ${alert.severity.toLowerCase()}`}>{alert.severity}</span>
                                <span className="alert-time">{alert.time}</span>
                            </div>
                            <div className="alert-details">
                                <h4>{alert.type}</h4>
                                <p><i className="fas fa-map-marker-alt"></i> {alert.area}</p>
                                <span className={`status ${alert.status.toLowerCase()}`}>{alert.status}</span>
                            </div>
                            <div className="alert-actions">
                                <button className="btn-small">View Details</button>
                                <button className="btn-small">Update Status</button>
                                <button className="btn-small">Send Alert</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="alert-system">
                <h3>Alert Distribution System</h3>
                <div className="distribution-channels">
                    <div className="channel-item">
                        <i className="fas fa-mobile-alt"></i>
                        <span>SMS Alerts</span>
                        <span className="status active">Active</span>
                    </div>
                    <div className="channel-item">
                        <i className="fas fa-broadcast-tower"></i>
                        <span>Radio Broadcast</span>
                        <span className="status active">Active</span>
                    </div>
                    <div className="channel-item">
                        <i className="fas fa-tv"></i>
                        <span>TV Broadcast</span>
                        <span className="status active">Active</span>
                    </div>
                    <div className="channel-item">
                        <i className="fas fa-bullhorn"></i>
                        <span>Public Address</span>
                        <span className="status standby">Standby</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderResponseTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Response Teams</h3>
                    <p className="stat-number">{stats.emergencyTeams}</p>
                </div>
                <div className="stat-card">
                    <h3>Available Teams</h3>
                    <p className="stat-number">8</p>
                </div>
                <div className="stat-card">
                    <h3>Deployed Teams</h3>
                    <p className="stat-number">4</p>
                </div>
                <div className="stat-card">
                    <h3>Response Time</h3>
                    <p className="stat-number">12 min</p>
                </div>
            </div>
            
            <div className="data-table">
                <h3>Emergency Response Teams</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Team ID</th>
                            <th>Team Name</th>
                            <th>Members</th>
                            <th>Specialization</th>
                            <th>Status</th>
                            <th>Location</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {emergencyTeams.map(team => (
                            <tr key={team.id}>
                                <td>{team.id}</td>
                                <td>{team.name}</td>
                                <td>{team.members}</td>
                                <td>{team.specialization}</td>
                                <td><span className={`status ${team.status.toLowerCase()}`}>{team.status}</span></td>
                                <td>{team.location}</td>
                                <td>
                                    <button className="btn-small">Deploy</button>
                                    <button className="btn-small">Contact</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <div className="response-coordination">
                <h3>Response Coordination Center</h3>
                <div className="coordination-stats">
                    <div className="coord-item">
                        <i className="fas fa-phone"></i>
                        <span>Emergency Calls</span>
                        <span className="count">23</span>
                    </div>
                    <div className="coord-item">
                        <i className="fas fa-ambulance"></i>
                        <span>Ambulances Dispatched</span>
                        <span className="count">8</span>
                    </div>
                    <div className="coord-item">
                        <i className="fas fa-fire-extinguisher"></i>
                        <span>Fire Units</span>
                        <span className="count">4</span>
                    </div>
                    <div className="coord-item">
                        <i className="fas fa-shield-alt"></i>
                        <span>Police Units</span>
                        <span className="count">6</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderPreparednessTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Emergency Shelters</h3>
                    <p className="stat-number">{stats.shelters}</p>
                </div>
                <div className="stat-card">
                    <h3>Evacuation Plans</h3>
                    <p className="stat-number">{stats.evacuationPlans}</p>
                </div>
                <div className="stat-card">
                    <h3>Preparedness Level</h3>
                    <p className="stat-number">87%</p>
                </div>
                <div className="stat-card">
                    <h3>Training Programs</h3>
                    <p className="stat-number">12</p>
                </div>
            </div>
            
            <div className="resource-inventory">
                <h3>Emergency Resource Inventory</h3>
                <div className="resource-grid">
                    <div className="resource-item">
                        <i className="fas fa-medkit"></i>
                        <span>Medical Supplies</span>
                        <div className="stock-level">
                            <div className="stock-bar" style={{width: '85%'}}></div>
                        </div>
                        <span className="stock-percentage">85%</span>
                    </div>
                    <div className="resource-item">
                        <i className="fas fa-bread-slice"></i>
                        <span>Food Supplies</span>
                        <div className="stock-level">
                            <div className="stock-bar" style={{width: '92%'}}></div>
                        </div>
                        <span className="stock-percentage">92%</span>
                    </div>
                    <div className="resource-item">
                        <i className="fas fa-tint"></i>
                        <span>Water Reserves</span>
                        <div className="stock-level">
                            <div className="stock-bar" style={{width: '78%'}}></div>
                        </div>
                        <span className="stock-percentage">78%</span>
                    </div>
                    <div className="resource-item">
                        <i className="fas fa-tools"></i>
                        <span>Rescue Equipment</span>
                        <div className="stock-level">
                            <div className="stock-bar" style={{width: '88%'}}></div>
                        </div>
                        <span className="stock-percentage">88%</span>
                    </div>
                </div>
            </div>
            
            <div className="evacuation-plans">
                <h3>Evacuation Plans Status</h3>
                <div className="plan-list">
                    <div className="plan-item">
                        <h4>Flood Evacuation Plan</h4>
                        <p>Covers riverside areas and low-lying zones</p>
                        <span className="plan-status updated">Updated</span>
                    </div>
                    <div className="plan-item">
                        <h4>Fire Emergency Plan</h4>
                        <p>High-rise buildings and commercial areas</p>
                        <span className="plan-status updated">Updated</span>
                    </div>
                    <div className="plan-item">
                        <h4>Earthquake Response Plan</h4>
                        <p>City-wide seismic emergency response</p>
                        <span className="plan-status review">Under Review</span>
                    </div>
                </div>
            </div>
            
            <div className="training-programs">
                <h3>Community Training Programs</h3>
                <div className="training-stats">
                    <div className="training-item">
                        <span>First Aid Training</span>
                        <span className="participants">245 participants</span>
                    </div>
                    <div className="training-item">
                        <span>Fire Safety Drills</span>
                        <span className="participants">189 participants</span>
                    </div>
                    <div className="training-item">
                        <span>Evacuation Drills</span>
                        <span className="participants">156 participants</span>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="department-dashboard">
            <div className="dashboard-header">
                <h1><i className="fas fa-exclamation-triangle"></i> Disaster Management</h1>
                <p>Emergency preparedness, response coordination, and risk management</p>
            </div>

            <div className="dashboard-tabs">
                <button 
                    className={activeTab === 'overview' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('overview')}
                >
                    <i className="fas fa-tachometer-alt"></i> Overview
                </button>
                <button 
                    className={activeTab === 'alerts' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('alerts')}
                >
                    <i className="fas fa-bell"></i> Emergency Alerts
                </button>
                <button 
                    className={activeTab === 'response' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('response')}
                >
                    <i className="fas fa-users"></i> Response Teams
                </button>
                <button 
                    className={activeTab === 'preparedness' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('preparedness')}
                >
                    <i className="fas fa-shield-alt"></i> Preparedness
                </button>
            </div>

            <div className="dashboard-content">
                {activeTab === 'overview' && renderOverviewTab()}
                {activeTab === 'alerts' && renderAlertsTab()}
                {activeTab === 'response' && renderResponseTab()}
                {activeTab === 'preparedness' && renderPreparednessTab()}
            </div>
        </div>
    );
};

export default DisasterManagementDashboard;