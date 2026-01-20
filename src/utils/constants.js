// Department Data - Complete Government Departments
export const DEPARTMENTS = [
    // Municipal/Civic Departments
    { id: 1, name: 'Water Supply', icon: 'fa-water', color: '#3b82f6', category: 'municipal' },
    { id: 2, name: 'Electricity', icon: 'fa-bolt', color: '#f59e0b', category: 'municipal' },
    { id: 3, name: 'Roads & Transport', icon: 'fa-road', color: '#8b5cf6', category: 'municipal' },
    { id: 4, name: 'Sanitation', icon: 'fa-trash', color: '#06b6d4', category: 'municipal' },
    { id: 5, name: 'Drainage & Sewerage', icon: 'fa-tint', color: '#0891b2', category: 'municipal' },
    { id: 6, name: 'Street Lighting', icon: 'fa-lightbulb', color: '#fbbf24', category: 'municipal' },
    { id: 7, name: 'Public Toilets', icon: 'fa-restroom', color: '#84cc16', category: 'municipal' },
    { id: 8, name: 'Parks & Gardens', icon: 'fa-tree', color: '#22c55e', category: 'municipal' },
    { id: 9, name: 'Urban Planning', icon: 'fa-city', color: '#6366f1', category: 'municipal' },
    { id: 10, name: 'Building & Construction', icon: 'fa-hammer', color: '#f97316', category: 'municipal' },
    
    // Public Safety & Law Enforcement
    { id: 11, name: 'Police', icon: 'fa-shield', color: '#1e40af', category: 'safety' },
    { id: 12, name: 'Traffic Police', icon: 'fa-traffic-light', color: '#dc2626', category: 'safety' },
    { id: 13, name: 'Fire & Emergency', icon: 'fa-fire-extinguisher', color: '#ef4444', category: 'safety' },
    { id: 14, name: 'Disaster Management', icon: 'fa-exclamation-triangle', color: '#f59e0b', category: 'safety' },
    
    // Health & Medical Services
    { id: 15, name: 'Health Department', icon: 'fa-hospital', color: '#ef4444', category: 'health' },
    { id: 16, name: 'Government Hospitals', icon: 'fa-hospital-alt', color: '#dc2626', category: 'health' },
    { id: 17, name: 'Primary Health Centers', icon: 'fa-clinic-medical', color: '#f87171', category: 'health' },
    { id: 18, name: 'Ambulance Services', icon: 'fa-ambulance', color: '#fca5a5', category: 'health' },
    
    // Education & Social Welfare
    { id: 19, name: 'Education Department', icon: 'fa-book', color: '#14b8a6', category: 'education' },
    { id: 20, name: 'Government Schools', icon: 'fa-school', color: '#0d9488', category: 'education' },
    { id: 21, name: 'Social Welfare', icon: 'fa-hands-helping', color: '#06b6d4', category: 'education' },
    
    // Transport & Infrastructure
    { id: 22, name: 'Public Transport', icon: 'fa-bus', color: '#8b5cf6', category: 'transport' },
    { id: 23, name: 'Traffic Management', icon: 'fa-traffic-light', color: '#a855f7', category: 'transport' },
    { id: 24, name: 'Parking Management', icon: 'fa-parking', color: '#c084fc', category: 'transport' },
    
    // Telecom & Digital Services
    { id: 25, name: 'Internet & Telecom', icon: 'fa-signal', color: '#ec4899', category: 'telecom' },
    { id: 26, name: 'IT & Digital Services', icon: 'fa-laptop', color: '#f472b6', category: 'telecom' },
    
    // Environment & Utilities
    { id: 27, name: 'Environment Protection', icon: 'fa-leaf', color: '#22c55e', category: 'environment' },
    { id: 28, name: 'Pollution Control', icon: 'fa-smog', color: '#16a34a', category: 'environment' },
    
    // Revenue & Public Services
    { id: 29, name: 'Revenue Department', icon: 'fa-coins', color: '#f59e0b', category: 'revenue' },
    { id: 30, name: 'Property Registration', icon: 'fa-file-contract', color: '#eab308', category: 'revenue' },
];

// Core Departments for Final Year Projects (Most Common)
export const CORE_DEPARTMENTS = [1, 2, 3, 4, 5, 6, 11, 13, 15, 19, 25]; // 11 core departments

// Department Categories
export const DEPARTMENT_CATEGORIES = {
    municipal: 'Municipal/Civic Services',
    safety: 'Public Safety & Law Enforcement',
    health: 'Health & Medical Services',
    education: 'Education & Social Welfare',
    transport: 'Transport & Infrastructure',
    telecom: 'Telecom & Digital Services',
    environment: 'Environment & Utilities',
    revenue: 'Revenue & Public Services'
};

// Complaint Status
export const COMPLAINT_STATUS = {
    PENDING: 'Pending',
    IN_PROGRESS: 'In Progress',
    RESOLVED: 'Resolved',
    REJECTED: 'Rejected',
    ON_HOLD: 'On Hold',
};

// Priority Levels
export const PRIORITY_LEVELS = {
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: 'High',
    CRITICAL: 'Critical',
};

// User Roles
export const USER_ROLES = {
    CITIZEN: 'citizen',
    OFFICER: 'officer',
    DEPT_HEAD: 'dept_head',
    ADMIN: 'admin',
    SUPER_ADMIN: 'super_admin',
};

// Mock Users
export const MOCK_USERS = {
    citizen: {
        id: 'user1',
        name: 'Rajesh Kumar',
        email: 'rajesh.kumar@email.com',
        phone: '+91 98765 43210',
        role: 'citizen',
        address: '123 Main Street, Delhi, India',
        profileImage: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&background=0052cc&color=fff',
    },
    officer: {
        id: 'officer1',
        name: 'Priya Singh',
        email: 'priya.singh@waterboard.gov.in',
        phone: '+91 87654 32109',
        role: 'officer',
        department: 'Water Supply',
        profileImage: 'https://ui-avatars.com/api/?name=Priya+Singh&background=10b981&color=fff',
    },
    dept_head: {
        id: 'depthead1',
        name: 'Dr. Amit Sharma',
        email: 'amit.sharma@waterboard.gov.in',
        phone: '+91 98765 11111',
        role: 'dept_head',
        department: 'Water Supply',
        profileImage: 'https://ui-avatars.com/api/?name=Amit+Sharma&background=8b5cf6&color=fff',
    },
    admin: {
        id: 'admin1',
        name: 'Admin Dashboard',
        email: 'admin@governance.gov.in',
        phone: '+91 76543 21098',
        role: 'admin',
        profileImage: 'https://ui-avatars.com/api/?name=Admin&background=0052cc&color=fff',
    },
    super_admin: {
        id: 'superadmin1',
        name: 'System Administrator',
        email: 'superadmin@system.gov.in',
        phone: '+91 99999 99999',
        role: 'super_admin',
        profileImage: 'https://ui-avatars.com/api/?name=Super+Admin&background=ef4444&color=fff',
    },
};

// Communication Status
export const COMMUNICATION_STATUS = {
    SENT: 'sent',
    DELIVERED: 'delivered',
    READ: 'read',
    FAILED: 'failed',
};

// Backup Status
export const BACKUP_STATUS = {
    SCHEDULED: 'scheduled',
    IN_PROGRESS: 'in_progress',
    COMPLETED: 'completed',
    FAILED: 'failed',
};

export default {
    DEPARTMENTS,
    COMPLAINT_STATUS,
    PRIORITY_LEVELS,
    USER_ROLES,
    MOCK_USERS,
    COMMUNICATION_STATUS,
    BACKUP_STATUS,
};
