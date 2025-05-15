import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/Keithston.png';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4492EB] to-white text-[#1a1a1a] scroll-smooth">
      {/* Header */}
      <header className="p-4">
        <div className="flex justify-center">
          <img src={Logo} alt="HomePageLogo" className="h-32 drop-shadow-lg" /> 
        </div>
        <div className="flex justify-end gap-8 text-black mt-4">
          <Link to="/Login">
          <button className="px-6 py-3 bg-primary rounded-full hover:bg-indigo-700 transition font-medium">Login</button>
          </Link>
  <button className="px-6 py-3 bg-accent text-black rounded-full hover:bg-emerald-600 transition font-medium">Book Appointment</button>
  </div>
  </header>

      {/* Title */}
      <h1 className="text-4xl font-heading text-center py-6">Welcome to SL Hospital</h1>

      {/* Nav Menu */}
      <nav className="flex justify-center mb-8">
        <div className="flex gap-8 bg-gray-800 text-white px-8 py-4 rounded-full shadow-lg">
          {["Home", "About us", "Our Moto/Goals", "Our Branches", "Contact us"].map((item) => (
            <button key={item}className="transition hover:text-gray-300 tracking-wide font-medium">{item}</button>))}
            </div></nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 space-y-10">
        <section>
          <h2 className="text-2xl font-heading font-bold mb-2">Advanced Medicine, Compassionate Care, and Nearby</h2>
          <p className="text-gray-800">
            Our goal at SL Hospital is your health. We are dedicated to providing compassionate, respectful,
            and excellent patient-centered care. You're in capable, compassionate hands whether you're coming in
            for a routine examination or a specialized treatment.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-bold mb-2">Why Pick Us?</h2>
          <p className="text-gray-800">
            Professionals with Experience in Medicine. With years of experience, our committed physicians,
            nurses, and specialists provide personalized care tailored to your needs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-bold mb-2">Modern Facilities</h2>
          <p className="text-gray-800">
            We integrate cutting-edge technology with a healing environment to ensure optimal outcomes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-bold mb-2">🕒 Emergency Services Available 24/7</h2>
          <p className="text-gray-800">
            Health emergencies can happen anytime. Our emergency room is open around the clock when you need it most.
          </p>
        </section>

        <section>
          <p className="text-lg">🌐 <strong>Multilingual Assistance</strong> available for all patients.</p>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
