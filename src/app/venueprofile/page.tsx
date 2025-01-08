import React from 'react';
import { ArrowRight, Calendar, MapPin, Heart, Info, Phone, Globe, Mail, LinkIcon, Clock, Music, Users, Building2, Search } from 'lucide-react';
import Link from 'next/link';

const VenueProfile = () => {
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

      {/* Venue Hero Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-8 items-start">
            {/* Venue Image */}
            <img 
              src="/api/placeholder/200/200" 
              alt="The Grand Hall" 
              className="w-48 h-48 rounded-lg object-cover"
            />
            
            {/* Venue Info */}
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-4xl font-bold text-purple-700 mb-2">The Grand Hall</h1>
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>123 Example Street, London, UK</span>
                  </div>
                  <p className="text-gray-800 mb-4 text-lg">Historic music venue in the heart of London</p>
                </div>
                
                {/* Follow Button and Count */}
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 border border-purple-700 text-purple-700 rounded-lg hover:bg-purple-700 hover:text-white transition-colors">
                    <Heart className="w-4 h-4" />
                    Follow
                  </button>
                  <span className="text-gray-600">2.1k followers</span>
                </div>
              </div>
              
              {/* Venue Features */}
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-purple-700">Bar Available</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-purple-700">Food Available</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-purple-700">Wheelchair Accessible</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-purple-700">1,200 Capacity</span>
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
                Built in 1885, The Grand Hall has been at the forefront of London's music scene for over a century. This Grade II listed building combines Victorian architecture with state-of-the-art sound and lighting systems, creating the perfect environment for both classical and contemporary performances.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200">
                <div>
                  <h3 className="font-semibold text-purple-700 mb-3">Opening Hours</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Thursday</span>
                      <span>18:00 - 23:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Friday - Saturday</span>
                      <span>18:00 - 02:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>16:00 - 22:00</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-purple-700 mb-3">Age Restrictions</h3>
                  <p className="text-gray-600">Varies by event. Default entry age is 18+</p>
                </div>
              </div>
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
                          <Clock className="w-4 h-4" />
                          20:00
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

            {/* Facilities */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-purple-700 mb-4">Facilities</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <Info className="w-4 h-4" />
                  <span>Full bar service</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Info className="w-4 h-4" />
                  <span>Street food vendors</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Info className="w-4 h-4" />
                  <span>Cloakroom facilities</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Info className="w-4 h-4" />
                  <span>Wheelchair accessible</span>
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

export default VenueProfile;