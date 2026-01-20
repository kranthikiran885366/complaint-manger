'use client';

import React, { useState } from 'react';
import '../../styles/complaint-detail.css';

const ComplaintFeedback = ({ complaintId, user, onNavigate }) => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [feedbackImage, setFeedbackImage] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert('Please provide a rating');
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      onNavigate('my-complaints');
    }, 2000);
  };

  if (submitted) {
    return (
      <div style={{flex: 1, padding: '20px'}}>
        <div style={{background: '#d1fae5', border: '1px solid #6ee7b7', borderRadius: '8px', padding: '20px', textAlign: 'center'}}>
          <i className="fas fa-check-circle" style={{fontSize: '48px', color: '#10b981'}}></i>
          <h3 style={{color: '#059669', marginTop: '10px'}}>Feedback Submitted</h3>
          <p>Thank you for your feedback. It helps us improve our services.</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{flex: 1, padding: '20px'}}>
      <button onClick={() => onNavigate('my-complaints')} className="btn btn-secondary" style={{marginBottom: '20px'}}>
        <i className="fas fa-arrow-left"></i> Back
      </button>

      <div className="complaint-card">
        <h2>Rate Your Experience</h2>
        <p style={{marginBottom: '30px', color: '#6b7280'}}>Help us improve by rating your complaint resolution experience</p>

        <form onSubmit={handleSubmitFeedback}>
          <div className="form-group">
            <label>Overall Rating</label>
            <div style={{display: 'flex', gap: '10px', fontSize: '32px', marginBottom: '20px'}}>
              {[1, 2, 3, 4, 5].map(star => (
                <span
                  key={star}
                  onClick={() => setRating(star)}
                  style={{
                    cursor: 'pointer',
                    color: star <= rating ? '#f59e0b' : '#d1d5db',
                    transition: 'all 0.2s'
                  }}
                >
                  <i className="fas fa-star"></i>
                </span>
              ))}
            </div>
            <small style={{display: 'block', marginBottom: '20px'}}>
              {rating === 0 && 'Please select a rating'}
              {rating === 1 && 'Poor - Not satisfied with resolution'}
              {rating === 2 && 'Fair - Partially satisfied'}
              {rating === 3 && 'Good - Satisfied'}
              {rating === 4 && 'Very Good - Very satisfied'}
              {rating === 5 && 'Excellent - Completely satisfied'}
            </small>
          </div>

          <div className="form-group">
            <label>Your Feedback (Optional)</label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Share your experience and suggestions for improvement..."
              rows="5"
              style={{width: '100%', padding: '10px', border: '1px solid #e5e7eb', borderRadius: '4px', fontFamily: 'inherit'}}
            />
          </div>

          <div className="form-group">
            <label>Upload Image (Optional)</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFeedbackImage(e.target.files[0])}
              style={{display: 'block', marginTop: '10px'}}
            />
            {feedbackImage && <small style={{color: '#10b981'}}>✓ {feedbackImage.name}</small>}
          </div>

          <div style={{marginTop: '30px', display: 'flex', gap: '10px'}}>
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-check"></i> Submit Feedback
            </button>
            <button type="button" onClick={() => onNavigate('my-complaints')} className="btn btn-secondary">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ComplaintFeedback;
