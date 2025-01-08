import React from 'react';
import { Search, Calendar, MapPin, Filter, Clock, Music, Tag, Info, Mail, User, Lock } from 'lucide-react';
import Link from 'next/link';

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-white">
       {/* Header */}
       <header className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/">
                <img src="/Logo Horiz.png" alt="Scenebud Logo" className="w-[300px] h-auto" />
              </Link>
              <div className="relative w-[400px]">
                <Search className="absolute left-3 top-2.5 text-purple-700 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search events, artists, venues..."
                  className="w-full pl-10 pr-4 py-2 border border-purple-700 rounded-lg text-purple-700 placeholder-purple-400"
                />
              </div>
            </div>
            <nav className="flex items-center gap-6">
              <Link href="/" className="text-purple-700 hover:underline">Home</Link>
              <Link href="/dashboard" className="text-purple-700 hover:underline">Dashboard</Link>
              <Link href="/events" className="text-purple-700 hover:underline">Events</Link>
              <Link href="/login" className="text-purple-700 hover:underline">Log in</Link>
              </nav>
          </div>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="max-w-xl mx-auto">
          <h1 className="text-2xl font-bold text-purple-700 mb-8">Create your account</h1>
          
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
                      placeholder="hello@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                    <input
                      type="password"
                      className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
                      placeholder="••••••••"
                    />
                  </div>
                  <p className="mt-1 text-sm text-gray-500">Must be at least 8 characters</p>
                </div>
              </div>
              <div className="space-y-3">
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1 rounded border-gray-300 text-purple-700" />
                  <span className="text-sm text-gray-600">
                    I agree to the Terms of Service and Privacy Policy
                  </span>
                </label>
                
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1 rounded border-gray-300 text-purple-700" />
                  <span className="text-sm text-gray-600">
                    Send me updates about new events and artists I might like
                  </span>
                </label>
              </div>
              <button className="w-full py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition-colors">
                Create Account
              </button>
              <p className="text-center text-gray-600">
                Already have an account?{' '}
                <a href="login" className="text-purple-700 hover:underline">Log in</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <ul className="flex justify-center items-center gap-8">
            <li><a href="/" className="text-purple-700 hover:underline">Scenebud.com</a></li>
            <li><a href="/"><img src="/Logo Horiz.png" alt="Scenebud Logo" className="w-[150px] h-auto" /></a></li>
            <li><a href="mailto:hello@scenebud.com" className="text-purple-700 hover:underline">Contact Me</a></li>
            <li><a href="https://www.instagram.com/scenebud/" className="text-purple-700 hover:underline">Instagram</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};
export default RegisterPage;