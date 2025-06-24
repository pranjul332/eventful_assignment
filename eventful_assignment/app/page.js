"use client";
import Link from "next/link";
import {
  ArrowRight,
  Star,
  Users,
  Calendar,
  Music,
  Mic,
  Camera,
  Headphones,
} from "lucide-react";

export default function HomePage() {
  const categories = [
    {
      title: "Singers",
      description: "Professional vocalists for every genre and occasion",
      icon: <Mic className="w-12 h-12 text-purple-600" />,
      count: "500+ Artists",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Dancers",
      description: "Choreographers and performers for all dance styles",
      icon: <Users className="w-12 h-12 text-blue-600" />,
      count: "300+ Artists",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Speakers",
      description: "Motivational speakers and industry experts",
      icon: <Camera className="w-12 h-12 text-green-600" />,
      count: "150+ Artists",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "DJs",
      description: "Professional DJs for parties and events",
      icon: <Headphones className="w-12 h-12 text-orange-600" />,
      count: "200+ Artists",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const stats = [
    { number: "1000+", label: "Professional Artists" },
    { number: "5000+", label: "Events Completed" },
    { number: "50+", label: "Cities Covered" },
    { number: "4.8", label: "Average Rating" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Book Amazing
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Artists
              </span>
              For Your Events
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Connect with India's top performing artists. From singers to
              speakers, find the perfect talent for your next event.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/artists"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 flex items-center shadow-xl"
              >
                Explore Artists
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/onboard"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Join as Artist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Discover Talented Artists
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse through our curated collection of professional artists
              across various categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/artists?category=${category.title}`}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className="mb-6 flex justify-center">
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${category.gradient} bg-opacity-10`}
                    >
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="text-sm text-purple-600 font-semibold">
                    {category.count}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Artistly Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to book your perfect artist
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Browse Artists</h3>
              <p className="text-gray-600">
                Explore our extensive database of verified professional artists
                across multiple categories
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Request Quote</h3>
              <p className="text-gray-600">
                Contact artists directly and request customized quotes for your
                specific event needs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Book & Enjoy</h3>
              <p className="text-gray-600">
                Finalize booking details and enjoy an amazing performance at
                your event
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Perfect Artist?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Join thousands of event planners who trust Artistly for their
            entertainment needs
          </p>
          <Link
            href="/artists"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-xl"
          >
            Start Browsing Artists
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
