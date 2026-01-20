'use client';

import React, { useState } from 'react';
import { getMockComplaints } from '../../../../services/mockDataService';
import '../../../../styles/dashboard.css';
import '../../../../styles/municipal-department.css';

const StreetLightingDashboard = ({ user, onNavigate }) => {
    const complaints = getMockComplaints().filter(c => c.departmentId === 6);
    const [activeTab, setActiveTab] = useState('overview');

    const lightingData = {
        inventory: {
            totalLights: 25420,
            ledLights: 18500,
            sodiumLights: 6920,
            working: 24850,
            faulty: 570
        },
        energyConsumption: {
            dailyConsumption: '45,000 kWh',
            monthlyCost: '₹12,50,000',
            energySaved: '35%',
            carbonReduction: '2.5 tons/day'
        },
        maintenanceSchedule: [
            { zone: 'Zone A', lights: 5420, scheduled: '2024-01-25', type: 'LED Replacement', crew: 'Team 1' },
            { zone: 'Zone B', lights: 6850, scheduled: '2024-01-27', type: 'Pole Maintenance', crew: 'Team 2' },
            { zone: 'Zone C', lights: 4200, scheduled: '2024-01-30', type: 'Timer Calibration', crew: 'Team 3' }
        ],
        smartFeatures: {
            motionSensors: 2500,
            dimming: 15000,
            remoteControl: 18500,
            solarPowered: 1200
        },
        faultReports: [
            { location: 'Main Street', issue: 'Flickering Light', priority: 'Medium', reported: '2 hours ago' },
            { location: 'Park Avenue', issue: 'Complete Outage', priority: 'High', reported: '30 minutes ago' },
            { location: 'Industrial Road', issue: 'Dim Light', priority: 'Low', reported: '1 day ago' }
        ]
    };

    const stats = {
        totalLights: lightingData.inventory.totalLights,
        efficiency: Math.round((lightingData.inventory.working / lightingData.inventory.totalLights) * 100) + '%',
        energySaved: lightingData.energyConsumption.energySaved,
        faultReports: lightingData.faultReports.length
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Street Lighting Department</h1>
                <p>Public lighting, energy management, and smart lighting solutions</p>
            </div>

            <section className="statistics-section">
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#fef3c7', color: '#f59e0b' }}>
                        <i className="fas fa-lightbulb"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.totalLights}</h3>
                        <p>Street Lights</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#d1fae5', color: '#10b981' }}>
                        <i className="fas fa-chart-line"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.efficiency}</h3>
                        <p>Working Efficiency</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#dbeafe', color: '#3b82f6' }}>
                        <i className="fas fa-leaf"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.energySaved}</h3>
                        <p>Energy Saved</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#fee2e2', color: '#ef4444' }}>
                        <i className="fas fa-exclamation-triangle"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.faultReports}</h3>
                        <p>Fault Reports</p>
                    </div>
                </div>
            </section>

            <div style={{display: 'flex', gap: '10px', marginBottom: '20px', borderBottom: '1px solid #e5e7eb'}}>
                <button onClick={() => setActiveTab('overview')} style={{padding: '10px 20px', background: activeTab === 'overview' ? '#0052cc' : 'transparent', color: activeTab === 'overview' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Inventory</button>
                <button onClick={() => setActiveTab('energy')} style={{padding: '10px 20px', background: activeTab === 'energy' ? '#0052cc' : 'transparent', color: activeTab === 'energy' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Energy Management</button>
                <button onClick={() => setActiveTab('smart')} style={{padding: '10px 20px', background: activeTab === 'smart' ? '#0052cc' : 'transparent', color: activeTab === 'smart' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Smart Features</button>
                <button onClick={() => setActiveTab('maintenance')} style={{padding: '10px 20px', background: activeTab === 'maintenance' ? '#0052cc' : 'transparent', color: activeTab === 'maintenance' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Maintenance</button>
            </div>

            {activeTab === 'overview' && (
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px'}}>
                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb', textAlign: 'center'}}>
                        <h3 style={{color: '#0052cc', fontSize: '2rem', margin: 0}}>{lightingData.inventory.totalLights}</h3>
                        <p style={{margin: '5px 0 0', color: '#6b7280'}}>Total Street Lights</p>
                    </div>
                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb', textAlign: 'center'}}>
                        <h3 style={{color: '#10b981', fontSize: '2rem', margin: 0}}>{lightingData.inventory.ledLights}</h3>
                        <p style={{margin: '5px 0 0', color: '#6b7280'}}>LED Lights</p>
                    </div>
                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb', textAlign: 'center'}}>
                        <h3 style={{color: '#f59e0b', fontSize: '2rem', margin: 0}}>{lightingData.inventory.sodiumLights}</h3>
                        <p style={{margin: '5px 0 0', color: '#6b7280'}}>Sodium Lights</p>
                    </div>
                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb', textAlign: 'center'}}>
                        <h3 style={{color: '#10b981', fontSize: '2rem', margin: 0}}>{lightingData.inventory.working}</h3>
                        <p style={{margin: '5px 0 0', color: '#6b7280'}}>Working</p>
                    </div>
                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb', textAlign: 'center'}}>
                        <h3 style={{color: '#ef4444', fontSize: '2rem', margin: 0}}>{lightingData.inventory.faulty}</h3>
                        <p style={{margin: '5px 0 0', color: '#6b7280'}}>Faulty</p>
                    </div>
                </div>
            )}

            {activeTab === 'energy' && (
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                        <h3>Energy Consumption</h3>
                        <div style={{display: 'grid', gap: '15px', marginTop: '20px'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Daily Consumption:</span>
                                <span style={{fontWeight: 'bold'}}>{lightingData.energyConsumption.dailyConsumption}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Monthly Cost:</span>
                                <span style={{color: '#f59e0b'}}>{lightingData.energyConsumption.monthlyCost}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Energy Saved:</span>
                                <span style={{color: '#10b981', fontWeight: 'bold'}}>{lightingData.energyConsumption.energySaved}</span>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>Carbon Reduction:</span>
                                <span style={{color: '#10b981'}}>{lightingData.energyConsumption.carbonReduction}</span>
                            </div>
                        </div>
                    </div>

                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                        <h3>Current Fault Reports</h3>
                        <div style={{marginTop: '20px'}}>
                            {lightingData.faultReports.map((fault, index) => (
                                <div key={index} style={{padding: '10px', border: '1px solid #e5e7eb', borderRadius: '6px', marginBottom: '10px'}}>
                                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                        <div>
                                            <h5 style={{margin: 0}}>{fault.location}</h5>
                                            <p style={{margin: '2px 0 0', fontSize: '14px', color: '#6b7280'}}>{fault.issue}</p>
                                        </div>
                                        <div style={{textAlign: 'right'}}>
                                            <span style={{
                                                background: fault.priority === 'High' ? '#fee2e2' : fault.priority === 'Medium' ? '#fef3c7' : '#f3f4f6',
                                                color: fault.priority === 'High' ? '#991b1b' : fault.priority === 'Medium' ? '#92400e' : '#6b7280',
                                                padding: '2px 6px', borderRadius: '4px', fontSize: '11px'
                                            }}>
                                                {fault.priority}
                                            </span>
                                            <p style={{margin: '2px 0 0', fontSize: '12px', color: '#6b7280'}}>{fault.reported}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'smart' && (
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px'}}>
                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb', textAlign: 'center'}}>
                        <i className="fas fa-eye" style={{fontSize: '2rem', color: '#3b82f6', marginBottom: '10px'}}></i>
                        <h3 style={{color: '#3b82f6', fontSize: '1.5rem', margin: 0}}>{lightingData.smartFeatures.motionSensors}</h3>
                        <p style={{margin: '5px 0 0', color: '#6b7280'}}>Motion Sensors</p>
                    </div>
                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb', textAlign: 'center'}}>
                        <i className="fas fa-adjust" style={{fontSize: '2rem', color: '#f59e0b', marginBottom: '10px'}}></i>
                        <h3 style={{color: '#f59e0b', fontSize: '1.5rem', margin: 0}}>{lightingData.smartFeatures.dimming}</h3>
                        <p style={{margin: '5px 0 0', color: '#6b7280'}}>Auto Dimming</p>
                    </div>
                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb', textAlign: 'center'}}>
                        <i className="fas fa-wifi" style={{fontSize: '2rem', color: '#10b981', marginBottom: '10px'}}></i>
                        <h3 style={{color: '#10b981', fontSize: '1.5rem', margin: 0}}>{lightingData.smartFeatures.remoteControl}</h3>
                        <p style={{margin: '5px 0 0', color: '#6b7280'}}>Remote Control</p>
                    </div>
                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb', textAlign: 'center'}}>
                        <i className="fas fa-solar-panel" style={{fontSize: '2rem', color: '#22c55e', marginBottom: '10px'}}></i>
                        <h3 style={{color: '#22c55e', fontSize: '1.5rem', margin: 0}}>{lightingData.smartFeatures.solarPowered}</h3>
                        <p style={{margin: '5px 0 0', color: '#6b7280'}}>Solar Powered</p>
                    </div>
                </div>
            )}

            {activeTab === 'maintenance' && (
                <div style={{background: '#fff', borderRadius: '8px', padding: '20px'}}>
                    <h2>Maintenance Schedule</h2>
                    <div style={{marginTop: '20px'}}>
                        {lightingData.maintenanceSchedule.map((schedule, index) => (
                            <div key={index} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', border: '1px solid #e5e7eb', borderRadius: '8px', marginBottom: '10px'}}>
                                <div>
                                    <h4 style={{margin: 0}}>{schedule.zone}</h4>
                                    <p style={{margin: '5px 0 0', color: '#6b7280'}}>{schedule.type} - {schedule.lights} lights</p>
                                </div>
                                <div style={{textAlign: 'right'}}>
                                    <p style={{margin: 0, fontWeight: 'bold'}}>{schedule.scheduled}</p>
                                    <p style={{margin: '5px 0 0', color: '#6b7280'}}>{schedule.crew}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default StreetLightingDashboard;