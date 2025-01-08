import React from 'react';
import { Search, Calendar, MapPin, Filter, Clock, Music, Tag, Info } from 'lucide-react';
import Link from 'next/link';

const LiveMusicPlatform = () => {
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
              <Link href="/login" className="text-purple-700 hover:underline">Log In</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Rest of the component remains the same */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters Bar */}
        <div className="flex items-center gap-4 mb-8">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-purple-700 rounded-lg text-purple-700 hover:bg-purple-700 hover:text-white transition-colors">
            <Calendar className="w-4 h-4" />
            <span>Date</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-purple-700 rounded-lg text-purple-700 hover:bg-purple-700 hover:text-white transition-colors">
            <MapPin className="w-4 h-4" />
            <span>Location</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-purple-700 rounded-lg text-purple-700 hover:bg-purple-700 hover:text-white transition-colors">
            <Music className="w-4 h-4" />
            <span>Genre</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-purple-700 rounded-lg text-purple-700 hover:bg-purple-700 hover:text-white transition-colors">
            <Filter className="w-4 h-4" />
            <span>Price Range</span>
          </button>
        </div>

        {/* Featured Event */}
        <div className="mb-12 bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
          <div className="flex">
            <div className="w-1/2 h-96 bg-gray-200" />
            <div className="w-1/2 p-8">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                <Calendar className="w-4 h-4" />
                <span>Fri, Dec 6 • 20:00</span>
                <MapPin className="w-4 h-4 ml-4" />
                <span>The Grand Hall</span>
              </div>
              <h1 className="text-3xl font-bold mb-4 text-purple-700">Electronic Music Festival</h1>
              <div className="flex gap-2 mb-6">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-purple-700">
                  Electronic
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-purple-700">
                  Dance
                </span>
              </div>
              <p className="text-gray-600 mb-8">
                Featuring multiple artists across three stages...
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">From</p>
                  <p className="text-2xl font-bold text-purple-700">£35.00</p>
                </div>
                <button className="px-6 py-3 bg-white border border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white rounded-lg transition-colors">
                  Get Tickets
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>Dec {item + 6}</span>
                </div>
                <h3 className="font-bold mb-2 text-purple-700">Event Title</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>Venue Name</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-purple-700">£25.00</span>
                  <button className="px-4 py-2 bg-white border border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white rounded-lg text-sm transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

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

export default LiveMusicPlatform;