import React, { useState, useEffect } from 'react';
import '../../../styles/dashboard.css';
import '../../../styles/environment-department.css';

const EnvironmentProtectionDashboard = () => {
    const [activeTab, setActiveTab] = useState('monitoring');
    const [stats, setStats] = useState({
        airQualityIndex: 85,
        pollutionLevel: 'Moderate',
        greenCover: '32%',
        wasteRecycled: '68%',
        carbonFootprint: '2.3M tons',
        renewableEnergy: '15%'
    });

    const [monitoringStations, setMonitoringStations] = useState([
        { id: 'AQM001', location: 'City Center', aqi: 95, status: 'Moderate', pm25: 45, pm10: 78 },
        { id: 'AQM002', location: 'Industrial Area', aqi: 125, status: 'Unhealthy', pm25: 68, pm10: 95 },
        { id: 'AQM003', location: 'Residential Zone', aqi: 65, status: 'Good', pm25: 28, pm10: 52 }
    ]);

    const renderMonitoringTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Air Quality Index</h3>
                    <p className={`stat-number aqi-${getAQICategory(stats.airQualityIndex)}`}>{stats.airQualityIndex}</p>
                    <small>{stats.pollutionLevel}</small>
                </div>
                <div className="stat-card">
                    <h3>Monitoring Stations</h3>
                    <p className="stat-number">12</p>
                </div>
                <div className="stat-card">
                    <h3>Green Cover</h3>
                    <p className="stat-number">{stats.greenCover}</p>
                </div>
                <div className="stat-card">
                    <h3>Carbon Footprint</h3>
                    <p className="stat-number">{stats.carbonFootprint}</p>
                </div>
            </div>
            
            <div className="air-quality-map">
                <h3>Air Quality Monitoring Stations</h3>
                <div className="monitoring-grid">
                    {monitoringStations.map(station => (
                        <div key={station.id} className="monitoring-station">
                            <h4>{station.location}</h4>
                            <div className="aqi-display">
                                <span className={`aqi-value ${getAQICategory(station.aqi)}`}>{station.aqi}</span>
                                <span className="aqi-status">{station.status}</span>
                            </div>
                            <div className="pollutant-levels">
                                <div className="pollutant">
                                    <span>PM2.5</span>
                                    <span className="value">{station.pm25} μg/m³</span>
                                </div>
                                <div className="pollutant">
                                    <span>PM10</span>
                                    <span className="value">{station.pm10} μg/m³</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="pollution-trends">
                <h3>Pollution Trends</h3>
                <div className="trend-indicators">
                    <div className="trend-item">
                        <i className="fas fa-arrow-down text-green"></i>
                        <span>PM2.5 levels decreased by 12% this month</span>
                    </div>
                    <div className="trend-item">
                        <i className="fas fa-arrow-up text-red"></i>
                        <span>Ozone levels increased by 8% this week</span>
                    </div>
                    <div className="trend-item">
                        <i className="fas fa-minus text-yellow"></i>
                        <span>NO2 levels remain stable</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderPollutionTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Pollution Sources</h3>
                    <p className="stat-number">156</p>
                </div>
                <div className="stat-card">
                    <h3>Violations</h3>
                    <p className="stat-number">23</p>
                </div>
                <div className="stat-card">
                    <h3>Penalties Issued</h3>
                    <p className="stat-number">₹12.5L</p>
                </div>
                <div className="stat-card">
                    <h3>Compliance Rate</h3>
                    <p className="stat-number">78%</p>
                </div>
            </div>
            
            <div className="pollution-sources">
                <h3>Major Pollution Sources</h3>
                <div className="source-breakdown">
                    <div className="source-item">
                        <span>Vehicle Emissions</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '45%'}}></div>
                        </div>
                        <span>45%</span>
                    </div>
                    <div className="source-item">
                        <span>Industrial Emissions</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '30%'}}></div>
                        </div>
                        <span>30%</span>
                    </div>
                    <div className="source-item">
                        <span>Construction Dust</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '15%'}}></div>
                        </div>
                        <span>15%</span>
                    </div>
                    <div className="source-item">
                        <span>Waste Burning</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '10%'}}></div>
                        </div>
                        <span>10%</span>
                    </div>
                </div>
            </div>
            
            <div className="violation-tracking">
                <h3>Recent Violations</h3>
                <div className="violation-list">
                    <div className="violation-item">
                        <h4>Industrial Unit - Sector 25</h4>
                        <p>Exceeded emission limits for SO2</p>
                        <span className="penalty">Penalty: ₹50,000</span>
                        <span className="status pending">Pending</span>
                    </div>
                    <div className="violation-item">
                        <h4>Construction Site - MG Road</h4>
                        <p>Dust pollution without proper measures</p>
                        <span className="penalty">Penalty: ₹25,000</span>
                        <span className="status resolved">Resolved</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderGreenTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Tree Cover</h3>
                    <p className="stat-number">{stats.greenCover}</p>
                </div>
                <div className="stat-card">
                    <h3>Trees Planted</h3>
                    <p className="stat-number">2,450</p>
                </div>
                <div className="stat-card">
                    <h3>Parks & Gardens</h3>
                    <p className="stat-number">45</p>
                </div>
                <div className="stat-card">
                    <h3>Green Buildings</h3>
                    <p className="stat-number">89</p>
                </div>
            </div>
            
            <div className="green-initiatives">
                <h3>Green City Initiatives</h3>
                <div className="initiative-grid">
                    <div className="initiative-item">
                        <i className="fas fa-tree"></i>
                        <h4>Urban Forestry Program</h4>
                        <p>Plant 10,000 trees across the city</p>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '65%'}}></div>
                        </div>
                        <span>65% Complete</span>
                    </div>
                    <div className="initiative-item">
                        <i className="fas fa-solar-panel"></i>
                        <h4>Solar Energy Adoption</h4>
                        <p>Install solar panels on government buildings</p>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '40%'}}></div>
                        </div>
                        <span>40% Complete</span>
                    </div>
                    <div className="initiative-item">
                        <i className="fas fa-recycle"></i>
                        <h4>Waste Segregation Drive</h4>
                        <p>Implement waste segregation in all areas</p>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '78%'}}></div>
                        </div>
                        <span>78% Complete</span>
                    </div>
                </div>
            </div>
            
            <div className="biodiversity-conservation">
                <h3>Biodiversity Conservation</h3>
                <div className="conservation-stats">
                    <div className="conservation-item">
                        <span>Protected Areas</span>
                        <span className="count">8 zones</span>
                    </div>
                    <div className="conservation-item">
                        <span>Wildlife Corridors</span>
                        <span className="count">3 corridors</span>
                    </div>
                    <div className="conservation-item">
                        <span>Water Bodies</span>
                        <span className="count">12 restored</span>
                    </div>
                    <div className="conservation-item">
                        <span>Native Species</span>
                        <span className="count">156 protected</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderSustainabilityTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Renewable Energy</h3>
                    <p className="stat-number">{stats.renewableEnergy}</p>
                </div>
                <div className="stat-card">
                    <h3>Waste Recycled</h3>
                    <p className="stat-number">{stats.wasteRecycled}</p>
                </div>
                <div className="stat-card">
                    <h3>Water Conservation</h3>
                    <p className="stat-number">25%</p>
                </div>
                <div className="stat-card">
                    <h3>Energy Efficiency</h3>
                    <p className="stat-number">18%</p>
                </div>
            </div>
            
            <div className="sustainability-metrics">
                <h3>Sustainability Metrics</h3>
                <div className="metrics-grid">
                    <div className="metric-item">
                        <h4>Carbon Emission Reduction</h4>
                        <div className="metric-value">
                            <span className="number">12%</span>
                            <span className="trend positive">↓</span>
                        </div>
                        <p>Compared to last year</p>
                    </div>
                    <div className="metric-item">
                        <h4>Renewable Energy Usage</h4>
                        <div className="metric-value">
                            <span className="number">15%</span>
                            <span className="trend positive">↑</span>
                        </div>
                        <p>Of total energy consumption</p>
                    </div>
                    <div className="metric-item">
                        <h4>Waste Diversion Rate</h4>
                        <div className="metric-value">
                            <span className="number">68%</span>
                            <span className="trend positive">↑</span>
                        </div>
                        <p>From landfills</p>
                    </div>
                </div>
            </div>
            
            <div className="environmental-goals">
                <h3>Environmental Goals 2024</h3>
                <div className="goals-list">
                    <div className="goal-item">
                        <span className="goal-icon">🌱</span>
                        <span className="goal-text">Achieve 35% green cover by end of year</span>
                        <span className="goal-progress">Progress: 32%</span>
                    </div>
                    <div className="goal-item">
                        <span className="goal-icon">♻️</span>
                        <span className="goal-text">Increase waste recycling to 75%</span>
                        <span className="goal-progress">Progress: 68%</span>
                    </div>
                    <div className="goal-item">
                        <span className="goal-icon">⚡</span>
                        <span className="goal-text">Reach 20% renewable energy usage</span>
                        <span className="goal-progress">Progress: 15%</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const getAQICategory = (aqi) => {
        if (aqi <= 50) return 'good';
        if (aqi <= 100) return 'moderate';
        if (aqi <= 150) return 'unhealthy-sensitive';
        if (aqi <= 200) return 'unhealthy';
        if (aqi <= 300) return 'very-unhealthy';
        return 'hazardous';
    };

    return (
        <div className="department-dashboard">
            <div className="dashboard-header">
                <h1><i className="fas fa-leaf"></i> Environment Protection Department</h1>
                <p>Environmental monitoring, pollution control, and sustainability initiatives</p>
            </div>

            <div className="dashboard-tabs">
                <button 
                    className={activeTab === 'monitoring' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('monitoring')}
                >
                    <i className="fas fa-chart-line"></i> Environmental Monitoring
                </button>
                <button 
                    className={activeTab === 'pollution' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('pollution')}
                >
                    <i className="fas fa-smog"></i> Pollution Control
                </button>
                <button 
                    className={activeTab === 'green' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('green')}
                >
                    <i className="fas fa-tree"></i> Green Initiatives
                </button>
                <button 
                    className={activeTab === 'sustainability' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('sustainability')}
                >
                    <i className="fas fa-recycle"></i> Sustainability
                </button>
            </div>

            <div className="dashboard-content">
                {activeTab === 'monitoring' && renderMonitoringTab()}
                {activeTab === 'pollution' && renderPollutionTab()}
                {activeTab === 'green' && renderGreenTab()}
                {activeTab === 'sustainability' && renderSustainabilityTab()}
            </div>
        </div>
    );
};

export default EnvironmentProtectionDashboard;