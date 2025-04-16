import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Logo size="small" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              SkillSort
            </span>
          </Link>
          
          <div className="hidden sm:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-gray-600 hover:text-purple-600 transition-colors ${isActive('/') ? 'text-purple-600' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-gray-600 hover:text-purple-600 transition-colors ${isActive('/about') ? 'text-purple-600' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/login" 
              className={`text-gray-600 hover:text-purple-600 transition-colors ${isActive('/login') ? 'text-purple-600' : ''}`}
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="btn-primary"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 