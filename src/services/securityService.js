// Security & Compliance Service

export class SecurityService {
  constructor() {
    this.sessions = new Map();
    this.auditLog = [];
    this.rolePermissions = {
      citizen: [
        'file_complaint',
        'view_own_complaints',
        'provide_feedback',
        'download_receipt',
        'update_profile',
        'manage_notifications'
      ],
      officer: [
        'view_assigned_complaints',
        'update_complaint_status',
        'upload_proof',
        'request_info',
        'transfer_complaint',
        'view_performance',
        'manage_notifications'
      ],
      admin: [
        'view_all_complaints',
        'search_complaints',
        'reassign_complaints',
        'delete_complaints',
        'manage_users',
        'manage_officers',
        'configure_sla',
        'view_reports',
        'system_settings',
        'view_audit_log'
      ]
    };
  }

  // Role-based access control
  checkPermission(role, action) {
    const permissions = this.rolePermissions[role] || [];
    return permissions.includes(action);
  }

  // Session management
  createSession(userId, role) {
    const sessionId = this.generateToken();
    const session = {
      sessionId,
      userId,
      role,
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
      ipAddress: '127.0.0.1', // Mock
      userAgent: 'Mozilla/5.0' // Mock
    };
    
    this.sessions.set(sessionId, session);
    return sessionId;
  }

  // Validate session
  validateSession(sessionId) {
    const session = this.sessions.get(sessionId);
    
    if (!session) {
      return { valid: false, reason: 'Session not found' };
    }

    if (new Date() > session.expiresAt) {
      this.sessions.delete(sessionId);
      return { valid: false, reason: 'Session expired' };
    }

    return { valid: true, session };
  }

  // Password validation
  validatePassword(password) {
    const requirements = {
      minLength: password.length >= 8,
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasNumbers: /\d/.test(password),
      hasSpecialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
    };

    const strength = Object.values(requirements).filter(v => v).length;

    return {
      isValid: Object.values(requirements).every(v => v),
      strength: strength, // 0-5
      requirements,
      feedback: this.getPasswordFeedback(requirements)
    };
  }

  // Get password feedback
  getPasswordFeedback(requirements) {
    const missing = [];
    
    if (!requirements.minLength) missing.push('At least 8 characters');
    if (!requirements.hasUpperCase) missing.push('One uppercase letter');
    if (!requirements.hasLowerCase) missing.push('One lowercase letter');
    if (!requirements.hasNumbers) missing.push('One number');
    if (!requirements.hasSpecialChar) missing.push('One special character');

    return missing;
  }

  // Generate secure token
  generateToken(length = 32) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < length; i++) {
      token += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return token;
  }

  // Input validation & sanitization
  sanitizeInput(input) {
    if (typeof input !== 'string') return input;
    
    return input
      .replace(/[<>]/g, '') // Remove HTML tags
      .trim()
      .substring(0, 1000); // Limit length
  }

  // Audit logging
  logAudit(action, userId, details = {}) {
    const auditEntry = {
      timestamp: new Date(),
      action,
      userId,
      details,
      status: 'success'
    };

    this.auditLog.push(auditEntry);
    return auditEntry;
  }

  // Get audit trail
  getAuditTrail(userId = null, days = 30) {
    const cutoffDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
    
    let logs = this.auditLog.filter(log => log.timestamp > cutoffDate);
    
    if (userId) {
      logs = logs.filter(log => log.userId === userId);
    }

    return logs.sort((a, b) => b.timestamp - a.timestamp);
  }

  // Data privacy functions
  maskEmail(email) {
    const [local, domain] = email.split('@');
    const masked = local.substring(0, 2) + '*'.repeat(local.length - 2);
    return `${masked}@${domain}`;
  }

  maskPhoneNumber(phone) {
    return phone.substring(0, 2) + '*'.repeat(phone.length - 6) + phone.substring(phone.length - 4);
  }

  // Encryption (mock - in production use crypto libraries)
  encryptData(data) {
    // Mock encryption - in production use proper encryption
    return Buffer.from(JSON.stringify(data)).toString('base64');
  }

  // Decryption (mock)
  decryptData(encryptedData) {
    try {
      return JSON.parse(Buffer.from(encryptedData, 'base64').toString('utf-8'));
    } catch (e) {
      return null;
    }
  }

  // Rate limiting
  checkRateLimit(userId, action, limit = 10, window = 60) {
    const key = `${userId}:${action}`;
    const now = Date.now();
    const windowStart = now - (window * 1000);

    // Mock implementation
    return {
      allowed: true,
      remaining: limit,
      resetAt: new Date(now + window * 1000)
    };
  }

  // IP Whitelisting (mock)
  isIPWhitelisted(ipAddress) {
    const whitelist = ['127.0.0.1', '::1', 'localhost'];
    return whitelist.includes(ipAddress);
  }

  // Two-factor authentication (mock)
  generateOTP(userId) {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    return {
      otp,
      expiresAt: new Date(Date.now() + 10 * 60 * 1000) // 10 minutes
    };
  }

  // Verify OTP
  verifyOTP(otp, storedOTP) {
    return otp === storedOTP;
  }
}

// Compliance Checker
export class ComplianceChecker {
  constructor() {
    this.regulations = {
      'GDPR': {
        name: 'General Data Protection Regulation',
        requirements: [
          'Data minimization',
          'Purpose limitation',
          'Storage limitation',
          'Right to access',
          'Right to erasure',
          'Data portability'
        ]
      },
      'ISO27001': {
        name: 'Information Security Management',
        requirements: [
          'Access control',
          'Encryption',
          'Incident response',
          'Audit logging',
          'Backup & recovery',
          'Security awareness'
        ]
      },
      'GOV_COMPLIANCE': {
        name: 'Government Data Protection Act',
        requirements: [
          'Citizen data protection',
          'Transparency',
          'Accessibility',
          'Service level agreement',
          'Complaint handling',
          'Public reporting'
        ]
      }
    };
  }

  // Check compliance
  checkCompliance(regulation) {
    return this.regulations[regulation] || null;
  }

  // Get compliance report
  getComplianceReport() {
    const report = {};
    
    for (const [reg, data] of Object.entries(this.regulations)) {
      report[reg] = {
        name: data.name,
        status: 'compliant',
        requirements: data.requirements,
        lastAudit: new Date(),
        nextAudit: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)
      };
    }

    return report;
  }

  // Data retention policy
  getDataRetentionPolicy() {
    return {
      complaints: {
        active: '2 years',
        archived: '7 years',
        deletion: 'Secure wipe after retention period'
      },
      auditLogs: {
        retention: '5 years',
        access: 'Admin only',
        backup: 'Monthly encrypted backup'
      },
      userProfiles: {
        active: 'Until account deletion',
        inactive: '2 years (warning after 1 year)',
        gdprDeletion: 'Immediate upon request'
      },
      sessionLogs: {
        retention: '90 days',
        access: 'Authorized admin',
        deletion: 'Automatic after retention'
      }
    };
  }
}

// Data Protection Service
export class DataProtectionService {
  constructor() {
    this.encryptionKey = 'mock-encryption-key-32-chars-long';
  }

  // Backup management
  createBackup(data) {
    return {
      id: Date.now().toString(),
      timestamp: new Date(),
      data: JSON.stringify(data),
      checksum: this.generateChecksum(data),
      encrypted: true,
      size: JSON.stringify(data).length
    };
  }

  // Generate checksum
  generateChecksum(data) {
    let hash = 0;
    const str = JSON.stringify(data);
    
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    
    return Math.abs(hash).toString(16);
  }

  // Verify backup integrity
  verifyBackup(backup) {
    const currentChecksum = this.generateChecksum(JSON.parse(backup.data));
    return currentChecksum === backup.checksum;
  }

  // Recovery procedure
  recover(backup) {
    if (!this.verifyBackup(backup)) {
      return {
        success: false,
        message: 'Backup integrity check failed'
      };
    }

    return {
      success: true,
      data: JSON.parse(backup.data),
      timestamp: backup.timestamp
    };
  }

  // Disaster recovery plan
  getDisasterRecoveryPlan() {
    return {
      rpo: '1 hour', // Recovery Point Objective
      rto: '2 hours', // Recovery Time Objective
      backupFrequency: 'Every 1 hour',
      locations: ['Primary Data Center', 'Secondary Data Center', 'Cloud Backup'],
      testingSchedule: 'Quarterly',
      documentation: 'Available for authorized personnel'
    };
  }
}

export default {
  SecurityService,
  ComplianceChecker,
  DataProtectionService
};
