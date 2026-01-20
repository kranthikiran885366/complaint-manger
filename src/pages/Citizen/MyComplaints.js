'use client';

import React from 'react';
import { getMockComplaints } from '../../services/mockDataService';
import { getStatusBadgeClass, formatDate } from '../../utils/helpers';

const MyComplaints = ({ user, onNavigate }) => {
    const complaints = getMockComplaints();

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>My Complaints</h1>
                <p>View and track all your complaints</p>
            </div>

            <section className="complaints-section">
                <div className="section-header">
                    <h2>All Complaints ({complaints.length})</h2>
                </div>

                {complaints.length > 0 ? (
                    <div className="complaints-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Department</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {complaints.map(complaint => (
                                    <tr key={complaint.id}>
                                        <td>{complaint.id}</td>
                                        <td>{complaint.title}</td>
                                        <td>{complaint.department}</td>
                                        <td>{formatDate(complaint.reportedDate)}</td>
                                        <td>
                                            <span className={`badge ${getStatusBadgeClass(complaint.status)}`}>
                                                {complaint.status}
                                            </span>
                                        </td>
                                        <td>
                                            <button
                                                className="btn btn-small btn-primary"
                                                onClick={() => onNavigate(`complaint-detail-${complaint.id}`)}
                                            >
                                                View Details
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="empty-state">
                        <p>No complaints found.</p>
                    </div>
                )}
            </section>
        </div>
    );
};

export default MyComplaints;
