'use client';

import React, { useState } from 'react';
import { DEPARTMENTS, DEPARTMENT_CATEGORIES } from '../../utils/constants';
import '../../styles/sidebar-professional.css';

const Sidebar = ({ user, currentPage, onNavigate }) => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const getCitizenMenuItems = () => [
        { id: 'dashboard', label: 'Dashboard', icon: 'fa-home', page: 'dashboard' },
        { id: 'register', label: 'Register Complaint', icon: 'fa-plus-circle', page: 'register-complaint' },
        { id: 'mycomplaints', label: 'My Complaints', icon: 'fa-list', page: 'my-complaints' },
        { id: 'communication', label: 'Messages', icon: 'fa-comments', page: 'communication' },
        { id: 'notifications', label: 'Notifications', icon: 'fa-bell', page: 'notifications' },
        { id: 'reports', label: 'Reports', icon: 'fa-chart-bar', page: 'reports' },
        { id: 'profile', label: 'Profile', icon: 'fa-user', page: 'profile' },
        { id: 'settings', label: 'Settings', icon: 'fa-cog', page: 'settings' },
    ];

    const getDeptHeadMenuItems = () => [
        { id: 'dashboard', label: 'Department Dashboard', icon: 'fa-chart-line', page: 'dept-head-dashboard' },
        { id: 'officers', label: 'Manage Officers', icon: 'fa-users', page: 'manage-officers' },
        { id: 'performance', label: 'Performance Review', icon: 'fa-chart-bar', page: 'performance-review' },
        { id: 'reports', label: 'Department Reports', icon: 'fa-file-alt', page: 'reports' },
        { id: 'profile', label: 'Profile', icon: 'fa-user', page: 'profile' },
    ];

    const getSuperAdminMenuItems = () => [
        { id: 'dashboard', label: 'System Dashboard', icon: 'fa-server', page: 'super-admin-dashboard' },
        { id: 'system', label: 'System Health', icon: 'fa-heartbeat', page: 'system-health' },
        { id: 'backup', label: 'Backup & Maintenance', icon: 'fa-database', page: 'backup-maintenance' },
        { id: 'security', label: 'Security Center', icon: 'fa-shield-alt', page: 'security-center' },
        { id: 'users', label: 'Global User Management', icon: 'fa-users-cog', page: 'global-users' },
    ];

    const getDepartmentRoute = (deptName) => {
        const routeMap = {
            // Municipal Services
            'Water Supply': 'water-supply',
            'Electricity': 'electricity',
            'Roads & Transport': 'roads',
            'Sanitation': 'sanitation',
            'Drainage & Sewerage': 'drainage',
            'Street Lighting': 'street-lighting',
            'Public Toilets': 'public-toilets',
            'Parks & Gardens': 'parks',
            'Urban Planning': 'urban-planning',
            'Building & Construction': 'building',
            
            // Safety & Law Enforcement
            'Police': 'police',
            'Traffic Police': 'traffic-police',
            'Fire & Emergency': 'fire-emergency',
            'Disaster Management': 'disaster-management',
            
            // Health & Medical Services
            'Health Department': 'health-dept',
            'Government Hospitals': 'government-hospitals',
            'Primary Health Centers': 'primary-health-centers',
            'Ambulance Services': 'ambulance-services',
            
            // Education & Social Welfare
            'Education Department': 'education',
            'Government Schools': 'government-schools',
            'Social Welfare': 'social-welfare',
            
            // Transport & Infrastructure
            'Public Transport': 'public-transport',
            'Traffic Management': 'traffic-management',
            'Parking Management': 'parking-management',
            
            // Telecom & Digital Services
            'Internet & Telecom': 'telecom',
            'IT & Digital Services': 'it-digital-services',
            
            // Environment & Utilities
            'Environment Protection': 'environment-protection',
            'Pollution Control': 'pollution-control',
            
            // Revenue & Public Services
            'Revenue Department': 'revenue',
            'Property Registration': 'property-registration'
        };
        return routeMap[deptName] || `dept-${deptName.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
    };

    const getOfficerMenuItems = () => [
        { id: 'dashboard', label: 'Dashboard', icon: 'fa-home', page: 'officer-dashboard' },
        { id: 'departments', label: 'All Departments', icon: 'fa-building', page: 'departments' },
        ...DEPARTMENTS.map(dept => ({
            id: dept.id,
            label: dept.name,
            icon: dept.icon,
            page: getDepartmentRoute(dept.name),
        })),
        { id: 'profile', label: 'Profile', icon: 'fa-user', page: 'profile' },
    ];

    const getAdminMenuItems = () => [
        { id: 'dashboard', label: 'Admin Dashboard', icon: 'fa-chart-pie', page: 'admin-dashboard' },
        { id: 'departments', label: 'All Departments', icon: 'fa-building', page: 'departments' },
        { id: 'complaints', label: 'Complaint Control', icon: 'fa-folder', page: 'complaint-control' },
        { id: 'users', label: 'User Management', icon: 'fa-users', page: 'user-management' },
        { id: 'reports', label: 'Reports', icon: 'fa-file-alt', page: 'reports' },
        { id: 'settings', label: 'Settings', icon: 'fa-cog', page: 'settings' },
    ];

    const getMenuItems = () => {
        switch (user?.role) {
            case 'citizen':
                return getCitizenMenuItems();
            case 'officer':
                return getOfficerMenuItems();
            case 'dept_head':
                return getDeptHeadMenuItems();
            case 'admin':
                return getAdminMenuItems();
            case 'super_admin':
                return getSuperAdminMenuItems();
            default:
                return [];
        }
    };

    const menuItems = getMenuItems();

    return (
        <>
            <button className="mobile-toggle" onClick={() => setIsMobileOpen(!isMobileOpen)}>
                <i className="fas fa-bars"></i>
            </button>
            <aside className={`sidebar ${isMobileOpen ? 'mobile-open' : ''}`}>
                <div className="sidebar-header">
                    <h3>Menu</h3>
                    <button className="mobile-close" onClick={() => setIsMobileOpen(false)}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <nav className="sidebar-nav">
                    {menuItems.map(item => (
                        <button
                            key={item.id}
                            className={`nav-item ${currentPage === item.page ? 'active' : ''}`}
                            onClick={() => {
                                onNavigate(item.page);
                                setIsMobileOpen(false);
                            }}
                        >
                            <i className={`fas ${item.icon}`}></i>
                            <span>{item.label}</span>
                        </button>
                    ))}
                </nav>
            </aside>
        </>
    );
};



export default Sidebar;
