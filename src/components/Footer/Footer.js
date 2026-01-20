import React from 'react';
import '../../styles/footer.css';

const Footer = ({ isDashboard = false }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`footer ${isDashboard ? 'dashboard-footer' : 'landing-footer'}`}>
            <div className="footer-content container">
                <div className="footer-section">
                    <h4>About SCMS</h4>
                    <p>Smart Complaint Management System helps citizens register and track complaints transparently.</p>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#privacy">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#contact">Contact Us</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact Info</h4>
                    <p>
                        <i className="fas fa-phone"></i> +91-1111-222-3333
                    </p>
                    <p>
                        <i className="fas fa-envelope"></i> support@scms.gov.in
                    </p>
                    <p>
                        <i className="fas fa-map-marker-alt"></i> Government Building, Delhi, India
                    </p>
                </div>

                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="#facebook" title="Facebook">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#twitter" title="Twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#linkedin" title="LinkedIn">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="#youtube" title="YouTube">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} Smart Complaint Management System. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
