import { DEPARTMENTS, COMPLAINT_STATUS, PRIORITY_LEVELS, MOCK_USERS } from '../utils/constants';

// Mock Complaints Data
const generateMockComplaints = () => [
    {
        id: 'CMPT-001',
        title: 'Water pipe burst on Main Street',
        description: 'A large water pipe has burst near the market area, causing water wastage and flooding on the road.',
        department: 'Water Supply',
        departmentId: 1,
        status: 'In Progress',
        priority: 'High',
        reportedDate: '2024-01-15',
        expectedResolutionDate: '2024-01-20',
        citizenId: 'user1',
        citizenName: 'Rajesh Kumar',
        citizenPhone: '+91 98765 43210',
        assignedOfficer: 'Priya Singh',
        location: 'Main Street, Delhi',
        image: 'https://via.placeholder.com/300x200?text=Water+Pipe',
        progress: 65,
        activities: [
            { date: '2024-01-15', time: '10:30 AM', action: 'Complaint Registered', status: 'completed' },
            { date: '2024-01-15', time: '02:00 PM', action: 'Assigned to Officer', status: 'completed' },
            { date: '2024-01-16', time: '09:00 AM', action: 'Site Inspection', status: 'completed' },
            { date: '2024-01-17', time: '03:00 PM', action: 'Repair Work In Progress', status: 'in-progress' },
        ],
    },
    {
        id: 'CMPT-002',
        title: 'Street lights not working',
        description: 'Multiple street lights in the residential area are not functioning, affecting public safety at night.',
        department: 'Electricity',
        departmentId: 2,
        status: 'Pending',
        priority: 'Medium',
        reportedDate: '2024-01-18',
        expectedResolutionDate: '2024-01-25',
        citizenId: 'user1',
        citizenName: 'Rajesh Kumar',
        citizenPhone: '+91 98765 43210',
        assignedOfficer: 'Not Assigned Yet',
        location: 'Sector 7, Delhi',
        image: 'https://via.placeholder.com/300x200?text=Street+Light',
        progress: 20,
        activities: [
            { date: '2024-01-18', time: '11:00 AM', action: 'Complaint Registered', status: 'completed' },
        ],
    },
    {
        id: 'CMPT-003',
        title: 'Potholes on road causing accidents',
        description: 'Multiple potholes on Rajesh Road are causing accidents and vehicle damage. Immediate repair needed.',
        department: 'Roads & Transport',
        departmentId: 3,
        status: 'Resolved',
        priority: 'High',
        reportedDate: '2024-01-10',
        expectedResolutionDate: '2024-01-17',
        resolvedDate: '2024-01-17',
        citizenId: 'user1',
        citizenName: 'Rajesh Kumar',
        citizenPhone: '+91 98765 43210',
        assignedOfficer: 'Vikram Patel',
        location: 'Rajesh Road, Delhi',
        image: 'https://via.placeholder.com/300x200?text=Road+Pothole',
        progress: 100,
        activities: [
            { date: '2024-01-10', time: '09:00 AM', action: 'Complaint Registered', status: 'completed' },
            { date: '2024-01-11', time: '10:30 AM', action: 'Assigned to Officer', status: 'completed' },
            { date: '2024-01-12', time: '08:00 AM', action: 'Site Inspection', status: 'completed' },
            { date: '2024-01-15', time: '02:00 PM', action: 'Repair Work Started', status: 'completed' },
            { date: '2024-01-17', time: '04:00 PM', action: 'Repair Completed', status: 'completed' },
        ],
    },
    {
        id: 'CMPT-004',
        title: 'Garbage not collected for 5 days',
        description: 'Garbage from residential area has not been collected for 5 days, causing foul smell and health hazards.',
        department: 'Sanitation',
        departmentId: 4,
        status: 'On Hold',
        priority: 'Medium',
        reportedDate: '2024-01-16',
        expectedResolutionDate: '2024-01-19',
        citizenId: 'user1',
        citizenName: 'Rajesh Kumar',
        citizenPhone: '+91 98765 43210',
        assignedOfficer: 'Deepak Sharma',
        location: 'Sector 5, Delhi',
        image: 'https://via.placeholder.com/300x200?text=Garbage',
        progress: 45,
        activities: [
            { date: '2024-01-16', time: '01:00 PM', action: 'Complaint Registered', status: 'completed' },
            { date: '2024-01-16', time: '03:00 PM', action: 'Assigned to Officer', status: 'completed' },
            { date: '2024-01-17', time: '10:00 AM', action: 'Waiting for Resource', status: 'in-progress' },
        ],
    },
    {
        id: 'CMPT-005',
        title: 'Internet connectivity issues',
        description: 'Internet connection in the area is unstable, causing frequent disconnections affecting online work.',
        department: 'Internet & Telecom',
        departmentId: 5,
        status: 'In Progress',
        priority: 'Medium',
        reportedDate: '2024-01-17',
        expectedResolutionDate: '2024-01-22',
        citizenId: 'user1',
        citizenName: 'Rajesh Kumar',
        citizenPhone: '+91 98765 43210',
        assignedOfficer: 'Arun Kumar',
        location: 'Sector 3, Delhi',
        image: 'https://via.placeholder.com/300x200?text=Internet',
        progress: 55,
        activities: [
            { date: '2024-01-17', time: '02:00 PM', action: 'Complaint Registered', status: 'completed' },
            { date: '2024-01-17', time: '04:00 PM', action: 'Assigned to Officer', status: 'completed' },
            { date: '2024-01-18', time: '09:00 AM', action: 'Technical Investigation', status: 'in-progress' },
        ],
    },
];

// Mock Department Officers
const generateMockOfficers = () => [
    { id: 'off1', name: 'Priya Singh', department: 'Water Supply', email: 'priya.singh@water.gov.in', complaintsAssigned: 15, resolved: 12 },
    { id: 'off2', name: 'Vikram Patel', department: 'Roads & Transport', email: 'vikram.patel@roads.gov.in', complaintsAssigned: 22, resolved: 18 },
    { id: 'off3', name: 'Deepak Sharma', department: 'Sanitation', email: 'deepak.sharma@sanitation.gov.in', complaintsAssigned: 18, resolved: 14 },
    { id: 'off4', name: 'Arun Kumar', department: 'Internet & Telecom', email: 'arun.kumar@telecom.gov.in', complaintsAssigned: 12, resolved: 10 },
    { id: 'off5', name: 'Neha Gupta', department: 'Electricity', email: 'neha.gupta@power.gov.in', complaintsAssigned: 25, resolved: 22 },
];

// Mock Analytics Data
const generateMockAnalytics = () => ({
    totalComplaints: 245,
    resolvedComplaints: 198,
    pendingComplaints: 32,
    inProgressComplaints: 15,
    averageResolutionTime: '8.5 days',
    slaViolations: 3,
    departmentStats: [
        { name: 'Water Supply', complaints: 35, resolved: 30 },
        { name: 'Electricity', complaints: 28, resolved: 23 },
        { name: 'Roads & Transport', complaints: 42, resolved: 38 },
        { name: 'Sanitation', complaints: 32, resolved: 26 },
        { name: 'Internet & Telecom', complaints: 18, resolved: 15 },
        { name: 'Health', complaints: 25, resolved: 22 },
        { name: 'Police / Public Safety', complaints: 38, resolved: 32 },
        { name: 'Education', complaints: 22, resolved: 20 },
        { name: 'Municipal Services', complaints: 30, resolved: 25 },
    ],
    complaintsTrendData: [
        { month: 'Jan', complaints: 45 },
        { month: 'Feb', complaints: 38 },
        { month: 'Mar', complaints: 52 },
        { month: 'Apr', complaints: 41 },
        { month: 'May', complaints: 35 },
        { month: 'Jun', complaints: 48 },
    ],
});

// Mock Notifications
const generateMockNotifications = () => [
    { id: 1, title: 'Complaint Resolved', message: 'Your complaint CMPT-003 has been resolved.', type: 'success', timestamp: '2024-01-17 04:00 PM', read: false },
    { id: 2, title: 'Status Update', message: 'Officer assigned to your complaint CMPT-001.', type: 'info', timestamp: '2024-01-15 02:00 PM', read: false },
    { id: 3, title: 'New Complaint Assigned', message: 'CMPT-005 has been assigned to you.', type: 'info', timestamp: '2024-01-17 04:00 PM', read: true },
    { id: 4, title: 'SLA Violation Alert', message: 'CMPT-002 is approaching SLA deadline.', type: 'warning', timestamp: '2024-01-18 10:00 AM', read: true },
];

export const getMockComplaints = () => generateMockComplaints();
export const getMockOfficers = () => generateMockOfficers();
export const getMockAnalytics = () => generateMockAnalytics();
export const getMockNotifications = () => generateMockNotifications();

export default {
    getMockComplaints,
    getMockOfficers,
    getMockAnalytics,
    getMockNotifications,
};
