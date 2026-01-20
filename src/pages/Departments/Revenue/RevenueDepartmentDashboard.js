import React, { useState, useEffect } from 'react';
import '../../../styles/dashboard.css';
import '../../../styles/revenue-department.css';

const RevenueDepartmentDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [stats, setStats] = useState({
        totalRevenue: '₹45.2 Cr',
        monthlyTarget: '₹5.5 Cr',
        collectionRate: '87%',
        pendingDues: '₹8.3 Cr',
        propertyRegistrations: 156,
        taxAssessments: 2450
    });

    const [revenueStreams, setRevenueStreams] = useState([
        { type: 'Property Tax', collected: 15.2, target: 18.0, percentage: 84 },
        { type: 'Trade License', collected: 8.5, target: 9.2, percentage: 92 },
        { type: 'Building Permits', collected: 6.8, target: 7.5, percentage: 91 },
        { type: 'Water Tax', collected: 4.2, target: 5.0, percentage: 84 }
    ]);

    const renderOverviewTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Total Revenue</h3>
                    <p className="stat-number">{stats.totalRevenue}</p>
                    <small>This Financial Year</small>
                </div>
                <div className="stat-card">
                    <h3>Monthly Target</h3>
                    <p className="stat-number">{stats.monthlyTarget}</p>
                    <small>Current Month</small>
                </div>
                <div className="stat-card">
                    <h3>Collection Rate</h3>
                    <p className="stat-number">{stats.collectionRate}</p>
                    <small>Against Target</small>
                </div>
                <div className="stat-card">
                    <h3>Pending Dues</h3>
                    <p className="stat-number">{stats.pendingDues}</p>
                    <small>Outstanding Amount</small>
                </div>
            </div>
            
            <div className="revenue-breakdown">
                <h3>Revenue Stream Performance</h3>
                <div className="revenue-grid">
                    {revenueStreams.map((stream, index) => (
                        <div key={index} className="revenue-item">
                            <h4>{stream.type}</h4>
                            <div className="revenue-stats">
                                <span className="collected">₹{stream.collected} Cr</span>
                                <span className="target">Target: ₹{stream.target} Cr</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress" style={{width: `${stream.percentage}%`}}></div>
                            </div>
                            <span className="percentage">{stream.percentage}%</span>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="collection-trends">
                <h3>Monthly Collection Trends</h3>
                <div className="trend-chart">
                    <div className="trend-bars">
                        <div className="trend-bar" style={{height: '60%'}} data-month="Jan">Jan</div>
                        <div className="trend-bar" style={{height: '75%'}} data-month="Feb">Feb</div>
                        <div className="trend-bar" style={{height: '85%'}} data-month="Mar">Mar</div>
                        <div className="trend-bar" style={{height: '70%'}} data-month="Apr">Apr</div>
                        <div className="trend-bar" style={{height: '90%'}} data-month="May">May</div>
                        <div className="trend-bar" style={{height: '95%'}} data-month="Jun">Jun</div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderTaxCollectionTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Property Tax</h3>
                    <p className="stat-number">₹15.2 Cr</p>
                    <small>84% of target</small>
                </div>
                <div className="stat-card">
                    <h3>Trade License Tax</h3>
                    <p className="stat-number">₹8.5 Cr</p>
                    <small>92% of target</small>
                </div>
                <div className="stat-card">
                    <h3>Water Tax</h3>
                    <p className="stat-number">₹4.2 Cr</p>
                    <small>84% of target</small>
                </div>
                <div className="stat-card">
                    <h3>Other Taxes</h3>
                    <p className="stat-number">₹3.8 Cr</p>
                    <small>89% of target</small>
                </div>
            </div>
            
            <div className="tax-categories">
                <h3>Tax Collection by Category</h3>
                <div className="category-breakdown">
                    <div className="category-item">
                        <span>Residential Property Tax</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '45%'}}></div>
                        </div>
                        <span>45% (₹6.8 Cr)</span>
                    </div>
                    <div className="category-item">
                        <span>Commercial Property Tax</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '35%'}}></div>
                        </div>
                        <span>35% (₹5.3 Cr)</span>
                    </div>
                    <div className="category-item">
                        <span>Industrial Property Tax</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '20%'}}></div>
                        </div>
                        <span>20% (₹3.1 Cr)</span>
                    </div>
                </div>
            </div>
            
            <div className="defaulter-tracking">
                <h3>Tax Defaulter Tracking</h3>
                <div className="defaulter-stats">
                    <div className="defaulter-item">
                        <span className="category">High Value Defaulters</span>
                        <span className="count">23</span>
                        <span className="amount">₹2.5 Cr</span>
                    </div>
                    <div className="defaulter-item">
                        <span className="category">Medium Value Defaulters</span>
                        <span className="count">156</span>
                        <span className="amount">₹3.8 Cr</span>
                    </div>
                    <div className="defaulter-item">
                        <span className="category">Small Value Defaulters</span>
                        <span className="count">445</span>
                        <span className="amount">₹2.0 Cr</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderPropertyTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Registrations Today</h3>
                    <p className="stat-number">12</p>
                </div>
                <div className="stat-card">
                    <h3>This Month</h3>
                    <p className="stat-number">{stats.propertyRegistrations}</p>
                </div>
                <div className="stat-card">
                    <h3>Registration Revenue</h3>
                    <p className="stat-number">₹2.8 Cr</p>
                </div>
                <div className="stat-card">
                    <h3>Pending Applications</h3>
                    <p className="stat-number">34</p>
                </div>
            </div>
            
            <div className="property-types">
                <h3>Property Registration by Type</h3>
                <div className="property-breakdown">
                    <div className="property-item">
                        <i className="fas fa-home"></i>
                        <div className="property-details">
                            <h4>Residential Properties</h4>
                            <span className="count">89 registrations</span>
                            <span className="revenue">₹1.2 Cr revenue</span>
                        </div>
                    </div>
                    <div className="property-item">
                        <i className="fas fa-building"></i>
                        <div className="property-details">
                            <h4>Commercial Properties</h4>
                            <span className="count">45 registrations</span>
                            <span className="revenue">₹1.1 Cr revenue</span>
                        </div>
                    </div>
                    <div className="property-item">
                        <i className="fas fa-industry"></i>
                        <div className="property-details">
                            <h4>Industrial Properties</h4>
                            <span className="count">22 registrations</span>
                            <span className="revenue">₹0.5 Cr revenue</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="registration-process">
                <h3>Registration Process Status</h3>
                <div className="process-stats">
                    <div className="process-step">
                        <span className="step-name">Document Verification</span>
                        <span className="pending-count">15 pending</span>
                    </div>
                    <div className="process-step">
                        <span className="step-name">Valuation Assessment</span>
                        <span className="pending-count">8 pending</span>
                    </div>
                    <div className="process-step">
                        <span className="step-name">Fee Payment</span>
                        <span className="pending-count">6 pending</span>
                    </div>
                    <div className="process-step">
                        <span className="step-name">Final Registration</span>
                        <span className="pending-count">5 pending</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderAssessmentTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Total Assessments</h3>
                    <p className="stat-number">{stats.taxAssessments}</p>
                </div>
                <div className="stat-card">
                    <h3>Completed</h3>
                    <p className="stat-number">2,156</p>
                </div>
                <div className="stat-card">
                    <h3>Pending</h3>
                    <p className="stat-number">294</p>
                </div>
                <div className="stat-card">
                    <h3>Under Review</h3>
                    <p className="stat-number">78</p>
                </div>
            </div>
            
            <div className="assessment-workflow">
                <h3>Assessment Workflow</h3>
                <div className="workflow-stages">
                    <div className="stage-item">
                        <div className="stage-icon">📋</div>
                        <div className="stage-details">
                            <h4>Initial Assessment</h4>
                            <span className="stage-count">156 properties</span>
                        </div>
                    </div>
                    <div className="stage-item">
                        <div className="stage-icon">🔍</div>
                        <div className="stage-details">
                            <h4>Field Verification</h4>
                            <span className="stage-count">89 properties</span>
                        </div>
                    </div>
                    <div className="stage-item">
                        <div className="stage-icon">💰</div>
                        <div className="stage-details">
                            <h4>Valuation</h4>
                            <span className="stage-count">67 properties</span>
                        </div>
                    </div>
                    <div className="stage-item">
                        <div className="stage-icon">✅</div>
                        <div className="stage-details">
                            <h4>Final Approval</h4>
                            <span className="stage-count">49 properties</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="assessment-appeals">
                <h3>Assessment Appeals</h3>
                <div className="appeals-stats">
                    <div className="appeal-item">
                        <span>New Appeals</span>
                        <span className="count">12</span>
                    </div>
                    <div className="appeal-item">
                        <span>Under Review</span>
                        <span className="count">8</span>
                    </div>
                    <div className="appeal-item">
                        <span>Resolved</span>
                        <span className="count">23</span>
                    </div>
                    <div className="appeal-item">
                        <span>Rejected</span>
                        <span className="count">5</span>
                    </div>
                </div>
            </div>
            
            <div className="valuation-trends">
                <h3>Property Valuation Trends</h3>
                <div className="valuation-stats">
                    <div className="valuation-item">
                        <span>Average Residential Value</span>
                        <span className="value">₹45 L</span>
                        <span className="trend positive">↑ 8%</span>
                    </div>
                    <div className="valuation-item">
                        <span>Average Commercial Value</span>
                        <span className="value">₹1.2 Cr</span>
                        <span className="trend positive">↑ 12%</span>
                    </div>
                    <div className="valuation-item">
                        <span>Average Industrial Value</span>
                        <span className="value">₹2.8 Cr</span>
                        <span className="trend positive">↑ 5%</span>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="department-dashboard">
            <div className="dashboard-header">
                <h1><i className="fas fa-coins"></i> Revenue Department</h1>
                <p>Tax collection, property registration, and financial management</p>
            </div>

            <div className="dashboard-tabs">
                <button 
                    className={activeTab === 'overview' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('overview')}
                >
                    <i className="fas fa-chart-pie"></i> Revenue Overview
                </button>
                <button 
                    className={activeTab === 'tax' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('tax')}
                >
                    <i className="fas fa-receipt"></i> Tax Collection
                </button>
                <button 
                    className={activeTab === 'property' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('property')}
                >
                    <i className="fas fa-file-contract"></i> Property Registration
                </button>
                <button 
                    className={activeTab === 'assessment' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('assessment')}
                >
                    <i className="fas fa-calculator"></i> Tax Assessment
                </button>
            </div>

            <div className="dashboard-content">
                {activeTab === 'overview' && renderOverviewTab()}
                {activeTab === 'tax' && renderTaxCollectionTab()}
                {activeTab === 'property' && renderPropertyTab()}
                {activeTab === 'assessment' && renderAssessmentTab()}
            </div>
        </div>
    );
};

export default RevenueDepartmentDashboard;