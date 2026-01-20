'use client';

import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import '../../styles/landing.css';

const Landing = ({ onNavigate }) => {
    const heroImages = [
        '/images/hero-complaint-system.jpg',
        '/images/complaint-submission.jpg',
        '/images/notifications-alerts.jpg',
        '/images/citizen-dashboard.jpg',
        '/images/admin-dashboard.jpg',
        '/images/officer-dashboard.jpg',
        '/images/analytics-reports.jpg'
    ];

    const [currentHero, setCurrentHero] = useState(0);
    const [isVisible, setIsVisible] = useState({});

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHero((prev) => (prev + 1) % heroImages.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [heroImages.length]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
                        
                        // Animate counters when ai-features section becomes visible
                        if (entry.target.id === 'ai-features') {
                            // Add any specific animations for AI features if needed
                        }
                    }
                });
            },
            { threshold: 0.1 }
        );

        const sections = document.querySelectorAll('[data-animate]');
        sections.forEach((section) => observer.observe(section));

        // FAQ accordion functionality
        const handleFaqClick = (e) => {
            const faqItem = e.target.closest('.faq-item');
            if (faqItem) {
                faqItem.classList.toggle('active');
            }
        };

        document.addEventListener('click', (e) => {
            if (e.target.closest('.faq-question')) {
                handleFaqClick(e);
            }
        });

        return () => {
            observer.disconnect();
            document.removeEventListener('click', handleFaqClick);
        };
    }, []);

    return (
        <div className="landing">
            {/* Hero Section */}
            <section
                className="hero"
                style={{
                    backgroundImage: `linear-gradient(135deg, rgba(0,82,204,0.8) 0%, rgba(16,185,129,0.75) 100%), url(${heroImages[currentHero]})`,
                }}
            >
                <div className="hero-particles"></div>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <div className="hero-badge">
                        <i className="fas fa-shield-alt"></i>
                        Government Certified Platform
                    </div>
                    <h1 className="hero-title">Smart Complaint Management System</h1>
                    <p className="hero-subtitle">Empowering Citizens with Transparent, Efficient, and Accountable Public Service Resolution</p>
                    <div className="hero-stats">
                        <div className="hero-stat">
                            <span className="stat-number">245+</span>
                            <span className="stat-label">Complaints Resolved</span>
                        </div>
                        <div className="hero-stat">
                            <span className="stat-number">8.5</span>
                            <span className="stat-label">Days Avg Resolution</span>
                        </div>
                        <div className="hero-stat">
                            <span className="stat-number">98%</span>
                            <span className="stat-label">Satisfaction Rate</span>
                        </div>
                    </div>
                    <div className="hero-buttons">
                        <button className="btn btn-primary btn-large hero-btn-primary" onClick={() => onNavigate('register')}>
                            <i className="fas fa-plus-circle"></i>
                            Register Complaint
                        </button>
                        <button className="btn btn-outline btn-large hero-btn-outline" onClick={() => onNavigate('login')}>
                            <i className="fas fa-search"></i>
                            Track Status
                        </button>
                    </div>
                    <div className="hero-dots" aria-label="Background rotation" aria-live="polite">
                        {heroImages.map((_, idx) => (
                            <button 
                                key={idx} 
                                className={`dot ${idx === currentHero ? 'active' : ''}`}
                                onClick={() => setCurrentHero(idx)}
                                aria-label={`View slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features" data-animate id="features">
                <div className="container">
                    <div className="section-header">
                        <h2 className={isVisible.features ? 'animate-in' : ''}>Why Choose SCMS?</h2>
                        <p className={isVisible.features ? 'animate-in' : ''}>Experience the future of public service with our comprehensive complaint management platform</p>
                    </div>
                    <div className="features-grid">
                        <div className={`feature-card ${isVisible.features ? 'animate-in' : ''}`} style={{ animationDelay: '0.1s' }}>
                            <div className="feature-icon">
                                <i className="fas fa-clock"></i>
                            </div>
                            <div className="feature-content">
                                <h3>Real-time Tracking</h3>
                                <p>Monitor your complaint journey with live updates, SMS notifications, and detailed progress timeline.</p>
                                <div className="feature-highlight">24/7 Status Updates</div>
                            </div>
                        </div>

                        <div className={`feature-card ${isVisible.features ? 'animate-in' : ''}`} style={{ animationDelay: '0.2s' }}>
                            <div className="feature-icon">
                                <i className="fas fa-users-cog"></i>
                            </div>
                            <div className="feature-content">
                                <h3>Multi-Department Hub</h3>
                                <p>Connect with 8+ government departments through a single, unified platform for all your civic needs.</p>
                                <div className="feature-highlight">One-Stop Solution</div>
                            </div>
                        </div>

                        <div className={`feature-card ${isVisible.features ? 'animate-in' : ''}`} style={{ animationDelay: '0.3s' }}>
                            <div className="feature-icon">
                                <i className="fas fa-shield-check"></i>
                            </div>
                            <div className="feature-content">
                                <h3>Secure & Transparent</h3>
                                <p>Bank-level security with complete transparency. Every action is logged and accessible to you.</p>
                                <div className="feature-highlight">End-to-End Encryption</div>
                            </div>
                        </div>

                        <div className={`feature-card ${isVisible.features ? 'animate-in' : ''}`} style={{ animationDelay: '0.4s' }}>
                            <div className="feature-icon">
                                <i className="fas fa-mobile-alt"></i>
                            </div>
                            <div className="feature-content">
                                <h3>Mobile-First Design</h3>
                                <p>Optimized for all devices with offline capability and voice-to-text complaint submission.</p>
                                <div className="feature-highlight">Works Offline</div>
                            </div>
                        </div>

                        <div className={`feature-card ${isVisible.features ? 'animate-in' : ''}`} style={{ animationDelay: '0.5s' }}>
                            <div className="feature-icon">
                                <i className="fas fa-brain"></i>
                            </div>
                            <div className="feature-content">
                                <h3>AI-Powered Routing</h3>
                                <p>Smart complaint categorization and automatic routing to the right department for faster resolution.</p>
                                <div className="feature-highlight">Smart Automation</div>
                            </div>
                        </div>

                        <div className={`feature-card ${isVisible.features ? 'animate-in' : ''}`} style={{ animationDelay: '0.6s' }}>
                            <div className="feature-icon">
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <div className="feature-content">
                                <h3>Analytics Dashboard</h3>
                                <p>Comprehensive insights and reports for citizens, officers, and administrators with data visualization.</p>
                                <div className="feature-highlight">Real-time Insights</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Departments Section */}
            <section className="departments" data-animate id="departments">
                <div className="container">
                    <div className="section-header">
                        <h2 className={isVisible.departments ? 'animate-in' : ''}>Connected Departments</h2>
                        <p className={isVisible.departments ? 'animate-in' : ''}>Report issues directly to the right department for faster resolution</p>
                    </div>
                    <div className="departments-grid">
                        <div className={`department-card ${isVisible.departments ? 'animate-in' : ''}`} style={{ animationDelay: '0.1s' }}>
                            <div className="dept-image">
                                <img src="/images/municipal-services-dept.jpg" alt="Municipal Services" loading="lazy" />
                            </div>
                            <div className="dept-content">
                                <h3>Municipal Services</h3>
                                <p>Roads, Water Supply, Sanitation, Street Lighting</p>
                                <div className="dept-stats">
                                    <span>45 Active Cases</span>
                                    <span>6.2 days avg</span>
                                </div>
                            </div>
                        </div>

                        <div className={`department-card ${isVisible.departments ? 'animate-in' : ''}`} style={{ animationDelay: '0.2s' }}>
                            <div className="dept-image">
                                <img src="/images/health-dept.jpg" alt="Health Department" loading="lazy" />
                            </div>
                            <div className="dept-content">
                                <h3>Health Department</h3>
                                <p>Hospitals, PHCs, Ambulance Services</p>
                                <div className="dept-stats">
                                    <span>23 Active Cases</span>
                                    <span>4.1 days avg</span>
                                </div>
                            </div>
                        </div>

                        <div className={`department-card ${isVisible.departments ? 'animate-in' : ''}`} style={{ animationDelay: '0.3s' }}>
                            <div className="dept-image">
                                <img src="/images/police-dept.jpg" alt="Police Department" loading="lazy" />
                            </div>
                            <div className="dept-content">
                                <h3>Police Department</h3>
                                <p>Law & Order, Traffic, Emergency Response</p>
                                <div className="dept-stats">
                                    <span>12 Active Cases</span>
                                    <span>2.8 days avg</span>
                                </div>
                            </div>
                        </div>

                        <div className={`department-card ${isVisible.departments ? 'animate-in' : ''}`} style={{ animationDelay: '0.4s' }}>
                            <div className="dept-image">
                                <img src="/images/education-dept.jpg" alt="Education Department" loading="lazy" />
                            </div>
                            <div className="dept-content">
                                <h3>Education Department</h3>
                                <p>Schools, Infrastructure, Teacher Issues</p>
                                <div className="dept-stats">
                                    <span>18 Active Cases</span>
                                    <span>7.3 days avg</span>
                                </div>
                            </div>
                        </div>

                        <div className={`department-card ${isVisible.departments ? 'animate-in' : ''}`} style={{ animationDelay: '0.5s' }}>
                            <div className="dept-image">
                                <img src="/images/electricity-dept.jpg" alt="Electricity Department" loading="lazy" />
                            </div>
                            <div className="dept-content">
                                <h3>Electricity Department</h3>
                                <p>Power Supply, Outages, Billing Issues</p>
                                <div className="dept-stats">
                                    <span>31 Active Cases</span>
                                    <span>5.7 days avg</span>
                                </div>
                            </div>
                        </div>

                        <div className={`department-card ${isVisible.departments ? 'animate-in' : ''}`} style={{ animationDelay: '0.6s' }}>
                            <div className="dept-image">
                                <img src="/images/telecom-dept.jpg" alt="Telecom Department" loading="lazy" />
                            </div>
                            <div className="dept-content">
                                <h3>Telecom Department</h3>
                                <p>Internet, Phone Lines, Network Issues</p>
                                <div className="dept-stats">
                                    <span>15 Active Cases</span>
                                    <span>3.2 days avg</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Features Section */}
            <section className="ai-features" data-animate id="ai-features">
                <div className="container">
                    <div className="section-header">
                        <h2 className={isVisible['ai-features'] ? 'animate-in' : ''}>AI-Powered Smart Features</h2>
                        <p className={isVisible['ai-features'] ? 'animate-in' : ''}>Experience next-generation complaint management with artificial intelligence</p>
                    </div>
                    <div className="ai-features-grid">
                        <div className={`ai-feature-card ${isVisible['ai-features'] ? 'animate-in' : ''}`} style={{ animationDelay: '0.1s' }}>
                            <div className="ai-feature-image">
                                <img src="/images/ai-features.jpg" alt="AI Smart Routing" loading="lazy" />
                            </div>
                            <div className="ai-feature-content">
                                <div className="ai-icon">
                                    <i className="fas fa-brain"></i>
                                </div>
                                <h3>Smart Complaint Routing</h3>
                                <p>AI automatically categorizes and routes complaints to the right department for 60% faster resolution.</p>
                                <div className="ai-stats">
                                    <span><i className="fas fa-bolt"></i> 60% Faster</span>
                                    <span><i className="fas fa-target"></i> 95% Accuracy</span>
                                </div>
                            </div>
                        </div>

                        <div className={`ai-feature-card ${isVisible['ai-features'] ? 'animate-in' : ''}`} style={{ animationDelay: '0.2s' }}>
                            <div className="ai-feature-image">
                                <img src="/images/escalation-system.jpg" alt="Predictive Analytics" loading="lazy" />
                            </div>
                            <div className="ai-feature-content">
                                <div className="ai-icon">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                                <h3>Predictive Analytics</h3>
                                <p>Predict complaint trends and prevent issues before they escalate using machine learning algorithms.</p>
                                <div className="ai-stats">
                                    <span><i className="fas fa-shield-alt"></i> Early Warning</span>
                                    <span><i className="fas fa-eye"></i> Trend Analysis</span>
                                </div>
                            </div>
                        </div>

                        <div className={`ai-feature-card ${isVisible['ai-features'] ? 'animate-in' : ''}`} style={{ animationDelay: '0.3s' }}>
                            <div className="ai-feature-image">
                                <img src="/images/analytics-reports.jpg" alt="Intelligent Insights" loading="lazy" />
                            </div>
                            <div className="ai-feature-content">
                                <div className="ai-icon">
                                    <i className="fas fa-lightbulb"></i>
                                </div>
                                <h3>Intelligent Insights</h3>
                                <p>Get actionable insights and recommendations to improve service delivery and citizen satisfaction.</p>
                                <div className="ai-stats">
                                    <span><i className="fas fa-rocket"></i> Smart Insights</span>
                                    <span><i className="fas fa-thumbs-up"></i> Better Service</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="how-it-works" data-animate id="how-it-works">
                <div className="container">
                    <div className="section-header">
                        <h2 className={isVisible['how-it-works'] ? 'animate-in' : ''}>How It Works</h2>
                        <p className={isVisible['how-it-works'] ? 'animate-in' : ''}>Simple, transparent, and efficient - your complaint resolution journey in 4 easy steps</p>
                    </div>
                    <div className="steps-container">
                        <div className={`step ${isVisible['how-it-works'] ? 'animate-in' : ''}`} style={{ animationDelay: '0.1s' }}>
                            <div className="step-image">
                                <img src="/images/citizen-dashboard.jpg" alt="Register Account" loading="lazy" />
                            </div>
                            <div className="step-content">
                                <div className="step-number">1</div>
                                <h3>Create Account</h3>
                                <p>Quick registration with mobile verification. Secure your identity with government-grade authentication.</p>
                                <div className="step-features">
                                    <span><i className="fas fa-mobile"></i> Mobile Verification</span>
                                    <span><i className="fas fa-shield"></i> Secure Login</span>
                                </div>
                            </div>
                        </div>

                        <div className={`step ${isVisible['how-it-works'] ? 'animate-in' : ''}`} style={{ animationDelay: '0.2s' }}>
                            <div className="step-image">
                                <img src="/images/complaint-submission.jpg" alt="File Complaint" loading="lazy" />
                            </div>
                            <div className="step-content">
                                <div className="step-number">2</div>
                                <h3>Submit Complaint</h3>
                                <p>Describe your issue with photos, location, and priority level. AI helps categorize for faster routing.</p>
                                <div className="step-features">
                                    <span><i className="fas fa-camera"></i> Photo Upload</span>
                                    <span><i className="fas fa-map-marker"></i> GPS Location</span>
                                </div>
                            </div>
                        </div>

                        <div className={`step ${isVisible['how-it-works'] ? 'animate-in' : ''}`} style={{ animationDelay: '0.3s' }}>
                            <div className="step-image">
                                <img src="/images/sla-tracking.jpg" alt="Track Progress" loading="lazy" />
                            </div>
                            <div className="step-content">
                                <div className="step-number">3</div>
                                <h3>Track Progress</h3>
                                <p>Real-time updates via SMS, email, and app notifications. View detailed timeline and officer comments.</p>
                                <div className="step-features">
                                    <span><i className="fas fa-bell"></i> Live Updates</span>
                                    <span><i className="fas fa-timeline"></i> Progress Timeline</span>
                                </div>
                            </div>
                        </div>

                        <div className={`step ${isVisible['how-it-works'] ? 'animate-in' : ''}`} style={{ animationDelay: '0.4s' }}>
                            <div className="step-image">
                                <img src="/images/citizen-feedback.jpg" alt="Get Resolution" loading="lazy" />
                            </div>
                            <div className="step-content">
                                <div className="step-number">4</div>
                                <h3>Resolution & Feedback</h3>
                                <p>Receive resolution proof and provide feedback. Rate the service to help improve future experiences.</p>
                                <div className="step-features">
                                    <span><i className="fas fa-check-circle"></i> Proof of Work</span>
                                    <span><i className="fas fa-star"></i> Rate Service</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq" data-animate id="faq">
                <div className="container">
                    <div className="section-header">
                        <h2 className={isVisible.faq ? 'animate-in' : ''}>Frequently Asked Questions</h2>
                        <p className={isVisible.faq ? 'animate-in' : ''}>Get answers to common questions about our complaint management system</p>
                    </div>
                    <div className="faq-grid">
                        <div className={`faq-item ${isVisible.faq ? 'animate-in' : ''}`} style={{ animationDelay: '0.1s' }}>
                            <div className="faq-question">
                                <h3>How do I register a complaint?</h3>
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <div className="faq-answer">
                                <p>Simply create an account, click "Register Complaint", fill in the details with photos/location, and submit. Our AI will automatically route it to the right department.</p>
                            </div>
                        </div>

                        <div className={`faq-item ${isVisible.faq ? 'animate-in' : ''}`} style={{ animationDelay: '0.2s' }}>
                            <div className="faq-question">
                                <h3>How long does it take to resolve complaints?</h3>
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <div className="faq-answer">
                                <p>Average resolution time is 8.5 days, but it varies by department and complexity. You'll receive real-time updates throughout the process.</p>
                            </div>
                        </div>

                        <div className={`faq-item ${isVisible.faq ? 'animate-in' : ''}`} style={{ animationDelay: '0.3s' }}>
                            <div className="faq-question">
                                <h3>Can I track my complaint status?</h3>
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <div className="faq-answer">
                                <p>Yes! You can track your complaint 24/7 through your dashboard, receive SMS/email notifications, and view detailed progress timeline with officer comments.</p>
                            </div>
                        </div>

                        <div className={`faq-item ${isVisible.faq ? 'animate-in' : ''}`} style={{ animationDelay: '0.4s' }}>
                            <div className="faq-question">
                                <h3>Which departments are connected?</h3>
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <div className="faq-answer">
                                <p>We connect with 8+ departments including Municipal Services, Health, Police, Education, Electricity, Telecom, and more. All in one platform.</p>
                            </div>
                        </div>

                        <div className={`faq-item ${isVisible.faq ? 'animate-in' : ''}`} style={{ animationDelay: '0.5s' }}>
                            <div className="faq-question">
                                <h3>Is my personal information secure?</h3>
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <div className="faq-answer">
                                <p>Absolutely! We use bank-level encryption, government-grade security, and complete transparency. Your data is protected and handled with utmost care.</p>
                            </div>
                        </div>

                        <div className={`faq-item ${isVisible.faq ? 'animate-in' : ''}`} style={{ animationDelay: '0.6s' }}>
                            <div className="faq-question">
                                <h3>Can I use this on my mobile phone?</h3>
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <div className="faq-answer">
                                <p>Yes! Our platform is mobile-first with offline capability, voice-to-text features, and works perfectly on all devices and browsers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials" data-animate id="testimonials">
                <div className="container">
                    <div className="section-header">
                        <h2 className={isVisible.testimonials ? 'animate-in' : ''}>What Citizens Say</h2>
                        <p className={isVisible.testimonials ? 'animate-in' : ''}>Real experiences from citizens who have used our platform</p>
                    </div>
                    <div className="testimonials-grid">
                        <div className={`testimonial-card ${isVisible.testimonials ? 'animate-in' : ''}`} style={{ animationDelay: '0.1s' }}>
                            <div className="testimonial-content">
                                <div className="quote-icon"><i className="fas fa-quote-left"></i></div>
                                <p>"The road outside my house was damaged for months. I filed a complaint through SCMS and it was fixed within a week. Amazing transparency!"</p>
                            </div>
                            <div className="testimonial-author">
                                <div className="author-avatar">
                                    <img src="/placeholder-user.jpg" alt="Rajesh Kumar" />
                                </div>
                                <div className="author-info">
                                    <h4>Rajesh Kumar</h4>
                                    <span>Resident, Sector 15</span>
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`testimonial-card ${isVisible.testimonials ? 'animate-in' : ''}`} style={{ animationDelay: '0.2s' }}>
                            <div className="testimonial-content">
                                <div className="quote-icon"><i className="fas fa-quote-left"></i></div>
                                <p>"Water supply issue in our area was resolved quickly. The real-time tracking feature kept me informed throughout the process."</p>
                            </div>
                            <div className="testimonial-author">
                                <div className="author-avatar">
                                    <img src="/placeholder-user.jpg" alt="Priya Sharma" />
                                </div>
                                <div className="author-info">
                                    <h4>Priya Sharma</h4>
                                    <span>Resident, Green Valley</span>
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`testimonial-card ${isVisible.testimonials ? 'animate-in' : ''}`} style={{ animationDelay: '0.3s' }}>
                            <div className="testimonial-content">
                                <div className="quote-icon"><i className="fas fa-quote-left"></i></div>
                                <p>"As a senior citizen, I found the platform very easy to use. The mobile app works perfectly and customer support is excellent."</p>
                            </div>
                            <div className="testimonial-author">
                                <div className="author-avatar">
                                    <img src="/placeholder-user.jpg" alt="Dr. Anil Gupta" />
                                </div>
                                <div className="author-info">
                                    <h4>Dr. Anil Gupta</h4>
                                    <span>Retired Professor</span>
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section" data-animate id="cta">
                <div className="container">
                    <div className="cta-content">
                        <div className={`cta-badge ${isVisible.cta ? 'animate-in' : ''}`}>
                            <i className="fas fa-rocket"></i>
                            Join 10,000+ Satisfied Citizens
                        </div>
                        <h2 className={isVisible.cta ? 'animate-in' : ''}>Ready to Experience Better Public Service?</h2>
                        <p className={isVisible.cta ? 'animate-in' : ''}>Start your journey towards efficient complaint resolution today. It's free, secure, and takes less than 2 minutes to get started.</p>
                        <div className={`cta-buttons ${isVisible.cta ? 'animate-in' : ''}`}>
                            <button className="btn btn-primary btn-large cta-btn-primary" onClick={() => onNavigate('register')}>
                                <i className="fas fa-user-plus"></i>
                                Create Free Account
                            </button>
                            <button className="btn btn-outline btn-large cta-btn-outline" onClick={() => onNavigate('login')}>
                                <i className="fas fa-sign-in-alt"></i>
                                Sign In
                            </button>
                        </div>
                        <div className={`cta-features ${isVisible.cta ? 'animate-in' : ''}`}>
                            <div className="cta-feature">
                                <i className="fas fa-check"></i>
                                <span>No registration fees</span>
                            </div>
                            <div className="cta-feature">
                                <i className="fas fa-check"></i>
                                <span>24/7 support available</span>
                            </div>
                            <div className="cta-feature">
                                <i className="fas fa-check"></i>
                                <span>Government verified platform</span>
                            </div>
                        </div>
                        <div className={`public-data-link ${isVisible.cta ? 'animate-in' : ''}`}>
                            <button className="btn btn-secondary btn-large" onClick={() => onNavigate('public-transparency')}>
                                <i className="fas fa-chart-bar"></i>
                                View Public Transparency Dashboard
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Landing;
