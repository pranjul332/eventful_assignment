"use client";
import { Star, MapPin, IndianRupee, Clock, Users } from "lucide-react";

export default function ArtistCard({ artist, onQuoteRequest }) {
  /**
   * Reusable artist card component
   * @param {Object} artist - Artist data object
   * @param {Function} onQuoteRequest - Callback for quote requests
   */
  const handleQuoteClick = () => {
    onQuoteRequest?.(artist);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative">
        <img
          src={artist.image}
          alt={`${artist.name} - Professional ${artist.category.join(", ")}`}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex items-center">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium ml-1">{artist.rating}</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{artist.name}</h3>
        <p className="text-gray-600 mb-3 line-clamp-2">{artist.bio}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Users className="w-4 h-4 mr-2" />
            <span>{artist.category.join(", ")}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{artist.location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <IndianRupee className="w-4 h-4 mr-2" />
            <span>₹{artist.fee.replace("-", " - ₹")}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            <span>{artist.experience} experience</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {artist.languages.map((lang) => (
            <span
              key={lang}
              className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
            >
              {lang}
            </span>
          ))}
        </div>

        <button
          onClick={handleQuoteClick}
          className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200"
        >
          Ask for Quote
        </button>
      </div>
    </div>
  );
}
