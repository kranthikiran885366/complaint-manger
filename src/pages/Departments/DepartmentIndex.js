'use client';

import React from 'react';
import { DEPARTMENTS, DEPARTMENT_CATEGORIES } from '../../utils/constants';
import '../../styles/dashboard.css';

const DepartmentIndex = ({ user, onNavigate }) => {
    const getDepartmentRoute = (deptName) => {
        const routeMap = {
            // Municipal Services
            'Water Supply': 'water-supply',
            'Electricity': 'electricity',
            'Roads & Transport': 'roads',
            'Sanitation': 'sanitation',
            'Drainage & Sewerage': 'drainage',
            'Street Lighting': 'street-lighting',
            'Public Toilets': 'public-toilets',
            'Parks & Gardens': 'parks',
            'Urban Planning': 'urban-planning',
            'Building & Construction': 'building',
            
            // Safety & Law Enforcement
            'Police': 'police',
            'Traffic Police': 'traffic-police',
            'Fire & Emergency': 'fire-emergency',
            'Disaster Management': 'disaster-management',
            
            // Health & Medical Services
            'Health Department': 'health-dept',
            'Government Hospitals': 'government-hospitals',
            'Primary Health Centers': 'primary-health-centers',
            'Ambulance Services': 'ambulance-services',
            
            // Education & Social Welfare
            'Education Department': 'education',
            'Government Schools': 'government-schools',
            'Social Welfare': 'social-welfare',
            
            // Transport & Infrastructure
            'Public Transport': 'public-transport',
            'Traffic Management': 'traffic-management',
            'Parking Management': 'parking-management',
            
            // Telecom & Digital Services
            'Internet & Telecom': 'telecom',
            'IT & Digital Services': 'it-digital-services',
            
            // Environment & Utilities
            'Environment Protection': 'environment-protection',
            'Pollution Control': 'pollution-control',
            
            // Revenue & Public Services
            'Revenue Department': 'revenue',
            'Property Registration': 'property-registration'
        };
        return routeMap[deptName] || `dept-${deptName.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
    };

    const groupedDepartments = DEPARTMENTS.reduce((acc, dept) => {
        if (!acc[dept.category]) {
            acc[dept.category] = [];
        }
        acc[dept.category].push(dept);
        return acc;
    }, {});

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>All Departments</h1>
                <p>Access all government departments and their services</p>
            </div>

            {Object.entries(groupedDepartments).map(([category, departments]) => (
                <section key={category} className="complaints-section">
                    <div className="section-header">
                        <h2>{DEPARTMENT_CATEGORIES[category]}</h2>
                        <p>{departments.length} departments</p>
                    </div>
                    
                    <div style={{
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                        gap: '20px'
                    }}>
                        {departments.map(dept => (
                            <div 
                                key={dept.id} 
                                onClick={() => onNavigate(getDepartmentRoute(dept.name))}
                                style={{
                                    background: '#fff',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '8px',
                                    padding: '20px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'translateY(-2px)';
                                    e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                                }}
                            >
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px',
                                    marginBottom: '15px'
                                }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        background: dept.color + '20',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <i 
                                            className={`fas ${dept.icon}`} 
                                            style={{
                                                color: dept.color,
                                                fontSize: '20px'
                                            }}
                                        ></i>
                                    </div>
                                    <div>
                                        <h3 style={{
                                            margin: 0,
                                            fontSize: '16px',
                                            fontWeight: 'bold',
                                            color: '#1f2937'
                                        }}>
                                            {dept.name}
                                        </h3>
                                        <p style={{
                                            margin: '5px 0 0',
                                            fontSize: '12px',
                                            color: '#6b7280',
                                            textTransform: 'capitalize'
                                        }}>
                                            {DEPARTMENT_CATEGORIES[dept.category]}
                                        </p>
                                    </div>
                                </div>
                                
                                <button 
                                    className="btn btn-primary"
                                    style={{
                                        width: '100%',
                                        padding: '10px',
                                        fontSize: '14px'
                                    }}
                                >
                                    Access Dashboard
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
};

export default DepartmentIndex;