// app/dashboard/page.js (Manager Dashboard)
"use client";
import { useState } from "react";
import {
  Eye,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Filter,
  Search,
  Download,
  MoreVertical,
  Star,
  Users,
  TrendingUp,
  Clock,
} from "lucide-react";

export default function DashboardPage() {
  // Mock data for artist submissions
  const [artists] = useState([
    {
      id: 1,
      name: "Arjun Kapoor",
      category: ["Singers"],
      city: "Mumbai",
      fee: "₹15,000-₹25,000",
      experience: "6+ years",
      status: "Pending Review",
      submittedAt: "2025-06-23",
      rating: 4.5,
      phone: "+91 9876543210",
      email: "arjun.kapoor@email.com",
    },
    {
      id: 2,
      name: "Meera Dance Group",
      category: ["Dancers"],
      city: "Delhi",
      fee: "₹20,000-₹35,000",
      experience: "8+ years",
      status: "Approved",
      submittedAt: "2025-06-22",
      rating: 4.8,
      phone: "+91 9876543211",
      email: "meera.dance@email.com",
    },
    {
      id: 3,
      name: "DJ Rohit",
      category: ["DJs"],
      city: "Bangalore",
      fee: "₹12,000-₹20,000",
      experience: "4+ years",
      status: "Under Review",
      submittedAt: "2025-06-21",
      rating: 4.3,
      phone: "+91 9876543212",
      email: "dj.rohit@email.com",
    },
    {
      id: 4,
      name: "Priya Sharma",
      category: ["Speakers"],
      city: "Hyderabad",
      fee: "₹25,000-₹40,000",
      experience: "12+ years",
      status: "Approved",
      submittedAt: "2025-06-20",
      rating: 4.9,
      phone: "+91 9876543213",
      email: "priya.speaker@email.com",
    },
    {
      id: 5,
      name: "The Vocals",
      category: ["Singers"],
      city: "Pune",
      fee: "₹18,000-₹30,000",
      experience: "10+ years",
      status: "Rejected",
      submittedAt: "2025-06-19",
      rating: 4.1,
      phone: "+91 9876543214",
      email: "thevocals@email.com",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  // Filter artists based on search and filters
  const filteredArtists = artists.filter((artist) => {
    const matchesSearch =
      artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artist.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !statusFilter || artist.status === statusFilter;
    const matchesCategory =
      !categoryFilter || artist.category.includes(categoryFilter);

    return matchesSearch && matchesStatus && matchesCategory;
  });

  // Statistics
  const stats = {
    total: artists.length,
    pending: artists.filter((a) => a.status === "Pending Review").length,
    approved: artists.filter((a) => a.status === "Approved").length,
    underReview: artists.filter((a) => a.status === "Under Review").length,
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-800";
      case "Pending Review":
        return "bg-yellow-100 text-yellow-800";
      case "Under Review":
        return "bg-blue-100 text-blue-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleAction = (artistId, action) => {
    console.log(`${action} action for artist ID: ${artistId}`);
    // In a real app, this would make an API call
    alert(`${action} action initiated for artist`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Artist Management Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            Manage artist applications and profile submissions
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Artists
                </p>
                <p className="text-3xl font-bold text-gray-900">
                  {stats.total}
                </p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Pending Review
                </p>
                <p className="text-3xl font-bold text-yellow-600">
                  {stats.pending}
                </p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-full">
                <Clock className="w-8 h-8 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Approved</p>
                <p className="text-3xl font-bold text-green-600">
                  {stats.approved}
                </p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <Star className="w-8 h-8 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Under Review
                </p>
                <p className="text-3xl font-bold text-blue-600">
                  {stats.underReview}
                </p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search artists or cities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">All Status</option>
                <option value="Pending Review">Pending Review</option>
                <option value="Under Review">Under Review</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>

              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">All Categories</option>
                <option value="Singers">Singers</option>
                <option value="Dancers">Dancers</option>
                <option value="Speakers">Speakers</option>
                <option value="DJs">DJs</option>
              </select>

              <button className="flex items-center px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                <Download className="w-4 h-4 mr-2" />
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Artists Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              Artist Submissions ({filteredArtists.length})
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Artist
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Fee Range
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Submitted
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredArtists.map((artist) => (
                  <tr key={artist.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-purple-600 font-semibold">
                            {artist.name.charAt(0)}
                          </span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {artist.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {artist.experience}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {artist.category.join(", ")}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-900">
                        <MapPin className="w-4 h-4 mr-1 text-gray-400" />
                        {artist.city}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {artist.fee}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                          artist.status
                        )}`}
                      >
                        {artist.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(artist.submittedAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleAction(artist.id, "View")}
                          className="text-purple-600 hover:text-purple-900 p-1 rounded"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleAction(artist.id, "Email")}
                          className="text-blue-600 hover:text-blue-900 p-1 rounded"
                          title="Send Email"
                        >
                          <Mail className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleAction(artist.id, "Call")}
                          className="text-green-600 hover:text-green-900 p-1 rounded"
                          title="Call Artist"
                        >
                          <Phone className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleAction(artist.id, "More")}
                          className="text-gray-600 hover:text-gray-900 p-1 rounded"
                          title="More Actions"
                        >
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredArtists.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-6xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No artists found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search terms or filters
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
