import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-400 text-white">
      {/* Navigation */}
      <div className="absolute top-4 right-4 space-x-4">
        <Link
          to="/login"
          className="px-6 py-2 text-white hover:text-blue-100 transition-colors duration-200"
        >
          Sign In
        </Link>
      </div>

      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Logo size="large" className="text-white w-16 h-16" />
            <h2 className="text-2xl font-bold tracking-tight">SCOPE PRESENTS</h2>
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-extrabold mb-8 tracking-tight">
            SkillSort
          </h1>
          
          <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Your one-stop solution for tracking competitive programming progress across multiple platforms
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register"
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold rounded-full bg-black text-white hover:bg-gray-900 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
            <Link
              to="/login"
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold rounded-full border-2 border-white text-white hover:bg-white/10 transition-all duration-200"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-4 hidden lg:block">
          <div className="w-96 h-96 bg-black/10 backdrop-blur-lg rounded-3xl p-6 transform rotate-6">
            <div className="w-full h-full border-2 border-white/20 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing; 