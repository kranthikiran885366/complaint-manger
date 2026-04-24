'use client';

import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import '../../styles/auth-professional.css';

const Login = ({ onNavigate, onLoginSuccess }) => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setSuccessMessage('Login successful! Redirecting...');
            setIsLoading(false);

            // Mock authentication - determine user role based on email
            let userRole = 'citizen';
            if (formData.email.includes('officer')) userRole = 'officer';
            if (formData.email.includes('admin') && !formData.email.includes('superadmin')) userRole = 'admin';
            if (formData.email.includes('superadmin')) userRole = 'super_admin';
            if (formData.email.includes('head') || formData.email.includes('depthead')) userRole = 'dept_head';

            setTimeout(() => {
                onLoginSuccess(userRole);
            }, 1000);
        }, 1500);
    };

    return (
        <div className="auth-container" style={{backgroundImage: 'url(/images/form-bg.jpg)'}}>
            <div className="auth-overlay"></div>
            <div className="auth-content">
                <div className="auth-card">
                    <div className="auth-logo">
                        <i className="fas fa-shield-alt"></i>
                        <h2>SCMS</h2>
                    </div>

                    <h1 className="auth-title">Welcome Back</h1>
                    <p className="auth-subtitle">Sign in to your account to continue</p>

                    {successMessage && (
                        <div className="alert alert-success">
                            <i className="fas fa-check-circle"></i>
                            {successMessage}
                        </div>
                    )}

                    <form className="auth-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Email Address</label>
                            <div className="input-wrapper">
                                <i className="fas fa-envelope"></i>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={errors.email ? 'form-error-input' : ''}
                                />
                            </div>
                            {errors.email && <span className="form-error">{errors.email}</span>}
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <div className="input-wrapper">
                                <i className="fas fa-lock"></i>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={errors.password ? 'form-error-input' : ''}
                                />
                                <button
                                    type="button"
                                    className="password-toggle"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <i className={`fas fa-eye${showPassword ? '-slash' : ''}`}></i>
                                </button>
                            </div>
                            {errors.password && <span className="form-error">{errors.password}</span>}
                        </div>

                        <div className="form-footer">
                            <label className="checkbox">
                                <input type="checkbox" name="remember" />
                                <span>Remember me</span>
                            </label>
                            <button type="button" className="forgot-link" onClick={() => onNavigate('forgot-password')}>
                                Forgot password?
                            </button>
                        </div>

                        <button type="submit" className="btn btn-primary btn-large" disabled={isLoading} style={{width: '100%'}}>
                            {isLoading ? 'Signing in...' : 'Sign In'}
                        </button>
                    </form>

                    <div className="auth-divider">or</div>

                    <div className="auth-footer">
                        <p>Don&apos;t have an account? <button type="button" className="auth-link" onClick={() => onNavigate('register')}>Create one</button></p>
                    </div>

                    <div className="demo-credentials">
                        <p>Demo Credentials:</p>
                        <small>Citizen: citizen@example.com</small>
                        <small>Officer: officer@example.com</small>
                        <small>Admin: admin@example.com</small>
                    </div>
                </div>

                <div className="auth-side">
                    <div className="auth-info">
                        <h3>Smart Complaint System</h3>
                        <p>Manage complaints efficiently with our government-approved platform</p>
                        <ul className="auth-features">
                            <li><i className="fas fa-check"></i> Real-time tracking</li>
                            <li><i className="fas fa-check"></i> Secure communication</li>
                            <li><i className="fas fa-check"></i> Multi-department support</li>
                            <li><i className="fas fa-check"></i> 24/7 accessibility</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
