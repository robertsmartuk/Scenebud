
import React from 'react';
import { ArrowRight, Calendar, Plus, Edit, MapPin, Music, Users, Building2, Search } from 'lucide-react';
import Link from 'next/link';

const ManageArtists = () => {
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


      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-purple-700">Manage Artists</h1>
          <a 
            href="/artistsubmit" 
            className="flex items-center gap-2 px-4 py-2 border border-purple-700 text-purple-700 rounded-lg hover:bg-purple-700 hover:text-white"
          >
            <Plus className="w-4 h-4" />
            Add New Artist
          </a>
        </div>

        {/* Artist List */}
        <div className="space-y-6">
          {/* Empty State */}
          <div className="hidden">
            <div className="text-center py-12 border-2 border-dashed rounded-lg">
              <Music className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h2 className="text-lg font-medium text-gray-900 mb-1">No artist profiles yet</h2>
              <p className="text-gray-600 mb-4">Create your first artist profile to start managing them here</p>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 px-4 py-2 border border-purple-700 text-purple-700 rounded-lg hover:bg-purple-700 hover:text-white"
              >
                <Plus className="w-4 h-4" />
                Add New Artist
              </a>
            </div>
          </div>

          {/* Artist Profiles */}
          {[1, 2, 3].map((artist) => (
            <div key={artist} className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-start gap-6">
                <img 
                  src="/api/placeholder/120/120" 
                  alt="Artist" 
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-semibold text-purple-700 mb-1">Artist Name</h2>
                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>London, UK</span>
                      </div>
                      <p className="text-gray-800">Politically motivated Jazz Fusion from Leeds</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-gray-600">2.1k followers</span>
                      <a 
                        href="/artistmanage" 
                        className="flex items-center gap-2 px-4 py-2 border border-purple-700 text-purple-700 rounded-lg hover:bg-purple-700 hover:text-white"
                      >
                        <Edit className="w-4 h-4" />
                        Edit Profile
                      </a>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="mt-4 flex gap-8 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">Upcoming Events:</span> 3
                    </div>
                    <div>
                      <span className="font-medium">Past Events:</span> 12
                    </div>
                    <div>
                      <span className="font-medium">Profile Status:</span>
                      <span className="ml-1 text-green-600">Active</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-6 pt-6 border-t border-gray-200 flex justify-between items-center">
                <div className="flex gap-4">
                  <a href="/artistprofile" className="text-purple-700 hover:underline">View Public Profile</a>
                  <a href="/eventlist" className="text-purple-700 hover:underline">Manage Events</a>
                  <a href="#" className="text-purple-700 hover:underline">Analytics</a>
                </div>
                <a href="/artistprofile" className="text-purple-700 hover:underline flex items-center gap-1">
                  View All Details
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
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

export default ManageArtists;