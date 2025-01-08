import React from 'react';
import { Calendar, MapPin, Music, Building2, Users, Search } from 'lucide-react';

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header stays the same */}

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-purple-700 mb-8">Welcome back, John</h1>

        <div className="grid grid-cols-4 gap-8">
          {/* Left Column - 1/4 width */}
          <div>
            {/* Manage Profiles Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-purple-700 mb-4">Manage Profiles</h2>
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-2 p-3 border rounded-lg hover:border-purple-700 text-gray-600 hover:text-purple-700">
                  <Music className="w-5 h-5" />
                  <span>Artist Profile</span>
                </a>
                <a href="#" className="flex items-center gap-2 p-3 border rounded-lg hover:border-purple-700 text-gray-600 hover:text-purple-700">
                  <Building2 className="w-5 h-5" />
                  <span>Venue Profile</span>
                </a>
                <a href="#" className="flex items-center gap-2 p-3 border rounded-lg hover:border-purple-700 text-gray-600 hover:text-purple-700">
                  <Calendar className="w-5 h-5" />
                  <span>Promoter Profile</span>
                </a>
                <a href="#" className="flex items-center gap-2 p-3 border rounded-lg hover:border-purple-700 text-gray-600 hover:text-purple-700">
                  <Users className="w-5 h-5" />
                  <span>Label Profile</span>
                </a>
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
                <a href="#" className="text-purple-700 hover:underline">Browse Events</a>
              </div>
            </section>

            {/* Two Column Layout for Recommended and Following */}
            <div className="grid grid-cols-2 gap-8">
              {/* Recommended Events */}
              <section className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-purple-700 mb-4">Recommended For You</h2>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((event) => (
                    <a 
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
                    </a>
                  ))}
                </div>
              </section>

              {/* Following Section */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-purple-700 mb-4">Following</h2>
                <div className="text-center py-6 border-2 border-dashed rounded-lg">
                  <Search className="w-6 h-6 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600 mb-2">Start following artists, venues, promoters and labels</p>
                  <a href="#" className="text-purple-700 hover:underline">Browse Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer stays the same */}
    </div>
  );
};

export default UserDashboard;