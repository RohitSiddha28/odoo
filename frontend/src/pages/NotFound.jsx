import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-xl p-10 text-center max-w-md w-full">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <FaExclamationTriangle
            className="text-yellow-500"
            size={70}
          />
        </div>

        {/* Error Code */}
        <h1 className="text-6xl font-bold text-gray-800 mb-2">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mb-8">
          Sorry, the page you're looking for doesn't exist or has been
          moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
        >
          <FaHome />
          Go to Dashboard
        </Link>

      </div>
    </div>
  );
};

export default NotFound;