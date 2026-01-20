'use client';

import React, { useState } from 'react';
import '../../styles/dashboard.css';

const Reports = ({ user, onNavigate }) => {
  const [reportType, setReportType] = useState('summary');
  const [dateRange, setDateRange] = useState('month');

  const mockReportData = {
    summary: {
      totalComplaints: 156,
      resolved: 142,
      pending: 8,
      rejected: 6,
      avgResolutionTime: '5.2 days',
      satisfactionRate: '92%'
    },
    byDepartment: [
      { name: 'Water Supply', count: 42, resolved: 38 },
      { name: 'Electricity', count: 35, resolved: 32 },
      { name: 'Roads', count: 28, resolved: 26 },
      { name: 'Sanitation', count: 21, resolved: 19 }
    ],
    bySeverity: [
      { level: 'Low', count: 65, percentage: 42 },
      { level: 'Medium', count: 54, percentage: 35 },
      { level: 'High', count: 28, percentage: 18 },
      { level: 'Critical', count: 9, percentage: 6 }
    ]
  };

  return (
    <div style={{flex: 1, padding: '20px'}}>
      <h1>Reports & Analytics</h1>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', marginBottom: '30px'}}>
        <button onClick={() => setReportType('summary')} className={reportType === 'summary' ? 'btn btn-primary' : 'btn btn-secondary'} style={{justifyContent: 'center'}}>
          <i className="fas fa-chart-pie"></i> Summary Report
        </button>
        <button onClick={() => setReportType('department')} className={reportType === 'department' ? 'btn btn-primary' : 'btn btn-secondary'} style={{justifyContent: 'center'}}>
          <i className="fas fa-building"></i> Department Wise
        </button>
        <button onClick={() => setReportType('severity')} className={reportType === 'severity' ? 'btn btn-primary' : 'btn btn-secondary'} style={{justifyContent: 'center'}}>
          <i className="fas fa-exclamation-triangle"></i> By Severity
        </button>
        <button style={{padding: '10px 20px', border: '1px solid #e5e7eb', borderRadius: '4px', cursor: 'pointer', background: '#fff'}}>
          <i className="fas fa-download"></i> Export PDF
        </button>
      </div>

      {reportType === 'summary' && (
        <div>
          <h2>Summary Report</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '30px'}}>
            {Object.entries(mockReportData.summary).map(([key, value]) => (
              <div key={key} style={{background: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '20px', textAlign: 'center'}}>
                <h4 style={{color: '#6b7280', margin: '0 0 10px 0'}}>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</h4>
                <p style={{fontSize: '24px', fontWeight: 'bold', margin: 0, color: '#0052cc'}}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {reportType === 'department' && (
        <div>
          <h2>Department-Wise Complaints</h2>
          <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '20px'}}>
            <thead>
              <tr style={{background: '#f3f4f6'}}>
                <th style={{padding: '12px', border: '1px solid #e5e7eb', textAlign: 'left'}}>Department</th>
                <th style={{padding: '12px', border: '1px solid #e5e7eb', textAlign: 'center'}}>Total Complaints</th>
                <th style={{padding: '12px', border: '1px solid #e5e7eb', textAlign: 'center'}}>Resolved</th>
                <th style={{padding: '12px', border: '1px solid #e5e7eb', textAlign: 'center'}}>Resolution %</th>
              </tr>
            </thead>
            <tbody>
              {mockReportData.byDepartment.map((dept, idx) => (
                <tr key={idx}>
                  <td style={{padding: '12px', border: '1px solid #e5e7eb'}}>{dept.name}</td>
                  <td style={{padding: '12px', border: '1px solid #e5e7eb', textAlign: 'center'}}>{dept.count}</td>
                  <td style={{padding: '12px', border: '1px solid #e5e7eb', textAlign: 'center'}}>{dept.resolved}</td>
                  <td style={{padding: '12px', border: '1px solid #e5e7eb', textAlign: 'center'}}>
                    <span style={{background: '#d1fae5', color: '#10b981', padding: '4px 8px', borderRadius: '4px'}}>
                      {Math.round((dept.resolved / dept.count) * 100)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {reportType === 'severity' && (
        <div>
          <h2>Complaints by Severity Level</h2>
          {mockReportData.bySeverity.map((item, idx) => (
            <div key={idx} style={{marginBottom: '20px'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '8px'}}>
                <span>{item.level} Priority</span>
                <span>{item.count} complaints ({item.percentage}%)</span>
              </div>
              <div style={{background: '#e5e7eb', height: '20px', borderRadius: '4px', overflow: 'hidden'}}>
                <div style={{background: item.percentage > 30 ? '#ef4444' : item.percentage > 15 ? '#f59e0b' : '#10b981', width: `${item.percentage * 3}px`, height: '100%', transition: 'width 0.3s'}}></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reports;
