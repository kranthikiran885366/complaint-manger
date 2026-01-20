// Format date
export const formatDate = (date) => {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
};

// Format time
export const formatTime = (date) => {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
    });
};

// Format datetime
export const formatDateTime = (date) => {
    return `${formatDate(date)} ${formatTime(date)}`;
};

// Calculate days remaining
export const daysRemaining = (targetDate) => {
    const today = new Date();
    const target = new Date(targetDate);
    const diff = target - today;
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
};

// Get badge color based on status
export const getStatusBadgeClass = (status) => {
    switch (status) {
        case 'Resolved':
            return 'badge-success';
        case 'Pending':
            return 'badge-pending';
        case 'In Progress':
            return 'badge-in-progress';
        case 'Rejected':
            return 'badge-rejected';
        default:
            return 'badge-pending';
    }
};

// Get status icon
export const getStatusIcon = (status) => {
    switch (status) {
        case 'Resolved':
            return 'fa-check-circle';
        case 'Pending':
            return 'fa-clock';
        case 'In Progress':
            return 'fa-spinner';
        case 'Rejected':
            return 'fa-times-circle';
        default:
            return 'fa-question-circle';
    }
};

// Validate email
export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

// Validate phone
export const validatePhone = (phone) => {
    const re = /^[0-9]{10}$/;
    return re.test(phone.replace(/\D/g, ''));
};

// Generate mock complaint ID
export const generateComplaintId = () => {
    return `CMPT-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
};

// Truncate text
export const truncateText = (text, length) => {
    if (text.length > length) {
        return text.substring(0, length) + '...';
    }
    return text;
};

// Format file size
export const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
};

// Get random color
export const getRandomColor = () => {
    const colors = ['#0052cc', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];
    return colors[Math.floor(Math.random() * colors.length)];
};

export default {
    formatDate,
    formatTime,
    formatDateTime,
    daysRemaining,
    getStatusBadgeClass,
    getStatusIcon,
    validateEmail,
    validatePhone,
    generateComplaintId,
    truncateText,
    formatFileSize,
    getRandomColor,
};
