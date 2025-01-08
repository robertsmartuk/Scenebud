import React from 'react';
import { ArrowRight, Calendar, ArrowLeft, Trash2, MapPin, Music, Users, Building2, Search } from 'lucide-react';
import Link from 'next/link';

const EventEditForm = () => {
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
        <a href="/eventlist" className="flex items-center gap-2 text-purple-700 hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Manage Events
        </a>

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-purple-700">Edit Event</h1>
          <button className="flex items-center gap-2 px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white">
            <Trash2 className="w-4 h-4" />
            Delete Event
          </button>
        </div>

        <form className="space-y-8">
          {/* Basic Info Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-purple-700">Basic Information</h2>
              <span className="text-sm text-green-600">Status: Published</span>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Event Image</label>
              <div className="flex items-center gap-4">
                <img 
                  src="/api/placeholder/128/128" 
                  alt="Current event" 
                  className="w-32 h-32 rounded-lg object-cover"
                />
                <button type="button" className="px-4 py-2 border border-purple-700 text-purple-700 rounded-lg hover:bg-purple-700 hover:text-white">
                  Change Image
                </button>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Event Title *
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
                defaultValue="Electronic Music Festival"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date *
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
                  defaultValue="2024-12-06"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Time *
                </label>
                <input
                  type="time"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
                  defaultValue="20:00"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
                defaultValue="Join us for an unforgettable night of electronic music featuring multiple artists across three stages..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Age Restriction *
              </label>
              <select 
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
                defaultValue="18"
              >
                <option value="all">All Ages</option>
                <option value="14">14+</option>
                <option value="16">16+</option>
                <option value="18">18+</option>
              </select>
            </div>
          </div>

          {/* Artists Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-purple-700 mb-6">Artists</h2>
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search and add artists..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
                />
              </div>
              {/* Currently Added Artists */}
              <div className="mt-4 space-y-2">
                {[1, 2, 3].map((artist) => (
                  <div key={artist} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <img 
                        src={`/api/placeholder/40/40`} 
                        alt="Artist" 
                        className="w-10 h-10 rounded-full"
                      />
                      <span className="text-gray-700">Artist Name {artist}</span>
                    </div>
                    <button className="text-gray-400 hover:text-red-600">×</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Venue Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-purple-700 mb-6">Venue</h2>
            <div className="relative">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <img 
                    src="/api/placeholder/40/40"
                    alt="Venue" 
                    className="w-10 h-10 rounded-lg"
                  />
                  <span className="text-gray-700">The Grand Hall</span>
                </div>
                <button className="text-gray-400 hover:text-red-600">×</button>
              </div>
            </div>
          </div>

          {/* Genres Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-purple-700 mb-6">Genres</h2>
            <div className="relative">
              <Music className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search and select genres..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Electronic', 'Dance'].map((genre) => (
                <span key={genre} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 flex items-center gap-2">
                  {genre}
                  <button className="hover:text-red-600">×</button>
                </span>
              ))}
            </div>
          </div>

          {/* Ticket Information */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-purple-700 mb-6">Ticket Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ticket Price *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-500">£</span>
                  <input
                    type="number"
                    step="0.01"
                    defaultValue="35.00"
                    className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-lg focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ticket Link
                </label>
                <input
                  type="url"
                  defaultValue="https://tickets.example.com/event"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
                />
              </div>
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

export default EventEditForm;