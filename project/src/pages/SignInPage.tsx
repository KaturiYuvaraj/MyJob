import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignInPage() {
  const navigate = useNavigate();

  // State for toggling between Company and Personal Sign-In
  const [activeTab, setActiveTab] = useState('personal'); // 'personal' or 'company'

  // Form states
  const [personalEmail, setPersonalEmail] = useState('');
  const [personalPassword, setPersonalPassword] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyPassword, setCompanyPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (activeTab === 'personal') {
      if (personalEmail && personalPassword) {
        navigate('/'); // Redirect to homepage after successful personal sign-in
      } else {
        alert('Please fill in all fields for Personal Login');
      }
    } else if (activeTab === 'company') {
      if (companyEmail && companyPassword) {
        navigate('/'); // Redirect to homepage after successful company sign-in
      } else {
        alert('Please fill in all fields for Company Login');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex justify-center items-center">
      <div className="bg-white p-10 rounded-lg shadow-2xl w-full max-w-md">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Sign In</h2>

        {/* Tabs for toggling between Personal and Company login */}
        <div className="flex justify-center mb-6 space-x-6">
          <button
            className={`px-6 py-2 text-lg font-medium rounded-full focus:outline-none transition-all shadow-lg ${
              activeTab === 'personal'
                ? 'bg-blue-700 text-white'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
            onClick={() => setActiveTab('personal')}
          >
            Personal Login
          </button>
          <button
            className={`px-6 py-2 text-lg font-medium rounded-full focus:outline-none transition-all shadow-lg ${
              activeTab === 'company'
                ? 'bg-blue-700 text-white'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
            onClick={() => setActiveTab('company')}
          >
            Company Login
          </button>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit}>
          {activeTab === 'personal' && (
            <>
              <div className="mb-4">
                <label htmlFor="personalEmail" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="personalEmail"
                  name="personalEmail"
                  required
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={personalEmail}
                  onChange={(e) => setPersonalEmail(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="personalPassword" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="personalPassword"
                  name="personalPassword"
                  required
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={personalPassword}
                  onChange={(e) => setPersonalPassword(e.target.value)}
                />
              </div>
            </>
          )}

          {activeTab === 'company' && (
            <>
              <div className="mb-4">
                <label htmlFor="companyEmail" className="block text-sm font-medium text-gray-700">
                  Company Email
                </label>
                <input
                  type="email"
                  id="companyEmail"
                  name="companyEmail"
                  required
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={companyEmail}
                  onChange={(e) => setCompanyEmail(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="companyPassword" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="companyPassword"
                  name="companyPassword"
                  required
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={companyPassword}
                  onChange={(e) => setCompanyPassword(e.target.value)}
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full px-4 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-lg mb-4"
          >
            Sign In
          </button>

          {/* Social Media Login Buttons */}
          <div className="flex flex-col items-center space-y-4 mt-4">
            <button
              type="button"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-all"
            >
              <img src="src\images\google-icon.png" alt="Google" className="h-6 w-6 mr-2" />
              Sign in with Google
            </button>
            <button
              type="button"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-all"
            >
              <img src="src\images\facebook-icon.png" alt="Facebook" className="h-6 w-6 mr-2" />
              Sign in with Facebook
            </button>
          </div>
        </form>

        {/* Copyright Footer */}
        <p className="mt-8 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} My Jobs Portal. All rights reserved.
        </p>
      </div>
    </div>
  );
}
