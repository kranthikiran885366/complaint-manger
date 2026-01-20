'use client';

import React from 'react';
import { getMockComplaints } from '../../services/mockDataService';
import { formatDate, getStatusBadgeClass } from '../../utils/helpers';
import '../../styles/complaint-detail.css';

const ComplaintDetail = ({ complaintId, user, onNavigate }) => {
    const complaints = getMockComplaints();
    const complaint = complaints.find(c => c.id === complaintId);

    if (!complaint) {
        return (
            <div className="dashboard-container">
                <div className="error-page">
                    <i className="fas fa-exclamation-circle"></i>
                    <h1>Complaint Not Found</h1>
                    <button className="btn btn-primary" onClick={() => onNavigate('my-complaints')}>
                        Back to Complaints
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="dashboard-container">
            <div className="detail-header">
                <button className="back-btn" onClick={() => onNavigate('my-complaints')}>
                    <i className="fas fa-arrow-left"></i>
                    Back
                </button>
                <h1>{complaint.title}</h1>
                <span className={`badge ${getStatusBadgeClass(complaint.status)}`}>{complaint.status}</span>
            </div>

            <div className="detail-grid">
                <div className="detail-card">
                    <h2>Complaint Details</h2>
                    <div className="detail-info">
                        <div className="info-row">
                            <label>Complaint ID:</label>
                            <strong>{complaint.id}</strong>
                        </div>
                        <div className="info-row">
                            <label>Department:</label>
                            <strong>{complaint.department}</strong>
                        </div>
                        <div className="info-row">
                            <label>Priority:</label>
                            <strong>{complaint.priority}</strong>
                        </div>
                        <div className="info-row">
                            <label>Location:</label>
                            <strong>{complaint.location}</strong>
                        </div>
                        <div className="info-row">
                            <label>Reported Date:</label>
                            <strong>{formatDate(complaint.reportedDate)}</strong>
                        </div>
                        <div className="info-row">
                            <label>Expected Resolution:</label>
                            <strong>{formatDate(complaint.expectedResolutionDate)}</strong>
                        </div>
                    </div>
                </div>

                <div className="detail-card">
                    <h2>Description</h2>
                    <p>{complaint.description}</p>
                    {complaint.image && <img src={complaint.image} alt="Complaint" style={{ maxWidth: '100%', borderRadius: '6px' }} />}
                </div>

                <div className="detail-card">
                    <h2>Progress</h2>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${complaint.progress}%` }}></div>
                    </div>
                    <p className="progress-text">{complaint.progress}% Complete</p>
                </div>

                <div className="detail-card">
                    <h2>Timeline</h2>
                    <div className="timeline">
                        {complaint.activities.map((activity, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <strong>{activity.action}</strong>
                                    <p>
                                        {activity.date} at {activity.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="detail-card">
                    <h2>Assigned Officer</h2>
                    <div className="officer-info">
                        <p>
                            <strong>Officer:</strong> {complaint.assignedOfficer}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComplaintDetail;
