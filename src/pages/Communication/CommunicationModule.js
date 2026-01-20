'use client';

import React, { useState } from 'react';
import '../../styles/dashboard.css';

const CommunicationModule = ({ user, onNavigate }) => {
    const [messages, setMessages] = useState([
        { id: 1, sender: 'Officer', message: 'We have received your complaint and will inspect the site tomorrow.', timestamp: '10:30 AM', read: true },
        { id: 2, sender: 'You', message: 'Thank you. When can I expect the resolution?', timestamp: '10:35 AM', read: true },
        { id: 3, sender: 'Officer', message: 'We estimate 2-3 days for complete resolution.', timestamp: '11:00 AM', read: false }
    ]);
    const [newMessage, setNewMessage] = useState('');
    const [selectedComplaint, setSelectedComplaint] = useState('CMPT-001');

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setMessages([...messages, {
                id: messages.length + 1,
                sender: 'You',
                message: newMessage,
                timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
                read: true
            }]);
            setNewMessage('');
        }
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Communication Center</h1>
                <p>Chat with officers and track conversations</p>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: '300px 1fr', gap: '20px', height: '600px'}}>
                <div style={{background: '#fff', borderRadius: '8px', padding: '20px', border: '1px solid #e5e7eb'}}>
                    <h3>Active Complaints</h3>
                    <div style={{marginTop: '15px'}}>
                        <div 
                            style={{padding: '10px', background: selectedComplaint === 'CMPT-001' ? '#f3f4f6' : 'transparent', borderRadius: '6px', cursor: 'pointer', marginBottom: '10px'}}
                            onClick={() => setSelectedComplaint('CMPT-001')}
                        >
                            <strong>CMPT-001</strong>
                            <p style={{margin: '5px 0 0', fontSize: '14px', color: '#6b7280'}}>Water pipe burst</p>
                        </div>
                        <div 
                            style={{padding: '10px', background: selectedComplaint === 'CMPT-002' ? '#f3f4f6' : 'transparent', borderRadius: '6px', cursor: 'pointer'}}
                            onClick={() => setSelectedComplaint('CMPT-002')}
                        >
                            <strong>CMPT-002</strong>
                            <p style={{margin: '5px 0 0', fontSize: '14px', color: '#6b7280'}}>Street lights not working</p>
                        </div>
                    </div>
                </div>

                <div style={{background: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb', display: 'flex', flexDirection: 'column'}}>
                    <div style={{padding: '20px', borderBottom: '1px solid #e5e7eb'}}>
                        <h3>Chat - {selectedComplaint}</h3>
                        <p style={{margin: '5px 0 0', color: '#6b7280'}}>Officer: Priya Singh</p>
                    </div>

                    <div style={{flex: 1, padding: '20px', overflowY: 'auto'}}>
                        {messages.map(msg => (
                            <div key={msg.id} style={{marginBottom: '15px', display: 'flex', justifyContent: msg.sender === 'You' ? 'flex-end' : 'flex-start'}}>
                                <div style={{
                                    maxWidth: '70%',
                                    padding: '10px 15px',
                                    borderRadius: '18px',
                                    background: msg.sender === 'You' ? '#0052cc' : '#f3f4f6',
                                    color: msg.sender === 'You' ? '#fff' : '#1f2937'
                                }}>
                                    <p style={{margin: 0}}>{msg.message}</p>
                                    <small style={{opacity: 0.7, fontSize: '12px'}}>{msg.timestamp}</small>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{padding: '20px', borderTop: '1px solid #e5e7eb', display: 'flex', gap: '10px'}}>
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Type your message..."
                            style={{flex: 1, padding: '10px', border: '1px solid #e5e7eb', borderRadius: '20px'}}
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        />
                        <button onClick={handleSendMessage} className="btn btn-primary" style={{borderRadius: '20px'}}>
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunicationModule;