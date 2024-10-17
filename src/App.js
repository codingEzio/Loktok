// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Introduction from './components/Introduction';
import ProfileSettings from './components/ProfileSettings';
import ScrollPage from './components/ScrollPage';
import NotFound from './components/NotFound';

// FontAwesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faScroll, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <nav className="bg-blue-600 text-white px-4 py-3 shadow-md">
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo or Brand Name */}
            <Link to="/" className="text-xl font-bold" onClick={closeMobileMenu}>
              MyReactApp
            </Link>

            {/* Hamburger Menu Icon (Mobile) */}
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} aria-label="Toggle Menu">
                <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} size="lg" />
              </button>
            </div>

            {/* Navigation Links */}
            <ul className={`md:flex md:items-center absolute md:static bg-blue-600 w-full left-0 md:w-auto transition-all duration-300 ease-in ${isMobileMenuOpen ? 'top-16' : 'top-[-490px]'}`}>
              <li className="mx-2 my-4 md:my-0">
                <Link to="/" className="flex items-center hover:text-gray-300" onClick={closeMobileMenu}>
                  <FontAwesomeIcon icon={faHome} className="mr-2" />
                  Introduction
                </Link>
              </li>
              <li className="mx-2 my-4 md:my-0">
                <Link to="/profile" className="flex items-center hover:text-gray-300" onClick={closeMobileMenu}>
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  Profile + Settings
                </Link>
              </li>
              <li className="mx-2 my-4 md:my-0">
                <Link to="/scroll" className="flex items-center hover:text-gray-300" onClick={closeMobileMenu}>
                  <FontAwesomeIcon icon={faScroll} className="mr-2" />
                  Scroll Page
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/profile" element={<ProfileSettings />} />
            <Route path="/scroll" element={<ScrollPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer (Optional) */}
        <footer className="bg-blue-600 text-white text-center py-4">
          &copy; {new Date().getFullYear()} MyReactApp. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
