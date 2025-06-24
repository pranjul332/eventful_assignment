"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Upload, Check, AlertCircle } from "lucide-react";

export default function OnboardPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const categories = ["Singers", "Dancers", "Speakers", "DJs"];
  const languages = [
    "Hindi",
    "English",
    "Marathi",
    "Gujarati",
    "Tamil",
    "Telugu",
    "Kannada",
    "Bengali",
    "Punjabi",
  ];
  const feeRanges = [
    "5000-10000",
    "8000-15000",
    "10000-18000",
    "12000-20000",
    "15000-25000",
    "20000-35000",
  ];

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Artist Registration Data:", {
        ...data,
        profileImage: selectedImage ? "uploaded" : "none",
      });

      setSubmitSuccess(true);
      reset();
      setSelectedImage(null);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Registration Successful!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for joining Artistly! Your profile has been submitted for
            review. We'll contact you within 24-48 hours.
          </p>
          <button
            onClick={() => setSubmitSuccess(false)}
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Register Another Artist
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Artistly as a Performer
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create your profile and start receiving booking requests from event
            planners across India
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-8">
            {/* Basic Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6 border-b pb-2">
                Basic Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                    })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    {...register("location", {
                      required: "Location is required",
                    })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="e.g., Mumbai, Maharashtra"
                  />
                  {errors.location && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.location.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bio/Description *
                </label>
                <textarea
                  {...register("bio", {
                    required: "Bio is required",
                    minLength: {
                      value: 50,
                      message: "Bio must be at least 50 characters",
                    },
                  })}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Tell us about your experience, specialties, and what makes you unique..."
                />
                {errors.bio && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.bio.message}
                  </p>
                )}
              </div>
            </div>

            {/* Categories and Skills */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6 border-b pb-2">
                Categories & Skills
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Categories * (Select all that apply)
                  </label>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          value={category}
                          {...register("categories", {
                            required: "Please select at least one category",
                          })}
                          className="text-purple-600 focus:ring-purple-500 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          {category}
                        </span>
                      </label>
                    ))}
                  </div>
                  {errors.categories && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.categories.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Languages Spoken * (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto">
                    {languages.map((language) => (
                      <label key={language} className="flex items-center">
                        <input
                          type="checkbox"
                          value={language}
                          {...register("languages", {
                            required: "Please select at least one language",
                          })}
                          className="text-purple-600 focus:ring-purple-500 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          {language}
                        </span>
                      </label>
                    ))}
                  </div>
                  {errors.languages && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.languages.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fee Range (per event) *
                </label>
                <select
                  {...register("feeRange", {
                    required: "Please select a fee range",
                  })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select fee range</option>
                  {feeRanges.map((range) => (
                    <option key={range} value={range}>
                      ₹{range.replace("-", " - ₹")}
                    </option>
                  ))}
                </select>
                {errors.feeRange && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.feeRange.message}
                  </p>
                )}
              </div>
            </div>

            {/* Profile Image */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6 border-b pb-2">
                Profile Image
              </h2>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Profile Photo (Optional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-500 transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="profile-image"
                    />
                    <label htmlFor="profile-image" className="cursor-pointer">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-sm text-gray-600">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        PNG, JPG up to 5MB
                      </p>
                    </label>
                  </div>
                </div>

                {selectedImage && (
                  <div className="w-32 h-32">
                    <img
                      src={selectedImage}
                      alt="Profile preview"
                      className="w-full h-full object-cover rounded-lg border"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6 border-b pb-2">
                Contact Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[6-9]\d{9}$/,
                        message: "Enter valid 10-digit mobile number",
                      },
                    })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="9876543210"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience *
                </label>
                <select
                  {...register("experience", {
                    required: "Please select experience level",
                  })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select experience</option>
                  <option value="1-2 years">1-2 years</option>
                  <option value="3-5 years">3-5 years</option>
                  <option value="5-10 years">5-10 years</option>
                  <option value="10+ years">10+ years</option>
                  <option value="15+ years">15+ years</option>
                  <option value="20+ years">20+ years</option>
                </select>
                {errors.experience && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.experience.message}
                  </p>
                )}
              </div>
            </div>

            {/* Terms and Submit */}
            <div className="border-t pt-8">
              <div className="mb-6">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    {...register("terms", {
                      required: "Please accept the terms and conditions",
                    })}
                    className="text-purple-600 focus:ring-purple-500 rounded mt-1"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-purple-600 hover:text-purple-700"
                    >
                      Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-purple-600 hover:text-purple-700"
                    >
                      Privacy Policy
                    </a>
                    . I understand that my profile will be reviewed before being
                    published.
                  </span>
                </label>
                {errors.terms && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.terms.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
