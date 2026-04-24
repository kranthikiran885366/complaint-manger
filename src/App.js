'use client';

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Landing from './pages/Landing/Landing';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ForgotPassword from './pages/Auth/ForgotPassword';
import CitizenDashboard from './pages/Citizen/CitizenDashboard';
import AdminDashboard from './pages/Admin/AdminDashboard';
import OfficerDashboard from './pages/Officer/OfficerDashboard';
import DepartmentHeadDashboard from './pages/DepartmentHead/DepartmentHeadDashboard';
import SuperAdminDashboard from './pages/SuperAdmin/SuperAdminDashboard';
import RegisterComplaint from './pages/Citizen/RegisterComplaint';
import MyComplaints from './pages/Citizen/MyComplaints';
import ComplaintDetail from './pages/Citizen/ComplaintDetail';
import ComplaintFeedback from './pages/Citizen/ComplaintFeedback';
import Profile from './pages/Profile/Profile';
import NotificationsPage from './pages/Notifications/NotificationsPage';
import Reports from './pages/Reports/Reports';
import Settings from './pages/Settings/Settings';
import DepartmentDashboard from './pages/Departments/DepartmentDashboard';
import CommunicationModule from './pages/Communication/CommunicationModule';
import PublicTransparencyDashboard from './pages/PublicTransparency/PublicTransparencyDashboard';

// Department Imports - All Departments
// Municipal Department Imports
import WaterSupplyDashboard from './pages/Departments/Municipal/WaterSupply/WaterSupplyDashboard';
import ElectricityDashboard from './pages/Departments/Municipal/Electricity/ElectricityDashboard';
import RoadsDashboard from './pages/Departments/Municipal/Roads/RoadsDashboard';
import SanitationDashboard from './pages/Departments/Municipal/Sanitation/SanitationDashboard';
import DrainageDashboard from './pages/Departments/Municipal/Drainage/DrainageDashboard';
import StreetLightingDashboard from './pages/Departments/Municipal/StreetLighting/StreetLightingDashboard';
import PublicToiletsDashboard from './pages/Departments/Municipal/PublicToilets/PublicToiletsDashboard';
import ParksDashboard from './pages/Departments/Municipal/Parks/ParksDashboard';
import UrbanPlanningDashboard from './pages/Departments/Municipal/UrbanPlanning/UrbanPlanningDashboard';
import BuildingDashboard from './pages/Departments/Municipal/Building/BuildingDashboard';

// Safety Department Imports
import PoliceDashboard from './pages/Departments/Safety/Police/PoliceDashboard';
import TrafficPoliceDashboard from './pages/Departments/Safety/TrafficPolice/TrafficPoliceDashboard';
import FireEmergencyDashboard from './pages/Departments/Safety/FireEmergency/FireEmergencyDashboard';
import DisasterManagementDashboard from './pages/Departments/Safety/DisasterManagement/DisasterManagementDashboard';

// Health Department Imports
import HealthDeptDashboard from './pages/Departments/Health/HealthDept/HealthDeptDashboard';
import GovernmentHospitalsDashboard from './pages/Departments/Health/Hospitals/GovernmentHospitalsDashboard';
import PrimaryHealthCentersDashboard from './pages/Departments/Health/PHC/PrimaryHealthCentersDashboard';
import AmbulanceServicesDashboard from './pages/Departments/Health/Ambulance/AmbulanceServicesDashboard';

// Education Department Imports
import EducationDashboard from './pages/Departments/Education/EducationDashboard';
import GovernmentSchoolsDashboard from './pages/Departments/Education/GovernmentSchoolsDashboard';
import SocialWelfareDashboard from './pages/Departments/Education/SocialWelfareDashboard';

// Transport Department Imports
import PublicTransportDashboard from './pages/Departments/Transport/PublicTransportDashboard';
import TrafficManagementDashboard from './pages/Departments/Transport/TrafficManagementDashboard';
import ParkingManagementDashboard from './pages/Departments/Transport/ParkingManagementDashboard';

// Telecom Department Imports
import TelecomDashboard from './pages/Departments/Telecom/TelecomDashboard';
import ITDigitalServicesDashboard from './pages/Departments/Telecom/ITDigitalServicesDashboard';

// Environment Department Imports
import EnvironmentProtectionDashboard from './pages/Departments/Environment/EnvironmentProtectionDashboard';
import PollutionControlDashboard from './pages/Departments/Environment/PollutionControlDashboard';

// Revenue Department Imports
import RevenueDepartmentDashboard from './pages/Departments/Revenue/RevenueDepartmentDashboard';
import PropertyRegistrationDashboard from './pages/Departments/Revenue/PropertyRegistrationDashboard';

// Generic Department Dashboard
import GenericDepartmentDashboard from './pages/Departments/GenericDepartmentDashboard';
import DepartmentIndex from './pages/Departments/DepartmentIndex';

import { MOCK_USERS } from './utils/constants';
import './styles/global.css';
import './styles/government-professional.css';

const App = ({ initialPage = 'landing', syncRoute }) => {
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [user, setUser] = useState(null);
    const [notifications, setNotifications] = useState([]);
    const [showNotificationPanel, setShowNotificationPanel] = useState(false);

    useEffect(() => {
        setCurrentPage(initialPage);
    }, [initialPage]);

    const handleNavigate = (page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
        if (syncRoute) {
            syncRoute(page);
        }
    };

    const handleLoginSuccess = (userRole) => {
        const mockUser = MOCK_USERS[userRole] || MOCK_USERS.citizen;
        setUser(mockUser);
        
        if (userRole === 'admin') {
            handleNavigate('admin-dashboard');
        } else if (userRole === 'officer') {
            handleNavigate('officer-dashboard');
        } else if (userRole === 'dept_head') {
            handleNavigate('dept-head-dashboard');
        } else if (userRole === 'super_admin') {
            handleNavigate('super-admin-dashboard');
        } else {
            handleNavigate('dashboard');
        }

        // Add welcome notification
        addNotification(`Welcome back, ${mockUser.name}!`);
    };

    const handleLogout = () => {
        setUser(null);
        handleNavigate('landing');
        setNotifications([]);
    };

    const addNotification = (message, type = 'info') => {
        const newNotification = {
            id: Date.now(),
            message,
            type,
            timestamp: new Date(),
            read: false
        };
        setNotifications(prev => [newNotification, ...prev]);
    };

    const handleNotificationClick = () => {
        setShowNotificationPanel(!showNotificationPanel);
    };

    const renderPage = () => {
        // Public pages that don't require authentication
        if (currentPage === 'public-transparency') {
            return <PublicTransparencyDashboard />;
        }

        if (currentPage === 'landing') {
            return <Landing onNavigate={handleNavigate} />;
        }

        if (!user) {
            switch (currentPage) {
                case 'login':
                    return <Login onNavigate={handleNavigate} onLoginSuccess={handleLoginSuccess} />;
                case 'register':
                    return <Register onNavigate={handleNavigate} onLoginSuccess={handleLoginSuccess} />;
                case 'forgot-password':
                    return <ForgotPassword onNavigate={handleNavigate} />;
                default:
                    // For protected pages, redirect to login but preserve the intended page
                    return <Login onNavigate={handleNavigate} onLoginSuccess={handleLoginSuccess} />;
            }
        }

        switch (currentPage) {
            case 'dashboard':
                return <CitizenDashboard user={user} onNavigate={handleNavigate} />;
            case 'register-complaint':
                return <RegisterComplaint user={user} onNavigate={handleNavigate} />;
            case 'my-complaints':
                return <MyComplaints user={user} onNavigate={handleNavigate} />;
            case 'profile':
                return <Profile user={user} onNavigate={handleNavigate} />;
            case 'notifications':
                return <NotificationsPage notifications={notifications} onNavigate={handleNavigate} />;
            case 'reports':
                return <Reports user={user} onNavigate={handleNavigate} />;
            case 'settings':
                return <Settings user={user} onNavigate={handleNavigate} />;
            case 'admin-dashboard':
                return <AdminDashboard user={user} onNavigate={handleNavigate} />;
            case 'officer-dashboard':
                return <OfficerDashboard user={user} onNavigate={handleNavigate} />;
            case 'dept-head-dashboard':
                return <DepartmentHeadDashboard user={user} onNavigate={handleNavigate} />;
            case 'super-admin-dashboard':
                return <SuperAdminDashboard user={user} onNavigate={handleNavigate} />;
            case 'communication':
                return <CommunicationModule user={user} onNavigate={handleNavigate} />;
            case 'public-transparency':
                return <PublicTransparencyDashboard />;
            case 'departments':
                return <DepartmentIndex user={user} onNavigate={handleNavigate} />;
            
            // Municipal Department Routes
            case 'water-supply':
                return <WaterSupplyDashboard user={user} onNavigate={handleNavigate} />;
            case 'electricity':
                return <ElectricityDashboard user={user} onNavigate={handleNavigate} />;
            case 'roads':
                return <RoadsDashboard user={user} onNavigate={handleNavigate} />;
            case 'sanitation':
                return <SanitationDashboard user={user} onNavigate={handleNavigate} />;
            case 'drainage':
                return <DrainageDashboard user={user} onNavigate={handleNavigate} />;
            case 'street-lighting':
                return <StreetLightingDashboard user={user} onNavigate={handleNavigate} />;
            case 'public-toilets':
                return <PublicToiletsDashboard user={user} onNavigate={handleNavigate} />;
            case 'parks':
                return <ParksDashboard user={user} onNavigate={handleNavigate} />;
            case 'urban-planning':
                return <UrbanPlanningDashboard user={user} onNavigate={handleNavigate} />;
            case 'building':
                return <BuildingDashboard user={user} onNavigate={handleNavigate} />;
            
            // Safety Department Routes
            case 'police':
                return <PoliceDashboard user={user} onNavigate={handleNavigate} />;
            case 'traffic-police':
                return <TrafficPoliceDashboard user={user} onNavigate={handleNavigate} />;
            case 'fire-emergency':
                return <FireEmergencyDashboard user={user} onNavigate={handleNavigate} />;
            case 'disaster-management':
                return <DisasterManagementDashboard user={user} onNavigate={handleNavigate} />;
            
            // Health Department Routes
            case 'health-dept':
                return <HealthDeptDashboard user={user} onNavigate={handleNavigate} />;
            case 'government-hospitals':
                return <GovernmentHospitalsDashboard user={user} onNavigate={handleNavigate} />;
            case 'primary-health-centers':
                return <PrimaryHealthCentersDashboard user={user} onNavigate={handleNavigate} />;
            case 'ambulance-services':
                return <AmbulanceServicesDashboard user={user} onNavigate={handleNavigate} />;
            
            // Education Department Routes
            case 'education':
                return <EducationDashboard user={user} onNavigate={handleNavigate} />;
            case 'government-schools':
                return <GovernmentSchoolsDashboard user={user} onNavigate={handleNavigate} />;
            case 'social-welfare':
                return <SocialWelfareDashboard user={user} onNavigate={handleNavigate} />;
            
            // Transport Department Routes
            case 'public-transport':
                return <PublicTransportDashboard user={user} onNavigate={handleNavigate} />;
            case 'traffic-management':
                return <TrafficManagementDashboard user={user} onNavigate={handleNavigate} />;
            case 'parking-management':
                return <ParkingManagementDashboard user={user} onNavigate={handleNavigate} />;
            
            // Telecom Department Routes
            case 'telecom':
                return <TelecomDashboard user={user} onNavigate={handleNavigate} />;
            case 'it-digital-services':
                return <ITDigitalServicesDashboard user={user} onNavigate={handleNavigate} />;
            
            // Environment Department Routes
            case 'environment-protection':
                return <EnvironmentProtectionDashboard user={user} onNavigate={handleNavigate} />;
            case 'pollution-control':
                return <PollutionControlDashboard user={user} onNavigate={handleNavigate} />;
            
            // Revenue Department Routes
            case 'revenue':
                return <RevenueDepartmentDashboard user={user} onNavigate={handleNavigate} />;
            case 'property-registration':
                return <PropertyRegistrationDashboard user={user} onNavigate={handleNavigate} />;
            default:
                if (currentPage.startsWith('complaint-detail-')) {
                    const complaintId = currentPage.replace('complaint-detail-', '');
                    return <ComplaintDetail complaintId={complaintId} user={user} onNavigate={handleNavigate} />;
                }
                if (currentPage.startsWith('complaint-feedback-')) {
                    const complaintId = currentPage.replace('complaint-feedback-', '');
                    return <ComplaintFeedback complaintId={complaintId} user={user} onNavigate={handleNavigate} />;
                }
                if (currentPage.startsWith('department-')) {
                    const deptId = currentPage.replace('department-', '');
                    return <DepartmentDashboard deptId={deptId} user={user} onNavigate={handleNavigate} />;
                }
                // Generic department fallback for any department ID
                const deptMatch = currentPage.match(/^dept-(\d+)$/);
                if (deptMatch) {
                    const departmentId = parseInt(deptMatch[1]);
                    return <GenericDepartmentDashboard departmentId={departmentId} user={user} onNavigate={handleNavigate} />;
                }
                return <CitizenDashboard user={user} onNavigate={handleNavigate} />;
        }
    };

    return (
        <div className="app">
            {user && <Navbar user={user} onLogout={handleLogout} onNotificationClick={handleNotificationClick} notificationsCount={notifications.filter(n => !n.read).length} />}
            <div style={{ display: 'flex', minHeight: user ? 'calc(100vh - 60px)' : 'auto', position: 'relative' }}>
                {user && <Sidebar user={user} currentPage={currentPage} onNavigate={handleNavigate} />}
                {renderPage()}
                {showNotificationPanel && user && (
                    <div style={{position: 'absolute', right: '20px', top: '80px', zIndex: 100}}>
                        <div style={{background: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px', width: '300px', maxHeight: '500px', overflowY: 'auto', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}}>
                            <div style={{padding: '16px', borderBottom: '1px solid #e5e7eb'}}>
                                <h4>Notifications</h4>
                            </div>
                            {notifications.length === 0 ? (
                                <div style={{padding: '16px', textAlign: 'center', color: '#9ca3af'}}>No notifications yet</div>
                            ) : (
                                notifications.slice(0, 5).map(notif => (
                                    <div key={notif.id} style={{padding: '12px 16px', borderBottom: '1px solid #f3f4f6', cursor: 'pointer', '&:hover': {backgroundColor: '#f9fafb'}}}>
                                        <p style={{fontSize: '14px', margin: 0}}>{notif.message}</p>
                                        <small style={{color: '#9ca3af'}}>{notif.timestamp.toLocaleTimeString()}</small>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
