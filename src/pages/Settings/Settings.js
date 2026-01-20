'use client';

import React, { useState } from 'react';
import '../../styles/profile.css';

const Settings = ({ user, onNavigate }) => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: true,
    pushNotifications: false,
    language: 'english',
    theme: 'light',
    dataPrivacy: true
  });

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleSaveSettings = () => {
    alert('Settings saved successfully!');
  };

  return (
    <div style={{flex: 1, padding: '20px'}}>
      <button onClick={() => onNavigate(user.role === 'admin' ? 'admin-dashboard' : user.role === 'officer' ? 'officer-dashboard' : 'dashboard')} className="btn btn-secondary" style={{marginBottom: '20px'}}>
        <i className="fas fa-arrow-left"></i> Back
      </button>

      <div className="profile-card">
        <h2>System Settings</h2>

        <div style={{marginTop: '30px'}}>
          <h3>Notification Preferences</h3>
          
          <label style={{display: 'flex', alignItems: 'center', gap: '10px', margin: '15px 0', cursor: 'pointer'}}>
            <input type="checkbox" checked={settings.emailNotifications} onChange={(e) => handleSettingChange('emailNotifications', e.target.checked)} />
            <span>Email Notifications</span>
          </label>

          <label style={{display: 'flex', alignItems: 'center', gap: '10px', margin: '15px 0', cursor: 'pointer'}}>
            <input type="checkbox" checked={settings.smsNotifications} onChange={(e) => handleSettingChange('smsNotifications', e.target.checked)} />
            <span>SMS Notifications</span>
          </label>

          <label style={{display: 'flex', alignItems: 'center', gap: '10px', margin: '15px 0', cursor: 'pointer'}}>
            <input type="checkbox" checked={settings.pushNotifications} onChange={(e) => handleSettingChange('pushNotifications', e.target.checked)} />
            <span>Push Notifications</span>
          </label>
        </div>

        <div style={{marginTop: '30px', paddingTop: '30px', borderTop: '1px solid #e5e7eb'}}>
          <h3>Preferences</h3>

          <div style={{marginTop: '15px'}}>
            <label>Language</label>
            <select value={settings.language} onChange={(e) => handleSettingChange('language', e.target.value)} style={{marginTop: '8px', padding: '8px', border: '1px solid #e5e7eb', borderRadius: '4px', width: '100%'}}>
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="marathi">Marathi</option>
              <option value="tamil">Tamil</option>
            </select>
          </div>

          <div style={{marginTop: '20px'}}>
            <label>Theme</label>
            <select value={settings.theme} onChange={(e) => handleSettingChange('theme', e.target.value)} style={{marginTop: '8px', padding: '8px', border: '1px solid #e5e7eb', borderRadius: '4px', width: '100%'}}>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="auto">Auto (System)</option>
            </select>
          </div>
        </div>

        <div style={{marginTop: '30px', paddingTop: '30px', borderTop: '1px solid #e5e7eb'}}>
          <h3>Privacy & Security</h3>

          <label style={{display: 'flex', alignItems: 'center', gap: '10px', margin: '15px 0', cursor: 'pointer'}}>
            <input type="checkbox" checked={settings.dataPrivacy} onChange={(e) => handleSettingChange('dataPrivacy', e.target.checked)} />
            <span>I agree to data privacy policy</span>
          </label>

          <button style={{marginTop: '20px', padding: '10px 20px', background: '#ef4444', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>
            <i className="fas fa-sign-out-alt"></i> Logout from All Devices
          </button>
        </div>

        <div style={{marginTop: '30px', display: 'flex', gap: '10px'}}>
          <button onClick={handleSaveSettings} className="btn btn-primary">
            <i className="fas fa-save"></i> Save Settings
          </button>
          <button className="btn btn-secondary">Reset to Default</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
