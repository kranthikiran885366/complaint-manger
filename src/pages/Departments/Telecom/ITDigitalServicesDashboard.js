import React, { useState, useEffect } from 'react';
import '../../../styles/dashboard.css';
import '../../../styles/telecom-department.css';

const ITDigitalServicesDashboard = () => {
    const [activeTab, setActiveTab] = useState('infrastructure');
    const [stats, setStats] = useState({
        totalServers: 156,
        systemUptime: '99.8%',
        digitalServices: 45,
        onlineTransactions: 25600,
        dataStorage: '2.5 TB',
        securityIncidents: 3
    });

    const [services, setServices] = useState([
        { id: 'DS001', name: 'Online Bill Payment', users: 15600, uptime: '99.9%', status: 'Active' },
        { id: 'DS002', name: 'Digital Certificate', users: 8900, uptime: '99.5%', status: 'Active' },
        { id: 'DS003', name: 'E-Governance Portal', users: 12400, uptime: '99.7%', status: 'Active' }
    ]);

    const renderInfrastructureTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Total Servers</h3>
                    <p className="stat-number">{stats.totalServers}</p>
                </div>
                <div className="stat-card">
                    <h3>System Uptime</h3>
                    <p className="stat-number">{stats.systemUptime}</p>
                </div>
                <div className="stat-card">
                    <h3>Data Storage</h3>
                    <p className="stat-number">{stats.dataStorage}</p>
                </div>
                <div className="stat-card">
                    <h3>Network Speed</h3>
                    <p className="stat-number">1 Gbps</p>
                </div>
            </div>
            
            <div className="infrastructure-overview">
                <h3>IT Infrastructure Status</h3>
                <div className="infra-grid">
                    <div className="infra-item">
                        <i className="fas fa-server"></i>
                        <h4>Data Centers</h4>
                        <p>3 Primary, 2 Backup</p>
                        <span className="status operational">Operational</span>
                    </div>
                    <div className="infra-item">
                        <i className="fas fa-network-wired"></i>
                        <h4>Network Infrastructure</h4>
                        <p>Fiber optic backbone</p>
                        <span className="status operational">Operational</span>
                    </div>
                    <div className="infra-item">
                        <i className="fas fa-shield-alt"></i>
                        <h4>Security Systems</h4>
                        <p>Multi-layer protection</p>
                        <span className="status operational">Operational</span>
                    </div>
                    <div className="infra-item">
                        <i className="fas fa-cloud"></i>
                        <h4>Cloud Services</h4>
                        <p>Hybrid cloud setup</p>
                        <span className="status operational">Operational</span>
                    </div>
                </div>
            </div>
            
            <div className="performance-metrics">
                <h3>Performance Metrics</h3>
                <div className="metrics-grid">
                    <div className="metric-item">
                        <span>CPU Utilization</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '65%'}}></div>
                        </div>
                        <span>65%</span>
                    </div>
                    <div className="metric-item">
                        <span>Memory Usage</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '72%'}}></div>
                        </div>
                        <span>72%</span>
                    </div>
                    <div className="metric-item">
                        <span>Storage Usage</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '58%'}}></div>
                        </div>
                        <span>58%</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderDigitalServicesTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Digital Services</h3>
                    <p className="stat-number">{stats.digitalServices}</p>
                </div>
                <div className="stat-card">
                    <h3>Daily Transactions</h3>
                    <p className="stat-number">{stats.onlineTransactions.toLocaleString()}</p>
                </div>
                <div className="stat-card">
                    <h3>Active Users</h3>
                    <p className="stat-number">45,600</p>
                </div>
                <div className="stat-card">
                    <h3>Service Availability</h3>
                    <p className="stat-number">99.6%</p>
                </div>
            </div>
            
            <div className="data-table">
                <h3>Digital Service Status</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Service ID</th>
                            <th>Service Name</th>
                            <th>Active Users</th>
                            <th>Uptime</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map(service => (
                            <tr key={service.id}>
                                <td>{service.id}</td>
                                <td>{service.name}</td>
                                <td>{service.users.toLocaleString()}</td>
                                <td>{service.uptime}</td>
                                <td><span className={`status ${service.status.toLowerCase()}`}>{service.status}</span></td>
                                <td>
                                    <button className="btn-small">Monitor</button>
                                    <button className="btn-small">Manage</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <div className="service-categories">
                <h3>Service Categories</h3>
                <div className="category-stats">
                    <div className="category-item">
                        <span>E-Governance</span>
                        <span className="count">15 services</span>
                    </div>
                    <div className="category-item">
                        <span>Citizen Services</span>
                        <span className="count">18 services</span>
                    </div>
                    <div className="category-item">
                        <span>Business Services</span>
                        <span className="count">12 services</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderSecurityTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Security Incidents</h3>
                    <p className="stat-number">{stats.securityIncidents}</p>
                    <small>This Month</small>
                </div>
                <div className="stat-card">
                    <h3>Threat Detection</h3>
                    <p className="stat-number">99.9%</p>
                </div>
                <div className="stat-card">
                    <h3>Data Breaches</h3>
                    <p className="stat-number">0</p>
                    <small>This Year</small>
                </div>
                <div className="stat-card">
                    <h3>Security Score</h3>
                    <p className="stat-number">A+</p>
                </div>
            </div>
            
            <div className="security-measures">
                <h3>Security Measures</h3>
                <div className="security-grid">
                    <div className="security-item">
                        <i className="fas fa-lock"></i>
                        <h4>Data Encryption</h4>
                        <p>256-bit AES encryption</p>
                        <span className="status active">Active</span>
                    </div>
                    <div className="security-item">
                        <i className="fas fa-user-shield"></i>
                        <h4>Multi-Factor Authentication</h4>
                        <p>Two-factor authentication</p>
                        <span className="status active">Active</span>
                    </div>
                    <div className="security-item">
                        <i className="fas fa-eye"></i>
                        <h4>24/7 Monitoring</h4>
                        <p>Real-time threat monitoring</p>
                        <span className="status active">Active</span>
                    </div>
                    <div className="security-item">
                        <i className="fas fa-backup"></i>
                        <h4>Data Backup</h4>
                        <p>Automated daily backups</p>
                        <span className="status active">Active</span>
                    </div>
                </div>
            </div>
            
            <div className="threat-analysis">
                <h3>Threat Analysis</h3>
                <div className="threat-stats">
                    <div className="threat-item">
                        <span>Malware Attempts</span>
                        <span className="count blocked">156 Blocked</span>
                    </div>
                    <div className="threat-item">
                        <span>Phishing Attempts</span>
                        <span className="count blocked">89 Blocked</span>
                    </div>
                    <div className="threat-item">
                        <span>DDoS Attacks</span>
                        <span className="count blocked">12 Mitigated</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderSupportTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Support Tickets</h3>
                    <p className="stat-number">156</p>
                    <small>This Month</small>
                </div>
                <div className="stat-card">
                    <h3>Resolution Time</h3>
                    <p className="stat-number">2.5 hrs</p>
                    <small>Average</small>
                </div>
                <div className="stat-card">
                    <h3>Satisfaction Rate</h3>
                    <p className="stat-number">94%</p>
                </div>
                <div className="stat-card">
                    <h3>First Call Resolution</h3>
                    <p className="stat-number">78%</p>
                </div>
            </div>
            
            <div className="support-channels">
                <h3>Support Channels</h3>
                <div className="channel-stats">
                    <div className="channel-item">
                        <i className="fas fa-phone"></i>
                        <span>Phone Support</span>
                        <span className="availability">24/7</span>
                    </div>
                    <div className="channel-item">
                        <i className="fas fa-envelope"></i>
                        <span>Email Support</span>
                        <span className="availability">24/7</span>
                    </div>
                    <div className="channel-item">
                        <i className="fas fa-comments"></i>
                        <span>Live Chat</span>
                        <span className="availability">9 AM - 6 PM</span>
                    </div>
                    <div className="channel-item">
                        <i className="fas fa-ticket-alt"></i>
                        <span>Ticket System</span>
                        <span className="availability">24/7</span>
                    </div>
                </div>
            </div>
            
            <div className="training-programs">
                <h3>Training & Development</h3>
                <div className="training-list">
                    <div className="training-item">
                        <h4>Digital Literacy Program</h4>
                        <p>Basic computer skills for citizens</p>
                        <span className="participants">2,450 enrolled</span>
                    </div>
                    <div className="training-item">
                        <h4>Cybersecurity Awareness</h4>
                        <p>Online safety and security training</p>
                        <span className="participants">1,890 enrolled</span>
                    </div>
                    <div className="training-item">
                        <h4>E-Governance Training</h4>
                        <p>Government staff digital training</p>
                        <span className="participants">456 enrolled</span>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="department-dashboard">
            <div className="dashboard-header">
                <h1><i className="fas fa-laptop"></i> IT & Digital Services Department</h1>
                <p>Digital infrastructure, e-governance, and technology services</p>
            </div>

            <div className="dashboard-tabs">
                <button 
                    className={activeTab === 'infrastructure' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('infrastructure')}
                >
                    <i className="fas fa-server"></i> Infrastructure
                </button>
                <button 
                    className={activeTab === 'services' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('services')}
                >
                    <i className="fas fa-globe"></i> Digital Services
                </button>
                <button 
                    className={activeTab === 'security' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('security')}
                >
                    <i className="fas fa-shield-alt"></i> Cybersecurity
                </button>
                <button 
                    className={activeTab === 'support' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('support')}
                >
                    <i className="fas fa-headset"></i> Support & Training
                </button>
            </div>

            <div className="dashboard-content">
                {activeTab === 'infrastructure' && renderInfrastructureTab()}
                {activeTab === 'services' && renderDigitalServicesTab()}
                {activeTab === 'security' && renderSecurityTab()}
                {activeTab === 'support' && renderSupportTab()}
            </div>
        </div>
    );
};

export default ITDigitalServicesDashboard;