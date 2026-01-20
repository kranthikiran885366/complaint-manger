import React, { useState, useEffect } from 'react';
import '../../../../styles/dashboard.css';
import '../../../../styles/municipal-department.css';

const UrbanPlanningDashboard = () => {
    const [activeTab, setActiveTab] = useState('zoning');
    const [stats, setStats] = useState({
        totalProjects: 45,
        approvedPlans: 32,
        pendingApprovals: 13,
        landParcels: 1250,
        zoningUpdates: 8
    });

    const [projects, setProjects] = useState([
        { id: 'UP001', name: 'Sector 25 Development', type: 'Residential', status: 'In Progress', area: '50 acres' },
        { id: 'UP002', name: 'Commercial Hub Phase 2', type: 'Commercial', status: 'Approved', area: '25 acres' },
        { id: 'UP003', name: 'Green Belt Extension', type: 'Environmental', status: 'Planning', area: '100 acres' }
    ]);

    const renderZoningTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Total Land Parcels</h3>
                    <p className="stat-number">{stats.landParcels}</p>
                </div>
                <div className="stat-card">
                    <h3>Zoning Updates</h3>
                    <p className="stat-number">{stats.zoningUpdates}</p>
                </div>
                <div className="stat-card">
                    <h3>Compliance Rate</h3>
                    <p className="stat-number">94%</p>
                </div>
            </div>
            
            <div className="zoning-map">
                <h3>Zoning Distribution</h3>
                <div className="zone-types">
                    <div className="zone-item residential">
                        <span className="zone-color"></span>
                        <span>Residential - 45%</span>
                    </div>
                    <div className="zone-item commercial">
                        <span className="zone-color"></span>
                        <span>Commercial - 25%</span>
                    </div>
                    <div className="zone-item industrial">
                        <span className="zone-color"></span>
                        <span>Industrial - 15%</span>
                    </div>
                    <div className="zone-item green">
                        <span className="zone-color"></span>
                        <span>Green/Open - 15%</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderDevelopmentTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Active Projects</h3>
                    <p className="stat-number">{stats.totalProjects}</p>
                </div>
                <div className="stat-card">
                    <h3>Approved Plans</h3>
                    <p className="stat-number">{stats.approvedPlans}</p>
                </div>
                <div className="stat-card">
                    <h3>Pending Approvals</h3>
                    <p className="stat-number">{stats.pendingApprovals}</p>
                </div>
            </div>
            
            <div className="data-table">
                <h3>Development Projects</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Project ID</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Area</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map(project => (
                            <tr key={project.id}>
                                <td>{project.id}</td>
                                <td>{project.name}</td>
                                <td>{project.type}</td>
                                <td>{project.area}</td>
                                <td><span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>{project.status}</span></td>
                                <td>
                                    <button className="btn-small">View</button>
                                    <button className="btn-small">Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderLandUseTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Total Area</h3>
                    <p className="stat-number">2,500 acres</p>
                </div>
                <div className="stat-card">
                    <h3>Developed Area</h3>
                    <p className="stat-number">1,875 acres</p>
                </div>
                <div className="stat-card">
                    <h3>Available for Development</h3>
                    <p className="stat-number">625 acres</p>
                </div>
            </div>
            
            <div className="land-use-analysis">
                <h3>Land Use Analysis</h3>
                <div className="use-category">
                    <h4>Residential Areas</h4>
                    <div className="progress-bar">
                        <div className="progress" style={{width: '45%'}}></div>
                    </div>
                    <span>45% (1,125 acres)</span>
                </div>
                <div className="use-category">
                    <h4>Commercial Areas</h4>
                    <div className="progress-bar">
                        <div className="progress" style={{width: '25%'}}></div>
                    </div>
                    <span>25% (625 acres)</span>
                </div>
                <div className="use-category">
                    <h4>Industrial Areas</h4>
                    <div className="progress-bar">
                        <div className="progress" style={{width: '15%'}}></div>
                    </div>
                    <span>15% (375 acres)</span>
                </div>
                <div className="use-category">
                    <h4>Green Spaces</h4>
                    <div className="progress-bar">
                        <div className="progress" style={{width: '15%'}}></div>
                    </div>
                    <span>15% (375 acres)</span>
                </div>
            </div>
        </div>
    );

    const renderPoliciesTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Active Policies</h3>
                    <p className="stat-number">12</p>
                </div>
                <div className="stat-card">
                    <h3>Under Review</h3>
                    <p className="stat-number">3</p>
                </div>
                <div className="stat-card">
                    <h3>Implementation Rate</h3>
                    <p className="stat-number">89%</p>
                </div>
            </div>
            
            <div className="policies-list">
                <h3>Urban Planning Policies</h3>
                <div className="policy-item">
                    <h4>Green Building Standards</h4>
                    <p>Mandatory green building certification for new constructions</p>
                    <span className="status active">Active</span>
                </div>
                <div className="policy-item">
                    <h4>Affordable Housing Policy</h4>
                    <p>20% affordable housing in all new residential projects</p>
                    <span className="status active">Active</span>
                </div>
                <div className="policy-item">
                    <h4>Smart City Infrastructure</h4>
                    <p>Integration of smart technologies in urban development</p>
                    <span className="status under-review">Under Review</span>
                </div>
            </div>
        </div>
    );

    return (
        <div className="department-dashboard">
            <div className="dashboard-header">
                <h1><i className="fas fa-city"></i> Urban Planning Department</h1>
                <p>Strategic city development, zoning, and land use management</p>
            </div>

            <div className="dashboard-tabs">
                <button 
                    className={activeTab === 'zoning' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('zoning')}
                >
                    <i className="fas fa-map"></i> Zoning
                </button>
                <button 
                    className={activeTab === 'development' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('development')}
                >
                    <i className="fas fa-building"></i> Development
                </button>
                <button 
                    className={activeTab === 'landuse' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('landuse')}
                >
                    <i className="fas fa-chart-area"></i> Land Use
                </button>
                <button 
                    className={activeTab === 'policies' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('policies')}
                >
                    <i className="fas fa-gavel"></i> Policies
                </button>
            </div>

            <div className="dashboard-content">
                {activeTab === 'zoning' && renderZoningTab()}
                {activeTab === 'development' && renderDevelopmentTab()}
                {activeTab === 'landuse' && renderLandUseTab()}
                {activeTab === 'policies' && renderPoliciesTab()}
            </div>
        </div>
    );
};

export default UrbanPlanningDashboard;