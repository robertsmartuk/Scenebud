import React from 'react';
import { ArrowRight, Calendar, MapPin, ExternalLink, ArrowLeft, Heart, Share2, Music, Users, Building2, Search } from 'lucide-react';
import Link from 'next/link';

const EventProfile = () => {
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


      <main>
        <div className="max-w-7xl mx-auto px-4 py-8">
        <Link href="/events" className="flex items-center gap-2 text-purple-700 mb-6 hover:underline">

          <button className="flex items-center gap-2 text-purple-700 mb-6 hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Back to Events
          </button>
          </Link>

          <div className="grid grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="col-span-2">
              <div className="bg-white rounded-lg overflow-hidden">
                {/* Event Image */}
                <img src="/api/placeholder/800/400" alt="Event Cover" className="w-full h-[400px] object-cover" />
                
                {/* Event Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h1 className="text-3xl font-bold text-purple-700 mb-2">Electronic Music Festival</h1>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-5 h-5" />
                        <span>Friday, December 6, 2024 • 20:00</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="flex items-center gap-2 px-4 py-2 border border-purple-700 text-purple-700 rounded-lg hover:bg-purple-700 hover:text-white transition-colors">
                        <Heart className="w-4 h-4" />
                        Interested
                      </button>
                      <span className="text-gray-600">324 interested</span>
                      <button className="p-2 border border-purple-700 rounded-lg text-purple-700 hover:bg-purple-700 hover:text-white transition-colors">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <MapPin className="w-5 h-5" />
                    <a href="#" className="hover:text-purple-700 hover:underline">The Grand Hall, 123 Example Street, London</a>
                  </div>

                  <div className="flex gap-2 mb-6">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-purple-700">18+</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-purple-700">Electronic</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-purple-700">Dance</span>
                  </div>

                  <div className="prose max-w-none text-gray-600">
                    <h2 className="text-xl font-semibold text-purple-700 mb-4">About This Event</h2>
                    <p className="mb-4">
                      Join us for an unforgettable night of electronic music featuring multiple artists across three stages...
                    </p>
                  </div>

                  {/* Artist Lineup */}
                  <div className="mt-8">
                    <h2 className="text-xl font-semibold text-purple-700 mb-4">Artists</h2>
                    <div className="grid grid-cols-2 gap-4">
                      {[1, 2, 3, 4, 5, 6].map((artist) => (
                        <a 
                          key={artist} 
                          href="/artistprofile" 
                          className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-purple-700 transition-colors"
                        >
                          <img 
                            src={`/api/placeholder/60/60`} 
                            alt="Artist" 
                            className="w-12 h-12 rounded-full"
                          />
                          <span className="font-medium text-purple-700">Artist Name {artist}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Ticket Info, Venue & Promoter */}
            <div className="space-y-6">
              {/* Ticket Info */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-purple-700 mb-4">Tickets</h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Early Bird</span>
                    <span className="font-bold text-purple-700">£35.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">General Admission</span>
                    <span className="font-bold text-purple-700">£45.00</span>
                  </div>
                </div>
                <button className="w-full py-3 bg-white border border-purple-700 text-purple-700 rounded-lg hover:bg-purple-700 hover:text-white transition-colors flex items-center justify-center gap-2">
                  Get Tickets
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>

              {/* Venue Info */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-purple-700 mb-4">Venue Information</h2>
                <div className="space-y-4">
                  <a href="#" className="font-semibold text-purple-700 hover:underline">The Grand Hall</a>
                  <p className="text-gray-600">Capacity: 1,200</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-purple-700">Bar Available</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-purple-700">Food Available</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-purple-700">Wheelchair Accessible</span>
                  </div>
                  <a href="/venueprofile" className="text-purple-700 hover:underline block mt-4">View Venue Profile →</a>
                </div>
              </div>

              {/* Promoter Info */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-purple-700 mb-4">Promoter</h2>
                <div className="space-y-4">
                  <a href="#" className="font-semibold text-purple-700 hover:underline">Event Horizon Promotions</a>
                  <p className="text-gray-600">London's premier electronic music promoter</p>
                  <a href="/promoterprofile" className="text-purple-700 hover:underline block mt-4">View Promoter Profile →</a>
                </div>
              </div>
            </div>
          </div>
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

export default EventProfile;