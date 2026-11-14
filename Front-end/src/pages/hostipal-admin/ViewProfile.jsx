
import { useState } from "react";
import { Link } from "react-router-dom";

const ViewHospitalProfile = () => {
  // Demo data: replace this with hospital data fetched from your API.
  const [hospital] = useState({
    hospitalName: "City Care Multispeciality Hospital",
    hospitalType: "Multi-speciality Hospital",
    hospitalId: "HSP-WB-10025",
    verificationStatus: "Verified",
    registrationNumber: "WB-HOS-2024-1025",
    phone: "+91 9876543210",
    email: "citycare@gmail.com",
    website: "https://www.citycare.com",
    address: "Sevoke Road, Near City Mall",
    city: "Siliguri",
    district: "Darjeeling",
    state: "West Bengal",
    pinCode: "734001",
    description:
      "City Care Multispeciality Hospital provides quality healthcare services with experienced doctors, modern diagnostic facilities and patient-focused care. Our departments include Cardiology, Neurology, Orthopedics, Pediatrics and General Medicine.",
    image: "",
  });

  return (
    <div className="w-full max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-6 py-5">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-7">
        <div>
          <p className="text-sm font-semibold text-blue-600 mb-1">
            HOSPITAL MANAGEMENT
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
            Hospital Profile
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            View your hospital information and public profile.
          </p>
        </div>

        <Link
          to="/admin/profile"
          className="inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold transition"
        >
          ✎ Edit Profile
        </Link>
      </div>

      {/* Main Profile Card */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden mb-6">

        {/* Cover */}
        <div className="h-36 sm:h-48 bg-gradient-to-r from-blue-700 to-cyan-500 relative">
          <div className="absolute inset-0 opacity-10 bg-white" />
        </div>

        {/* Hospital Information */}
        <div className="px-5 sm:px-8 pb-7">
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-14 relative">

            {/* Hospital Image */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-white border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
              {hospital.image ? (
                <img
                  src={hospital.image}
                  alt={hospital.hospitalName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-5xl">🏥</span>
              )}
            </div>

            <div className="flex-1 sm:pb-2">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
                  {hospital.hospitalName}
                </h2>

                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                  ✓ {hospital.verificationStatus}
                </span>
              </div>

              <p className="text-sm text-slate-500">
                {hospital.hospitalType}
              </p>
            </div>
          </div>

          {/* Hospital ID */}
          <div className="mt-6 inline-flex flex-wrap items-center gap-2 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3">
            <span className="text-sm text-slate-600">Hospital ID:</span>
            <span className="text-sm font-bold text-blue-700">
              {hospital.hospitalId}
            </span>
          </div>
        </div>
      </div>

      {/* Profile Details */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Left Side */}
        <div className="xl:col-span-2 space-y-6">

          {/* Basic Information */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-6">
              Basic Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              <Detail label="Hospital Name" value={hospital.hospitalName} />
              <Detail label="Hospital Type" value={hospital.hospitalType} />
              <Detail label="Registration Number" value={hospital.registrationNumber} />
              <Detail label="Hospital ID" value={hospital.hospitalId} />
            </div>
          </div>

          {/* About Hospital */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-4">
              About Hospital
            </h3>

            <p className="text-sm text-slate-600 leading-7">
              {hospital.description}
            </p>
          </div>

          {/* Address */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-6">
              Hospital Address
            </h3>

            <div className="flex gap-3 mb-5">
              <div className="w-11 h-11 shrink-0 bg-blue-50 rounded-xl flex items-center justify-center text-xl">
                📍
              </div>
              <div>
                <p className="font-semibold text-slate-800">
                  Complete Address
                </p>
                <p className="text-sm text-slate-500 mt-1 leading-6">
                  {hospital.address}, {hospital.city}, {hospital.district},
                  {hospital.state} - {hospital.pinCode}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Detail label="City" value={hospital.city} />
              <Detail label="District" value={hospital.district} />
              <Detail label="State" value={hospital.state} />
              <Detail label="PIN Code" value={hospital.pinCode} />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-6">

          {/* Contact Information */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-6">
              Contact Information
            </h3>

            <div className="space-y-5">
              <Contact
                icon="📞"
                label="Phone Number"
                value={hospital.phone}
              />

              <Contact
                icon="✉️"
                label="Email Address"
                value={hospital.email}
              />

              <Contact
                icon="🌐"
                label="Website"
                value={hospital.website}
              />
            </div>
          </div>

          {/* Verification */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-5">
              Verification Details
            </h3>

            <div className="bg-green-50 border border-green-100 rounded-xl p-4">
              <div className="flex items-center gap-2 text-green-700 font-semibold">
                <span>✓</span>
                <span>Hospital Verified</span>
              </div>
              <p className="text-xs text-green-700 mt-2 leading-5">
                This hospital has been approved by the platform verification team.
              </p>
            </div>

            <div className="mt-5">
              <Detail
                label="Hospital ID"
                value={hospital.hospitalId}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// Reusable detail component
const Detail = ({ label, value }) => (
  <div>
    <p className="text-xs font-medium text-slate-400 mb-1">
      {label}
    </p>
    <p className="text-sm font-semibold text-slate-800 break-words">
      {value || "Not provided"}
    </p>
  </div>
);

// Reusable contact component
const Contact = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div className="w-10 h-10 shrink-0 bg-blue-50 rounded-xl flex items-center justify-center">
      {icon}
    </div>
    <div className="min-w-0">
      <p className="text-xs text-slate-400 mb-1">{label}</p>
      <p className="text-sm font-semibold text-slate-800 break-all">
        {value || "Not provided"}
      </p>
    </div>
  </div>
);

export default ViewHospitalProfile;
