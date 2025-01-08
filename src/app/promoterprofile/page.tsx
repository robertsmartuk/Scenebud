import React from 'react';
import { ArrowRight, Calendar, MapPin, Heart, Globe, Mail, Phone, LinkIcon, Music, Users, Building2, Search } from 'lucide-react';
import Link from 'next/link';

const PromoterProfile = () => {
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

      {/* Promoter Hero Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-8 items-start">
            {/* Promoter Image */}
            <img 
              src="/api/placeholder/200/200" 
              alt="Event Horizon Promotions" 
              className="w-48 h-48 rounded-lg object-cover"
            />
            
            {/* Promoter Info */}
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-4xl font-bold text-purple-700 mb-2">Event Horizon Promotions</h1>
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>London, UK</span>
                  </div>
                  <p className="text-gray-800 mb-4 text-lg">London's premier electronic music promoter</p>
                </div>
                
                {/* Follow Button and Count */}
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 border border-purple-700 text-purple-700 rounded-lg hover:bg-purple-700 hover:text-white transition-colors">
                    <Heart className="w-4 h-4" />
                    Follow
                  </button>
                  <span className="text-gray-600">5.6k followers</span>
                </div>
              </div>
              
              {/* Promoter Tags */}
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-purple-700">Electronic</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-purple-700">Dance</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-purple-700">Live Music</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-purple-700 mb-4">About</h2>
              <p className="text-gray-600 mb-6">
                Event Horizon Promotions has been at the forefront of London's electronic music scene since 2015. Specializing in underground electronic music events, we've built a reputation for creating unforgettable experiences in unique venues across the city. Our events combine cutting-edge sound systems with innovative production and world-class artists.
              </p>
              <p className="text-gray-600">
                From intimate warehouse parties to large-scale festivals, we pride ourselves on attention to detail and creating safe, inclusive spaces for music lovers. Our team has over 20 years of combined experience in event production and promotion.
              </p>
            </div>

            {/* Upcoming Events Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-purple-700 mb-4">Upcoming Events</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((event) => (
                  <a 
                    key={event}
                    href="/eventprofile" 
                    className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-purple-700"
                  >
                    <img src="/api/placeholder/80/80" alt="Event" className="w-20 h-20 rounded object-cover" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-purple-700">Event Name</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Dec 15, 2024
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          Venue Name
                        </span>
                      </div>
                    </div>
                    <div className="text-purple-700 font-semibold">£25.00</div>
                  </a>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <a href="#" className="text-purple-700 hover:underline flex items-center gap-2">
                  View Historic Events <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Connect Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-purple-700 mb-4">Connect</h2>
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-2 text-purple-700 hover:underline">
                  <Mail className="w-4 h-4" />
                  Email
                </a>
                <a href="#" className="flex items-center gap-2 text-purple-700 hover:underline">
                  <Phone className="w-4 h-4" />
                  Phone
                </a>
                <a href="#" className="flex items-center gap-2 text-purple-700 hover:underline">
                  <LinkIcon className="w-4 h-4" />
                  Instagram
                </a>
                <a href="#" className="flex items-center gap-2 text-purple-700 hover:underline">
                  <Globe className="w-4 h-4" />
                  Website
                </a>
              </div>
            </div>

            {/* Resident Venues */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-purple-700 mb-4">Resident Venues</h2>
              <div className="space-y-4">
                {[1, 2].map((venue) => (
                  <a 
                    key={venue}
                    href="#" 
                    className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-purple-700"
                  >
                    <img src="/api/placeholder/60/60" alt="Venue" className="w-12 h-12 rounded object-cover" />
                    <div>
                      <h3 className="font-medium text-purple-700">Venue Name</h3>
                      <p className="text-sm text-gray-600">London, UK</p>
                    </div>
                  </a>
                ))}
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

export default PromoterProfile;