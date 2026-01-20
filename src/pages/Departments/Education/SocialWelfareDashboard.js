import React, { useState, useEffect } from 'react';
import '../../../styles/dashboard.css';
import '../../../styles/education-department.css';

const SocialWelfareDashboard = () => {
    const [activeTab, setActiveTab] = useState('programs');
    const [stats, setStats] = useState({
        totalBeneficiaries: 25600,
        activePrograms: 18,
        monthlyDistribution: '₹2.5 Cr',
        coverageRate: '89%',
        pensionRecipients: 8450,
        scholarshipHolders: 3200
    });

    const [programs, setPrograms] = useState([
        { id: 'SW001', name: 'Old Age Pension', beneficiaries: 8450, budget: '₹1.2 Cr', status: 'Active' },
        { id: 'SW002', name: 'Widow Pension', beneficiaries: 3200, budget: '₹45 L', status: 'Active' },
        { id: 'SW003', name: 'Disability Allowance', beneficiaries: 1890, budget: '₹28 L', status: 'Active' }
    ]);

    const renderProgramsTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Active Programs</h3>
                    <p className="stat-number">{stats.activePrograms}</p>
                </div>
                <div className="stat-card">
                    <h3>Total Beneficiaries</h3>
                    <p className="stat-number">{stats.totalBeneficiaries.toLocaleString()}</p>
                </div>
                <div className="stat-card">
                    <h3>Monthly Distribution</h3>
                    <p className="stat-number">{stats.monthlyDistribution}</p>
                </div>
                <div className="stat-card">
                    <h3>Coverage Rate</h3>
                    <p className="stat-number">{stats.coverageRate}</p>
                </div>
            </div>
            
            <div className="data-table">
                <h3>Welfare Programs</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Program ID</th>
                            <th>Program Name</th>
                            <th>Beneficiaries</th>
                            <th>Budget</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {programs.map(program => (
                            <tr key={program.id}>
                                <td>{program.id}</td>
                                <td>{program.name}</td>
                                <td>{program.beneficiaries.toLocaleString()}</td>
                                <td>{program.budget}</td>
                                <td><span className={`status ${program.status.toLowerCase()}`}>{program.status}</span></td>
                                <td>
                                    <button className="btn-small">View</button>
                                    <button className="btn-small">Manage</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderBeneficiariesTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Senior Citizens</h3>
                    <p className="stat-number">8,450</p>
                </div>
                <div className="stat-card">
                    <h3>Widows</h3>
                    <p className="stat-number">3,200</p>
                </div>
                <div className="stat-card">
                    <h3>Disabled Persons</h3>
                    <p className="stat-number">1,890</p>
                </div>
                <div className="stat-card">
                    <h3>Children</h3>
                    <p className="stat-number">12,060</p>
                </div>
            </div>
            
            <div className="beneficiary-categories">
                <h3>Beneficiary Distribution</h3>
                <div className="category-breakdown">
                    <div className="category-item">
                        <span>Senior Citizens (60+)</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '33%'}}></div>
                        </div>
                        <span>33%</span>
                    </div>
                    <div className="category-item">
                        <span>Children & Youth</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '47%'}}></div>
                        </div>
                        <span>47%</span>
                    </div>
                    <div className="category-item">
                        <span>Women</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '12%'}}></div>
                        </div>
                        <span>12%</span>
                    </div>
                    <div className="category-item">
                        <span>Disabled Persons</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '8%'}}></div>
                        </div>
                        <span>8%</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderDistributionTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>This Month</h3>
                    <p className="stat-number">₹2.5 Cr</p>
                </div>
                <div className="stat-card">
                    <h3>Pending Payments</h3>
                    <p className="stat-number">₹15 L</p>
                </div>
                <div className="stat-card">
                    <h3>Success Rate</h3>
                    <p className="stat-number">96%</p>
                </div>
                <div className="stat-card">
                    <h3>Direct Transfers</h3>
                    <p className="stat-number">89%</p>
                </div>
            </div>
            
            <div className="distribution-methods">
                <h3>Distribution Methods</h3>
                <div className="method-stats">
                    <div className="method-item">
                        <i className="fas fa-university"></i>
                        <span>Bank Transfer</span>
                        <span className="percentage">89%</span>
                    </div>
                    <div className="method-item">
                        <i className="fas fa-money-bill"></i>
                        <span>Cash Distribution</span>
                        <span className="percentage">8%</span>
                    </div>
                    <div className="method-item">
                        <i className="fas fa-mobile-alt"></i>
                        <span>Mobile Wallet</span>
                        <span className="percentage">3%</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderServicesTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Service Centers</h3>
                    <p className="stat-number">45</p>
                </div>
                <div className="stat-card">
                    <h3>Mobile Units</h3>
                    <p className="stat-number">12</p>
                </div>
                <div className="stat-card">
                    <h3>Counseling Sessions</h3>
                    <p className="stat-number">156</p>
                </div>
                <div className="stat-card">
                    <h3>Skill Training</h3>
                    <p className="stat-number">89</p>
                </div>
            </div>
            
            <div className="social-services">
                <h3>Social Services Offered</h3>
                <div className="services-grid">
                    <div className="service-item">
                        <i className="fas fa-heart"></i>
                        <h4>Healthcare Support</h4>
                        <p>Medical assistance and health camps</p>
                        <span className="beneficiaries">2,450 beneficiaries</span>
                    </div>
                    <div className="service-item">
                        <i className="fas fa-graduation-cap"></i>
                        <h4>Education Support</h4>
                        <p>Scholarships and educational aid</p>
                        <span className="beneficiaries">3,200 beneficiaries</span>
                    </div>
                    <div className="service-item">
                        <i className="fas fa-tools"></i>
                        <h4>Skill Development</h4>
                        <p>Vocational training programs</p>
                        <span className="beneficiaries">1,890 beneficiaries</span>
                    </div>
                    <div className="service-item">
                        <i className="fas fa-home"></i>
                        <h4>Housing Assistance</h4>
                        <p>Shelter and housing support</p>
                        <span className="beneficiaries">890 beneficiaries</span>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="department-dashboard">
            <div className="dashboard-header">
                <h1><i className="fas fa-hands-helping"></i> Social Welfare Department</h1>
                <p>Social security programs and community welfare services</p>
            </div>

            <div className="dashboard-tabs">
                <button 
                    className={activeTab === 'programs' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('programs')}
                >
                    <i className="fas fa-list"></i> Welfare Programs
                </button>
                <button 
                    className={activeTab === 'beneficiaries' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('beneficiaries')}
                >
                    <i className="fas fa-users"></i> Beneficiaries
                </button>
                <button 
                    className={activeTab === 'distribution' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('distribution')}
                >
                    <i className="fas fa-hand-holding-usd"></i> Fund Distribution
                </button>
                <button 
                    className={activeTab === 'services' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('services')}
                >
                    <i className="fas fa-heart"></i> Social Services
                </button>
            </div>

            <div className="dashboard-content">
                {activeTab === 'programs' && renderProgramsTab()}
                {activeTab === 'beneficiaries' && renderBeneficiariesTab()}
                {activeTab === 'distribution' && renderDistributionTab()}
                {activeTab === 'services' && renderServicesTab()}
            </div>
        </div>
    );
};

export default SocialWelfareDashboard;