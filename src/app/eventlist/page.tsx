import React from 'react';
import { ArrowRight, Calendar, MapPin, Edit, Clock, Plus, Music, Users, Building2, Search } from 'lucide-react';
import Link from 'next/link';

const ManageEvents = () => {
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
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-purple-700">Manage Events</h1>
          <a 
            href="/eventsubmit" 
            className="flex items-center gap-2 px-4 py-2 border border-purple-700 text-purple-700 rounded-lg hover:bg-purple-700 hover:text-white"
          >
            <Plus className="w-4 h-4" />
            Create New Event
          </a>
        </div>

        {/* Filters and Search */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search events..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
            />
          </div>
          <select className="px-4 py-2 border border-gray-200 rounded-lg focus:border-purple-700 focus:ring-1 focus:ring-purple-700">
            <option>All Events</option>
            <option>Upcoming</option>
            <option>Past Events</option>
            <option>Draft</option>
          </select>
        </div>

        {/* Event List */}
        <div className="space-y-6">
          {/* Empty State - hidden by default */}
          <div className="hidden">
            <div className="text-center py-12 border-2 border-dashed rounded-lg">
              <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h2 className="text-lg font-medium text-gray-900 mb-1">No events yet</h2>
              <p className="text-gray-600 mb-4">Create your first event to start managing them here</p>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 px-4 py-2 border border-purple-700 text-purple-700 rounded-lg hover:bg-purple-700 hover:text-white"
              >
                <Plus className="w-4 h-4" />
                Create New Event
              </a>
            </div>
          </div>

          {/* Event Cards */}
          {[1, 2, 3].map((event) => (
            <div key={event} className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-start gap-6">
                <img 
                  src="/api/placeholder/120/120" 
                  alt="Event" 
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-semibold text-purple-700 mb-1">Electronic Music Festival</h2>
                      <div className="flex items-center gap-4 text-gray-600 mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          December 6, 2024
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          20:00
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          The Grand Hall
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-gray-600">324 interested</span>
                      <a 
                        href="/eventmanage" 
                        className="flex items-center gap-2 px-4 py-2 border border-purple-700 text-purple-700 rounded-lg hover:bg-purple-700 hover:text-white"
                      >
                        <Edit className="w-4 h-4" />
                        Edit Event
                      </a>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="mt-4 flex gap-8 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">Ticket Price:</span> £25.00 - £45.00
                    </div>
                    <div>
                      <span className="font-medium">Status:</span>
                      <span className="ml-1 text-green-600">Published</span>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="mt-6 pt-6 border-t border-gray-200 flex justify-between items-center">
                    <div className="flex gap-4">
                      <a href="/eventprofile" className="text-purple-700 hover:underline">View Public Page</a>
                      <a href="/eventlist" className="text-purple-700 hover:underline">Manage Artists</a>
                      <a href="#" className="text-purple-700 hover:underline">View Analytics</a>
                    </div>
                    <a href="/eventprofile" className="text-purple-700 hover:underline flex items-center gap-1">
                      View All Details
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
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

export default ManageEvents;