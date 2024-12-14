// AboutPage.js
import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-indigo-900 to-purple-900 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-xl max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Welcome to <strong>My Jobs Portal</strong>, your trusted destination for connecting talented individuals with outstanding career opportunities.
          Our mission is to empower professionals and organizations by facilitating seamless job matches, fostering growth, and unlocking potential.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          With a vast network of companies and job seekers, we are dedicated to creating a platform where talent meets opportunity.
          Whether you are looking for your dream job or seeking the perfect candidate, <strong>My Jobs Portal</strong> is here to support your journey every step of the way.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Thank you for choosing us. Together, let’s build a brighter professional future.
        </p>
      </div>
    </div>
  );
}


