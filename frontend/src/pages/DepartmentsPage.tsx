import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Smile, 
  Headphones, 
  Heart, 
  UserPlus, 
  UserCheck, 
  User, 
  Users, 
  Activity, 
  AlertCircle, 
  Stethoscope,
  Eye
} from 'lucide-react';

const departments = [
  { id: 'dentist', name: 'Dentist', icon: Smile, color: 'from-blue-500 to-cyan-400' },
  { id: 'otolaryngologist', name: 'Otolaryngologist', icon: Headphones, color: 'from-purple-500 to-pink-400' },
  { id: 'psychiatrist', name: 'Psychiatrist', icon: UserPlus, color: 'from-green-500 to-emerald-400' },
  { id: 'oncologist', name: 'Oncologist', icon: AlertCircle, color: 'from-red-500 to-rose-400' },
  { id: 'orthopedist', name: 'Orthopedist', icon: UserCheck, color: 'from-orange-500 to-amber-400' },
  { id: 'paediatrician', name: 'Paediatrician', icon: Users, color: 'from-pink-500 to-rose-400' },
  { id: 'dermatologist', name: 'Dermatologist', icon: Activity, color: 'from-indigo-500 to-blue-400' },
  { id: 'gynecologist', name: 'Gynecologist', icon: Heart, color: 'from-purple-500 to-violet-400' },
  { id: 'cardiologist', name: 'Cardiologist', icon: Heart, color: 'from-red-500 to-pink-400' },
  { id: 'neurologist', name: 'Neurologist', icon: User, color: 'from-teal-500 to-cyan-400' },
  { id: 'general-physician', name: 'General Physician', icon: Stethoscope, color: 'from-slate-500 to-gray-400' },
  { id: 'ophthalmologist', name: 'Ophthalmologist', icon: Eye, color: 'from-emerald-500 to-green-400' },
];

const Department = () => {
  const navigate = useNavigate();

  const handleDepartmentClick = (id: string) => {
    navigate(`/book/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative px-6 py-16 text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Find Your Healthcare Provider
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Choose from our specialized departments and book an appointment with our expert medical professionals
            </p>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      </div>

      {/* Departments Grid */}
      <div className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Medical Departments</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select a department to find available doctors and schedule your appointment
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {departments.map(({ id, name, icon: Icon, color }) => (
              <button
                key={id}
                onClick={() => handleDepartmentClick(id)}
                className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-blue-500/30 p-6"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icon container */}
                <div className={`relative mb-4 w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Department name */}
                <h3 className="relative text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 leading-tight">
                  {name}
                </h3>

                {/* Hover effect overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </button>
            ))}
          </div>

          {/* Call to action section */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need Help Choosing?
              </h3>
              <p className="text-gray-600 mb-6">
                Our general physicians can help guide you to the right specialist for your needs.
              </p>
              <button
                onClick={() => handleDepartmentClick('general-physician')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Consult General Physician
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;
