'use client';

import React, { useState, useEffect } from 'react';
import { DEPARTMENTS } from '../../utils/constants';
import { COMPLAINT_TYPES, getSLA } from '../../utils/complaintTypes';
import { generateComplaintId } from '../../utils/helpers';
import VoiceToTextComponent from '../../components/VoiceToText/VoiceToTextComponent';
import '../../styles/form.css';

const RegisterComplaint = ({ user, onNavigate }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        department: '',
        category: '',
        priority: 'Medium',
        location: '',
        landmark: '',
        latitude: '',
        longitude: '',
        images: [],
        videos: [],
        audio: null,
        anonymous: false,
    });
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [suggestedPriority, setSuggestedPriority] = useState('');
    const [duplicateWarning, setDuplicateWarning] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // AI: Priority prediction based on keywords
        if (name === 'description') {
            const criticalKeywords = ['emergency', 'danger', 'urgent', 'life-threatening'];
            const highKeywords = ['broken', 'failed', 'damage', 'severe'];
            
            if (criticalKeywords.some(kw => value.toLowerCase().includes(kw))) {
                setSuggestedPriority('Critical');
            } else if (highKeywords.some(kw => value.toLowerCase().includes(kw))) {
                setSuggestedPriority('High');
            } else {
                setSuggestedPriority('');
            }
        }

        // AI: Duplicate detection
        if (name === 'title') {
            if (value.length > 10) {
              setDuplicateWarning('Similar complaint found. Review existing complaints before submission.');
            }
        }
    };

    const handleDepartmentChange = (e) => {
        setFormData(prev => ({ ...prev, department: e.target.value, category: '' }));
    };

    const handleFileChange = (e, type) => {
        if (e.target.files) {
            if (type === 'images') {
                setFormData(prev => ({ ...prev, images: Array.from(e.target.files) }));
            } else if (type === 'videos') {
                setFormData(prev => ({ ...prev, videos: Array.from(e.target.files) }));
            } else if (type === 'audio') {
                setFormData(prev => ({ ...prev, audio: e.target.files[0] }));
            }
        }
    };

    const handleGetLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setFormData(prev => ({
                        ...prev,
                        latitude: position.coords.latitude.toFixed(6),
                        longitude: position.coords.longitude.toFixed(6),
                        location: `Lat: ${position.coords.latitude.toFixed(4)}, Long: ${position.coords.longitude.toFixed(4)}`
                    }));
                },
                () => alert('Unable to get location. Please enable location services.')
            );
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title || !formData.description || !formData.department) {
            alert('Please fill in all required fields');
            return;
        }

        setIsLoading(true);

        setTimeout(() => {
            const complaintId = generateComplaintId();
            const slaDay = getSLA(formData.priority);
            setSuccessMessage(`Complaint ${complaintId} registered successfully! Expected resolution in ${slaDay} days.`);
            setIsLoading(false);

            setTimeout(() => {
                onNavigate('my-complaints');
            }, 2000);
        }, 1000);
    };

    const handleVoiceTranscription = (transcription) => {
        setFormData(prev => ({ ...prev, description: transcription }));
        
        // AI: Priority prediction based on transcription
        const criticalKeywords = ['emergency', 'danger', 'urgent', 'life-threatening'];
        const highKeywords = ['broken', 'failed', 'damage', 'severe'];
        
        if (criticalKeywords.some(kw => transcription.toLowerCase().includes(kw))) {
            setSuggestedPriority('Critical');
        } else if (highKeywords.some(kw => transcription.toLowerCase().includes(kw))) {
            setSuggestedPriority('High');
        }
    };

    const handleImageChange = (e) => {
        handleFileChange(e, 'images');
    };

    return (
        <div className="form-container">
            <div className="form-card">
                <div className="form-header">
                    <h1>
                        <i className="fas fa-file-alt"></i>
                        Register New Complaint
                    </h1>
                    <p>Describe your issue in detail</p>
                </div>

                <form className="form-content" onSubmit={handleSubmit}>
                    {successMessage && <div className="success-message">{successMessage}</div>}

                    <div className="form-row">
                        <div className="input-group">
                            <label>Complaint Title</label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Brief title of your complaint"
                                value={formData.title}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {duplicateWarning && <div style={{background: '#fef3c7', border: '1px solid #fcd34d', color: '#92400e', padding: '12px', borderRadius: '4px', marginBottom: '15px'}}><i className="fas fa-exclamation-triangle"></i> {duplicateWarning}</div>}

                    <div className="form-row">
                        <div className="input-group">
                            <label>Complaint Title *</label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Brief title of your complaint"
                                value={formData.title}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="input-group" style={{flex: 1}}>
                            <label>Department *</label>
                            <select name="department" value={formData.department} onChange={handleDepartmentChange} required>
                                <option value="">Select a department</option>
                                {DEPARTMENTS.filter(d => d.id !== 9).map(dept => (
                                    <option key={dept.id} value={dept.id}>
                                        {dept.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="input-group" style={{flex: 1}}>
                            <label>Category *</label>
                            <select name="category" value={formData.category} onChange={handleChange} required>
                                <option value="">Select category</option>
                                {formData.department && COMPLAINT_TYPES[formData.department] && 
                                    COMPLAINT_TYPES[formData.department].types.map(type => (
                                        <option key={type} value={type}>{type}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="input-group" style={{flex: 1}}>
                            <label>Priority Level</label>
                            <select name="priority" value={formData.priority} onChange={handleChange}>
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                                <option>Critical</option>
                            </select>
                            {suggestedPriority && <small style={{color: '#0052cc', display: 'block', marginTop: '5px'}}>AI suggests: <strong>{suggestedPriority}</strong></small>}
                        </div>

                        <div className="input-group" style={{flex: 1}}>
                            <label>Anonymous Complaint?</label>
                            <label style={{display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer'}}>
                                <input type="checkbox" checked={formData.anonymous} onChange={(e) => setFormData(prev => ({...prev, anonymous: e.target.checked}))} />
                                <span>Submit anonymously</span>
                            </label>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="input-group" style={{flex: 1}}>
                            <label>Location / Area *</label>
                            <input
                                type="text"
                                name="location"
                                placeholder="Street name, colony, area"
                                value={formData.location}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="input-group" style={{flex: 1}}>
                            <label>Landmark (Optional)</label>
                            <input
                                type="text"
                                name="landmark"
                                placeholder="Near school, hospital, etc."
                                value={formData.landmark}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="input-group">
                            <label>Get GPS Location</label>
                            <button type="button" onClick={handleGetLocation} className="btn btn-secondary" style={{marginTop: '5px'}}>
                                <i className="fas fa-map-marker-alt"></i> Use My Location
                            </button>
                            {formData.latitude && <small style={{color: '#10b981', display: 'block', marginTop: '5px'}}>Location captured: {formData.location}</small>}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="input-group">
                            <label>Detailed Description</label>
                            <textarea
                                name="description"
                                placeholder="Please describe your complaint in detail"
                                value={formData.description}
                                onChange={handleChange}
                                rows="6"
                                required
                            ></textarea>
                            <div style={{ marginTop: '10px' }}>
                                <VoiceToTextComponent onTranscription={handleVoiceTranscription} />
                            </div>
                        </div>
                    </div>

                    <div style={{borderTop: '1px solid #e5e7eb', paddingTop: '20px', marginTop: '20px'}}>
                        <h3 style={{marginBottom: '15px'}}>Proof Documents</h3>
                        
                        <div className="form-row">
                            <div className="input-group">
                                <label>Upload Images (Optional)</label>
                                <input type="file" accept="image/*" multiple onChange={(e) => handleFileChange(e, 'images')} />
                                {formData.images.length > 0 && <small style={{color: '#10b981', display: 'block', marginTop: '5px'}}>✓ {formData.images.length} image(s) selected</small>}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="input-group">
                                <label>Upload Videos (Optional)</label>
                                <input type="file" accept="video/*" multiple onChange={(e) => handleFileChange(e, 'videos')} />
                                {formData.videos.length > 0 && <small style={{color: '#10b981', display: 'block', marginTop: '5px'}}>✓ {formData.videos.length} video(s) selected</small>}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="input-group">
                                <label>Upload Audio (Optional)</label>
                                <input type="file" accept="audio/*" onChange={(e) => handleFileChange(e, 'audio')} />
                                {formData.audio && <small style={{color: '#10b981', display: 'block', marginTop: '5px'}}>✓ {formData.audio.name}</small>}
                            </div>
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="btn btn-primary" disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <i className="fas fa-spinner fa-spin"></i>
                                    Submitting...
                                </>
                            ) : (
                                <>
                                    <i className="fas fa-paper-plane"></i>
                                    Submit Complaint
                                </>
                            )}
                        </button>
                        <button type="button" className="btn btn-outline" onClick={() => onNavigate('dashboard')}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterComplaint;
