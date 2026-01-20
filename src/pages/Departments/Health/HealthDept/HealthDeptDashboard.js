'use client';

import React, { useState } from 'react';
import { getMockComplaints } from '../../../../services/mockDataService';
import { formatDate, getStatusBadgeClass } from '../../../../utils/helpers';
import '../../../../styles/dashboard.css';
import '../../../../styles/health-department.css';

const HealthDeptDashboard = ({ user, onNavigate }) => {
    const complaints = getMockComplaints().filter(c => c.departmentId === 15);
    const [activeTab, setActiveTab] = useState('overview');

    const healthData = {
        hospitals: [
            { id: 1, name: 'City General Hospital', beds: 450, occupied: 380, doctors: 85, nurses: 180, emergencyWaiting: '15 min' },
            { id: 2, name: 'District Medical Center', beds: 250, occupied: 210, doctors: 45, nurses: 95, emergencyWaiting: '8 min' },
            { id: 3, name: 'Specialty Care Hospital', beds: 180, occupied: 165, doctors: 35, nurses: 70, emergencyWaiting: '12 min' }
        ],
        primaryHealthCenters: [
            { id: 1, name: 'PHC Sector 1', patients: 150, doctors: 3, nurses: 8, services: ['General', 'Vaccination', 'Maternity'] },
            { id: 2, name: 'PHC Sector 5', patients: 120, doctors: 2, nurses: 6, services: ['General', 'Pediatric', 'Dental'] },
            { id: 3, name: 'PHC Industrial Area', patients: 200, doctors: 4, nurses: 10, services: ['General', 'Occupational Health'] }
        ],
        ambulanceServices: {
            totalAmbulances: 25,
            available: 18,
            onCall: 7,
            averageResponseTime: '12 minutes',
            totalCalls: 156
        },
        medicineInventory: [
            { name: 'Paracetamol', stock: 15000, required: 20000, status: 'Low Stock' },
            { name: 'Antibiotics', stock: 8500, required: 10000, status: 'Adequate' },
            { name: 'Insulin', stock: 2500, required: 3000, status: 'Low Stock' },
            { name: 'Vaccines', stock: 5000, required: 5000, status: 'Adequate' }
        ],
        publicHealthPrograms: [
            { name: 'Vaccination Drive', coverage: '85%', target: 50000, completed: 42500, status: 'Ongoing' },
            { name: 'Health Checkup Campaign', coverage: '72%', target: 30000, completed: 21600, status: 'Ongoing' },
            { name: 'Malaria Prevention', coverage: '95%', target: 100000, completed: 95000, status: 'Completed' }
        ]
    };

    const stats = {
        totalBeds: healthData.hospitals.reduce((sum, hospital) => sum + hospital.beds, 0),
        occupancyRate: Math.round((healthData.hospitals.reduce((sum, hospital) => sum + hospital.occupied, 0) / healthData.hospitals.reduce((sum, hospital) => sum + hospital.beds, 0)) * 100) + '%',
        totalDoctors: healthData.hospitals.reduce((sum, hospital) => sum + hospital.doctors, 0) + healthData.primaryHealthCenters.reduce((sum, phc) => sum + phc.doctors, 0),
        ambulanceResponse: healthData.ambulanceServices.averageResponseTime
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Health Department</h1>
                <p>Healthcare services, medical facilities, and public health programs</p>
            </div>

            <section className="statistics-section">
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#fee2e2', color: '#ef4444' }}>
                        <i className="fas fa-bed"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.totalBeds}</h3>
                        <p>Hospital Beds</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#fef3c7', color: '#f59e0b' }}>
                        <i className="fas fa-chart-pie"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.occupancyRate}</h3>
                        <p>Occupancy Rate</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#d1fae5', color: '#10b981' }}>
                        <i className="fas fa-user-md"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.totalDoctors}</h3>
                        <p>Medical Staff</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#dbeafe', color: '#3b82f6' }}>
                        <i className="fas fa-ambulance"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.ambulanceResponse}</h3>
                        <p>Ambulance Response</p>
                    </div>
                </div>
            </section>

            <div style={{display: 'flex', gap: '10px', marginBottom: '20px', borderBottom: '1px solid #e5e7eb'}}>
                <button onClick={() => setActiveTab('overview')} style={{padding: '10px 20px', background: activeTab === 'overview' ? '#0052cc' : 'transparent', color: activeTab === 'overview' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Hospitals</button>
                <button onClick={() => setActiveTab('phc')} style={{padding: '10px 20px', background: activeTab === 'phc' ? '#0052cc' : 'transparent', color: activeTab === 'phc' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Primary Health Centers</button>
                <button onClick={() => setActiveTab('ambulance')} style={{padding: '10px 20px', background: activeTab === 'ambulance' ? '#0052cc' : 'transparent', color: activeTab === 'ambulance' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Ambulance Services</button>
                <button onClick={() => setActiveTab('medicine')} style={{padding: '10px 20px', background: activeTab === 'medicine' ? '#0052cc' : 'transparent', color: activeTab === 'medicine' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Medicine Inventory</button>
                <button onClick={() => setActiveTab('programs')} style={{padding: '10px 20px', background: activeTab === 'programs' ? '#0052cc' : 'transparent', color: activeTab === 'programs' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Health Programs</button>
            </div>

            {activeTab === 'overview' && (
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '20px'}}>
                    {healthData.hospitals.map(hospital => (
                        <div key={hospital.id} style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                            <h3>{hospital.name}</h3>
                            <div style={{display: 'grid', gap: '10px', marginTop: '15px'}}>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Total Beds:</span>
                                    <span style={{fontWeight: 'bold'}}>{hospital.beds}</span>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Occupied:</span>
                                    <span style={{color: '#f59e0b'}}>{hospital.occupied}</span>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Available:</span>
                                    <span style={{color: '#10b981'}}>{hospital.beds - hospital.occupied}</span>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Doctors:</span>
                                    <span>{hospital.doctors}</span>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Nurses:</span>
                                    <span>{hospital.nurses}</span>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Emergency Wait:</span>
                                    <span style={{color: '#ef4444', fontWeight: 'bold'}}>{hospital.emergencyWaiting}</span>
                                </div>
                            </div>
                            <div style={{background: '#f3f4f6', height: '8px', borderRadius: '4px', overflow: 'hidden', marginTop: '15px'}}>
                                <div style={{background: '#f59e0b', width: `${(hospital.occupied / hospital.beds) * 100}%`, height: '100%'}}></div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === 'phc' && (
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px'}}>
                    {healthData.primaryHealthCenters.map(phc => (
                        <div key={phc.id} style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                            <h3>{phc.name}</h3>
                            <div style={{display: 'grid', gap: '10px', marginTop: '15px'}}>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Daily Patients:</span>
                                    <span style={{fontWeight: 'bold'}}>{phc.patients}</span>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Doctors:</span>
                                    <span>{phc.doctors}</span>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Nurses:</span>
                                    <span>{phc.nurses}</span>
                                </div>
                            </div>
                            <div style={{marginTop: '15px'}}>
                                <h4 style={{fontSize: '14px', marginBottom: '8px'}}>Services Offered:</h4>
                                <div style={{display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
                                    {phc.services.map((service, index) => (
                                        <span key={index} style={{background: '#d1fae5', color: '#065f46', padding: '2px 8px', borderRadius: '12px', fontSize: '12px'}}>
                                            {service}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === 'ambulance' && (
                <div style={{background: '#fff', borderRadius: '8px', padding: '20px'}}>
                    <h2>Ambulance Services Status</h2>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '20px'}}>
                        <div style={{textAlign: 'center', padding: '20px', border: '1px solid #e5e7eb', borderRadius: '8px'}}>
                            <h3 style={{color: '#0052cc', fontSize: '2rem', margin: 0}}>{healthData.ambulanceServices.totalAmbulances}</h3>
                            <p style={{margin: '5px 0 0', color: '#6b7280'}}>Total Fleet</p>
                        </div>
                        <div style={{textAlign: 'center', padding: '20px', border: '1px solid #e5e7eb', borderRadius: '8px'}}>
                            <h3 style={{color: '#10b981', fontSize: '2rem', margin: 0}}>{healthData.ambulanceServices.available}</h3>
                            <p style={{margin: '5px 0 0', color: '#6b7280'}}>Available</p>
                        </div>
                        <div style={{textAlign: 'center', padding: '20px', border: '1px solid #e5e7eb', borderRadius: '8px'}}>
                            <h3 style={{color: '#ef4444', fontSize: '2rem', margin: 0}}>{healthData.ambulanceServices.onCall}</h3>
                            <p style={{margin: '5px 0 0', color: '#6b7280'}}>On Emergency Call</p>
                        </div>
                        <div style={{textAlign: 'center', padding: '20px', border: '1px solid #e5e7eb', borderRadius: '8px'}}>
                            <h3 style={{color: '#f59e0b', fontSize: '2rem', margin: 0}}>{healthData.ambulanceServices.totalCalls}</h3>
                            <p style={{margin: '5px 0 0', color: '#6b7280'}}>Total Calls Today</p>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'medicine' && (
                <div style={{background: '#fff', borderRadius: '8px', padding: '20px'}}>
                    <h2>Medicine Inventory Status</h2>
                    <table style={{width: '100%', marginTop: '20px'}}>
                        <thead>
                            <tr style={{background: '#f3f4f6'}}>
                                <th style={{padding: '12px', textAlign: 'left'}}>Medicine</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Current Stock</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Required</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {healthData.medicineInventory.map((medicine, index) => (
                                <tr key={index}>
                                    <td style={{padding: '12px', fontWeight: 'bold'}}>{medicine.name}</td>
                                    <td style={{padding: '12px'}}>{medicine.stock.toLocaleString()}</td>
                                    <td style={{padding: '12px'}}>{medicine.required.toLocaleString()}</td>
                                    <td style={{padding: '12px'}}>
                                        <span style={{
                                            background: medicine.status === 'Adequate' ? '#d1fae5' : '#fef3c7',
                                            color: medicine.status === 'Adequate' ? '#065f46' : '#92400e',
                                            padding: '4px 8px', borderRadius: '4px', fontSize: '12px'
                                        }}>
                                            {medicine.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {activeTab === 'programs' && (
                <div style={{background: '#fff', borderRadius: '8px', padding: '20px'}}>
                    <h2>Public Health Programs</h2>
                    <div style={{marginTop: '20px'}}>
                        {healthData.publicHealthPrograms.map((program, index) => (
                            <div key={index} style={{padding: '20px', border: '1px solid #e5e7eb', borderRadius: '8px', marginBottom: '15px'}}>
                                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
                                    <h4 style={{margin: 0}}>{program.name}</h4>
                                    <span style={{
                                        background: program.status === 'Completed' ? '#d1fae5' : '#dbeafe',
                                        color: program.status === 'Completed' ? '#065f46' : '#1e40af',
                                        padding: '4px 12px', borderRadius: '20px', fontSize: '12px'
                                    }}>
                                        {program.status}
                                    </span>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '14px', color: '#6b7280'}}>
                                    <span>Target: {program.target.toLocaleString()}</span>
                                    <span>Completed: {program.completed.toLocaleString()}</span>
                                    <span>Coverage: {program.coverage}</span>
                                </div>
                                <div style={{background: '#f3f4f6', height: '8px', borderRadius: '4px', overflow: 'hidden'}}>
                                    <div style={{background: '#10b981', width: program.coverage, height: '100%'}}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default HealthDeptDashboard;