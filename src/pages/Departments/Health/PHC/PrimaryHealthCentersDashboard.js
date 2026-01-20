import React, { useState, useEffect } from 'react';
import '../../../../styles/dashboard.css';
import '../../../../styles/health-department.css';

const PrimaryHealthCentersDashboard = () => {
    const [activeTab, setActiveTab] = useState('centers');
    const [stats, setStats] = useState({
        totalPHCs: 45,
        activePHCs: 42,
        patientsToday: 234,
        vaccinationsToday: 89,
        healthWorkers: 156,
        coverageArea: '2.5M people'
    });

    const [healthCenters, setHealthCenters] = useState([
        { id: 'PHC001', name: 'Central PHC', area: 'Sector 1-5', patients: 45, staff: 8, status: 'Operational' },
        { id: 'PHC002', name: 'North Zone PHC', area: 'Sector 6-10', patients: 38, staff: 6, status: 'Operational' },
        { id: 'PHC003', name: 'East Zone PHC', area: 'Sector 11-15', patients: 52, staff: 9, status: 'Full Capacity' }
    ]);

    const renderCentersTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Total PHCs</h3>
                    <p className="stat-number">{stats.totalPHCs}</p>
                </div>
                <div className="stat-card">
                    <h3>Active Centers</h3>
                    <p className="stat-number">{stats.activePHCs}</p>
                </div>
                <div className="stat-card">
                    <h3>Health Workers</h3>
                    <p className="stat-number">{stats.healthWorkers}</p>
                </div>
                <div className="stat-card">
                    <h3>Coverage Area</h3>
                    <p className="stat-number">{stats.coverageArea}</p>
                </div>
            </div>
            
            <div className="phc-network">
                <h3>PHC Network Status</h3>
                <div className="phc-grid">
                    {healthCenters.map(center => (
                        <div key={center.id} className="phc-card">
                            <h4>{center.name}</h4>
                            <p className="coverage-area">Coverage: {center.area}</p>
                            <div className="phc-stats">
                                <div className="stat-item">
                                    <i className="fas fa-users"></i>
                                    <span>Patients Today: {center.patients}</span>
                                </div>
                                <div className="stat-item">
                                    <i className="fas fa-user-md"></i>
                                    <span>Staff: {center.staff}</span>
                                </div>
                            </div>
                            <span className={`phc-status ${center.status.toLowerCase().replace(' ', '-')}`}>
                                {center.status}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="service-coverage">
                <h3>Service Coverage Map</h3>
                <div className="coverage-zones">
                    <div className="zone-item">
                        <span>Urban Areas</span>
                        <div className="coverage-bar">
                            <div className="coverage-fill" style={{width: '95%'}}></div>
                        </div>
                        <span>95%</span>
                    </div>
                    <div className="zone-item">
                        <span>Semi-Urban Areas</span>
                        <div className="coverage-bar">
                            <div className="coverage-fill" style={{width: '87%'}}></div>
                        </div>
                        <span>87%</span>
                    </div>
                    <div className="zone-item">
                        <span>Rural Areas</span>
                        <div className="coverage-bar">
                            <div className="coverage-fill" style={{width: '78%'}}></div>
                        </div>
                        <span>78%</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderVaccinationTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Vaccinations Today</h3>
                    <p className="stat-number">{stats.vaccinationsToday}</p>
                </div>
                <div className="stat-card">
                    <h3>This Month</h3>
                    <p className="stat-number">2,456</p>
                </div>
                <div className="stat-card">
                    <h3>Coverage Rate</h3>
                    <p className="stat-number">92%</p>
                </div>
                <div className="stat-card">
                    <h3>Pending Doses</h3>
                    <p className="stat-number">156</p>
                </div>
            </div>
            
            <div className="vaccination-programs">
                <h3>Active Vaccination Programs</h3>
                <div className="program-list">
                    <div className="program-item">
                        <h4>COVID-19 Vaccination</h4>
                        <div className="program-stats">
                            <span>Target: 50,000</span>
                            <span>Completed: 46,500</span>
                            <span>Progress: 93%</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '93%'}}></div>
                        </div>
                    </div>
                    <div className="program-item">
                        <h4>Routine Immunization</h4>
                        <div className="program-stats">
                            <span>Target: 15,000</span>
                            <span>Completed: 13,800</span>
                            <span>Progress: 92%</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '92%'}}></div>
                        </div>
                    </div>
                    <div className="program-item">
                        <h4>Seasonal Flu</h4>
                        <div className="program-stats">
                            <span>Target: 25,000</span>
                            <span>Completed: 21,750</span>
                            <span>Progress: 87%</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '87%'}}></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="age-group-coverage">
                <h3>Vaccination by Age Group</h3>
                <div className="age-stats">
                    <div className="age-item">
                        <span>0-2 years</span>
                        <span className="coverage-rate">96%</span>
                    </div>
                    <div className="age-item">
                        <span>2-5 years</span>
                        <span className="coverage-rate">94%</span>
                    </div>
                    <div className="age-item">
                        <span>18-45 years</span>
                        <span className="coverage-rate">89%</span>
                    </div>
                    <div className="age-item">
                        <span>45+ years</span>
                        <span className="coverage-rate">91%</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderPreventiveTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Health Checkups</h3>
                    <p className="stat-number">156</p>
                </div>
                <div className="stat-card">
                    <h3>Screenings</h3>
                    <p className="stat-number">89</p>
                </div>
                <div className="stat-card">
                    <h3>Health Education</h3>
                    <p className="stat-number">12 sessions</p>
                </div>
                <div className="stat-card">
                    <h3>Community Outreach</h3>
                    <p className="stat-number">8 programs</p>
                </div>
            </div>
            
            <div className="preventive-services">
                <h3>Preventive Care Services</h3>
                <div className="service-grid">
                    <div className="service-item">
                        <i className="fas fa-heartbeat"></i>
                        <h4>Hypertension Screening</h4>
                        <p>Regular BP monitoring for adults</p>
                        <span className="service-count">45 today</span>
                    </div>
                    <div className="service-item">
                        <i className="fas fa-tint"></i>
                        <h4>Diabetes Screening</h4>
                        <p>Blood sugar testing and monitoring</p>
                        <span className="service-count">32 today</span>
                    </div>
                    <div className="service-item">
                        <i className="fas fa-female"></i>
                        <h4>Maternal Health</h4>
                        <p>Prenatal and postnatal care</p>
                        <span className="service-count">28 today</span>
                    </div>
                    <div className="service-item">
                        <i className="fas fa-baby"></i>
                        <h4>Child Health</h4>
                        <p>Growth monitoring and nutrition</p>
                        <span className="service-count">51 today</span>
                    </div>
                </div>
            </div>
            
            <div className="health-indicators">
                <h3>Community Health Indicators</h3>
                <div className="indicator-list">
                    <div className="indicator-item">
                        <span>Infant Mortality Rate</span>
                        <span className="rate good">12 per 1000</span>
                    </div>
                    <div className="indicator-item">
                        <span>Maternal Mortality Rate</span>
                        <span className="rate good">45 per 100,000</span>
                    </div>
                    <div className="indicator-item">
                        <span>Malnutrition Rate</span>
                        <span className="rate average">8.5%</span>
                    </div>
                    <div className="indicator-item">
                        <span>Immunization Coverage</span>
                        <span className="rate excellent">92%</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderOutreachTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Mobile Clinics</h3>
                    <p className="stat-number">8</p>
                </div>
                <div className="stat-card">
                    <h3>Health Camps</h3>
                    <p className="stat-number">12</p>
                </div>
                <div className="stat-card">
                    <h3>ASHA Workers</h3>
                    <p className="stat-number">89</p>
                </div>
                <div className="stat-card">
                    <h3>Villages Covered</h3>
                    <p className="stat-number">156</p>
                </div>
            </div>
            
            <div className="outreach-programs">
                <h3>Community Outreach Programs</h3>
                <div className="program-calendar">
                    <div className="program-event">
                        <div className="event-date">Jan 20</div>
                        <div className="event-details">
                            <h4>Health Camp - Village Rampur</h4>
                            <p>General health checkup and vaccination</p>
                            <span className="event-status scheduled">Scheduled</span>
                        </div>
                    </div>
                    <div className="program-event">
                        <div className="event-date">Jan 18</div>
                        <div className="event-details">
                            <h4>Maternal Health Workshop</h4>
                            <p>Prenatal care education for expecting mothers</p>
                            <span className="event-status completed">Completed</span>
                        </div>
                    </div>
                    <div className="program-event">
                        <div className="event-date">Jan 15</div>
                        <div className="event-details">
                            <h4>Nutrition Awareness Drive</h4>
                            <p>Child nutrition and feeding practices</p>
                            <span className="event-status completed">Completed</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="asha-network">
                <h3>ASHA Worker Network</h3>
                <div className="asha-stats">
                    <div className="asha-zone">
                        <h4>Zone A</h4>
                        <p>25 ASHA Workers</p>
                        <p>15 Villages</p>
                        <span className="coverage-rate">98% Coverage</span>
                    </div>
                    <div className="asha-zone">
                        <h4>Zone B</h4>
                        <p>32 ASHA Workers</p>
                        <p>20 Villages</p>
                        <span className="coverage-rate">95% Coverage</span>
                    </div>
                    <div className="asha-zone">
                        <h4>Zone C</h4>
                        <p>32 ASHA Workers</p>
                        <p>18 Villages</p>
                        <span className="coverage-rate">92% Coverage</span>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="department-dashboard">
            <div className="dashboard-header">
                <h1><i className="fas fa-clinic-medical"></i> Primary Health Centers</h1>
                <p>Community healthcare services and preventive care programs</p>
            </div>

            <div className="dashboard-tabs">
                <button 
                    className={activeTab === 'centers' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('centers')}
                >
                    <i className="fas fa-hospital"></i> Health Centers
                </button>
                <button 
                    className={activeTab === 'vaccination' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('vaccination')}
                >
                    <i className="fas fa-syringe"></i> Vaccination
                </button>
                <button 
                    className={activeTab === 'preventive' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('preventive')}
                >
                    <i className="fas fa-shield-alt"></i> Preventive Care
                </button>
                <button 
                    className={activeTab === 'outreach' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('outreach')}
                >
                    <i className="fas fa-hands-helping"></i> Community Outreach
                </button>
            </div>

            <div className="dashboard-content">
                {activeTab === 'centers' && renderCentersTab()}
                {activeTab === 'vaccination' && renderVaccinationTab()}
                {activeTab === 'preventive' && renderPreventiveTab()}
                {activeTab === 'outreach' && renderOutreachTab()}
            </div>
        </div>
    );
};

export default PrimaryHealthCentersDashboard;