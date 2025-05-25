import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          About Us
        </h1>
        <div className="bg-white shadow-xl rounded-lg p-8 md:p-10 space-y-6">
          <p className="text-lg text-gray-700">
            Welcome to Adamass! This page is currently under construction.
          </p>
          <p className="text-gray-600">
            We are working hard to bring you more information about our company, our mission, and the innovative solutions we provide.
          </p>
          <p className="text-gray-600">
            Please check back soon for updates!
          </p>
          {
            // Add more content here later
          }
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 