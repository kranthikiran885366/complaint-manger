import React from 'react';
import '../../styles/dashboard.css';

const NotificationsPage = ({ notifications = [], onNavigate }) => {
  const groupedNotifications = {
    today: [],
    thisWeek: [],
    older: []
  };

  const now = new Date();
  if (notifications && notifications.length > 0) {
    notifications.forEach(notif => {
      const diffMs = now - new Date(notif.timestamp);
      const diffDays = diffMs / (1000 * 60 * 60 * 24);
      
      if (diffDays < 1) {
        groupedNotifications.today.push(notif);
      } else if (diffDays < 7) {
        groupedNotifications.thisWeek.push(notif);
      } else {
        groupedNotifications.older.push(notif);
      }
    });
  }

  return (
    <div style={{flex: 1, padding: '20px'}}>
      <h1>Notifications</h1>
      
      {!notifications || notifications.length === 0 ? (
        <div style={{textAlign: 'center', padding: '40px', color: '#9ca3af'}}>
          <i className="fas fa-bell" style={{fontSize: '48px', marginBottom: '10px'}}></i>
          <p>No notifications yet</p>
        </div>
      ) : (
        <>
          {groupedNotifications.today.length > 0 && (
            <div style={{marginBottom: '30px'}}>
              <h3 style={{color: '#6b7280', marginBottom: '10px'}}>Today</h3>
              {groupedNotifications.today.map(notif => (
                <div key={notif.id} style={{
                  background: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  padding: '15px',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <div style={{width: '12px', height: '12px', borderRadius: '50%', background: notif.read ? '#d1d5db' : '#0052cc', flexShrink: 0}}></div>
                  <div style={{flex: 1}}>
                    <p style={{margin: 0, fontWeight: notif.read ? 'normal' : 'bold'}}>{notif.message}</p>
                    <small style={{color: '#9ca3af'}}>{notif.timestamp.toLocaleTimeString()}</small>
                  </div>
                </div>
              ))}
            </div>
          )}

          {groupedNotifications.thisWeek.length > 0 && (
            <div style={{marginBottom: '30px'}}>
              <h3 style={{color: '#6b7280', marginBottom: '10px'}}>This Week</h3>
              {groupedNotifications.thisWeek.map(notif => (
                <div key={notif.id} style={{
                  background: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  padding: '15px',
                  marginBottom: '10px'
                }}>
                  <p style={{margin: 0}}>{notif.message}</p>
                  <small style={{color: '#9ca3af'}}>{notif.timestamp.toLocaleDateString()}</small>
                </div>
              ))}
            </div>
          )}

          {groupedNotifications.older.length > 0 && (
            <div>
              <h3 style={{color: '#6b7280', marginBottom: '10px'}}>Older</h3>
              {groupedNotifications.older.map(notif => (
                <div key={notif.id} style={{
                  background: '#f9fafb',
                  border: '1px solid #f3f4f6',
                  borderRadius: '8px',
                  padding: '15px',
                  marginBottom: '10px',
                  opacity: '0.7'
                }}>
                  <p style={{margin: 0}}>{notif.message}</p>
                  <small style={{color: '#9ca3af'}}>{notif.timestamp.toLocaleDateString()}</small>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default NotificationsPage;
