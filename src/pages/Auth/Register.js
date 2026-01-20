'use client';

import React, { useState } from 'react';
import { validateEmail, validatePhone } from '../../utils/helpers';
import '../../styles/register-modern.css';

const Register = ({ onNavigate, onLoginSuccess }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        role: '',
        departmentOfficer: '',
        department: '',
        address: '',
        password: '',
        confirmPassword: '',
        verifyOTP: false
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
        <div className="register-container-modern">
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
                        <i classN'use client';

import React, { useState } from 'react';
import { validateEmail, validatePhone } from '../../utils/helpers';
import '../../styles/register-modern.css';

const Register = ({ onNavigate, onLoginSuccess }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        role: '',
        departmentOfficer: '',
        department: '',
        address: '',
        password: '',
        confirmPassword: '',
        verifyOTP: false
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
        <div className="register-container-modern">
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
                    <p>User Registration</p>
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
                            <i className="fas fa-user"></i>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                value={formData.fullName}
                                onChange={handleChange}
                                className={errors.fullName ? 'error' : ''}
                            />
                        </div>
                        {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                    </div>

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
                            <i className="fas fa-mobile-alt"></i>
                            <input
                                type="tel"
                                name="mobile"
                                placeholder="Mobile Number"
                                value={formData.mobile}
                                onChange={handleChange}
                                className={errors.mobile ? 'error' : ''}
                            />
                        </div>
                        {errors.mobile && <span className="error-text">{errors.mobile}</span>}
                    </div>

                    <div className="form-field">
                        <div className="select-wrapper">
                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className={errors.role ? 'error' : ''}
                            >
                                <option value="">Select Role</option>
                                <option value="citizen">Citizen</option>
                                <option value="officer">Officer</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        {errors.role && <span className="error-text">{errors.role}</span>}
                    </div>

                    <div className="form-field">
                        <div className="select-wrapper-icon">
                            <i className="fas fa-user-tie"></i>
                            <select
                                name="departmentOfficer"
                                value={formData.departmentOfficer}
                                onChange={handleChange}
                            >
                                <option value="">Department Officer</option>
                                <option value="senior">Senior Officer</option>
                                <option value="junior">Junior Officer</option>
                                <option value="manager">Department Manager</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-field">
                        <div className="select-wrapper-icon">
                            <i className="fas fa-building"></i>
                            <select
                                name="department"
                                value={formData.department}
                                onChange={handleChange}
                            >
                                <option value="">Select Department</option>
                                <option value="water">Water Supply</option>
                                <option value="electricity">Electricity</option>
                                <option value="transport">Transport</option>
                                <option value="health">Health</option>
                                <option value="waste">Waste Management</option>
                                <option value="roads">Road & Infrastructure</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-field">
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={formData.address}
                            onChange={handleChange}
                            className={errors.address ? 'error' : ''}
                        />
                        {errors.address && <span className="error-text">{errors.address}</span>}
                    </div>

                    <div className="form-field">
                        <div className="input-icon-wrapper">
                            <i className="fas fa-lock"></i>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                className={errors.password ? 'error' : ''}
                            />
                        </div>
                        {errors.password && <span className="error-text">{errors.password}</span>}
                    </div>

                    <div className="form-field">
                        <div className="input-icon-wrapper">
                            <i className="fas fa-lock"></i>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className={errors.confirmPassword ? 'error' : ''}
                            />
                        </div>
                        {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
                    </div>

                    <div className="form-field checkbox-field">
                        <label className="checkbox-container">
                            <input
                                type="checkbox"
                                name="verifyOTP"
                                checked={formData.verifyOTP}
                                onChange={handleChange}
                            />
                            <span className="checkmark-custom"></span>
                            <span className="checkbox-label">Verify with OTP</span>
                        </label>
                    </div>

                    <button type="submit" className="register-button" disabled={isLoading}>
                        {isLoading ? 'Registering...' : 'Register'}
                    </button>

                    <div className="register-footer">
                        <p>
                            Already have an account?{' '}
                            <button type="button" className="login-link" onClick={() => onNavigate('login')}>
                                Login
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;