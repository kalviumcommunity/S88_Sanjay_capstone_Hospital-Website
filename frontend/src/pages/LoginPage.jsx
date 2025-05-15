import React from "react";
import backgroundImage from '../assets/Screenshot 2025-04-10 102139.png';
import NavBar from "../Components/Navbar";
import { NavLink } from "react-router-dom";
import Logo from '../assets/Keithston.png';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-cover bg-center text-[#1a1a1a] scroll-smooth"style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Overlay */}
      <NavBar />
      <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-40">
        <div className="text-center space-y-8">
          {/* Logo */}
          <img src={Logo} alt="SL Hospital Logo" className="mx-auto w-24" />

          {/* Header */}
          <h1 className="text-4xl font-bold text-white font-inter">
            Welcome to SL Hospital
          </h1>
          <p className="text-2xl font-semibold text-white">Login as</p>

          {/* Buttons */}
          <div className="grid gap-y-4 justify-items-center">
            <NavLink to="/Patient-login">
              <button className="flex items-center gap-3 py-3 px-8 bg-[#003366] text-white text-lg font-semibold rounded-full hover:bg-[#002244] transition">
                <img
                  src="../assets/patient-icon.png"
                  alt="Patient Icon"
                  className="w-6 h-6"
                />
                PATIENT
              </button>
            </NavLink>
            <NavLink to="/Doctor-login">
              <button className="flex items-center gap-3 py-3 px-8 bg-[#003366] text-white text-lg font-semibold rounded-full hover:bg-[#002244] transition">
                <img
                  src="../assets/doctor-icon.png"
                  alt="Doctor Icon"
                  className="w-6 h-6"
                />
                DOCTOR
              </button>
            </NavLink>
            <NavLink to="/Admin-login">
              <button className="flex items-center gap-3 py-3 px-8 bg-[#003366] text-white text-lg font-semibold rounded-full hover:bg-[#002244] transition">
                <img
                  src="../assets/admin-icon.png"
                  alt="Admin Icon"
                  className="w-6 h-6"
                />
                ADMIN
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;