import React,{useRef} from 'react'; 
import { Calendar, Phone, MapPin, Clock, Users, Award, Heart, Building2 } from 'lucide-react';
import Logo from '../assets/Keithston.png';
import { NavLink } from "react-router-dom";

const HomeComponent = () => {
  const features = [
    {
      icon: Heart,
      title: "24/7 Emergency Care",
      description: "Round-the-clock emergency services with specialized trauma care"
    },
    {
      icon: Users,
      title: "Expert Medical Team",
      description: "Board-certified physicians and experienced healthcare professionals"
    },
    {
      icon: Building2,
      title: "Modern Facilities",
      description: "State-of-the-art medical equipment and comfortable patient rooms"
    },
    {
      icon: Award,
      title: "Quality Accredited",
      description: "Nationally recognized for excellence in patient care and safety"
    }
  ];

  const services = [
    "Cardiology", "Neurology", "Orthopedics", "Pediatrics", 
    "Emergency Medicine", "Surgery", "Radiology", "Laboratory Services"
  ];

  const handleScroll=(id) => {
    sectionsRef[id]?.current?.scrollIntoView({behavior:'smooth'});
  };

  const navItems = [
    {name:'Home',id:'home'},
    {name:'About us',id:'about'},
    {name:'Our Moto/Goals',id:'goals'},
    {name:'Our Branches',id:'branches'},
    {name:'Contact us',id:'contact'},
];

const sectionsRef={
    home:useRef(null),
    about:useRef(null),
    goals:useRef(null),
    branches:useRef(null),
    contact:useRef(null),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400">  
      {/* Navigation */}
<nav className="bg-gray-900 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row md:justify-between items-center py-4 space-y-4 md:space-y-0">
      
      {/* Navigation Links */}
      <div className="flex space-x-6">
        {['Home', 'About us', 'Our Moto/Goals', 'Our Branches', 'Contact us'].map((item) => (
          <a
            key={item}
            href="#"
            className="px-4 py-2 rounded-md hover:bg-blue-800 hover:text-white transition-colors font-medium"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <NavLink to="/Login">
        <button className="px-6 py-2 text-blue-500 hover:text-blue-400 font-medium transition-colors">
          Login
        </button>
        </NavLink>
        <NavLink to="/Patient-login">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
          Book Appointment
        </button>
        </NavLink>
      </div>

    </div>
    </div>
  </nav>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center ">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            <div className="flex items-center space-x-30 p-10">
                <img src={Logo} alt="SL Hospital Logo"className="mx-auto w-28"/>
            </div>
            Welcome to <span className="text-blue-600">SL Hospital</span>
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Heart className="h-6 w-6 text-red-500" />
            <p className="text-xl text-gray-600 font-medium">
              Advanced Medicine, Compassionate Care, and Nearby
            </p>
            <Heart className="h-6 w-6 text-red-500" />
          </div>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
            Our goal at SL Hospital is your health. We are dedicated to providing compassionate, respectful, and excellent patient-centered care. You're in capable, compassionate hands whether you're coming in for a routine examination or a specialized treatment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg flex items-center justify-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Schedule Appointment</span>
            </button>
            <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>Emergency: (555) 123-4567</span>
            </button>
          </div>
        </div>
      </section>
      {/* Features Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pick Us Section */}
      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Pick Us?</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Professionals with Experience in Medicine. With years of experience, our committed physicians, nurses, and specialists provide personalized care tailored to your needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Board-certified medical professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Personalized treatment plans</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Comprehensive healthcare services</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow">
                  <span className="text-gray-700 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modern Facilities Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Modern Facilities</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            We integrate cutting-edge technology with a healing environment to ensure optimal outcomes for our patients.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl transition-colors duration-300 hover:bg-blue-800 cursor-pointer group">
                <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:text-white" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-white">Advanced Equipment</h3>
                <p className="text-gray-600 group-hover:text-white">Latest medical technology for accurate diagnosis and effective treatment</p>
                </div>
            <div className="bg-green-50 p-8 rounded-xl transition-colors duration-300 hover:bg-blue-800 cursor-pointer group">
              <Heart className="h-12 w-12 text-green-600 mx-auto mb-4 group-hover:text-lime"/>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-white">Patient Comfort</h3>
              <p className="text-gray-600 group-hover:text-white">Comfortable, private rooms designed for healing and recovery</p>
            </div>
            <div className="bg-green-50 p-8 rounded-xl transition-colors duration-300 hover:bg-blue-800 cursor-pointer group">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:text-white" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-white">Efficient Service</h3>
              <p className="text-gray-600 group-hover:text-white">Streamlined processes to minimize wait times and maximize care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="font-semibold">Location</span>
              </div>
              <p className="text-gray-300">123 Healthcare Ave<br />Medical District<br />City, State 12345</p>
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="font-semibold">Contact</span>
              </div>
              <p className="text-gray-300">Phone: (555) 123-4567<br />Emergency: (555) 911-2345<br />Fax: (555) 123-4568</p>
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-5 w-5 text-blue-400" />
                <span className="font-semibold">Hours</span>
              </div>
              <p className="text-gray-300">Emergency: 24/7<br />Outpatient: Mon-Fri 8AM-6PM<br />Specialists: By Appointment</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 SL Hospital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeComponent;