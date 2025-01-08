import React from 'react';
import { Calendar, MapPin, Music, Building2, Users, Search } from 'lucide-react';
import Link from 'next/link';

const UserDashboard = () => {
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

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-purple-700 mb-8">Welcome back, John</h1>

        <div className="grid grid-cols-4 gap-8">
          {/* Left Column - 1/4 width */}
          <div>
            {/* Manage Profiles Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-purple-700 mb-4">Manage Profiles</h2>
              <div className="space-y-3">
                <Link href="/artistlist" className="flex items-center gap-2 p-3 border rounded-lg hover:border-purple-700 text-gray-600 hover:text-purple-700">
                  <Music className="w-5 h-5" />
                  <span>Artist Profiles</span>
                </Link>
                <Link href="/venuelist" className="flex items-center gap-2 p-3 border rounded-lg hover:border-purple-700 text-gray-600 hover:text-purple-700">
                  <Building2 className="w-5 h-5" />
                  <span>Venue Profiles</span>
                </Link>
                <Link href="/promoterlist" className="flex items-center gap-2 p-3 border rounded-lg hover:border-purple-700 text-gray-600 hover:text-purple-700">
                  <Calendar className="w-5 h-5" />
                  <span>Promoter Profiles</span>
                </Link>
                <Link href="/labellist" className="flex items-center gap-2 p-3 border rounded-lg hover:border-purple-700 text-gray-600 hover:text-purple-700">
                  <Users className="w-5 h-5" />
                  <span>Label Profiles</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - 3/4 width */}
          <div className="col-span-3 space-y-8">
            {/* Upcoming Events Section */}
            <section className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-purple-700 mb-4">Your Upcoming Events</h2>
              <div className="text-center py-8 border-2 border-dashed rounded-lg">
                <Search className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-600 mb-4">You haven't marked any events as interested yet</p>
                <Link href="/events" className="text-purple-700 hover:underline">Browse Events</Link>
              </div>
            </section>

            {/* Two Column Layout for Recommended */}
            <div className="grid grid-cols-2 gap-8">
              {/* Recommended Events */}
              <section className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-purple-700 mb-4">Recommended For You</h2>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((event) => (
                    <Link 
                      key={event}
                      href="#" 
                      className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:border-purple-700"
                    >
                      <img src="/api/placeholder/80/80" alt="Event" className="w-20 h-20 rounded object-cover" />
                      <div>
                        <h3 className="font-medium text-purple-700">Event Name</h3>
                        <div className="text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            Dec 15
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            Venue Name
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Following Section */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-purple-700 mb-4">Following</h2>
                <div className="text-center py-6 border-2 border-dashed rounded-lg">
                  <Search className="w-6 h-6 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600 mb-2">Start following artists, venues, promoters and labels</p>
                  <Link href="/browse" className="text-purple-700 hover:underline">Browse Now</Link>
                </div>
              </div>
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

export default UserDashboard;