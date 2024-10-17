// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Introduction from './components/Introduction';
import ProfileSettings from './components/ProfileSettings';
import ScrollPage from './components/ScrollPage';
import './App.css'; // Importing global styles

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/">Introduction</Link></li>
            <li><Link to="/profile">Profile + Settings</Link></li>
            <li><Link to="/scroll">Scroll Page</Link></li>
          </ul>
        </nav>

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/profile" element={<ProfileSettings />} />
          <Route path="/scroll" element={<ScrollPage />} />
          {/* Fallback Route for Undefined Paths */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

// Optional: 404 Not Found Component
function NotFound() {
  return (
    <div className="page">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Go to Introduction Page</Link>
    </div>
  );
}

export default App;
