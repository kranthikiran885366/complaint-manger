// Communication Service

export class CommunicationService {
    static sendMessage(complaintId, senderId, message, attachments = []) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const messageId = `msg_${Date.now()}`;
                resolve({
                    id: messageId,
                    complaintId,
                    senderId,
                    message,
                    attachments,
                    timestamp: new Date().toISOString(),
                    status: 'sent',
                    readBy: []
                });
            }, 500);
        });
    }

    static getConversation(complaintId) {
        return [
            {
                id: 'msg_1',
                senderId: 'officer1',
                senderName: 'Priya Singh',
                senderRole: 'officer',
                message: 'We have received your complaint and will inspect the site tomorrow.',
                timestamp: '2024-01-20T10:30:00Z',
                status: 'read'
            },
            {
                id: 'msg_2',
                senderId: 'user1',
                senderName: 'Rajesh Kumar',
                senderRole: 'citizen',
                message: 'Thank you. When can I expect the resolution?',
                timestamp: '2024-01-20T10:35:00Z',
                status: 'read'
            },
            {
                id: 'msg_3',
                senderId: 'officer1',
                senderName: 'Priya Singh',
                senderRole: 'officer',
                message: 'We estimate 2-3 days for complete resolution.',
                timestamp: '2024-01-20T11:00:00Z',
                status: 'delivered'
            }
        ];
    }

    static markAsRead(messageId, userId) {
        return {
            messageId,
            userId,
            readAt: new Date().toISOString()
        };
    }

    static getActiveChats(userId) {
        return [
            {
                complaintId: 'CMPT-001',
                complaintTitle: 'Water pipe burst',
                lastMessage: 'We estimate 2-3 days for complete resolution.',
                lastMessageTime: '11:00 AM',
                unreadCount: 1,
                participantName: 'Priya Singh',
                participantRole: 'officer'
            },
            {
                complaintId: 'CMPT-002',
                complaintTitle: 'Street lights not working',
                lastMessage: 'Complaint has been assigned to our team.',
                lastMessageTime: 'Yesterday',
                unreadCount: 0,
                participantName: 'Neha Gupta',
                participantRole: 'officer'
            }
        ];
    }
}

export class VoiceToTextService {
    static startRecording() {
        return new Promise((resolve, reject) => {
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                reject(new Error('Voice recording not supported'));
                return;
            }

            navigator.mediaDevices.getUserMedia({ audio: true })
                .then(stream => {
                    resolve({
                        stream,
                        recordingId: `recording_${Date.now()}`
                    });
                })
                .catch(reject);
        });
    }

    static stopRecording(recordingId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    recordingId,
                    transcription: 'There is a water pipe burst near the market area causing flooding on the road.',
                    confidence: 0.95,
                    duration: '15 seconds'
                });
            }, 2000);
        });
    }

    static transcribeAudio(audioFile) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    transcription: 'The street lights in our area have not been working for the past week.',
                    confidence: 0.92,
                    language: 'en'
                });
            }, 3000);
        });
    }
}

export default {
    CommunicationService,
    VoiceToTextService
};