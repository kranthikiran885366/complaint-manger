import React, { useState, useEffect } from 'react';
import '../../../styles/dashboard.css';
import '../../../styles/transport-department.css';

const ParkingManagementDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [stats, setStats] = useState({
        totalSpaces: 12500,
        occupiedSpaces: 8750,
        availableSpaces: 3750,
        occupancyRate: '70%',
        dailyRevenue: '₹2.8 L',
        smartParkingZones: 45
    });

    const [parkingZones, setParkingZones] = useState([
        { id: 'PZ001', name: 'Central Business District', total: 2500, occupied: 2100, rate: '₹20/hr', type: 'Premium' },
        { id: 'PZ002', name: 'Shopping Mall Area', total: 1800, occupied: 1350, rate: '₹15/hr', type: 'Commercial' },
        { id: 'PZ003', name: 'Residential Zone A', total: 1200, occupied: 720, rate: '₹10/hr', type: 'Residential' }
    ]);

    const renderOverviewTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Total Spaces</h3>
                    <p className="stat-number">{stats.totalSpaces.toLocaleString()}</p>
                </div>
                <div className="stat-card">
                    <h3>Occupied</h3>
                    <p className="stat-number">{stats.occupiedSpaces.toLocaleString()}</p>
                </div>
                <div className="stat-card">
                    <h3>Available</h3>
                    <p className="stat-number">{stats.availableSpaces.toLocaleString()}</p>
                </div>
                <div className="stat-card">
                    <h3>Occupancy Rate</h3>
                    <p className="stat-number">{stats.occupancyRate}</p>
                </div>
            </div>
            
            <div className="parking-overview">
                <h3>Parking Zone Distribution</h3>
                <div className="zone-breakdown">
                    <div className="zone-item">
                        <span>Premium Zones</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '35%'}}></div>
                        </div>
                        <span>35% (4,375 spaces)</span>
                    </div>
                    <div className="zone-item">
                        <span>Commercial Zones</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '40%'}}></div>
                        </div>
                        <span>40% (5,000 spaces)</span>
                    </div>
                    <div className="zone-item">
                        <span>Residential Zones</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '25%'}}></div>
                        </div>
                        <span>25% (3,125 spaces)</span>
                    </div>
                </div>
            </div>
            
            <div className="occupancy-trends">
                <h3>Daily Occupancy Trends</h3>
                <div className="trend-chart">
                    <div className="time-slots">
                        <div className="slot-item">
                            <span>6-9 AM</span>
                            <div className="occupancy-bar" style={{height: '45%'}}></div>
                            <span>45%</span>
                        </div>
                        <div className="slot-item">
                            <span>9-12 PM</span>
                            <div className="occupancy-bar" style={{height: '85%'}}></div>
                            <span>85%</span>
                        </div>
                        <div className="slot-item">
                            <span>12-3 PM</span>
                            <div className="occupancy-bar" style={{height: '95%'}}></div>
                            <span>95%</span>
                        </div>
                        <div className="slot-item">
                            <span>3-6 PM</span>
                            <div className="occupancy-bar" style={{height: '78%'}}></div>
                            <span>78%</span>
                        </div>
                        <div className="slot-item">
                            <span>6-9 PM</span>
                            <div className="occupancy-bar" style={{height: '65%'}}></div>
                            <span>65%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderZonesTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Parking Zones</h3>
                    <p className="stat-number">156</p>
                </div>
                <div className="stat-card">
                    <h3>Smart Zones</h3>
                    <p className="stat-number">{stats.smartParkingZones}</p>
                </div>
                <div className="stat-card">
                    <h3>Premium Zones</h3>
                    <p className="stat-number">25</p>
                </div>
                <div className="stat-card">
                    <h3>Free Zones</h3>
                    <p className="stat-number">12</p>
                </div>
            </div>
            
            <div className="data-table">
                <h3>Parking Zone Status</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Zone ID</th>
                            <th>Zone Name</th>
                            <th>Total Spaces</th>
                            <th>Occupied</th>
                            <th>Rate</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parkingZones.map(zone => (
                            <tr key={zone.id}>
                                <td>{zone.id}</td>
                                <td>{zone.name}</td>
                                <td>{zone.total}</td>
                                <td>{zone.occupied}</td>
                                <td>{zone.rate}</td>
                                <td><span className={`type ${zone.type.toLowerCase()}`}>{zone.type}</span></td>
                                <td>
                                    <button className="btn-small">Monitor</button>
                                    <button className="btn-small">Manage</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <div className="zone-performance">
                <h3>Zone Performance Metrics</h3>
                <div className="performance-grid">
                    <div className="perf-item">
                        <span>Average Turnover</span>
                        <span className="value">4.2 times/day</span>
                    </div>
                    <div className="perf-item">
                        <span>Peak Utilization</span>
                        <span className="value">95%</span>
                    </div>
                    <div className="perf-item">
                        <span>Revenue per Space</span>
                        <span className="value">₹180/day</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderRevenueTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Daily Revenue</h3>
                    <p className="stat-number">{stats.dailyRevenue}</p>
                </div>
                <div className="stat-card">
                    <h3>Monthly Revenue</h3>
                    <p className="stat-number">₹78 L</p>
                </div>
                <div className="stat-card">
                    <h3>Collection Rate</h3>
                    <p className="stat-number">94%</p>
                </div>
                <div className="stat-card">
                    <h3>Digital Payments</h3>
                    <p className="stat-number">87%</p>
                </div>
            </div>
            
            <div className="revenue-breakdown">
                <h3>Revenue by Zone Type</h3>
                <div className="revenue-chart">
                    <div className="revenue-item">
                        <span>Premium Zones</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '55%'}}></div>
                        </div>
                        <span>55% (₹1.54 L)</span>
                    </div>
                    <div className="revenue-item">
                        <span>Commercial Zones</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '35%'}}></div>
                        </div>
                        <span>35% (₹98 K)</span>
                    </div>
                    <div className="revenue-item">
                        <span>Residential Zones</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '10%'}}></div>
                        </div>
                        <span>10% (₹28 K)</span>
                    </div>
                </div>
            </div>
            
            <div className="payment-methods">
                <h3>Payment Method Distribution</h3>
                <div className="payment-stats">
                    <div className="payment-item">
                        <i className="fas fa-mobile-alt"></i>
                        <span>Mobile Apps</span>
                        <span className="percentage">45%</span>
                    </div>
                    <div className="payment-item">
                        <i className="fas fa-credit-card"></i>
                        <span>Card Payments</span>
                        <span className="percentage">32%</span>
                    </div>
                    <div className="payment-item">
                        <i className="fas fa-qrcode"></i>
                        <span>QR Code</span>
                        <span className="percentage">10%</span>
                    </div>
                    <div className="payment-item">
                        <i className="fas fa-money-bill"></i>
                        <span>Cash</span>
                        <span className="percentage">13%</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderSmartParkingTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Smart Sensors</h3>
                    <p className="stat-number">5,600</p>
                </div>
                <div className="stat-card">
                    <h3>Mobile App Users</h3>
                    <p className="stat-number">25,400</p>
                </div>
                <div className="stat-card">
                    <h3>Automated Gates</h3>
                    <p className="stat-number">89</p>
                </div>
                <div className="stat-card">
                    <h3>System Uptime</h3>
                    <p className="stat-number">99.2%</p>
                </div>
            </div>
            
            <div className="smart-features">
                <h3>Smart Parking Features</h3>
                <div className="features-grid">
                    <div className="feature-item">
                        <i className="fas fa-search"></i>
                        <h4>Real-time Space Detection</h4>
                        <p>IoT sensors detect available parking spaces</p>
                        <span className="status active">Active</span>
                    </div>
                    <div className="feature-item">
                        <i className="fas fa-route"></i>
                        <h4>Navigation Assistance</h4>
                        <p>Guide drivers to nearest available space</p>
                        <span className="status active">Active</span>
                    </div>
                    <div className="feature-item">
                        <i className="fas fa-mobile-alt"></i>
                        <h4>Mobile Reservations</h4>
                        <p>Pre-book parking spaces through app</p>
                        <span className="status active">Active</span>
                    </div>
                    <div className="feature-item">
                        <i className="fas fa-credit-card"></i>
                        <h4>Contactless Payments</h4>
                        <p>Digital payment integration</p>
                        <span className="status active">Active</span>
                    </div>
                </div>
            </div>
            
            <div className="technology-stats">
                <h3>Technology Adoption</h3>
                <div className="tech-metrics">
                    <div className="tech-item">
                        <span>Sensor Coverage</span>
                        <span className="coverage">78%</span>
                    </div>
                    <div className="tech-item">
                        <span>App Adoption Rate</span>
                        <span className="coverage">65%</span>
                    </div>
                    <div className="tech-item">
                        <span>Automated Payment</span>
                        <span className="coverage">87%</span>
                    </div>
                    <div className="tech-item">
                        <span>Data Accuracy</span>
                        <span className="coverage">96%</span>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="department-dashboard">
            <div className="dashboard-header">
                <h1><i className="fas fa-parking"></i> Parking Management Department</h1>
                <p>Smart parking solutions and space optimization systems</p>
            </div>

            <div className="dashboard-tabs">
                <button 
                    className={activeTab === 'overview' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('overview')}
                >
                    <i className="fas fa-chart-pie"></i> Overview
                </button>
                <button 
                    className={activeTab === 'zones' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('zones')}
                >
                    <i className="fas fa-map-marked-alt"></i> Parking Zones
                </button>
                <button 
                    className={activeTab === 'revenue' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('revenue')}
                >
                    <i className="fas fa-coins"></i> Revenue Management
                </button>
                <button 
                    className={activeTab === 'smart' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('smart')}
                >
                    <i className="fas fa-brain"></i> Smart Parking
                </button>
            </div>

            <div className="dashboard-content">
                {activeTab === 'overview' && renderOverviewTab()}
                {activeTab === 'zones' && renderZonesTab()}
                {activeTab === 'revenue' && renderRevenueTab()}
                {activeTab === 'smart' && renderSmartParkingTab()}
            </div>
        </div>
    );
};

export default ParkingManagementDashboard;