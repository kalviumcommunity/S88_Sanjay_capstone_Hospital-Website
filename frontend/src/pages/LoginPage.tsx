import React, { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import { Stethoscope, User, UserCog, ArrowRight } from 'lucide-react';

const Login = () => {
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);

  const roles = [
    {
      id: 'patient',
      name: 'PATIENT',
      icon: User,
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      id: 'doctor',
      name: 'DOCTOR',
      icon: Stethoscope,
      color: 'bg-green-600 hover:bg-green-700',
    },
    {
      id: 'admin',
      name: 'ADMIN',
      icon: UserCog,
      color: 'bg-purple-600 hover:bg-purple-700',
    },
  ];

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, role: selectedRole }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      alert('Login successful!');
      // Store token or redirect here
    } catch (err: any) {
      alert(`Login failed: ${err.message}`);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, role: selectedRole }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      alert('Signup successful! You can now log in.');
      setIsSignup(false);
      setConfirmPassword('');
    } catch (err: any) {
      alert(`Signup failed: ${err.message}`);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log('Google login successful:', user);
      // Optionally: send user info to backend
    } catch (error) {
      console.error('Google Login error', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="text-center">
          <div className="bg-blue-600 p-4 rounded-xl inline-block mb-4">
            <Stethoscope className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to SL Hospital</h1>
          <p className="text-gray-600">Hospital Portal</p>
        </div>

        {!selectedRole ? (
          // Role selection
          <div className="bg-white rounded-lg border shadow-sm">
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold">Login as</h3>
            </div>
            <div className="p-6 pt-0 space-y-4">
              {roles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => handleRoleSelect(role.id)}
                  className={`w-full h-16 text-lg font-semibold text-white transition-all ${role.color} flex items-center justify-center space-x-3 rounded-md`}
                >
                  <role.icon className="h-6 w-6" />
                  <span>{role.name}</span>
                  <ArrowRight className="h-5 w-5 ml-auto" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          // Login / Signup Form
          <div className="bg-white rounded-lg border shadow-sm">
            <div className="p-6 text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                {(() => {
                  const role = roles.find((r) => r.id === selectedRole);
                  if (role) {
                    const IconComponent = role.icon;
                    return (
                      <>
                        <IconComponent className="h-6 w-6 text-blue-600" />
                        <h3 className="text-xl font-semibold">
                          {isSignup ? 'Sign up as' : 'Login as'} {role.name}
                        </h3>
                      </>
                    );
                  }
                  return null;
                })()}
              </div>
              <button
                onClick={() => setSelectedRole('')}
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                ← Change Role
              </button>
            </div>
            <div className="p-6 pt-0">
              <form onSubmit={isSignup ? handleSignup : handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="username" className="block text-sm font-medium">
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    placeholder={isSignup ? 'Create a username' : 'Enter your username'}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-medium">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder={isSignup ? 'Create a password' : 'Enter your password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {isSignup && (
                  <div className="space-y-2">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium">
                      Confirm Password
                    </label>
                    <input
                      id="confirmPassword"
                      type="password"
                      placeholder="Re-enter your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full h-10 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
                >
                  {isSignup ? 'Sign Up' : 'Login'}
                </button>
              </form>

              <div className="mt-4">
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="w-full h-10 px-4 py-2 border border-gray-300 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors"
                >
                  <img
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                    alt="Google"
                    className="h-5 w-5"
                  />
                  <span>{isSignup ? 'Sign up with Google' : 'Continue with Google'}</span>
                </button>
              </div>

              <p className="text-sm text-center text-gray-500 mt-4">
                {isSignup ? 'Already have an account?' : "Don't have an account?"}
                <button
                  type="button"
                  onClick={() => {
                    setIsSignup(!isSignup);
                    setConfirmPassword('');
                  }}
                  className="ml-1 text-blue-600 hover:underline"
                >
                  {isSignup ? 'Login' : 'Sign Up'}
                </button>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;