import React, { useState } from 'react'

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
        setError('');
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.password !== formData.confirmPassword) {
        setError('Passwords do not match.');
        return;
    }

    console.log('Registration Data:', formData);
    alert('Registration Successful! (Backend integration pending)');
};
return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white p-8 sm:p-10 rounded-xl shadow-2xl">
        
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            Create Your Account
          </h1>
          <p className="text-gray-500 mb-8">
            Register to save your preferences and book easily.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* 1. Name and Email */}
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-pink-500 focus:border-pink-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-pink-500 focus:border-pink-500"
              />
            </div>
          </div>
          
          {/* 2. Password Fields */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-pink-500 focus:border-pink-500"
            />
          </div>

          {/* Error Display */}
          {error && (
            <p className="text-red-600 text-sm text-center font-medium">{error}</p>
          )}

          {/* 3. Submit Button */}
          <button
            type="submit"
            className="w-full py-4 px-4 border border-transparent rounded-md shadow-lg 
                       text-lg font-bold text-white bg-pink-600 
                       hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition"
          >
            Register
          </button>
          
          {/* Link to Login (Future Component) */}
          <p className="text-center text-sm text-gray-600">
            Already have an account? 
            <a href="/login" className="font-medium text-pink-600 hover:text-pink-500 ml-1">
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
export default RegisterPage;