// src/components/ProfileSettings.js
import React from 'react';

function ProfileSettings() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Profile</h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">Name:</h2>
            <p className="text-gray-700">Josh</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Website:</h2>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              example.com
            </a>
          </div>
          {/* Future: Add more profile details or settings here */}
        </div>
      </div>
    </div>
  );
}

export default ProfileSettings;
