'use client';

import React, { useState } from 'react';
import '../../styles/auth-professional.css';

const ForgotPassword = ({ onNavigate }) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleSendOTP = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage('Please enter your email');
      setMessageType('error');
      return;
    }
    setMessage('');
    setStep(2);
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    if (!otp || otp.length < 6) {
      setMessage('Please enter a valid 6-digit OTP');
      setMessageType('error');
      return;
    }
    setMessage('');
    setStep(3);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!newPassword || newPassword.length < 8) {
      setMessage('Password must be at least 8 characters');
      setMessageType('error');
      return;
    }
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match');
      setMessageType('error');
      return;
    }
    setMessage('Password reset successful! Redirecting to login...');
    setMessageType('success');
    setTimeout(() => {
      onNavigate('login');
    }, 1500);
  };

  return (
    <div className="auth-container" style={{backgroundImage: 'url(/images/form-bg.jpg)'}}>
      <div className="auth-overlay"></div>
      <div className="auth-content">
        <div className="auth-card" style={{maxWidth: '500px', margin: '0 auto'}}>
          <div className="auth-logo">
            <i className="fas fa-key"></i>
            <h2>Reset Password</h2>
          </div>

          <h1 className="auth-title">Recover Your Account</h1>
          <p className="auth-subtitle">Follow the steps to reset your password</p>

          {/* Step Indicator */}
          <div style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            marginBottom: 'var(--spacing-2xl)',
            alignItems: 'center'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: step >= 1 ? 'var(--primary-blue)' : 'var(--gray-300)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              transition: 'all 0.3s'
            }}>
              {step > 1 ? <i className="fas fa-check"></i> : '1'}
            </div>
            <div style={{
              flex: 1,
              height: '2px',
              background: step > 1 ? 'var(--primary-blue)' : 'var(--gray-300)',
              transition: 'all 0.3s'
            }}></div>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: step >= 2 ? 'var(--primary-blue)' : 'var(--gray-300)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              transition: 'all 0.3s'
            }}>
              {step > 2 ? <i className="fas fa-check"></i> : '2'}
            </div>
            <div style={{
              flex: 1,
              height: '2px',
              background: step > 2 ? 'var(--primary-blue)' : 'var(--gray-300)',
              transition: 'all 0.3s'
            }}></div>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: step >= 3 ? 'var(--primary-blue)' : 'var(--gray-300)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              transition: 'all 0.3s'
            }}>
              3
            </div>
          </div>

          {message && (
            <div className={`alert ${messageType === 'success' ? 'alert-success' : 'alert-error'}`} style={{marginBottom: 'var(--spacing-lg)'}}>
              <i className={`fas fa-${messageType === 'success' ? 'check-circle' : 'exclamation-circle'}`}></i>
              {message}
            </div>
          )}

          <form className="auth-form" onSubmit={step === 1 ? handleSendOTP : step === 2 ? handleVerifyOTP : handleResetPassword}>
            {step === 1 && (
              <div className="form-group">
                <label>Email Address</label>
                <div className="input-wrapper">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="form-group">
                <label>Enter OTP</label>
                <div className="input-wrapper">
                  <i className="fas fa-shield-alt"></i>
                  <input
                    type="text"
                    maxLength="6"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="6-digit code"
                    style={{letterSpacing: '8px', fontSize: '16px', textAlign: 'center'}}
                  />
                </div>
                <p style={{fontSize: '12px', color: 'var(--gray-600)', marginTop: '8px', textAlign: 'center'}}>
                  Check your email for the verification code
                </p>
              </div>
            )}

            {step === 3 && (
              <>
                <div className="form-group">
                  <label>New Password</label>
                  <div className="input-wrapper">
                    <i className="fas fa-lock"></i>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <i className={`fas fa-eye${showPassword ? '-slash' : ''}`}></i>
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label>Confirm Password</label>
                  <div className="input-wrapper">
                    <i className="fas fa-lock"></i>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              </>
            )}

            <button type="submit" className="btn btn-primary btn-large" style={{width: '100%'}}>
              {step === 1 ? 'Send OTP' : step === 2 ? 'Verify OTP' : 'Reset Password'}
            </button>
          </form>

          <div className="auth-divider">or</div>

          <div className="auth-footer">
            <p>Remember your password? <button type="button" className="auth-link" onClick={() => onNavigate('login')}>Sign in</button></p>
          </div>
        </div>

        <div className="auth-side">
          <div className="auth-info">
            <h3>Need Help?</h3>
            <p>Follow these simple steps to regain access to your account</p>
            <ul className="auth-features">
              <li><i className="fas fa-check"></i> Verify your email address</li>
              <li><i className="fas fa-check"></i> Enter the OTP code</li>
              <li><i className="fas fa-check"></i> Set a new password</li>
              <li><i className="fas fa-check"></i> Login securely</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
