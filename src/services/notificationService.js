// Notification & Escalation Service

export class NotificationService {
  constructor() {
    this.notifications = [];
    this.escalationRules = {
      'Critical': { initialSLA: 1, escalationDays: 0.5 },
      'High': { initialSLA: 3, escalationDays: 1.5 },
      'Medium': { initialSLA: 7, escalationDays: 3 },
      'Low': { initialSLA: 15, escalationDays: 7 }
    };
  }

  // Create different notification types
  createNotification(type, data) {
    const notification = {
      id: Date.now().toString(),
      type, // 'sms', 'email', 'push', 'escalation', 'status_update'
      data,
      timestamp: new Date(),
      read: false,
      recipient: data.recipient
    };

    this.notifications.push(notification);
    return notification;
  }

  // SMS Notification
  sendSMS(phoneNumber, message) {
    return this.createNotification('sms', {
      recipient: phoneNumber,
      message,
      channel: 'SMS'
    });
  }

  // Email Notification
  sendEmail(email, subject, message) {
    return this.createNotification('email', {
      recipient: email,
      subject,
      message,
      channel: 'EMAIL'
    });
  }

  // Push Notification
  sendPush(userId, title, body) {
    return this.createNotification('push', {
      recipient: userId,
      title,
      body,
      channel: 'PUSH'
    });
  }

  // Escalation Alert
  sendEscalationAlert(complaintId, priority, escalationType) {
    return this.createNotification('escalation', {
      complaintId,
      priority,
      escalationType, // 'senior_officer', 'admin', 'auto_resolve'
      message: `Complaint #${complaintId} escalated due to SLA breach`
    });
  }

  // Status Update Notification
  sendStatusUpdate(complaintId, oldStatus, newStatus, recipientEmail) {
    return this.createNotification('status_update', {
      complaintId,
      oldStatus,
      newStatus,
      recipient: recipientEmail,
      message: `Your complaint status changed from ${oldStatus} to ${newStatus}`
    });
  }

  // SLA Breach Alert
  sendSLABreach(complaintId, priority) {
    const escalationRule = this.escalationRules[priority];
    return this.createNotification('escalation', {
      complaintId,
      priority,
      escalationType: 'sla_breach',
      message: `SLA Breach Alert: Complaint #${complaintId} (${priority} priority) exceeded SLA of ${escalationRule.initialSLA} days`
    });
  }

  // Get notifications for user
  getNotifications(userId, filter = 'all') {
    let filtered = this.notifications.filter(n => n.recipient === userId);

    if (filter === 'unread') {
      filtered = filtered.filter(n => !n.read);
    }

    return filtered.sort((a, b) => b.timestamp - a.timestamp);
  }

  // Mark notification as read
  markAsRead(notificationId) {
    const notif = this.notifications.find(n => n.id === notificationId);
    if (notif) {
      notif.read = true;
    }
    return notif;
  }

  // Clear notifications
  clearNotifications(userId) {
    this.notifications = this.notifications.filter(n => n.recipient !== userId);
  }
}

// Escalation Engine
export class EscalationEngine {
  constructor() {
    this.escalationChain = [
      { level: 1, role: 'officer', description: 'Assigned Officer' },
      { level: 2, role: 'senior_officer', description: 'Senior Officer' },
      { level: 3, role: 'admin', description: 'Admin Dashboard' }
    ];
  }

  // Check if escalation needed
  shouldEscalate(complaint, slaStatus) {
    return slaStatus.daysRemaining <= 0 || 
           (slaStatus.percentageElapsed >= 80 && complaint.status !== 'Resolved');
  }

  // Get next escalation level
  getNextEscalationLevel(currentLevel) {
    const nextLevel = this.escalationChain.find(e => e.level > currentLevel);
    return nextLevel || null;
  }

  // Auto-escalate complaint
  escalateComplaint(complaint, currentLevel = 0) {
    const nextLevel = this.getNextEscalationLevel(currentLevel);

    if (!nextLevel) {
      return {
        escalated: false,
        message: 'Maximum escalation level reached',
        action: 'auto_resolve'
      };
    }

    return {
      escalated: true,
      currentLevel: nextLevel.level,
      assignedTo: nextLevel.role,
      description: nextLevel.description,
      action: `escalate_to_${nextLevel.role}`
    };
  }

  // Generate escalation reason
  generateEscalationReason(complaint, slaStatus) {
    if (slaStatus.daysRemaining < 0) {
      return `SLA Breach: ${Math.abs(slaStatus.daysRemaining)} days overdue`;
    } else if (slaStatus.daysRemaining <= 1) {
      return `Critical: Only ${slaStatus.daysRemaining} day(s) remaining`;
    } else {
      return 'Escalation threshold reached';
    }
  }
}

// Activity Log Service
export class ActivityLogService {
  constructor() {
    this.logs = [];
  }

  // Log activity
  logActivity(complaintId, action, actor, details = {}) {
    const log = {
      id: Date.now().toString(),
      complaintId,
      action,
      actor,
      timestamp: new Date(),
      details
    };

    this.logs.push(log);
    return log;
  }

  // Get complaint activity timeline
  getTimeline(complaintId) {
    return this.logs
      .filter(log => log.complaintId === complaintId)
      .sort((a, b) => a.timestamp - b.timestamp)
      .map(log => ({
        ...log,
        timeAgo: this.getTimeAgo(log.timestamp)
      }));
  }

  // Calculate time ago string
  getTimeAgo(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    
    if (seconds < 60) return 'just now';
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;
    
    return date.toLocaleDateString();
  }

  // Get audit trail
  getAuditTrail(complaintId) {
    const timeline = this.getTimeline(complaintId);
    return timeline.map(log => ({
      time: log.timestamp.toLocaleString(),
      action: log.action,
      actor: log.actor,
      details: JSON.stringify(log.details)
    }));
  }
}

export default {
  NotificationService,
  EscalationEngine,
  ActivityLogService
};
