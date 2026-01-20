import React, { useState, useEffect } from 'react';
import '../../../styles/dashboard.css';
import '../../../styles/environment-department.css';

const PollutionControlDashboard = () => {
    const [activeTab, setActiveTab] = useState('monitoring');
    const [stats, setStats] = useState({
        monitoringStations: 25,
        pollutionViolations: 18,
        industrialUnits: 456,
        complianceRate: '82%',
        penaltiesIssued: '₹45 L',
        emissionReduction: '15%'
    });

    const [violations, setViolations] = useState([
        { id: 'PC001', company: 'ABC Industries', type: 'Air Pollution', severity: 'High', penalty: '₹5 L', status: 'Pending' },
        { id: 'PC002', company: 'XYZ Manufacturing', type: 'Water Pollution', severity: 'Medium', penalty: '₹2 L', status: 'Resolved' },
        { id: 'PC003', company: 'DEF Chemicals', type: 'Noise Pollution', severity: 'Low', penalty: '₹50 K', status: 'Under Review' }
    ]);

    const renderMonitoringTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Monitoring Stations</h3>
                    <p className="stat-number">{stats.monitoringStations}</p>
                </div>
                <div className="stat-card">
                    <h3>Industrial Units</h3>
                    <p className="stat-number">{stats.industrialUnits}</p>
                </div>
                <div className="stat-card">
                    <h3>Compliance Rate</h3>
                    <p className="stat-number">{stats.complianceRate}</p>
                </div>
                <div className="stat-card">
                    <h3>Emission Reduction</h3>
                    <p className="stat-number">{stats.emissionReduction}</p>
                </div>
            </div>
            
            <div className="pollution-monitoring">
                <h3>Real-time Pollution Monitoring</h3>
                <div className="monitoring-grid">
                    <div className="monitor-item">
                        <h4>Air Quality Index</h4>
                        <div className="aqi-display">
                            <span className="aqi-value moderate">85</span>
                            <span className="aqi-status">Moderate</span>
                        </div>
                        <div className="pollutants">
                            <span>PM2.5: 45 μg/m³</span>
                            <span>PM10: 78 μg/m³</span>
                            <span>NO2: 32 μg/m³</span>
                        </div>
                    </div>
                    <div className="monitor-item">
                        <h4>Water Quality Index</h4>
                        <div className="wqi-display">
                            <span className="wqi-value good">72</span>
                            <span className="wqi-status">Good</span>
                        </div>
                        <div className="parameters">
                            <span>pH: 7.2</span>
                            <span>DO: 6.8 mg/L</span>
                            <span>BOD: 3.2 mg/L</span>
                        </div>
                    </div>
                    <div className="monitor-item">
                        <h4>Noise Levels</h4>
                        <div className="noise-display">
                            <span className="noise-value acceptable">65</span>
                            <span className="noise-unit">dB</span>
                        </div>
                        <div className="zones">
                            <span>Residential: 55 dB</span>
                            <span>Commercial: 65 dB</span>
                            <span>Industrial: 75 dB</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="trend-analysis">
                <h3>Pollution Trend Analysis</h3>
                <div className="trend-indicators">
                    <div className="trend-item">
                        <i className="fas fa-arrow-down text-green"></i>
                        <span>Air pollution decreased by 12% this quarter</span>
                    </div>
                    <div className="trend-item">
                        <i className="fas fa-arrow-up text-red"></i>
                        <span>Water pollution increased by 5% in industrial areas</span>
                    </div>
                    <div className="trend-item">
                        <i className="fas fa-minus text-yellow"></i>
                        <span>Noise pollution levels remain stable</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderViolationsTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Total Violations</h3>
                    <p className="stat-number">{stats.pollutionViolations}</p>
                    <small>This Month</small>
                </div>
                <div className="stat-card">
                    <h3>Penalties Issued</h3>
                    <p className="stat-number">{stats.penaltiesIssued}</p>
                </div>
                <div className="stat-card">
                    <h3>Resolved Cases</h3>
                    <p className="stat-number">12</p>
                </div>
                <div className="stat-card">
                    <h3>Pending Cases</h3>
                    <p className="stat-number">6</p>
                </div>
            </div>
            
            <div className="data-table">
                <h3>Pollution Violations</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Case ID</th>
                            <th>Company</th>
                            <th>Violation Type</th>
                            <th>Severity</th>
                            <th>Penalty</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {violations.map(violation => (
                            <tr key={violation.id}>
                                <td>{violation.id}</td>
                                <td>{violation.company}</td>
                                <td>{violation.type}</td>
                                <td><span className={`severity ${violation.severity.toLowerCase()}`}>{violation.severity}</span></td>
                                <td>{violation.penalty}</td>
                                <td><span className={`status ${violation.status.toLowerCase().replace(' ', '-')}`}>{violation.status}</span></td>
                                <td>
                                    <button className="btn-small">View</button>
                                    <button className="btn-small">Update</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <div className="violation-categories">
                <h3>Violation Categories</h3>
                <div className="category-breakdown">
                    <div className="category-item">
                        <span>Air Pollution</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '45%'}}></div>
                        </div>
                        <span>45% (8 cases)</span>
                    </div>
                    <div className="category-item">
                        <span>Water Pollution</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '35%'}}></div>
                        </div>
                        <span>35% (6 cases)</span>
                    </div>
                    <div className="category-item">
                        <span>Noise Pollution</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '20%'}}></div>
                        </div>
                        <span>20% (4 cases)</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderComplianceTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Compliant Units</h3>
                    <p className="stat-number">374</p>
                </div>
                <div className="stat-card">
                    <h3>Non-Compliant</h3>
                    <p className="stat-number">82</p>
                </div>
                <div className="stat-card">
                    <h3>Inspections Done</h3>
                    <p className="stat-number">156</p>
                </div>
                <div className="stat-card">
                    <h3>Certificates Issued</h3>
                    <p className="stat-number">89</p>
                </div>
            </div>
            
            <div className="compliance-by-sector">
                <h3>Compliance by Industrial Sector</h3>
                <div className="sector-compliance">
                    <div className="sector-item">
                        <span>Chemical Industry</span>
                        <div className="compliance-meter">
                            <div className="compliance-bar" style={{width: '75%'}}></div>
                        </div>
                        <span className="compliance-rate">75%</span>
                    </div>
                    <div className="sector-item">
                        <span>Textile Industry</span>
                        <div className="compliance-meter">
                            <div className="compliance-bar" style={{width: '85%'}}></div>
                        </div>
                        <span className="compliance-rate">85%</span>
                    </div>
                    <div className="sector-item">
                        <span>Food Processing</span>
                        <div className="compliance-meter">
                            <div className="compliance-bar" style={{width: '92%'}}></div>
                        </div>
                        <span className="compliance-rate">92%</span>
                    </div>
                    <div className="sector-item">
                        <span>Metal Industry</span>
                        <div className="compliance-meter">
                            <div className="compliance-bar" style={{width: '68%'}}></div>
                        </div>
                        <span className="compliance-rate">68%</span>
                    </div>
                </div>
            </div>
            
            <div className="certification-process">
                <h3>Environmental Certification Process</h3>
                <div className="process-steps">
                    <div className="step-item">
                        <span className="step-number">1</span>
                        <span className="step-name">Application Submission</span>
                        <span className="pending-count">23 pending</span>
                    </div>
                    <div className="step-item">
                        <span className="step-number">2</span>
                        <span className="step-name">Document Review</span>
                        <span className="pending-count">15 pending</span>
                    </div>
                    <div className="step-item">
                        <span className="step-number">3</span>
                        <span className="step-name">Site Inspection</span>
                        <span className="pending-count">8 pending</span>
                    </div>
                    <div className="step-item">
                        <span className="step-number">4</span>
                        <span className="step-name">Certificate Issuance</span>
                        <span className="pending-count">5 pending</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderEnforcementTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Enforcement Actions</h3>
                    <p className="stat-number">45</p>
                    <small>This Month</small>
                </div>
                <div className="stat-card">
                    <h3>Plant Closures</h3>
                    <p className="stat-number">3</p>
                </div>
                <div className="stat-card">
                    <h3>Show Cause Notices</h3>
                    <p className="stat-number">12</p>
                </div>
                <div className="stat-card">
                    <h3>Legal Proceedings</h3>
                    <p className="stat-number">8</p>
                </div>
            </div>
            
            <div className="enforcement-actions">
                <h3>Recent Enforcement Actions</h3>
                <div className="action-list">
                    <div className="action-item">
                        <h4>Plant Closure - ABC Chemicals</h4>
                        <p>Severe air pollution violation, immediate closure ordered</p>
                        <span className="action-type closure">Closure</span>
                        <span className="action-date">Jan 15, 2024</span>
                    </div>
                    <div className="action-item">
                        <h4>Show Cause Notice - XYZ Industries</h4>
                        <p>Water discharge exceeding permitted limits</p>
                        <span className="action-type notice">Notice</span>
                        <span className="action-date">Jan 12, 2024</span>
                    </div>
                    <div className="action-item">
                        <h4>Penalty Imposed - DEF Manufacturing</h4>
                        <p>Noise pollution in residential area</p>
                        <span className="action-type penalty">Penalty</span>
                        <span className="action-date">Jan 10, 2024</span>
                    </div>
                </div>
            </div>
            
            <div className="legal-status">
                <h3>Legal Proceedings Status</h3>
                <div className="legal-stats">
                    <div className="legal-item">
                        <span>Cases Filed</span>
                        <span className="count">8</span>
                    </div>
                    <div className="legal-item">
                        <span>Cases Won</span>
                        <span className="count">5</span>
                    </div>
                    <div className="legal-item">
                        <span>Cases Pending</span>
                        <span className="count">3</span>
                    </div>
                    <div className="legal-item">
                        <span>Appeals Filed</span>
                        <span className="count">2</span>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="department-dashboard">
            <div className="dashboard-header">
                <h1><i className="fas fa-smog"></i> Pollution Control Department</h1>
                <p>Environmental compliance monitoring and pollution enforcement</p>
            </div>

            <div className="dashboard-tabs">
                <button 
                    className={activeTab === 'monitoring' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('monitoring')}
                >
                    <i className="fas fa-chart-line"></i> Pollution Monitoring
                </button>
                <button 
                    className={activeTab === 'violations' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('violations')}
                >
                    <i className="fas fa-exclamation-triangle"></i> Violations
                </button>
                <button 
                    className={activeTab === 'compliance' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('compliance')}
                >
                    <i className="fas fa-check-circle"></i> Compliance
                </button>
                <button 
                    className={activeTab === 'enforcement' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('enforcement')}
                >
                    <i className="fas fa-gavel"></i> Enforcement
                </button>
            </div>

            <div className="dashboard-content">
                {activeTab === 'monitoring' && renderMonitoringTab()}
                {activeTab === 'violations' && renderViolationsTab()}
                {activeTab === 'compliance' && renderComplianceTab()}
                {activeTab === 'enforcement' && renderEnforcementTab()}
            </div>
        </div>
    );
};

export default PollutionControlDashboard;