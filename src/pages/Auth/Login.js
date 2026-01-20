'use client';

import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import '../../styles/register-modern.css';

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
        <div className="register-container-modern">
            {/* Background Illustrations */}
            <div className="register-background">
                <div className="bg-illustration left">
                    <div className="people-illustration"></div>
                </div>
                <div className="bg-illustration right">
                    <div className="dept-icon water">
                        <i className="fas fa-tint"></i>
                        <span>Water Supply</span>
                    </div>
                    <div className="dept-icon electricity">
                        <i className="fas fa-bolt"></i>
                        <span>Electricity</span>
                    </div>
                    <div className="dept-icon transport">
                        <i className="fas fa-bus"></i>
                        <span>Transport</span>
                    </div>
                    <div className="dept-icon health">
                        <i className="fas fa-heartbeat"></i>
                        <span>Health</span>
                    </div>
                </div>
            </div>

            <div className="register-card-centered">
                <div className="register-header">
                    <h1>Smart Complaint Management System</h1>
                    <p>User Login</p>
                </div>

                <form className="register-form-simple" onSubmit={handleSubmit}>
                    {successMessage && (
                        <div className="success-alert">
                            <i className="fas fa-check-circle"></i>
                            {successMessage}
                        </div>
                    )}

                    <div className="form-field">
                        <div className="input-icon-wrapper">
                            <i className="fas fa-envelope"></i>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? 'error' : ''}
                            />
                        </div>
                        {errors.email && <span className="error-text">{errors.email}</span>}
                    </div>

                    <div className="form-field">
                        <div className="input-icon-wrapper">
                            <i className="fas fa-lock"></i>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                className={errors.password ? 'error' : ''}
                            />
                            <button
                                type="button"
                                className="toggle-password"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{
                                    position: 'absolute',
                                    right: '16px',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: '#9ca3af'
                                }}
                            >
                                <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                            </button>
                        </div>
                        {errors.password && <span className="error-text">{errors.password}</span>}
                    </div>

                    <div className="form-field checkbox-field">
                        <label className="checkbox-container">
                            <input
                                type="checkbox"
                                name="rememberMe"
                                defaultChecked
                            />
                            <span className="checkmark-custom"></span>
                            <span className="checkbox-label">Keep me signed in</span>
                        </label>
                    </div>

                    <button type="submit" className="register-button" disabled={isLoading}>
                        {isLoading ? 'Signing in...' : 'Sign In'}
                    </button>

                    <div className="register-footer">
                        <p>
                            Don't have an account?{' '}
                            <button type="button" className="login-link" onClick={() => onNavigate('register')}>
                                Register
                            </button>
                        </p>
                        <p>
                            <button type="button" className="login-link" onClick={() => onNavigate('forgot-password')}>
                                Forgot Password?
                            </button>
                        </p>
                    </div>

                    {/* Demo Credentials */}
                    <div style={{
                        marginTop: '20px',
                        padding: '15px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}>
                        <h4 style={{ color: 'white', fontSize: '14px', marginBottom: '10px' }}>Demo Credentials:</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '12px' }}>
                            <div style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                                <strong>Citizen:</strong> citizen@email.com
                            </div>
                            <div style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                                <strong>Officer:</strong> officer@email.com
                            </div>
                            <div style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                                <strong>Admin:</strong> admin@email.com
                            </div>
                            <div style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                                <strong>Password:</strong> password123
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
