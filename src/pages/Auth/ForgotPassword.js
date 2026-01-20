'use client';

import React, { useState } from 'react';
import '../../styles/register-modern.css';

const ForgotPassword = ({ onNavigate }) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSendOTP = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage('Please enter your email');
      return;
    }
    setMessage('');
    setStep(2);
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    if (!otp || otp.length < 6) {
      setMessage('Please enter a valid 6-digit OTP');
      return;
    }
    setMessage('');
    setStep(3);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!newPassword || newPassword.length < 8) {
      setMessage('Password must be at least 8 characters');
      return;
    }
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    alert('Password reset successful! Please login with your new password.');
    onNavigate('login');
  };

  return (
    <div className="register-container">
      <div className="register-card-centered">
        <div className="register-header">
          <h2 className="register-title">Reset Password</h2>
          <p className="register-subtitle">Recover your account access</p>
        </div>

        <div className="step-indicator">
          <div className={`step-dot ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}></div>
          <div className={`step-dot ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}></div>
          <div className={`step-dot ${step >= 3 ? 'active' : ''}`}></div>
        </div>

        {step === 1 && (
          <form onSubmit={handleSendOTP} className="register-form">
            <div className="form-field">
              <label className="form-label">Email Address</label>
              <div className="input-icon-wrapper">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your registered email"
                  className="form-input"
                />
              </div>
            </div>
            {message && <div className="error-message">{message}</div>}
            <button type="submit" className="register-btn">Send OTP</button>
            <p className="login-link">
              Remember your password? <a href="#" onClick={() => onNavigate('login')}>Login</a>
            </p>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleVerifyOTP} className="register-form">
            <div className="form-field">
              <label className="form-label">Enter OTP</label>
              <div className="input-icon-wrapper">
                <input
                  type="text"
                  maxLength="6"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter 6-digit OTP"
                  className="form-input"
                />
              </div>
            </div>
            {message && <div className="error-message">{message}</div>}
            <button type="submit" className="register-btn">Verify OTP</button>
            <p className="login-link">
              Didn't receive OTP? <a href="#" onClick={handleSendOTP}>Resend</a>
            </p>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleResetPassword} className="register-form">
            <div className="form-field">
              <label className="form-label">New Password</label>
              <div className="input-icon-wrapper">
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  className="form-input"
                />
              </div>
            </div>
            <div className="form-field">
              <label className="form-label">Confirm Password</label>
              <div className="input-icon-wrapper">
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  className="form-input"
                />
              </div>
            </div>
            {message && <div className="error-message">{message}</div>}
            <button type="submit" className="register-btn">Reset Password</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
