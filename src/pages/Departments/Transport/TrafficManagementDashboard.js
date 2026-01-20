import React, { useState, useEffect } from 'react';
import '../../../styles/dashboard.css';
import '../../../styles/transport-department.css';

const TrafficManagementDashboard = () => {
    const [activeTab, setActiveTab] = useState('signals');
    const [stats, setStats] = useState({
        totalSignals: 245,
        activeSignals: 238,
        avgWaitTime: '45 sec',
        trafficFlow: '87%',
        congestionLevel: 'Moderate',
        smartSignals: 156
    });

    const [signals, setSignals] = useState([
        { id: 'TL001', location: 'Main Street & 1st Ave', status: 'Active', mode: 'Smart', waitTime: '35 sec' },
        { id: 'TL002', location: 'Central Square', status: 'Active', mode: 'Manual', waitTime: '52 sec' },
        { id: 'TL003', location: 'Highway Junction', status: 'Maintenance', mode: 'Smart', waitTime: 'N/A' }
    ]);

    const renderSignalsTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Total Signals</h3>
                    <p className="stat-number">{stats.totalSignals}</p>
                </div>
                <div className="stat-card">
                    <h3>Active Signals</h3>
                    <p className="stat-number">{stats.activeSignals}</p>
                </div>
                <div className="stat-card">
                    <h3>Smart Signals</h3>
                    <p className="stat-number">{stats.smartSignals}</p>
                </div>
                <div className="stat-card">
                    <h3>Avg Wait Time</h3>
                    <p className="stat-number">{stats.avgWaitTime}</p>
                </div>
            </div>
            
            <div className="data-table">
                <h3>Traffic Signal Status</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Signal ID</th>
                            <th>Location</th>
                            <th>Status</th>
                            <th>Mode</th>
                            <th>Wait Time</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {signals.map(signal => (
                            <tr key={signal.id}>
                                <td>{signal.id}</td>
                                <td>{signal.location}</td>
                                <td><span className={`status ${signal.status.toLowerCase()}`}>{signal.status}</span></td>
                                <td>{signal.mode}</td>
                                <td>{signal.waitTime}</td>
                                <td>
                                    <button className="btn-small">Control</button>
                                    <button className="btn-small">Monitor</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <div className="signal-performance">
                <h3>Signal Performance Metrics</h3>
                <div className="performance-grid">
                    <div className="perf-item">
                        <span>Uptime</span>
                        <span className="value">99.2%</span>
                    </div>
                    <div className="perf-item">
                        <span>Response Time</span>
                        <span className="value">2.3 sec</span>
                    </div>
                    <div className="perf-item">
                        <span>Efficiency</span>
                        <span className="value">87%</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderFlowTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Traffic Flow</h3>
                    <p className="stat-number">{stats.trafficFlow}</p>
                </div>
                <div className="stat-card">
                    <h3>Peak Hour Volume</h3>
                    <p className="stat-number">15,600</p>
                </div>
                <div className="stat-card">
                    <h3>Average Speed</h3>
                    <p className="stat-number">35 km/h</p>
                </div>
                <div className="stat-card">
                    <h3>Congestion Level</h3>
                    <p className="stat-number">{stats.congestionLevel}</p>
                </div>
            </div>
            
            <div className="flow-analysis">
                <h3>Traffic Flow Analysis</h3>
                <div className="flow-routes">
                    <div className="route-item">
                        <h4>Main Arterial Roads</h4>
                        <div className="flow-meter">
                            <div className="flow-bar" style={{width: '85%'}}></div>
                        </div>
                        <span className="flow-status good">Good Flow</span>
                    </div>
                    <div className="route-item">
                        <h4>Secondary Roads</h4>
                        <div className="flow-meter">
                            <div className="flow-bar" style={{width: '65%'}}></div>
                        </div>
                        <span className="flow-status moderate">Moderate Flow</span>
                    </div>
                    <div className="route-item">
                        <h4>City Center</h4>
                        <div className="flow-meter">
                            <div className="flow-bar" style={{width: '45%'}}></div>
                        </div>
                        <span className="flow-status congested">Congested</span>
                    </div>
                </div>
            </div>
            
            <div className="peak-hours">
                <h3>Peak Hour Analysis</h3>
                <div className="peak-stats">
                    <div className="peak-item">
                        <span>Morning Peak (8-10 AM)</span>
                        <span className="volume">12,500 vehicles/hour</span>
                    </div>
                    <div className="peak-item">
                        <span>Evening Peak (6-8 PM)</span>
                        <span className="volume">15,600 vehicles/hour</span>
                    </div>
                    <div className="peak-item">
                        <span>Off-Peak Average</span>
                        <span className="volume">6,800 vehicles/hour</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderCongestionTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Congestion Index</h3>
                    <p className="stat-number">2.3</p>
                </div>
                <div className="stat-card">
                    <h3>Bottleneck Points</h3>
                    <p className="stat-number">12</p>
                </div>
                <div className="stat-card">
                    <h3>Delay Time</h3>
                    <p className="stat-number">8.5 min</p>
                </div>
                <div className="stat-card">
                    <h3>Fuel Wastage</h3>
                    <p className="stat-number">15%</p>
                </div>
            </div>
            
            <div className="congestion-hotspots">
                <h3>Congestion Hotspots</h3>
                <div className="hotspot-list">
                    <div className="hotspot-item high">
                        <h4>Central Business District</h4>
                        <p>High congestion during business hours</p>
                        <span className="severity high">High</span>
                    </div>
                    <div className="hotspot-item medium">
                        <h4>School Zone - Sector 15</h4>
                        <p>Congestion during school hours</p>
                        <span className="severity medium">Medium</span>
                    </div>
                    <div className="hotspot-item low">
                        <h4>Market Area</h4>
                        <p>Weekend congestion</p>
                        <span className="severity low">Low</span>
                    </div>
                </div>
            </div>
            
            <div className="mitigation-measures">
                <h3>Congestion Mitigation</h3>
                <div className="measure-list">
                    <div className="measure-item">
                        <i className="fas fa-route"></i>
                        <span>Alternative Route Suggestions</span>
                        <span className="status active">Active</span>
                    </div>
                    <div className="measure-item">
                        <i className="fas fa-clock"></i>
                        <span>Dynamic Signal Timing</span>
                        <span className="status active">Active</span>
                    </div>
                    <div className="measure-item">
                        <i className="fas fa-mobile-alt"></i>
                        <span>Real-time Traffic Updates</span>
                        <span className="status active">Active</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderOptimizationTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Optimization Score</h3>
                    <p className="stat-number">87%</p>
                </div>
                <div className="stat-card">
                    <h3>Time Saved</h3>
                    <p className="stat-number">12 min</p>
                </div>
                <div className="stat-card">
                    <h3>Fuel Saved</h3>
                    <p className="stat-number">18%</p>
                </div>
                <div className="stat-card">
                    <h3>Emission Reduction</h3>
                    <p className="stat-number">22%</p>
                </div>
            </div>
            
            <div className="optimization-strategies">
                <h3>Traffic Optimization Strategies</h3>
                <div className="strategy-grid">
                    <div className="strategy-item">
                        <i className="fas fa-brain"></i>
                        <h4>AI-Powered Signal Control</h4>
                        <p>Machine learning algorithms optimize signal timing</p>
                        <span className="implementation">78% implemented</span>
                    </div>
                    <div className="strategy-item">
                        <i className="fas fa-network-wired"></i>
                        <h4>Coordinated Signal Network</h4>
                        <p>Synchronized signals for smooth traffic flow</p>
                        <span className="implementation">65% implemented</span>
                    </div>
                    <div className="strategy-item">
                        <i className="fas fa-chart-line"></i>
                        <h4>Predictive Analytics</h4>
                        <p>Forecast traffic patterns and adjust accordingly</p>
                        <span className="implementation">45% implemented</span>
                    </div>
                </div>
            </div>
            
            <div className="performance-improvements">
                <h3>Performance Improvements</h3>
                <div className="improvement-metrics">
                    <div className="metric-item">
                        <span>Travel Time Reduction</span>
                        <span className="improvement positive">-15%</span>
                    </div>
                    <div className="metric-item">
                        <span>Queue Length Reduction</span>
                        <span className="improvement positive">-25%</span>
                    </div>
                    <div className="metric-item">
                        <span>Stop Frequency Reduction</span>
                        <span className="improvement positive">-18%</span>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="department-dashboard">
            <div className="dashboard-header">
                <h1><i className="fas fa-traffic-light"></i> Traffic Management Department</h1>
                <p>Intelligent traffic control and flow optimization systems</p>
            </div>

            <div className="dashboard-tabs">
                <button 
                    className={activeTab === 'signals' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('signals')}
                >
                    <i className="fas fa-traffic-light"></i> Traffic Signals
                </button>
                <button 
                    className={activeTab === 'flow' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('flow')}
                >
                    <i className="fas fa-stream"></i> Traffic Flow
                </button>
                <button 
                    className={activeTab === 'congestion' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('congestion')}
                >
                    <i className="fas fa-exclamation-triangle"></i> Congestion Management
                </button>
                <button 
                    className={activeTab === 'optimization' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('optimization')}
                >
                    <i className="fas fa-cogs"></i> Optimization
                </button>
            </div>

            <div className="dashboard-content">
                {activeTab === 'signals' && renderSignalsTab()}
                {activeTab === 'flow' && renderFlowTab()}
                {activeTab === 'congestion' && renderCongestionTab()}
                {activeTab === 'optimization' && renderOptimizationTab()}
            </div>
        </div>
    );
};

export default TrafficManagementDashboard;