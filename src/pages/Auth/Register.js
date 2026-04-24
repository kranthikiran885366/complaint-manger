'use client';

import React, { useState } from 'react';
import { validateEmail, validatePhone } from '../../utils/helpers';
import '../../styles/auth-professional.css';

const Register = ({ onNavigate, onLoginSuccess }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        role: 'citizen',
        address: '',
        password: '',
        confirmPassword: '',
        terms: false
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ 
            ...prev, 
            [name]: type === 'checkbox' ? checked : value 
        }));
        setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fullName) newErrors.fullName = 'Full Name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.mobile) {
            newErrors.mobile = 'Mobile number is required';
        } else if (!validatePhone(formData.mobile)) {
            newErrors.mobile = 'Invalid mobile number format';
        }
        if (!formData.role) newErrors.role = 'Please select a role';
        if (!formData.address) newErrors.address = 'Address is required';
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            setIsLoading(true);
            setTimeout(() => {
                setSuccessMessage('Account created successfully! Redirecting...');
                setTimeout(() => {
                    onLoginSuccess(formData.role || 'citizen');
                }, 1500);
            }, 2000);
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className="auth-container register" style={{backgroundImage: 'url(/images/form-bg.jpg)'}}>
            <div className="auth-overlay"></div>
            <div className="auth-content">
                <div className="auth-card register-card">
                    <div className="auth-logo">
                        <i className="fas fa-shield-alt"></i>
                        <h2>SCMS</h2>
                    </div>

                    <h1 className="auth-title">Create Account</h1>
                    <p className="auth-subtitle">Register to file and track complaints</p>

                    {successMessage && (
                        <div className="alert alert-success">
                            <i className="fas fa-check-circle"></i>
                            {successMessage}
                        </div>
                    )}

                    <form className="auth-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Full Name</label>
                                <div className="input-wrapper">
                                    <i className="fas fa-user"></i>
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="Your full name"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className={errors.fullName ? 'form-error-input' : ''}
                                    />
                                </div>
                                {errors.fullName && <span className="form-error">{errors.fullName}</span>}
                            </div>

                            <div className="form-group">
                                <label>Role</label>
                                <div className="input-wrapper">
                                    <i className="fas fa-user-tag"></i>
                                    <select
                                        name="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                        className={errors.role ? 'form-error-input' : ''}
                                    >
                                        <option value="citizen">Citizen</option>
                                        <option value="officer">Officer</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
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
                                <label>Mobile Number</label>
                                <div className="input-wrapper">
                                    <i className="fas fa-phone"></i>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        placeholder="Your mobile number"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        className={errors.mobile ? 'form-error-input' : ''}
                                    />
                                </div>
                                {errors.mobile && <span className="form-error">{errors.mobile}</span>}
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Address</label>
                            <div className="input-wrapper">
                                <i className="fas fa-map-marker"></i>
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Your residential address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className={errors.address ? 'form-error-input' : ''}
                                />
                            </div>
                            {errors.address && <span className="form-error">{errors.address}</span>}
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Password</label>
                                <div className="input-wrapper">
                                    <i className="fas fa-lock"></i>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="••••••••"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className={errors.password ? 'form-error-input' : ''}
                                    />
                                </div>
                                {errors.password && <span className="form-error">{errors.password}</span>}
                            </div>

                            <div className="form-group">
                                <label>Confirm Password</label>
                                <div className="input-wrapper">
                                    <i className="fas fa-lock"></i>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="••••••••"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className={errors.confirmPassword ? 'form-error-input' : ''}
                                    />
                                </div>
                                {errors.confirmPassword && <span className="form-error">{errors.confirmPassword}</span>}
                            </div>
                        </div>

                        <label className="checkbox">
                            <input
                                type="checkbox"
                                name="terms"
                                checked={formData.terms}
                                onChange={handleChange}
                            />
                            <span>I agree to the <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a></span>
                        </label>
                        {errors.terms && <span className="form-error">{errors.terms}</span>}

                        <button type="submit" className="btn btn-primary btn-large" disabled={isLoading} style={{width: '100%'}}>
                            {isLoading ? 'Creating account...' : 'Create Account'}
                        </button>
                    </form>

                    <div className="auth-divider">or</div>

                    <div className="auth-footer">
                        <p>Already have an account? <button type="button" className="auth-link" onClick={() => onNavigate('login')}>Sign in</button></p>
                    </div>
                </div>

                <div className="auth-side">
                    <div className="auth-info">
                        <h3>Quick & Easy Registration</h3>
                        <p>Join thousands of satisfied users</p>
                        <ul className="auth-features">
                            <li><i className="fas fa-check"></i> Takes just 2 minutes</li>
                            <li><i className="fas fa-check"></i> No hidden charges</li>
                            <li><i className="fas fa-check"></i> Safe & secure</li>
                            <li><i className="fas fa-check"></i> Instant activation</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
