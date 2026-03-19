"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FiAlertTriangle, FiRefreshCcw, FiHome } from "react-icons/fi";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error); // log error
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">

        {/* Icon */}
        <div className="flex justify-center mb-4 text-red-500">
          <FiAlertTriangle size={60} />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800">
          Oops! Something went wrong
        </h1>

        {/* Dynamic Error Message */}
        <p className="text-gray-500 mt-2">
          {error?.message || "Unexpected error occurred"}
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          
          <button
            onClick={() => reset()}
            className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <FiRefreshCcw />
            Try Again
          </button>

          <Link
            href="/"
            className="flex items-center gap-2 px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            <FiHome />
            Home
          </Link>

        </div>

        {/* Dev Error Details */}
        {process.env.NODE_ENV === "development" && (
          <pre className="mt-6 text-xs text-red-400 overflow-auto">
            {error?.stack}
          </pre>
        )}
      </div>
    </div>
  );
}