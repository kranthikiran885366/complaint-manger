'use client';

import React, { useState } from 'react';
import { DEPARTMENTS } from '../../utils/constants';
import '../../styles/dashboard.css';

const DepartmentDashboard = ({ deptId, user, onNavigate }) => {
  const department = DEPARTMENTS.find(d => d.id === parseInt(deptId));
  const [activeTab, setActiveTab] = useState('overview');

  if (!department) {
    return <div style={{flex: 1, padding: '20px'}}>Department not found</div>;
  }

  const deptStats = {
    totalComplaints: Math.floor(Math.random() * 100) + 50,
    resolved: Math.floor(Math.random() * 80) + 30,
    pending: Math.floor(Math.random() * 20) + 5,
    avgResolutionTime: (Math.random() * 5 + 2).toFixed(1),
    satisfactionRate: Math.floor(Math.random() * 30) + 70
  };

  const departmentImages = {
    1: '/images/water-supply-dept.jpg',
    2: '/images/electricity-dept.jpg',
    3: '/images/roads-dept.jpg',
    4: '/images/sanitation-dept.jpg',
    5: '/images/telecom-dept.jpg',
    6: '/images/health-dept.jpg',
    7: '/images/police-dept.jpg',
    8: '/images/education-dept.jpg'
  };

  return (
    <div style={{flex: 1, padding: '20px'}}>
      <button onClick={() => onNavigate('dashboard')} className="btn btn-secondary" style={{marginBottom: '20px'}}>
        <i className="fas fa-arrow-left"></i> Back
      </button>

      <div style={{background: '#fff', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px'}}>
        <img src={departmentImages[department.id]} alt={department.name} style={{width: '100%', height: '250px', objectFit: 'cover'}} />
        <div style={{padding: '20px', background: '#f9fafb', borderTop: '1px solid #e5e7eb'}}>
          <h1 style={{margin: '0 0 10px 0'}}>{department.name} Department</h1>
          <p style={{margin: 0, color: '#6b7280'}}>Manage and track complaints for {department.name}</p>
        </div>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '15px', marginBottom: '30px'}}>
        <div className="stat-card">
          <h4>Total Complaints</h4>
          <p style={{fontSize: '28px', fontWeight: 'bold', margin: 0, color: '#0052cc'}}>{deptStats.totalComplaints}</p>
        </div>
        <div className="stat-card">
          <h4>Resolved</h4>
          <p style={{fontSize: '28px', fontWeight: 'bold', margin: 0, color: '#10b981'}}>{deptStats.resolved}</p>
        </div>
        <div className="stat-card">
          <h4>Pending</h4>
          <p style={{fontSize: '28px', fontWeight: 'bold', margin: 0, color: '#f59e0b'}}>{deptStats.pending}</p>
        </div>
        <div className="stat-card">
          <h4>Avg. Resolution</h4>
          <p style={{fontSize: '28px', fontWeight: 'bold', margin: 0, color: '#6366f1'}}>{deptStats.avgResolutionTime} days</p>
        </div>
      </div>

      <div style={{background: '#fff', borderRadius: '8px', padding: '20px', marginBottom: '20px'}}>
        <div style={{display: 'flex', gap: '10px', borderBottom: '1px solid #e5e7eb', marginBottom: '20px'}}>
          <button onClick={() => setActiveTab('overview')} style={{padding: '10px 20px', border: 'none', borderBottom: activeTab === 'overview' ? '3px solid #0052cc' : 'none', background: 'none', cursor: 'pointer', fontWeight: activeTab === 'overview' ? 'bold' : 'normal'}}>
            <i className="fas fa-chart-bar"></i> Overview
          </button>
          <button onClick={() => setActiveTab('complaints')} style={{padding: '10px 20px', border: 'none', borderBottom: activeTab === 'complaints' ? '3px solid #0052cc' : 'none', background: 'none', cursor: 'pointer', fontWeight: activeTab === 'complaints' ? 'bold' : 'normal'}}>
            <i className="fas fa-list"></i> Recent Complaints
          </button>
          <button onClick={() => setActiveTab('officers')} style={{padding: '10px 20px', border: 'none', borderBottom: activeTab === 'officers' ? '3px solid #0052cc' : 'none', background: 'none', cursor: 'pointer', fontWeight: activeTab === 'officers' ? 'bold' : 'normal'}}>
            <i className="fas fa-users"></i> Officers
          </button>
        </div>

        {activeTab === 'overview' && (
          <div>
            <h3>Performance Metrics</h3>
            <p style={{color: '#6b7280', marginBottom: '20px'}}>Satisfaction Rate: <strong style={{color: '#10b981', fontSize: '18px'}}>{deptStats.satisfactionRate}%</strong></p>
            <div style={{background: '#e5e7eb', height: '20px', borderRadius: '4px', overflow: 'hidden'}}>
              <div style={{background: '#10b981', width: `${deptStats.satisfactionRate}%`, height: '100%', transition: 'width 0.3s'}}></div>
            </div>
          </div>
        )}

        {activeTab === 'complaints' && (
          <div>
            <h3>Recent Complaints</h3>
            <p style={{color: '#6b7280', marginBottom: '20px'}}>Latest complaints for this department</p>
            {['Complaint #123', 'Complaint #122', 'Complaint #121'].map((complaint, idx) => (
              <div key={idx} style={{background: '#f9fafb', padding: '15px', borderRadius: '4px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <span>{complaint}</span>
                <span style={{background: '#d1fae5', color: '#10b981', padding: '4px 8px', borderRadius: '4px', fontSize: '12px'}}>Resolved</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'officers' && (
          <div>
            <h3>Department Officers</h3>
            <p style={{color: '#6b7280', marginBottom: '20px'}}>Team members managing this department</p>
            {['Officer A', 'Officer B', 'Officer C'].map((officer, idx) => (
              <div key={idx} style={{background: '#f9fafb', padding: '15px', borderRadius: '4px', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                <i className="fas fa-user-circle" style={{fontSize: '24px', color: '#0052cc'}}></i>
                <div>
                  <p style={{margin: 0, fontWeight: 'bold'}}>{officer}</p>
                  <small style={{color: '#6b7280'}}>Active • 5 complaints assigned</small>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DepartmentDashboard;
