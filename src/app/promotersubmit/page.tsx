import React from 'react';
import { ArrowRight, Calendar, MapPin, ArrowLeft, ImagePlus, Music, Users, Building2, Search } from 'lucide-react';
import Link from 'next/link';

const PromoterSubmissionForm = () => {
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


      <div className="max-w-3xl mx-auto px-4 py-12">
        <a href="/dashboard" className="flex items-center gap-2 text-purple-700 hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </a>

        <h1 className="text-2xl font-bold text-purple-700 mb-8">Create Promoter Profile</h1>

        <form className="space-y-8">
          {/* Basic Info Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-purple-700 mb-6">Basic Information</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Logo/Profile Image</label>
              <div className="flex items-center gap-4">
                <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                  <ImagePlus className="w-8 h-8 text-gray-400" />
                </div>
                <button type="button" className="px-4 py-2 border border-purple-700 text-purple-700 rounded-lg hover:bg-purple-700 hover:text-white">
                  Upload Image
                </button>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Promoter Name *
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location *
              </label>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="City"
                  className="px-4 py-2 border border-gray-200 rounded-lg focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
                  required
                />
                <input
                  type="text"
                  placeholder="Country"
                  className="px-4 py-2 border border-gray-200 rounded-lg focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                One-line Description *
              </label>
              <input
                type="text"
                placeholder="e.g. London's premier electronic music promoter"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
                required
              />
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-purple-700 mb-6">About</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Biography
              </label>
              <textarea
                rows={6}
                placeholder="Tell us about your experience in event promotion, the types of events you organize, and your mission..."
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
              />
            </div>
          </div>

          {/* Genres Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-purple-700 mb-6">Genres</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search and select genres you typically promote"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 flex items-center gap-2">
                Progressive Jazz
                <button className="hover:text-purple-700">×</button>
              </span>
            </div>
          </div>

          {/* Connect Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-purple-700 mb-6">Connect</h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
                  />
                </div>
              </div>
              
              {['Instagram', 'Facebook', 'Website'].map((platform) => (
                <div key={platform}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {platform}
                  </label>
                  <input
                    type={platform === 'Website' ? 'url' : 'text'}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button type="submit" className="px-6 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800">
              Create Profile
            </button>
          </div>
        </form>
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

export default PromoterSubmissionForm;