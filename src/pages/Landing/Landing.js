'use client';

import React, { useState } from 'react';
import '../../styles/landing-professional.css';

const Landing = ({ onNavigate }) => {
    const [activeTab, setActiveTab] = useState('citizen');

    return (
        <div className="landing-container">
            {/* Hero Section */}
            <section className="hero-section" style={{backgroundImage: 'url(/images/hero-bg.jpg)'}}>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <div className="container">
                        <div className="hero-text">
                            <div className="hero-badge">
                                <i className="fas fa-check-circle"></i>
                                Government Certified Platform
                            </div>
                            <h1>Smart Complaint Management System</h1>
                            <p>Empowering citizens with transparent, efficient, and accountable public service resolution</p>
                            <div className="hero-buttons">
                                <button className="btn btn-primary btn-large" onClick={() => onNavigate('register')}>
                                    <i className="fas fa-plus-circle"></i> Register Complaint
                                </button>
                                <button className="btn btn-outline btn-large" onClick={() => onNavigate('login')}>
                                    <i className="fas fa-search"></i> Track Status
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Metrics Section */}
            <section className="metrics-section">
                <div className="container">
                    <div className="metrics-grid">
                        <div className="metric-card">
                            <h3>245+</h3>
                            <p>Complaints Resolved</p>
                        </div>
                        <div className="metric-card">
                            <h3>98%</h3>
                            <p>Satisfaction Rate</p>
                        </div>
                        <div className="metric-card">
                            <h3>8.5</h3>
                            <p>Days Avg Resolution</p>
                        </div>
                        <div className="metric-card">
                            <h3>24/7</h3>
                            <p>Support Available</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Why Choose SCMS?</h2>
                        <p>Experience the future of public service with our comprehensive complaint management platform</p>
                    </div>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-clock"></i>
                            </div>
                            <h3>Real-time Tracking</h3>
                            <p>Monitor your complaint journey with live updates and detailed progress timeline</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <h3>Secure & Transparent</h3>
                            <p>Bank-level security with complete transparency and end-to-end encryption</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-mobile-alt"></i>
                            </div>
                            <h3>Mobile-Friendly</h3>
                            <p>Optimized for all devices with offline capability and voice submissions</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-brain"></i>
                            </div>
                            <h3>AI-Powered Routing</h3>
                            <p>Smart complaint categorization and automatic routing to the right department</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <h3>Analytics Dashboard</h3>
                            <p>Comprehensive insights and reports with real-time data visualization</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-users"></i>
                            </div>
                            <h3>Multi-Department Hub</h3>
                            <p>Connect with government departments through a unified platform</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Departments Section */}
            <section className="departments-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Connected Departments</h2>
                        <p>Report issues directly to the right department for faster resolution</p>
                    </div>
                    <div className="departments-grid">
                        <div className="department-card">
                            <div className="dept-icon">
                                <i className="fas fa-water"></i>
                            </div>
                            <h3>Municipal Services</h3>
                            <p>Roads, Water, Sanitation, Street Lighting</p>
                            <span className="dept-badge">45 Active</span>
                        </div>
                        <div className="department-card">
                            <div className="dept-icon">
                                <i className="fas fa-hospital"></i>
                            </div>
                            <h3>Health Department</h3>
                            <p>Hospitals, PHCs, Ambulance Services</p>
                            <span className="dept-badge">23 Active</span>
                        </div>
                        <div className="department-card">
                            <div className="dept-icon">
                                <i className="fas fa-shield"></i>
                            </div>
                            <h3>Police Department</h3>
                            <p>Law & Order, Traffic, Emergency Response</p>
                            <span className="dept-badge">12 Active</span>
                        </div>
                        <div className="department-card">
                            <div className="dept-icon">
                                <i className="fas fa-book"></i>
                            </div>
                            <h3>Education Department</h3>
                            <p>Schools, Infrastructure, Teacher Issues</p>
                            <span className="dept-badge">18 Active</span>
                        </div>
                        <div className="department-card">
                            <div className="dept-icon">
                                <i className="fas fa-bolt"></i>
                            </div>
                            <h3>Electricity Department</h3>
                            <p>Power Supply, Outages, Billing Issues</p>
                            <span className="dept-badge">31 Active</span>
                        </div>
                        <div className="department-card">
                            <div className="dept-icon">
                                <i className="fas fa-wifi"></i>
                            </div>
                            <h3>Telecom Department</h3>
                            <p>Internet, Phone Lines, Network Issues</p>
                            <span className="dept-badge">15 Active</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="how-it-works">
                <div className="container">
                    <div className="section-header">
                        <h2>How It Works</h2>
                        <p>Simple 4-step process to lodge and track your complaint</p>
                    </div>
                    <div className="steps-grid">
                        <div className="step-card">
                            <div className="step-number">1</div>
                            <h3>Register</h3>
                            <p>Create an account with your email or phone number</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">2</div>
                            <h3>Report</h3>
                            <p>File a detailed complaint with images and documents</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">3</div>
                            <h3>Track</h3>
                            <p>Monitor progress with real-time updates</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">4</div>
                            <h3>Resolve</h3>
                            <p>Receive resolution and provide feedback</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* User Types Section */}
            <section className="user-types">
                <div className="container">
                    <div className="section-header">
                        <h2>For Everyone</h2>
                        <p>Tailored features for citizens, officers, and administrators</p>
                    </div>
                    <div className="tabs">
                        <button className={`tab-btn ${activeTab === 'citizen' ? 'active' : ''}`} onClick={() => setActiveTab('citizen')}>
                            <i className="fas fa-user"></i> Citizens
                        </button>
                        <button className={`tab-btn ${activeTab === 'officer' ? 'active' : ''}`} onClick={() => setActiveTab('officer')}>
                            <i className="fas fa-id-card"></i> Officers
                        </button>
                        <button className={`tab-btn ${activeTab === 'admin' ? 'active' : ''}`} onClick={() => setActiveTab('admin')}>
                            <i className="fas fa-cog"></i> Admins
                        </button>
                    </div>
                    <div className="tab-content">
                        {activeTab === 'citizen' && (
                            <div className="content-grid">
                                <div className="content-item">
                                    <i className="fas fa-check"></i>
                                    <h4>Easy Complaint Registration</h4>
                                    <p>Simple form with guided steps and drag-drop file upload</p>
                                </div>
                                <div className="content-item">
                                    <i className="fas fa-check"></i>
                                    <h4>Real-time Status Updates</h4>
                                    <p>Get instant notifications via SMS, email, and push</p>
                                </div>
                                <div className="content-item">
                                    <i className="fas fa-check"></i>
                                    <h4>Feedback & Rating</h4>
                                    <p>Rate the resolution and provide valuable feedback</p>
                                </div>
                                <div className="content-item">
                                    <i className="fas fa-check"></i>
                                    <h4>Digital Documentation</h4>
                                    <p>Maintain records and certificates online</p>
                                </div>
                            </div>
                        )}
                        {activeTab === 'officer' && (
                            <div className="content-grid">
                                <div className="content-item">
                                    <i className="fas fa-check"></i>
                                    <h4>Complaint Dashboard</h4>
                                    <p>View and manage assigned complaints efficiently</p>
                                </div>
                                <div className="content-item">
                                    <i className="fas fa-check"></i>
                                    <h4>Priority Management</h4>
                                    <p>Categorize and prioritize complaints</p>
                                </div>
                                <div className="content-item">
                                    <i className="fas fa-check"></i>
                                    <h4>Team Collaboration</h4>
                                    <p>Share updates and coordinate with team</p>
                                </div>
                                <div className="content-item">
                                    <i className="fas fa-check"></i>
                                    <h4>Performance Metrics</h4>
                                    <p>Track your resolution efficiency and ratings</p>
                                </div>
                            </div>
                        )}
                        {activeTab === 'admin' && (
                            <div className="content-grid">
                                <div className="content-item">
                                    <i className="fas fa-check"></i>
                                    <h4>System Administration</h4>
                                    <p>User management and role-based access control</p>
                                </div>
                                <div className="content-item">
                                    <i className="fas fa-check"></i>
                                    <h4>Analytics & Reporting</h4>
                                    <p>Comprehensive insights and departmental reports</p>
                                </div>
                                <div className="content-item">
                                    <i className="fas fa-check"></i>
                                    <h4>System Configuration</h4>
                                    <p>Customize departments, categories, and workflows</p>
                                </div>
                                <div className="content-item">
                                    <i className="fas fa-check"></i>
                                    <h4>Audit Trails</h4>
                                    <p>Complete logging and compliance documentation</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Frequently Asked Questions</h2>
                        <p>Find answers to common questions about our platform</p>
                    </div>
                    <div className="faq-grid">
                        <div className="faq-item">
                            <h4>
                                <i className="fas fa-question-circle"></i>
                                Is my complaint information secure?
                            </h4>
                            <p>Yes, we use bank-level encryption (SSL/TLS) and secure servers to protect your personal information.</p>
                        </div>
                        <div className="faq-item">
                            <h4>
                                <i className="fas fa-question-circle"></i>
                                How long does it take to resolve a complaint?
                            </h4>
                            <p>Average resolution time is 8-10 days depending on the complexity and department handling it.</p>
                        </div>
                        <div className="faq-item">
                            <h4>
                                <i className="fas fa-question-circle"></i>
                                Can I track my complaint status online?
                            </h4>
                            <p>Yes, you can log in anytime to view real-time updates on your complaint status.</p>
                        </div>
                        <div className="faq-item">
                            <h4>
                                <i className="fas fa-question-circle"></i>
                                Do I need an email to register?
                            </h4>
                            <p>No, you can register using your email address or mobile phone number.</p>
                        </div>
                        <div className="faq-item">
                            <h4>
                                <i className="fas fa-question-circle"></i>
                                Is there a fee for using this service?
                            </h4>
                            <p>No, registering and filing complaints is completely free for all citizens.</p>
                        </div>
                        <div className="faq-item">
                            <h4>
                                <i className="fas fa-question-circle"></i>
                                What if I'm not satisfied with the resolution?
                            </h4>
                            <p>You can escalate your complaint or request a review through our escalation system.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <h2>Ready to Make a Difference?</h2>
                    <p>Join thousands of citizens who have successfully resolved their complaints</p>
                    <div className="cta-buttons">
                        <button className="btn btn-primary btn-large" onClick={() => onNavigate('register')}>
                            Get Started Now
                        </button>
                        <button className="btn btn-secondary btn-large" onClick={() => onNavigate('login')}>
                            Sign In
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-col">
                            <h4>About</h4>
                            <ul>
                                <li><a href="#about">About SCMS</a></li>
                                <li><a href="#mission">Our Mission</a></li>
                                <li><a href="#contact">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Support</h4>
                            <ul>
                                <li><a href="#help">Help Center</a></li>
                                <li><a href="#faqs">FAQs</a></li>
                                <li><a href="#guide">User Guide</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Legal</h4>
                            <ul>
                                <li><a href="#privacy">Privacy Policy</a></li>
                                <li><a href="#terms">Terms of Service</a></li>
                                <li><a href="#cookies">Cookie Policy</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Follow Us</h4>
                            <div className="social-links">
                                <a href="#facebook"><i className="fab fa-facebook"></i></a>
                                <a href="#twitter"><i className="fab fa-twitter"></i></a>
                                <a href="#linkedin"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2024 Smart Complaint Management System. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Landing;
