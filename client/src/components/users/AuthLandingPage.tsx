import React from "react";
import { Link } from "react-router-dom";

const AuthLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
            Welcome to Our App
          </h1>
          <p className="mt-2 text-center text-xl text-gray-600">
            Secure, fast, and easy to use.
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow">
            <Link
              to="/sign-in"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Sign In
            </Link>
          </div>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or</span>
              </div>
            </div>
            <div className="mt-6">
              <Link
                to="/sign-up"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Create an account
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Why Choose Us?</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900">Secure</h3>
              <p className="mt-2 text-gray-600">State-of-the-art encryption</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900">Fast</h3>
              <p className="mt-2 text-gray-600">Lightning-quick performance</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900">Easy</h3>
              <p className="mt-2 text-gray-600">User-friendly interface</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-8 text-center text-gray-600">
        <p>&copy; 2023 Our App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AuthLandingPage;
