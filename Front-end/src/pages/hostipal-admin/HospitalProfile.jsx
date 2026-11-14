
import { useState } from "react";

const HospitalProfile = () => {
  const [formData, setFormData] = useState({
    hospitalName: "",
    hospitalType: "Private Hospital",
    registrationNumber: "",
    phone: "",
    email: "",
    website: "",
    address: "",
    city: "",
    district: "",
    state: "West Bengal",
    pinCode: "",
    description: "",
  });

  const [hospitalImage, setHospitalImage] = useState(null);
  const [preview, setPreview] = useState("");

  const inputStyle =
    "w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  const labelStyle = "block text-sm font-semibold text-slate-700 mb-2";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image.");
      return;
    }

    setHospitalImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    if (hospitalImage) {
      data.append("hospitalImage", hospitalImage);
    }

    // Connect your backend API here using FormData.
    console.log("Hospital Profile:", formData);
    console.log("Hospital Image:", hospitalImage);
  };

  return (
    <div className="w-full max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-6 py-5">

      {/* Header */}
      <div className="mb-7">
        <p className="text-sm font-semibold text-blue-600 mb-1">
          HOSPITAL MANAGEMENT
        </p>

        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
          Hospital Profile
        </h1>

        <p className="text-sm text-slate-500 mt-2">
          Manage your hospital information and public profile.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Hospital Picture */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-sm">
          <h2 className="text-lg font-bold text-slate-800 mb-5">
            Hospital Picture
          </h2>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-32 h-32 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center overflow-hidden">
              {preview ? (
                <img
                  src={preview}
                  alt="Hospital preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center text-slate-400">
                  <div className="text-4xl">🏥</div>
                  <p className="text-xs mt-2">No Image</p>
                </div>
              )}
            </div>

            <div className="text-center sm:text-left">
              <label
                htmlFor="hospitalImage"
                className="inline-block cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl text-sm font-semibold transition"
              >
                Upload Hospital Picture
              </label>

              <input
                id="hospitalImage"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />

              <p className="text-xs text-slate-500 mt-3">
                Upload JPG, PNG or WEBP image.
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Recommended: square image, up to 5 MB.
              </p>
            </div>
          </div>
        </div>

        {/* Basic Information */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-sm">
          <h2 className="text-lg font-bold text-slate-800 mb-6">
            Basic Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label className={labelStyle}>Hospital Name *</label>
              <input
                required
                name="hospitalName"
                value={formData.hospitalName}
                onChange={handleChange}
                placeholder="Enter hospital name"
                className={inputStyle}
              />
            </div>

            <div>
              <label className={labelStyle}>Hospital Type *</label>
              <select
                name="hospitalType"
                value={formData.hospitalType}
                onChange={handleChange}
                className={inputStyle}
              >
                <option>Private Hospital</option>
                <option>Government Hospital</option>
                <option>Multi-speciality Hospital</option>
                <option>Clinic</option>
                <option>Diagnostic Centre</option>
              </select>
            </div>

            <div>
              <label className={labelStyle}>Registration Number</label>
              <input
                name="registrationNumber"
                value={formData.registrationNumber}
                onChange={handleChange}
                placeholder="Enter registration number"
                className={inputStyle}
              />
            </div>

            <div>
              <label className={labelStyle}>Hospital Phone *</label>
              <input
                required
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className={inputStyle}
              />
            </div>

            <div>
              <label className={labelStyle}>Official Email *</label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="hospital@example.com"
                className={inputStyle}
              />
            </div>

            <div>
              <label className={labelStyle}>Website</label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="https://example.com"
                className={inputStyle}
              />
            </div>

          </div>
        </div>

        {/* Address */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-sm">
          <h2 className="text-lg font-bold text-slate-800 mb-6">
            Hospital Address
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div className="md:col-span-2">
              <label className={labelStyle}>Full Address *</label>
              <textarea
                required
                rows="3"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter complete hospital address"
                className={inputStyle}
              />
            </div>

            <div>
              <label className={labelStyle}>City *</label>
              <input
                required
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
                className={inputStyle}
              />
            </div>

            <div>
              <label className={labelStyle}>District *</label>
              <input
                required
                name="district"
                value={formData.district}
                onChange={handleChange}
                placeholder="Enter district"
                className={inputStyle}
              />
            </div>

            <div>
              <label className={labelStyle}>State *</label>
              <input
                required
                name="state"
                value={formData.state}
                onChange={handleChange}
                className={inputStyle}
              />
            </div>

            <div>
              <label className={labelStyle}>PIN Code *</label>
              <input
                required
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
                placeholder="Enter PIN code"
                maxLength="6"
                className={inputStyle}
              />
            </div>

          </div>
        </div>

        {/* Description */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-sm">
          <h2 className="text-lg font-bold text-slate-800 mb-5">
            About Hospital
          </h2>

          <label className={labelStyle}>Hospital Description</label>
          <textarea
            rows="5"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Write about your hospital, facilities, departments and services..."
            className={inputStyle}
          />
        </div>

        {/* Submit */}
        <div className="flex flex-col-reverse sm:flex-row justify-end gap-3">
          <button
            type="reset"
            onClick={() => {
              setFormData({
                hospitalName: "",
                hospitalType: "Private Hospital",
                registrationNumber: "",
                phone: "",
                email: "",
                website: "",
                address: "",
                city: "",
                district: "",
                state: "West Bengal",
                pinCode: "",
                description: "",
              });
              setHospitalImage(null);
              setPreview("");
            }}
            className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50"
          >
            Reset
          </button>

          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-sm"
          >
            Save Hospital Profile
          </button>
        </div>

      </form>
    </div>
  );
};

export default HospitalProfile;
