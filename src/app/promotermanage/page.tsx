import React from 'react';
import { Mail, ImagePlus, MapPin, Phone, ArrowLeft, Globe, Link, Trash2 } from 'lucide-react';

const PromoterEditForm = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <img src="/api/placeholder/120/50" alt="Scenebud Logo" />
            <nav className="flex items-center gap-6">
              <a href="#" className="text-purple-700 hover:underline">Browse Events</a>
              <a href="#" className="text-purple-700 hover:underline">Submit an Event</a>
              <a href="#" className="text-purple-700 hover:underline">About</a>
              <a href="#" className="text-purple-700 hover:underline">Log In</a>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <a href="/promoterlist" className="flex items-center gap-2 text-purple-700 hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Manage Promoters
        </a>

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-purple-700">Edit Promoter Profile</h1>
          <button className="flex items-center gap-2 px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white">
            <Trash2 className="w-4 h-4" />
            Delete Profile
          </button>
        </div>

        <form className="space-y-8">
          {/* Basic Info Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-purple-700">Basic Information</h2>
              <span className="text-sm text-green-600">Profile Active</span>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image</label>
              <div className="flex items-center gap-4">
                <img 
                  src="/api/placeholder/128/128" 
                  alt="Current profile" 
                  className="w-32 h-32 rounded-lg object-cover"
                />
                <button type="button" className="px-4 py-2 border border-purple-700 text-purple-700 rounded-lg hover:bg-purple-700 hover:text-white">
                  Change Image
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
                defaultValue="Event Horizon Promotions"
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
                  defaultValue="London"
                  className="px-4 py-2 border border-gray-200 rounded-lg focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
                  required
                />
                <input
                  type="text"
                  placeholder="Country"
                  defaultValue="UK"
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
                defaultValue="London's premier electronic music promoter"
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
                defaultValue="Event Horizon Promotions has been at the forefront of London's electronic music scene since 2015. Specializing in underground electronic music events, we've built a reputation for creating unforgettable experiences in unique venues across the city."
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
              {['Electronic', 'Techno', 'House'].map((genre) => (
                <span key={genre} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 flex items-center gap-2">
                  {genre}
                  <button className="hover:text-purple-700">×</button>
                </span>
              ))}
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
                    defaultValue="bookings@eventhorizon.com"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    defaultValue="020 1234 5678"
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
                    defaultValue={platform === 'Website' ? 'https://eventhorizon.com' : '@eventhorizon'}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4">
            <button type="button" className="px-6 py-2 border border-gray-200 text-gray-600 rounded-lg hover:border-gray-300">
              Cancel
            </button>
            <button type="submit" className="px-6 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800">
              Save Changes
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <ul className="flex justify-center items-center gap-8">
            <li><a href="#" className="text-purple-700 hover:underline">Scenebud.com</a></li>
            <li><img src="/api/placeholder/100/30" alt="Scenebud Logo" /></li>
            <li><a href="#" className="text-purple-700 hover:underline">Contact Me</a></li>
            <li><a href="#" className="text-purple-700 hover:underline">Instagram</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default PromoterEditForm;