"use client";
import { X } from "lucide-react";

export default function FilterPanel({
  filters,
  onFilterChange,
  onClearFilters,
}) {
  /**
   * Reusable filter panel component
   * @param {Object} filters - Current filter state
   * @param {Function} onFilterChange - Filter change handler
   * @param {Function} onClearFilters - Clear all filters handler
   */

  const categories = ["Singers", "Dancers", "Speakers", "DJs"];
  const locations = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Goa",
    "Hyderabad",
    "Pune",
  ];
  const feeRanges = [
    { label: "₹5,000 - ₹10,000", value: "5000-10000" },
    { label: "₹8,000 - ₹15,000", value: "8000-15000" },
    { label: "₹10,000 - ₹18,000", value: "10000-18000" },
    { label: "₹12,000 - ₹20,000", value: "12000-20000" },
    { label: "₹15,000 - ₹25,000", value: "15000-25000" },
    { label: "₹20,000 - ₹35,000", value: "20000-35000" },
  ];

  const hasActiveFilters =
    filters.category || filters.location || filters.feeRange;

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="flex items-center text-sm text-purple-600 hover:text-purple-700"
          >
            <X className="w-4 h-4 mr-1" />
            Clear All
          </button>
        )}
      </div>

      <div className="space-y-6">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Category
          </label>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={filters.category === category}
                  onChange={(e) => onFilterChange("category", e.target.value)}
                  className="text-purple-600 focus:ring-purple-500"
                />
                <span className="ml-2 text-sm text-gray-700">{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Location Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Location
          </label>
          <select
            value={filters.location || ""}
            onChange={(e) => onFilterChange("location", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">All Locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* Fee Range Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Fee Range
          </label>
          <select
            value={filters.feeRange || ""}
            onChange={(e) => onFilterChange("feeRange", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">All Ranges</option>
            {feeRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
