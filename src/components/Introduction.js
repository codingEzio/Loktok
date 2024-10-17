// src/components/Introduction.js
import React from 'react';

function Introduction() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">Welcome to My React App</h1>
        <p className="text-gray-700 mb-4">
          This application demonstrates a simple multi-page setup using React Router.
        </p>
        <p className="text-gray-700">
          Navigate through the pages to explore different functionalities, including a responsive profile page and a dynamic scrollable feed similar to TikTok.
        </p>
      </div>
    </div>
  );
}

export default Introduction;
