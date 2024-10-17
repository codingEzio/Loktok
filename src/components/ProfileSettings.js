// src/components/ProfileSettings.js
import React from 'react';

function ProfileSettings() {
  return (
    <div className="page profile-settings">
      <h1>Profile</h1>
      <p><strong>Name:</strong> Josh</p>
      <p><strong>Website:</strong> <a href="https://example.com" target="_blank" rel="noopener noreferrer">example.com</a></p>
      {/* Future: Add more settings and profile details here */}
    </div>
  );
}

export default ProfileSettings;
