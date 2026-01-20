import React, { useState, useEffect } from 'react';
import '../../../styles/dashboard.css';
import '../../../styles/education-department.css';

const GovernmentSchoolsDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [stats, setStats] = useState({
        totalSchools: 156,
        totalStudents: 45600,
        totalTeachers: 2340,
        enrollmentRate: '94%',
        attendanceRate: '87%',
        passRate: '89%'
    });

    const [schools, setSchools] = useState([
        { id: 'SCH001', name: 'Government High School - Central', students: 850, teachers: 45, grade: 'A', type: 'High School' },
        { id: 'SCH002', name: 'Government Primary School - North', students: 420, teachers: 28, grade: 'B+', type: 'Primary' },
        { id: 'SCH003', name: 'Government Senior Secondary - East', students: 1200, teachers: 68, grade: 'A+', type: 'Senior Secondary' }
    ]);

    const renderOverviewTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Total Schools</h3>
                    <p className="stat-number">{stats.totalSchools}</p>
                </div>
                <div className="stat-card">
                    <h3>Total Students</h3>
                    <p className="stat-number">{stats.totalStudents.toLocaleString()}</p>
                </div>
                <div className="stat-card">
                    <h3>Total Teachers</h3>
                    <p className="stat-number">{stats.totalTeachers}</p>
                </div>
                <div className="stat-card">
                    <h3>Enrollment Rate</h3>
                    <p className="stat-number">{stats.enrollmentRate}</p>
                </div>
            </div>
            
            <div className="school-distribution">
                <h3>School Distribution by Type</h3>
                <div className="distribution-chart">
                    <div className="dist-item">
                        <span>Primary Schools</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '45%'}}></div>
                        </div>
                        <span>45% (70 schools)</span>
                    </div>
                    <div className="dist-item">
                        <span>High Schools</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '35%'}}></div>
                        </div>
                        <span>35% (55 schools)</span>
                    </div>
                    <div className="dist-item">
                        <span>Senior Secondary</span>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '20%'}}></div>
                        </div>
                        <span>20% (31 schools)</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderStudentsTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>New Admissions</h3>
                    <p className="stat-number">2,450</p>
                </div>
                <div className="stat-card">
                    <h3>Attendance Rate</h3>
                    <p className="stat-number">{stats.attendanceRate}</p>
                </div>
                <div className="stat-card">
                    <h3>Dropout Rate</h3>
                    <p className="stat-number">3.2%</p>
                </div>
                <div className="stat-card">
                    <h3>Pass Rate</h3>
                    <p className="stat-number">{stats.passRate}</p>
                </div>
            </div>
            
            <div className="student-analytics">
                <h3>Student Performance Analytics</h3>
                <div className="performance-metrics">
                    <div className="metric-item">
                        <span>Class 10 Results</span>
                        <span className="percentage">92%</span>
                    </div>
                    <div className="metric-item">
                        <span>Class 12 Results</span>
                        <span className="percentage">87%</span>
                    </div>
                    <div className="metric-item">
                        <span>Scholarship Recipients</span>
                        <span className="count">1,245</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderTeachersTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Total Teachers</h3>
                    <p className="stat-number">{stats.totalTeachers}</p>
                </div>
                <div className="stat-card">
                    <h3>Student-Teacher Ratio</h3>
                    <p className="stat-number">19:1</p>
                </div>
                <div className="stat-card">
                    <h3>Qualified Teachers</h3>
                    <p className="stat-number">96%</p>
                </div>
                <div className="stat-card">
                    <h3>Training Programs</h3>
                    <p className="stat-number">45</p>
                </div>
            </div>
            
            <div className="teacher-development">
                <h3>Teacher Development Programs</h3>
                <div className="program-list">
                    <div className="program-item">
                        <h4>Digital Teaching Methods</h4>
                        <p>156 teachers enrolled</p>
                        <span className="status ongoing">Ongoing</span>
                    </div>
                    <div className="program-item">
                        <h4>Subject Matter Enhancement</h4>
                        <p>89 teachers enrolled</p>
                        <span className="status completed">Completed</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderInfrastructureTab = () => (
        <div className="tab-content">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Classrooms</h3>
                    <p className="stat-number">2,450</p>
                </div>
                <div className="stat-card">
                    <h3>Digital Classrooms</h3>
                    <p className="stat-number">456</p>
                </div>
                <div className="stat-card">
                    <h3>Libraries</h3>
                    <p className="stat-number">145</p>
                </div>
                <div className="stat-card">
                    <h3>Computer Labs</h3>
                    <p className="stat-number">89</p>
                </div>
            </div>
            
            <div className="infrastructure-status">
                <h3>Infrastructure Development</h3>
                <div className="infra-items">
                    <div className="infra-item">
                        <i className="fas fa-wifi"></i>
                        <span>Internet Connectivity</span>
                        <span className="coverage">78% schools</span>
                    </div>
                    <div className="infra-item">
                        <i className="fas fa-laptop"></i>
                        <span>Computer Access</span>
                        <span className="coverage">65% schools</span>
                    </div>
                    <div className="infra-item">
                        <i className="fas fa-book"></i>
                        <span>Library Facilities</span>
                        <span className="coverage">92% schools</span>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="department-dashboard">
            <div className="dashboard-header">
                <h1><i className="fas fa-school"></i> Government Schools</h1>
                <p>Public education management and academic excellence</p>
            </div>

            <div className="dashboard-tabs">
                <button 
                    className={activeTab === 'overview' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('overview')}
                >
                    <i className="fas fa-chart-pie"></i> Overview
                </button>
                <button 
                    className={activeTab === 'students' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('students')}
                >
                    <i className="fas fa-user-graduate"></i> Students
                </button>
                <button 
                    className={activeTab === 'teachers' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('teachers')}
                >
                    <i className="fas fa-chalkboard-teacher"></i> Teachers
                </button>
                <button 
                    className={activeTab === 'infrastructure' ? 'tab-button active' : 'tab-button'}
                    onClick={() => setActiveTab('infrastructure')}
                >
                    <i className="fas fa-building"></i> Infrastructure
                </button>
            </div>

            <div className="dashboard-content">
                {activeTab === 'overview' && renderOverviewTab()}
                {activeTab === 'students' && renderStudentsTab()}
                {activeTab === 'teachers' && renderTeachersTab()}
                {activeTab === 'infrastructure' && renderInfrastructureTab()}
            </div>
        </div>
    );
};

export default GovernmentSchoolsDashboard;