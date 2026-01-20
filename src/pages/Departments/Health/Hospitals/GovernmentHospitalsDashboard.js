import React, { useState, useEffect } from 'react';
import '../../../../styles/dashboard.css';
import '../../../../styles/health-department.css';

const GovernmentHospitalsDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [stats, setStats] = useState({
        totalHospitals: 12,
        totalBeds: 2450,
        occupiedBeds: 1876,
        availableBeds: 574,
        patientsToday: 156,
        emergencyCases: 23
    });

    const [hospitals, setHospitals] = useState([
        { id: 'GH001', name: 'City General Hospital', beds: 500, occupied: 425, available: 75, status: 'Operational' },
        { id: 'GH002', name: 'District Medical Center', beds: 300, occupied: 245, available: 55, status: 'Operational' },
        { id: 'GH003', name: 'Emergency Care Hospital', beds: 200, occupied: 180, available: 20, status: 'Full Capacity' }
    ]);

    const renderOverviewTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Total Hospitals</h3>
                    <p className="stat-number">{stats.totalHospitals}</p>
                </div>
                <div className="stat-card">
                    <h3>Total Beds</h3>
                    <p className="stat-number">{stats.totalBeds}</p>
                </div>
                <div className="stat-card">
                    <h3>Available Beds</h3>
                    <p className="stat-number">{stats.availableBeds}</p>
                </div>
                <div className="stat-card">
                    <h3>Occupancy Rate</h3>
                    <p className="stat-number">{Math.round((stats.occupiedBeds/stats.totalBeds)*100)}%</p>
                </div>
            </div>
            
            <div className="hospital-overview">
                <h3>Hospital Network Status</h3>
                <div className="hospital-grid">
                    {hospitals.map(hospital => (
                        <div key={hospital.id} className="hospital-card">
                            <h4>{hospital.name}</h4>
                            <div className="bed-info">
                                <div className="bed-stat">
                                    <span>Total Beds</span>
                                    <span className="number">{hospital.beds}</span>
                                </div>
                                <div className="bed-stat">
                                    <span>Available</span>
                                    <span className="number available">{hospital.available}</span>
                                </div>
                                <div className="bed-stat">
                                    <span>Occupied</span>
                                    <span className="number occupied">{hospital.occupied}</span>
                                </div>
                            </div>
                            <div className="occupancy-bar">
                                <div className="occupancy-fill" style={{width: `${(hospital.occupied/hospital.beds)*100}%`}}></div>
                            </div>
                            <span className={`hospital-status ${hospital.status.toLowerCase().replace(' ', '-')}`}>
                                {hospital.status}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderBedsTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>ICU Beds</h3>
                    <p className="stat-number">245</p>
                    <small>Available: 23</small>
                </div>
                <div className="stat-card">
                    <h3>General Beds</h3>
                    <p className="stat-number">1850</p>
                    <small>Available: 425</small>
                </div>
                <div className="stat-card">
                    <h3>Emergency Beds</h3>
                    <p className="stat-number">355</p>
                    <small>Available: 126</small>
                </div>
            </div>
            
            <div className="bed-allocation">
                <h3>Bed Allocation by Department</h3>
                <div className="allocation-chart">
                    <div className="allocation-item">
                        <span>General Medicine</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '35%'}}></div>
                        </div>
                        <span>35% (857 beds)</span>
                    </div>
                    <div className="allocation-item">
                        <span>Surgery</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '25%'}}></div>
                        </div>
                        <span>25% (612 beds)</span>
                    </div>
                    <div className="allocation-item">
                        <span>Pediatrics</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '15%'}}></div>
                        </div>
                        <span>15% (367 beds)</span>
                    </div>
                    <div className="allocation-item">
                        <span>Maternity</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '15%'}}></div>
                        </div>
                        <span>15% (367 beds)</span>
                    </div>
                    <div className="allocation-item">
                        <span>ICU/Critical Care</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '10%'}}></div>
                        </div>
                        <span>10% (245 beds)</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderPatientsTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Patients Today</h3>
                    <p className="stat-number">{stats.patientsToday}</p>
                </div>
                <div className="stat-card">
                    <h3>Emergency Cases</h3>
                    <p className="stat-number">{stats.emergencyCases}</p>
                </div>
                <div className="stat-card">
                    <h3>Outpatients</h3>
                    <p className="stat-number">89</p>
                </div>
                <div className="stat-card">
                    <h3>Admissions</h3>
                    <p className="stat-number">44</p>
                </div>
            </div>
            
            <div className="patient-flow">
                <h3>Patient Flow Analysis</h3>
                <div className="flow-metrics">
                    <div className="flow-item">
                        <i className="fas fa-user-plus"></i>
                        <span>New Admissions</span>
                        <span className="count">44</span>
                    </div>
                    <div className="flow-item">
                        <i className="fas fa-user-minus"></i>
                        <span>Discharges</span>
                        <span className="count">38</span>
                    </div>
                    <div className="flow-item">
                        <i className="fas fa-exchange-alt"></i>
                        <span>Transfers</span>
                        <span className="count">12</span>
                    </div>
                    <div className="flow-item">
                        <i className="fas fa-clock"></i>
                        <span>Avg Stay</span>
                        <span className="count">4.2 days</span>
                    </div>
                </div>
            </div>
            
            <div className="department-patients">
                <h3>Patients by Department</h3>
                <div className="dept-stats">
                    <div className="dept-item">
                        <span>Emergency</span>
                        <span className="patient-count">23</span>
                    </div>
                    <div className="dept-item">
                        <span>General Medicine</span>
                        <span className="patient-count">45</span>
                    </div>
                    <div className="dept-item">
                        <span>Surgery</span>
                        <span className="patient-count">32</span>
                    </div>
                    <div className="dept-item">
                        <span>Pediatrics</span>
                        <span className="patient-count">28</span>
                    </div>
                    <div className="dept-item">
                        <span>Maternity</span>
                        <span className="patient-count">18</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderServicesTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Active Services</h3>
                    <p className="stat-number">24</p>
                </div>
                <div className="stat-card">
                    <h3>Specialists</h3>
                    <p className="stat-number">156</p>
                </div>
                <div className="stat-card">
                    <h3>Equipment Uptime</h3>
                    <p className="stat-number">96%</p>
                </div>
            </div>
            
            <div className="medical-services">
                <h3>Medical Services Available</h3>
                <div className="services-grid">
                    <div className="service-item">
                        <i className="fas fa-heartbeat"></i>
                        <span>Cardiology</span>
                        <span className="availability">Available</span>
                    </div>
                    <div className="service-item">
                        <i className="fas fa-brain"></i>
                        <span>Neurology</span>
                        <span className="availability">Available</span>
                    </div>
                    <div className="service-item">
                        <i className="fas fa-bone"></i>
                        <span>Orthopedics</span>
                        <span className="availability">Available</span>
                    </div>
                    <div className="service-item">
                        <i className="fas fa-eye"></i>
                        <span>Ophthalmology</span>
                        <span className="availability">Available</span>
                    </div>
                    <div className="service-item">
                        <i className="fas fa-baby"></i>
                        <span>Pediatrics</span>
                        <span className="availability">Available</span>
                    </div>
                    <div className="service-item">
                        <i className="fas fa-female"></i>
                        <span>Gynecology</span>
                        <span className="availability">Available</span>
                    </div>
                </div>
            </div>
            
            <div className="equipment-status">
                <h3>Critical Equipment Status</h3>
                <div className="equipment-list">
                    <div className="equipment-item">
                        <span>MRI Machines</span>
                        <span className="status operational">3/3 Operational</span>
                    </div>
                    <div className="equipment-item">
                        <span>CT Scanners</span>
                        <span className="status operational">5/5 Operational</span>
                    </div>
                    <div className="equipment-item">
                        <span>X-Ray Machines</span>
                        <span className="status operational">12/12 Operational</span>
                    </div>
                    <div className="equipment-item">
                        <span>Ventilators</span>
                        <span className="status maintenance">45/50 Operational</span>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="department-dashboard">
            <div className="dashboard-header">
                <h1><i className="fas fa-hospital-alt"></i> Government Hospitals</h1>
                <p>Comprehensive healthcare services and hospital management</p>
            </div>

            <div className="dashboard-tabs">
                <button 
                    className={activeTab === 'overview' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('overview')}
                >
                    <i className="fas fa-hospital"></i> Overview
                </button>
                <button 
                    className={activeTab === 'beds' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('beds')}
                >
                    <i className="fas fa-bed"></i> Bed Management
                </button>
                <button 
                    className={activeTab === 'patients' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('patients')}
                >
                    <i className="fas fa-users"></i> Patient Flow
                </button>
                <button 
                    className={activeTab === 'services' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('services')}
                >
                    <i className="fas fa-stethoscope"></i> Medical Services
                </button>
            </div>

            <div className="dashboard-content">
                {activeTab === 'overview' && renderOverviewTab()}
                {activeTab === 'beds' && renderBedsTab()}
                {activeTab === 'patients' && renderPatientsTab()}
                {activeTab === 'services' && renderServicesTab()}
            </div>
        </div>
    );
};

export default GovernmentHospitalsDashboard;