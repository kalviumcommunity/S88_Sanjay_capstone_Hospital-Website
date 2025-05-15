import React, { useState } from "react";
import backgroundImage from '../assets/Screenshot 2025-04-10 102139.png';
import NavBar from "../Components/Navbar";
import { NavLink } from "react-router-dom";
import Logo from '../assets/Keithston.png';
import Logo1 from '../assets/Screenshot 2025-04-11 102905.png';
import axios from 'axios';

const PatientsLogin=()=>{
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [message,setMessage]=useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/patient-login', {
        username,
        password
      });
      setMessage(res.data.message || 'Login successful');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center text-[#1a1a1a] scroll-smooth"style={{ backgroundImage: `url(${backgroundImage})` }}>
      <NavBar />
      <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-40">
        <div className="bg-white p-8 rounded-lg shadow-lg w-[22rem]">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <img
              src={Logo1}
              alt="Patient Login Icon"
              className="w-16 h-16"
            />
          </div>

          {/* Header */}
          <h2 className="text-center text-2xl font-bold text-[#1a1a1a] mb-6">
            Sign in to SL HOSPITAL
          </h2>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                UserName
              </label>
              <input
                type="text"
                placeholder="UserName"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366]"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-[#003366] text-white font-semibold rounded-lg hover:bg-[#002244] transition"
            >
              Sign in
            </button>
          </form>

          {/* Message */}
          {message && (
            <p className="mt-4 text-center text-sm text-red-600">{message}</p>
          )}

          {/* Links */}
          <div className="mt-4 text-center space-y-2">
            <NavLink
              to="/Patient-login"
              className="text-sm text-[#003366] hover:underline"
            >
              Forgot Password?
            </NavLink>
            <br />
            <NavLink
              to="/register"
              className="text-sm text-[#003366] hover:underline"
            >
              Don't have an account?
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientsLogin;