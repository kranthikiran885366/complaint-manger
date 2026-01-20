'use client';

import React, { useState } from 'react';
import { getMockComplaints } from '../../../services/mockDataService';
import '../../../styles/dashboard.css';
import '../../../styles/education-department.css';

const EducationDashboard = ({ user, onNavigate }) => {
    const complaints = getMockComplaints().filter(c => c.departmentId === 19);
    const [activeTab, setActiveTab] = useState('overview');

    const educationData = {
        institutions: {
            primarySchools: 145,
            secondarySchools: 85,
            colleges: 25,
            universities: 5,
            totalStudents: 125000,
            totalTeachers: 8500
        },
        enrollment: [
            { level: 'Primary (1-5)', students: 45000, teachers: 2500, schools: 145 },
            { level: 'Secondary (6-10)', students: 38000, teachers: 2800, schools: 85 },
            { level: 'Higher Secondary (11-12)', students: 22000, teachers: 1800, schools: 45 },
            { level: 'College', students: 15000, teachers: 1200, schools: 25 },
            { level: 'University', students: 5000, teachers: 200, schools: 5 }
        ],
        infrastructure: [
            { category: 'Classrooms', total: 5420, functional: 5180, needRepair: 240 },
            { category: 'Laboratories', total: 850, functional: 820, needRepair: 30 },
            { category: 'Libraries', total: 260, functional: 245, needRepair: 15 },
            { category: 'Playgrounds', total: 180, functional: 165, needRepair: 15 }
        ],
        programs: [
            { name: 'Mid-Day Meal Program', coverage: '95%', beneficiaries: 78000, budget: '₹15Cr' },
            { name: 'Digital Literacy', coverage: '68%', beneficiaries: 35000, budget: '₹8Cr' },
            { name: 'Teacher Training', coverage: '85%', beneficiaries: 7200, budget: '₹5Cr' },
            { name: 'Scholarship Program', coverage: '12%', beneficiaries: 15000, budget: '₹12Cr' }
        ],
        performance: {
            attendanceRate: '87%',
            passRate: '92%',
            dropoutRate: '3.2%',
            literacyRate: '89%'
        }
    };

    const stats = {
        totalInstitutions: educationData.institutions.primarySchools + educationData.institutions.secondarySchools + educationData.institutions.colleges + educationData.institutions.universities,
        totalStudents: educationData.institutions.totalStudents,
        totalTeachers: educationData.institutions.totalTeachers,
        attendanceRate: educationData.performance.attendanceRate
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Education Department</h1>
                <p>Educational institutions, student welfare, and academic programs</p>
            </div>

            <section className="statistics-section">
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#dbeafe', color: '#3b82f6' }}>
                        <i className="fas fa-school"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.totalInstitutions}</h3>
                        <p>Educational Institutions</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#d1fae5', color: '#10b981' }}>
                        <i className="fas fa-user-graduate"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.totalStudents.toLocaleString()}</h3>
                        <p>Total Students</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#fef3c7', color: '#f59e0b' }}>
                        <i className="fas fa-chalkboard-teacher"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.totalTeachers.toLocaleString()}</h3>
                        <p>Total Teachers</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#dcfce7', color: '#22c55e' }}>
                        <i className="fas fa-chart-line"></i>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.attendanceRate}</h3>
                        <p>Attendance Rate</p>
                    </div>
                </div>
            </section>

            <div style={{display: 'flex', gap: '10px', marginBottom: '20px', borderBottom: '1px solid #e5e7eb'}}>
                <button onClick={() => setActiveTab('overview')} style={{padding: '10px 20px', background: activeTab === 'overview' ? '#0052cc' : 'transparent', color: activeTab === 'overview' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Institutions</button>
                <button onClick={() => setActiveTab('enrollment')} style={{padding: '10px 20px', background: activeTab === 'enrollment' ? '#0052cc' : 'transparent', color: activeTab === 'enrollment' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Enrollment</button>
                <button onClick={() => setActiveTab('infrastructure')} style={{padding: '10px 20px', background: activeTab === 'infrastructure' ? '#0052cc' : 'transparent', color: activeTab === 'infrastructure' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Infrastructure</button>
                <button onClick={() => setActiveTab('programs')} style={{padding: '10px 20px', background: activeTab === 'programs' ? '#0052cc' : 'transparent', color: activeTab === 'programs' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Programs</button>
                <button onClick={() => setActiveTab('performance')} style={{padding: '10px 20px', background: activeTab === 'performance' ? '#0052cc' : 'transparent', color: activeTab === 'performance' ? '#fff' : '#6b7280', border: 'none', cursor: 'pointer'}}>Performance</button>
            </div>

            {activeTab === 'overview' && (
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px'}}>
                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb', textAlign: 'center'}}>
                        <i className="fas fa-school" style={{fontSize: '2rem', color: '#3b82f6', marginBottom: '10px'}}></i>
                        <h3 style={{color: '#3b82f6', fontSize: '1.5rem', margin: 0}}>{educationData.institutions.primarySchools}</h3>
                        <p style={{margin: '5px 0 0', color: '#6b7280'}}>Primary Schools</p>
                    </div>
                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb', textAlign: 'center'}}>
                        <i className="fas fa-graduation-cap" style={{fontSize: '2rem', color: '#10b981', marginBottom: '10px'}}></i>
                        <h3 style={{color: '#10b981', fontSize: '1.5rem', margin: 0}}>{educationData.institutions.secondarySchools}</h3>
                        <p style={{margin: '5px 0 0', color: '#6b7280'}}>Secondary Schools</p>
                    </div>
                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb', textAlign: 'center'}}>
                        <i className="fas fa-university" style={{fontSize: '2rem', color: '#f59e0b', marginBottom: '10px'}}></i>
                        <h3 style={{color: '#f59e0b', fontSize: '1.5rem', margin: 0}}>{educationData.institutions.colleges}</h3>
                        <p style={{margin: '5px 0 0', color: '#6b7280'}}>Colleges</p>
                    </div>
                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb', textAlign: 'center'}}>
                        <i className="fas fa-landmark" style={{fontSize: '2rem', color: '#ef4444', marginBottom: '10px'}}></i>
                        <h3 style={{color: '#ef4444', fontSize: '1.5rem', margin: 0}}>{educationData.institutions.universities}</h3>
                        <p style={{margin: '5px 0 0', color: '#6b7280'}}>Universities</p>
                    </div>
                </div>
            )}

            {activeTab === 'enrollment' && (
                <div style={{background: '#fff', borderRadius: '8px', padding: '20px'}}>
                    <h2>Enrollment Statistics</h2>
                    <table style={{width: '100%', marginTop: '20px'}}>
                        <thead>
                            <tr style={{background: '#f3f4f6'}}>
                                <th style={{padding: '12px', textAlign: 'left'}}>Education Level</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Students</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Teachers</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Institutions</th>
                                <th style={{padding: '12px', textAlign: 'left'}}>Student-Teacher Ratio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {educationData.enrollment.map((level, index) => (
                                <tr key={index}>
                                    <td style={{padding: '12px', fontWeight: 'bold'}}>{level.level}</td>
                                    <td style={{padding: '12px'}}>{level.students.toLocaleString()}</td>
                                    <td style={{padding: '12px'}}>{level.teachers.toLocaleString()}</td>
                                    <td style={{padding: '12px'}}>{level.schools}</td>
                                    <td style={{padding: '12px'}}>
                                        <span style={{
                                            color: Math.round(level.students / level.teachers) <= 25 ? '#10b981' : Math.round(level.students / level.teachers) <= 35 ? '#f59e0b' : '#ef4444',
                                            fontWeight: 'bold'
                                        }}>
                                            {Math.round(level.students / level.teachers)}:1
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {activeTab === 'infrastructure' && (
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px'}}>
                    {educationData.infrastructure.map((infra, index) => (
                        <div key={index} style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                            <h3>{infra.category}</h3>
                            <div style={{display: 'grid', gap: '10px', marginTop: '15px'}}>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Total:</span>
                                    <span style={{fontWeight: 'bold'}}>{infra.total}</span>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Functional:</span>
                                    <span style={{color: '#10b981'}}>{infra.functional}</span>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <span>Need Repair:</span>
                                    <span style={{color: '#ef4444'}}>{infra.needRepair}</span>
                                </div>
                            </div>
                            <div style={{background: '#f3f4f6', height: '8px', borderRadius: '4px', overflow: 'hidden', marginTop: '15px'}}>
                                <div style={{background: '#10b981', width: `${(infra.functional / infra.total) * 100}%`, height: '100%'}}></div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === 'programs' && (
                <div style={{background: '#fff', borderRadius: '8px', padding: '20px'}}>
                    <h2>Educational Programs</h2>
                    <div style={{marginTop: '20px'}}>
                        {educationData.programs.map((program, index) => (
                            <div key={index} style={{padding: '20px', border: '1px solid #e5e7eb', borderRadius: '8px', marginBottom: '15px'}}>
                                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
                                    <h4 style={{margin: 0}}>{program.name}</h4>
                                    <span style={{background: '#d1fae5', color: '#065f46', padding: '4px 12px', borderRadius: '20px', fontSize: '12px'}}>
                                        {program.coverage} Coverage
                                    </span>
                                </div>
                                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px', fontSize: '14px', color: '#6b7280'}}>
                                    <div>
                                        <span style={{fontWeight: 'bold'}}>Beneficiaries:</span> {program.beneficiaries.toLocaleString()}
                                    </div>
                                    <div>
                                        <span style={{fontWeight: 'bold'}}>Budget:</span> {program.budget}
                                    </div>
                                </div>
                                <div style={{background: '#f3f4f6', height: '8px', borderRadius: '4px', overflow: 'hidden', marginTop: '10px'}}>
                                    <div style={{background: '#10b981', width: program.coverage, height: '100%'}}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === 'performance' && (
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px'}}>
                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb', textAlign: 'center'}}>
                        <h3 style={{color: '#10b981', fontSize: '2.5rem', margin: 0}}>{educationData.performance.attendanceRate}</h3>
                        <p style={{margin: '5px 0 0', color: '#6b7280'}}>Attendance Rate</p>
                    </div>
                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb', textAlign: 'center'}}>
                        <h3 style={{color: '#3b82f6', fontSize: '2.5rem', margin: 0}}>{educationData.performance.passRate}</h3>
                        <p style={{margin: '5px 0 0', color: '#6b7280'}}>Pass Rate</p>
                    </div>
                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb', textAlign: 'center'}}>
                        <h3 style={{color: '#ef4444', fontSize: '2.5rem', margin: 0}}>{educationData.performance.dropoutRate}</h3>
                        <p style={{margin: '5px 0 0', color: '#6b7280'}}>Dropout Rate</p>
                    </div>
                    <div style={{background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb', textAlign: 'center'}}>
                        <h3 style={{color: '#f59e0b', fontSize: '2.5rem', margin: 0}}>{educationData.performance.literacyRate}</h3>
                        <p style={{margin: '5px 0 0', color: '#6b7280'}}>Literacy Rate</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EducationDashboard;