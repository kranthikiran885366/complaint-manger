// Complaint Processing Engine

export class ComplaintProcessingEngine {
    static processComplaint(complaintData) {
        const complaintId = this.generateComplaintId();
        const processedComplaint = {
            ...complaintData,
            id: complaintId,
            status: 'Submitted',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            lifecycle: ['Submitted'],
            slaDeadline: this.calculateSLADeadline(complaintData.priority),
            assignedOfficer: null,
            escalationLevel: 0
        };

        // Auto-assign based on department and location
        const assignedOfficer = this.autoAssignOfficer(complaintData.department, complaintData.location);
        if (assignedOfficer) {
            processedComplaint.assignedOfficer = assignedOfficer;
            processedComplaint.status = 'Assigned';
            processedComplaint.lifecycle.push('Assigned');
        }

        return processedComplaint;
    }

    static updateComplaintStatus(complaintId, newStatus, officerId, notes = '') {
        const statusUpdate = {
            complaintId,
            previousStatus: 'In Progress', // Mock previous status
            newStatus,
            updatedBy: officerId,
            updatedAt: new Date().toISOString(),
            notes,
            proofDocuments: []
        };

        // Validate status transition
        const validTransitions = this.getValidStatusTransitions('In Progress');
        if (!validTransitions.includes(newStatus)) {
            throw new Error(`Invalid status transition to ${newStatus}`);
        }

        return statusUpdate;
    }

    static getValidStatusTransitions(currentStatus) {
        const transitions = {
            'Submitted': ['Assigned', 'Rejected'],
            'Assigned': ['In Progress', 'Rejected', 'Hold'],
            'In Progress': ['Resolved', 'Hold', 'Escalated'],
            'Hold': ['In Progress', 'Escalated'],
            'Resolved': ['Closed', 'Reopened'],
            'Closed': ['Reopened'],
            'Reopened': ['Assigned', 'In Progress'],
            'Escalated': ['In Progress', 'Resolved']
        };
        return transitions[currentStatus] || [];
    }

    static escalateComplaint(complaintId, reason, escalatedBy) {
        return {
            complaintId,
            escalationLevel: 1, // Increment based on current level
            escalatedBy,
            escalatedAt: new Date().toISOString(),
            reason,
            escalatedTo: 'dept_head', // Next level
            autoEscalation: false
        };
    }

    static autoAssignOfficer(department, location) {
        // Mock auto-assignment logic
        const officers = {
            'Water Supply': ['officer1', 'officer2'],
            'Electricity': ['officer3', 'officer4'],
            'Roads & Transport': ['officer5', 'officer6']
        };

        const availableOfficers = officers[department] || [];
        if (availableOfficers.length > 0) {
            return availableOfficers[Math.floor(Math.random() * availableOfficers.length)];
        }
        return null;
    }

    static calculateSLADeadline(priority) {
        const slaHours = {
            'Critical': 24,
            'High': 72,
            'Medium': 168, // 7 days
            'Low': 360 // 15 days
        };

        const hours = slaHours[priority] || 168;
        const deadline = new Date();
        deadline.setHours(deadline.getHours() + hours);
        return deadline.toISOString();
    }

    static generateComplaintId() {
        const prefix = 'CMPT';
        const timestamp = Date.now().toString().slice(-6);
        const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
        return `${prefix}-${timestamp}-${random}`;
    }

    static checkSLABreach(complaint) {
        const now = new Date();
        const deadline = new Date(complaint.slaDeadline);
        const isBreached = now > deadline;
        const hoursRemaining = Math.max(0, Math.floor((deadline - now) / (1000 * 60 * 60)));

        return {
            isBreached,
            hoursRemaining,
            percentageElapsed: Math.min(100, Math.floor(((now - new Date(complaint.createdAt)) / (deadline - new Date(complaint.createdAt))) * 100))
        };
    }

    static reopenComplaint(complaintId, citizenId, reason) {
        return {
            complaintId,
            reopenedBy: citizenId,
            reopenedAt: new Date().toISOString(),
            reason,
            previousStatus: 'Closed',
            newStatus: 'Reopened',
            requiresReassignment: true
        };
    }
}

export class SLAManager {
    static getSLAConfiguration() {
        return {
            'Critical': { hours: 24, escalationThreshold: 0.8 },
            'High': { hours: 72, escalationThreshold: 0.8 },
            'Medium': { hours: 168, escalationThreshold: 0.8 },
            'Low': { hours: 360, escalationThreshold: 0.8 }
        };
    }

    static updateSLAConfiguration(priority, hours, escalationThreshold) {
        return {
            priority,
            hours,
            escalationThreshold,
            updatedAt: new Date().toISOString(),
            updatedBy: 'admin'
        };
    }

    static checkSLAViolations(complaints) {
        return complaints.filter(complaint => {
            const slaCheck = ComplaintProcessingEngine.checkSLABreach(complaint);
            return slaCheck.isBreached;
        });
    }
}

export default {
    ComplaintProcessingEngine,
    SLAManager
};