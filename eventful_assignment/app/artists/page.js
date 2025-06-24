"use client";
import { useState, useEffect } from "react";
import { Search, Grid, List, Filter } from "lucide-react";
import ArtistCard from "../components/ArtistCard";
import FilterPanel from "../components/FilterPanel";
import artistsData from "../../data/artistsData.json"

export default function ArtistsPage() {
  const [artists, setArtists] = useState(artistsData);
  const [filteredArtists, setFilteredArtists] = useState(artistsData);
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    feeRange: "",
    search: "",
  });
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);

  // Filter artists based on current filters
  useEffect(() => {
    let filtered = artists;

    // Search filter
    if (filters.search) {
      filtered = filtered.filter(
        (artist) =>
          artist.name.toLowerCase().includes(filters.search.toLowerCase()) ||
          artist.bio.toLowerCase().includes(filters.search.toLowerCase()) ||
          artist.category.some((cat) =>
            cat.toLowerCase().includes(filters.search.toLowerCase())
          )
      );
    }

    // Category filter
    if (filters.category) {
      filtered = filtered.filter((artist) =>
        artist.category.includes(filters.category)
      );
    }

    // Location filter
    if (filters.location) {
      filtered = filtered.filter(
        (artist) => artist.location === filters.location
      );
    }

    // Fee range filter
    if (filters.feeRange) {
      const [min, max] = filters.feeRange.split("-").map(Number);
      filtered = filtered.filter((artist) => {
        const [artistMin, artistMax] = artist.fee.split("-").map(Number);
        return artistMin >= min && artistMax <= max;
      });
    }

    setFilteredArtists(filtered);
  }, [filters, artists]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      category: "",
      location: "",
      feeRange: "",
      search: "",
    });
  };

  const handleQuoteRequest = (artist) => {
    alert(`Quote request sent to ${artist.name}! They will contact you soon.`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Browse Artists
          </h1>
          <p className="text-lg text-gray-600">
            Discover and connect with talented performers for your events
          </p>
        </div>

        {/* Search and Controls */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search artists, categories, or skills..."
                value={filters.search}
                onChange={(e) => handleFilterChange("search", e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </button>

              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === "grid"
                      ? "bg-white text-purple-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === "list"
                      ? "bg-white text-purple-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              <div className="text-sm text-gray-600">
                {filteredArtists.length} artists found
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div
            className={`lg:w-80 ${showFilters ? "block" : "hidden lg:block"}`}
          >
            <FilterPanel
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
            />
          </div>

          {/* Artists Grid/List */}
          <div className="flex-1">
            {filteredArtists.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-gray-400 text-6xl mb-4">🎭</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No artists found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your filters or search terms
                </p>
                <button
                  onClick={handleClearFilters}
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                    : "space-y-6"
                }
              >
                {filteredArtists.map((artist) => (
                  <ArtistCard
                    key={artist.id}
                    artist={artist}
                    onQuoteRequest={handleQuoteRequest}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
