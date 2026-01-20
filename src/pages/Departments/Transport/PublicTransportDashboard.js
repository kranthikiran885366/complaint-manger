import React, { useState, useEffect } from 'react';
import '../../../styles/dashboard.css';
import '../../../styles/transport-department.css';

const PublicTransportDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [stats, setStats] = useState({
        totalBuses: 245,
        activeBuses: 198,
        totalRoutes: 45,
        dailyPassengers: 25600,
        onTimePerformance: '87%',
        fuelEfficiency: '12.5 km/l'
    });

    const [busFleet, setBusFleet] = useState([
        { id: 'BUS001', route: 'Route 15', status: 'Active', passengers: 45, capacity: 50, location: 'Central Station' },
        { id: 'BUS002', route: 'Route 22', status: 'Active', passengers: 38, capacity: 50, location: 'Mall Road' },
        { id: 'BUS003', route: 'Route 8', status: 'Maintenance', passengers: 0, capacity: 50, location: 'Depot' }
    ]);

    const renderOverviewTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Total Fleet</h3>
                    <p className="stat-number">{stats.totalBuses}</p>
                </div>
                <div className="stat-card">
                    <h3>Active Buses</h3>
                    <p className="stat-number">{stats.activeBuses}</p>
                </div>
                <div className="stat-card">
                    <h3>Daily Passengers</h3>
                    <p className="stat-number">{stats.dailyPassengers.toLocaleString()}</p>
                </div>
                <div className="stat-card">
                    <h3>On-Time Performance</h3>
                    <p className="stat-number">{stats.onTimePerformance}</p>
                </div>
            </div>
            
            <div className="transport-overview">
                <h3>Service Coverage</h3>
                <div className="coverage-stats">
                    <div className="coverage-item">
                        <span>City Coverage</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '92%'}}></div>
                        </div>
                        <span>92%</span>
                    </div>
                    <div className="coverage-item">
                        <span>Suburban Areas</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '78%'}}></div>
                        </div>
                        <span>78%</span>
                    </div>
                    <div className="coverage-item">
                        <span>Rural Connectivity</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '65%'}}></div>
                        </div>
                        <span>65%</span>
                    </div>
                </div>
            </div>
            
            <div className="passenger-analytics">
                <h3>Passenger Analytics</h3>
                <div className="analytics-grid">
                    <div className="analytics-item">
                        <i className="fas fa-clock"></i>
                        <span>Peak Hours</span>
                        <span className="value">8-10 AM, 6-8 PM</span>
                    </div>
                    <div className="analytics-item">
                        <i className="fas fa-route"></i>
                        <span>Busiest Route</span>
                        <span className="value">Route 15</span>
                    </div>
                    <div className="analytics-item">
                        <i className="fas fa-users"></i>
                        <span>Avg Occupancy</span>
                        <span className="value">75%</span>
                    </div>
                    <div className="analytics-item">
                        <i className="fas fa-money-bill"></i>
                        <span>Daily Revenue</span>
                        <span className="value">₹2.5L</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderFleetTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Active Buses</h3>
                    <p className="stat-number">{stats.activeBuses}</p>
                </div>
                <div className="stat-card">
                    <h3>Under Maintenance</h3>
                    <p className="stat-number">32</p>
                </div>
                <div className="stat-card">
                    <h3>Out of Service</h3>
                    <p className="stat-number">15</p>
                </div>
                <div className="stat-card">
                    <h3>Fuel Efficiency</h3>
                    <p className="stat-number">{stats.fuelEfficiency}</p>
                </div>
            </div>
            
            <div className="data-table">
                <h3>Bus Fleet Status</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Bus ID</th>
                            <th>Route</th>
                            <th>Status</th>
                            <th>Passengers</th>
                            <th>Capacity</th>
                            <th>Location</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {busFleet.map(bus => (
                            <tr key={bus.id}>
                                <td>{bus.id}</td>
                                <td>{bus.route}</td>
                                <td><span className={`status ${bus.status.toLowerCase()}`}>{bus.status}</span></td>
                                <td>{bus.passengers}</td>
                                <td>{bus.capacity}</td>
                                <td>{bus.location}</td>
                                <td>
                                    <button className="btn-small">Track</button>
                                    <button className="btn-small">Manage</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <div className="fleet-maintenance">
                <h3>Maintenance Schedule</h3>
                <div className="maintenance-list">
                    <div className="maintenance-item">
                        <span className="bus-id">BUS045</span>
                        <span className="maintenance-type">Routine Service</span>
                        <span className="schedule-date">Jan 22, 2024</span>
                        <span className="status scheduled">Scheduled</span>
                    </div>
                    <div className="maintenance-item">
                        <span className="bus-id">BUS078</span>
                        <span className="maintenance-type">Engine Repair</span>
                        <span className="schedule-date">Jan 20, 2024</span>
                        <span className="status in-progress">In Progress</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderRoutesTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Total Routes</h3>
                    <p className="stat-number">{stats.totalRoutes}</p>
                </div>
                <div className="stat-card">
                    <h3>Active Routes</h3>
                    <p className="stat-number">42</p>
                </div>
                <div className="stat-card">
                    <h3>New Routes</h3>
                    <p className="stat-number">3</p>
                </div>
                <div className="stat-card">
                    <h3>Route Efficiency</h3>
                    <p className="stat-number">89%</p>
                </div>
            </div>
            
            <div className="route-performance">
                <h3>Top Performing Routes</h3>
                <div className="route-list">
                    <div className="route-item">
                        <span className="route-number">Route 15</span>
                        <span className="route-name">Central Station - Mall Road</span>
                        <span className="passengers">2,450 daily</span>
                        <span className="performance excellent">Excellent</span>
                    </div>
                    <div className="route-item">
                        <span className="route-number">Route 22</span>
                        <span className="route-name">Airport - City Center</span>
                        <span className="passengers">1,890 daily</span>
                        <span className="performance good">Good</span>
                    </div>
                    <div className="route-item">
                        <span className="route-number">Route 8</span>
                        <span className="route-name">University - Hospital</span>
                        <span className="passengers">1,650 daily</span>
                        <span className="performance good">Good</span>
                    </div>
                </div>
            </div>
            
            <div className="route-optimization">
                <h3>Route Optimization Suggestions</h3>
                <div className="optimization-list">
                    <div className="optimization-item">
                        <h4>Route 35 - Frequency Increase</h4>
                        <p>High demand during peak hours, suggest increasing frequency</p>
                        <span className="priority high">High Priority</span>
                    </div>
                    <div className="optimization-item">
                        <h4>Route 12 - Route Extension</h4>
                        <p>Extend route to cover new residential area</p>
                        <span className="priority medium">Medium Priority</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderPassengersTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Daily Passengers</h3>
                    <p className="stat-number">{stats.dailyPassengers.toLocaleString()}</p>
                </div>
                <div className="stat-card">
                    <h3>Monthly Passes</h3>
                    <p className="stat-number">8,450</p>
                </div>
                <div className="stat-card">
                    <h3>Student Passes</h3>
                    <p className="stat-number">3,200</p>
                </div>
                <div className="stat-card">
                    <h3>Senior Citizen Passes</h3>
                    <p className="stat-number">1,890</p>
                </div>
            </div>
            
            <div className="passenger-demographics">
                <h3>Passenger Demographics</h3>
                <div className="demographics-chart">
                    <div className="demo-item">
                        <span>Students</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '35%'}}></div>
                        </div>
                        <span>35%</span>
                    </div>
                    <div className="demo-item">
                        <span>Working Professionals</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '45%'}}></div>
                        </div>
                        <span>45%</span>
                    </div>
                    <div className="demo-item">
                        <span>Senior Citizens</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '12%'}}></div>
                        </div>
                        <span>12%</span>
                    </div>
                    <div className="demo-item">
                        <span>Others</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '8%'}}></div>
                        </div>
                        <span>8%</span>
                    </div>
                </div>
            </div>
            
            <div className="passenger-feedback">
                <h3>Passenger Feedback</h3>
                <div className="feedback-stats">
                    <div className="feedback-item">
                        <span>Service Quality</span>
                        <span className="rating">4.2/5</span>
                    </div>
                    <div className="feedback-item">
                        <span>Punctuality</span>
                        <span className="rating">3.8/5</span>
                    </div>
                    <div className="feedback-item">
                        <span>Cleanliness</span>
                        <span className="rating">4.0/5</span>
                    </div>
                    <div className="feedback-item">
                        <span>Staff Behavior</span>
                        <span className="rating">4.3/5</span>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="department-dashboard">
            <div className="dashboard-header">
                <h1><i className="fas fa-bus"></i> Public Transport Department</h1>
                <p>City bus services, route management, and passenger transportation</p>
            </div>

            <div className="dashboard-tabs">
                <button 
                    className={activeTab === 'overview' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('overview')}
                >
                    <i className="fas fa-tachometer-alt"></i> Overview
                </button>
                <button 
                    className={activeTab === 'fleet' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('fleet')}
                >
                    <i className="fas fa-bus"></i> Fleet Management
                </button>
                <button 
                    className={activeTab === 'routes' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('routes')}
                >
                    <i className="fas fa-route"></i> Route Management
                </button>
                <button 
                    className={activeTab === 'passengers' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('passengers')}
                >
                    <i className="fas fa-users"></i> Passenger Analytics
                </button>
            </div>

            <div className="dashboard-content">
                {activeTab === 'overview' && renderOverviewTab()}
                {activeTab === 'fleet' && renderFleetTab()}
                {activeTab === 'routes' && renderRoutesTab()}
                {activeTab === 'passengers' && renderPassengersTab()}
            </div>
        </div>
    );
};

export default PublicTransportDashboard;