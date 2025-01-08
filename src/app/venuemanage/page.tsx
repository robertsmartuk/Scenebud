import React from 'react';
import { ArrowRight, Calendar, ArrowLeft, Trash2, MapPin, Music, Users, Building2, Search } from 'lucide-react';
import Link from 'next/link';

const VenueEditForm = () => {
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
        <a href="/venuelist" className="flex items-center gap-2 text-purple-700 hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Manage Venues
        </a>

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-purple-700">Edit Venue Profile</h1>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Venue Image</label>
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
                Venue Name *
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
                defaultValue="The Grand Hall"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Address *
              </label>
              <input
                type="text"
                placeholder="Street Address"
                defaultValue="123 Example Street"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-purple-700 focus:ring-1 focus:ring-purple-700 mb-2"
                required
              />
              <div className="grid grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="City"
                  defaultValue="London"
                  className="px-4 py-2 border border-gray-200 rounded-lg focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
                  required
                />
                <input
                  type="text"
                  placeholder="Postcode"
                  defaultValue="EC1A 1BB"
                  className="px-4 py-2 border border-gray-200 rounded-lg focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
                  required
                />
                <input
                  type="text"
                  placeholder="Country"
                  defaultValue="United Kingdom"
                  className="px-4 py-2 border border-gray-200 rounded-lg focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                One-line Description *
              </label>
              <input
                type="text"
                defaultValue="Historic music venue in the heart of London"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Capacity *
              </label>
              <input
                type="number"
                defaultValue="1200"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
                required
              />
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-purple-700 mb-6">About</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Biography
              </label>
              <textarea
                rows={6}
                defaultValue="Built in 1885, The Grand Hall has been at the forefront of London's music scene for over a century. This Grade II listed building combines Victorian architecture with state-of-the-art sound and lighting systems..."
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
              />
            </div>

            {/* Opening Hours */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Opening Hours
              </label>
              <div className="space-y-3">
                {[
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                  'Sunday'
                ].map((day) => (
                  <div key={day} className="flex items-center gap-4">
                    <div className="w-28">
                      <span className="text-gray-700">{day}</span>
                    </div>
                    
                    <label className="flex items-center gap-2">
                      <input 
                        type="checkbox" 
                        className="rounded border-gray-300 text-purple-700"
                        defaultChecked={day !== 'Sunday'}
                      />
                      <span className="text-sm text-gray-600">Open</span>
                    </label>

                    <div className="flex items-center gap-2">
                      <select 
                        className="px-3 py-2 border border-gray-200 rounded-lg focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
                        defaultValue={day === 'Friday' || day === 'Saturday' ? '18' : '19'}
                      >
                        {Array.from({ length: 24 }, (_, i) => (
                          <option key={i} value={i.toString().padStart(2, '0')}>
                            {i.toString().padStart(2, '0')}:00
                          </option>
                        ))}
                      </select>
                      <span className="text-gray-600">to</span>
                      <select 
                        className="px-3 py-2 border border-gray-200 rounded-lg focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
                        defaultValue={day === 'Friday' || day === 'Saturday' ? '02' : '23'}
                      >
                        {Array.from({ length: 24 }, (_, i) => (
                          <option key={i} value={i.toString().padStart(2, '0')}>
                            {i.toString().padStart(2, '0')}:00
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Age Restrictions */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Default Age Restriction
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
              <p className="mt-1 text-sm text-gray-500">Individual events may have different age restrictions</p>
            </div>
          </div>

          {/* Facilities Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-purple-700 mb-6">Facilities</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Bar Available',
                'Food Available',
                'Wheelchair Accessible',
                'Cloakroom',
                'Smoking Area',
                'Parking Available'
              ].map((facility, index) => (
                <label key={facility} className="flex items-center gap-2 p-3 border rounded-lg hover:border-purple-700 cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="rounded border-gray-300 text-purple-700"
                    defaultChecked={index < 4} 
                  />
                  <span>{facility}</span>
                </label>
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
                    defaultValue="events@thegrandhall.com"
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
                    defaultValue={platform === 'Website' ? 'https://thegrandhall.com' : '@thegrandhall'}
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

export default VenueEditForm;