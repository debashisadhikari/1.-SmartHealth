
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const initialDoctors = [
  {
    id: 1,
    name: "Dr. Rahul Sharma",
    specialization: "Cardiologist",
    qualification: "MBBS, MD Cardiology",
    experience: 12,
    phone: "9876543210",
    email: "rahul@gmail.com",
    fee: 800,
    duration: 30,
    room: "Room 101",
    days: ["Monday", "Tuesday", "Wednesday", "Friday"],
    startTime: "09:00",
    endTime: "14:00",
    status: "Active",
  },
  {
    id: 2,
    name: "Dr. Priya Das",
    specialization: "Dermatologist",
    qualification: "MBBS, MD Dermatology",
    experience: 8,
    phone: "9876543211",
    email: "priya@gmail.com",
    fee: 600,
    duration: 20,
    room: "Room 204",
    days: ["Monday", "Wednesday", "Thursday", "Saturday"],
    startTime: "10:00",
    endTime: "16:00",
    status: "Active",
  },
  {
    id: 3,
    name: "Dr. Amit Roy",
    specialization: "Neurologist",
    qualification: "MBBS, DM Neurology",
    experience: 15,
    phone: "9876543212",
    email: "amit@gmail.com",
    fee: 1000,
    duration: 30,
    room: "Room 305",
    days: ["Tuesday", "Thursday", "Saturday"],
    startTime: "11:00",
    endTime: "15:00",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Dr. Sneha Paul",
    specialization: "Pediatrician",
    qualification: "MBBS, MD Pediatrics",
    experience: 6,
    phone: "9876543213",
    email: "sneha@gmail.com",
    fee: 500,
    duration: 20,
    room: "Room 108",
    days: ["Monday", "Tuesday", "Friday", "Saturday"],
    startTime: "09:30",
    endTime: "13:30",
    status: "Active",
  },
];

const specializations = [
  "Cardiologist",
  "Dermatologist",
  "Neurologist",
  "Orthopedic",
  "General Physician",
  "Pediatrician",
  "Gynecologist",
  "ENT Specialist",
  "Other",
];

const ManageDoctors = () => {
  const [doctors, setDoctors] = useState(initialDoctors);
  const [search, setSearch] = useState("");
  const [specialization, setSpecialization] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [editingDoctor, setEditingDoctor] = useState(null);
  const [showDelete, setShowDelete] = useState(null);

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const matchesSearch =
        doctor.name.toLowerCase().includes(search.toLowerCase()) ||
        doctor.specialization.toLowerCase().includes(search.toLowerCase());

      const matchesSpecialization =
        specialization === "All" ||
        doctor.specialization === specialization;

      const matchesStatus =
        statusFilter === "All" || doctor.status === statusFilter;

      return matchesSearch && matchesSpecialization && matchesStatus;
    });
  }, [doctors, search, specialization, statusFilter]);

  const totalDoctors = doctors.length;
  const activeDoctors = doctors.filter(
    (doctor) => doctor.status === "Active"
  ).length;
  const inactiveDoctors = totalDoctors - activeDoctors;

  const toggleStatus = (id) => {
    setDoctors((prev) =>
      prev.map((doctor) =>
        doctor.id === id
          ? {
              ...doctor,
              status: doctor.status === "Active" ? "Inactive" : "Active",
            }
          : doctor
      )
    );
  };

  const deleteDoctor = (id) => {
    setDoctors((prev) => prev.filter((doctor) => doctor.id !== id));
    setShowDelete(null);
    setSelectedDoctor(null);
  };

  const saveEdit = (e) => {
    e.preventDefault();

    setDoctors((prev) =>
      prev.map((doctor) =>
        doctor.id === editingDoctor.id ? editingDoctor : doctor
      )
    );

    setEditingDoctor(null);
  };

  const inputStyle =
    "w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  return (
    <div className="w-full max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-6 py-4 sm:py-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-7">
        <div>
          <p className="text-sm font-semibold text-blue-600 mb-1">
            HOSPITAL MANAGEMENT
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
            Manage Doctors
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Manage your hospital doctors, consultation fees and schedules.
          </p>
        </div>

        <Link
          to="/admin/add-doctor"
          className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-xl shadow-sm transition"
        >
          <span className="text-xl">+</span>
          Add New Doctor
        </Link>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-7">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-sm text-slate-500">Total Doctors</p>
          <h2 className="text-3xl font-bold text-slate-800 mt-2">
            {totalDoctors}
          </h2>
          <p className="text-xs text-slate-400 mt-2">Registered doctors</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-sm text-slate-500">Active Doctors</p>
          <h2 className="text-3xl font-bold text-green-600 mt-2">
            {activeDoctors}
          </h2>
          <p className="text-xs text-slate-400 mt-2">Currently available for management</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-sm text-slate-500">Inactive Doctors</p>
          <h2 className="text-3xl font-bold text-orange-500 mt-2">
            {inactiveDoctors}
          </h2>
          <p className="text-xs text-slate-400 mt-2">Currently deactivated</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 mb-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <input
            type="text"
            placeholder="Search doctor name or specialization..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={inputStyle}
          />

          <select
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            className={inputStyle}
          >
            <option value="All">All Specializations</option>
            {specializations.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className={inputStyle}
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Doctors Table */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-5 border-b border-slate-100">
          <div>
            <h2 className="font-bold text-slate-800 text-lg">
              Doctor Directory
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Showing {filteredDoctors.length} of {totalDoctors} doctors
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1100px] text-left">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500">
              <tr>
                <th className="px-5 py-4">Doctor</th>
                <th className="px-5 py-4">Specialization</th>
                <th className="px-5 py-4">Experience</th>
                <th className="px-5 py-4">Consultation Fee</th>
                <th className="px-5 py-4">Schedule</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {filteredDoctors.map((doctor) => (
                <tr key={doctor.id} className="hover:bg-slate-50 transition">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                        {doctor.name
                          .split(" ")
                          .slice(1)
                          .map((word) => word[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          {doctor.name}
                        </p>
                        <p className="text-xs text-slate-500">
                          {doctor.qualification}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-700">
                    {doctor.specialization}
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-700">
                    {doctor.experience} years
                  </td>

                  <td className="px-5 py-4">
                    <p className="font-semibold text-slate-800">
                      ₹{doctor.fee}
                    </p>
                    <p className="text-xs text-slate-500">
                      {doctor.duration} min
                    </p>
                  </td>

                  <td className="px-5 py-4">
                    <p className="text-sm text-slate-700">
                      {doctor.startTime} - {doctor.endTime}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      {doctor.days.join(", ")}
                    </p>
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        doctor.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {doctor.status}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => setSelectedDoctor(doctor)}
                        title="View details"
                        className="px-3 py-2 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 text-sm font-medium"
                      >
                        View
                      </button>

                      <button
                        onClick={() => setEditingDoctor({ ...doctor })}
                        title="Edit doctor"
                        className="px-3 py-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 text-sm font-medium"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => toggleStatus(doctor.id)}
                        title="Change status"
                        className="px-3 py-2 rounded-lg bg-amber-50 text-amber-700 hover:bg-amber-100 text-sm font-medium"
                      >
                        {doctor.status === "Active" ? "Disable" : "Enable"}
                      </button>

                      <button
                        onClick={() => setShowDelete(doctor.id)}
                        title="Delete doctor"
                        className="px-3 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 text-sm font-medium"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredDoctors.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center py-12 text-slate-500">
                    No doctors found. Try changing your search or filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* View Doctor Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl max-h-[90vh] overflow-y-auto">
            <div className="p-5 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold text-slate-800">
                Doctor Details
              </h2>
              <button
                onClick={() => setSelectedDoctor(null)}
                className="text-2xl text-slate-500 hover:text-slate-800"
              >
                ×
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-lg font-bold text-slate-800">
                  {selectedDoctor.name}
                </h3>
                <p className="text-blue-600 text-sm">
                  {selectedDoctor.specialization}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div><p className="text-slate-500">Qualification</p><p className="font-medium">{selectedDoctor.qualification}</p></div>
                <div><p className="text-slate-500">Experience</p><p className="font-medium">{selectedDoctor.experience} years</p></div>
                <div><p className="text-slate-500">Phone</p><p className="font-medium">{selectedDoctor.phone}</p></div>
                <div><p className="text-slate-500">Email</p><p className="font-medium break-all">{selectedDoctor.email}</p></div>
                <div><p className="text-slate-500">Consultation Fee</p><p className="font-medium">₹{selectedDoctor.fee}</p></div>
                <div><p className="text-slate-500">Consultation Duration</p><p className="font-medium">{selectedDoctor.duration} minutes</p></div>
                <div><p className="text-slate-500">Consultation Room</p><p className="font-medium">{selectedDoctor.room}</p></div>
                <div><p className="text-slate-500">Status</p><p className="font-medium">{selectedDoctor.status}</p></div>
              </div>

              <div className="bg-slate-50 rounded-xl p-4">
                <p className="font-semibold text-slate-800 mb-2">Availability</p>
                <p className="text-sm text-slate-600">
                  {selectedDoctor.days.join(", ")}
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  {selectedDoctor.startTime} - {selectedDoctor.endTime}
                </p>
              </div>
            </div>

            <div className="p-5 border-t flex justify-end">
              <button
                onClick={() => setSelectedDoctor(null)}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 rounded-xl font-semibold text-slate-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Doctor Modal */}
      {editingDoctor && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <form
            onSubmit={saveEdit}
            className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="p-5 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold text-slate-800">Edit Doctor</h2>
              <button
                type="button"
                onClick={() => setEditingDoctor(null)}
                className="text-2xl text-slate-500"
              >
                ×
              </button>
            </div>

            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Doctor Name</label>
                <input
                  required
                  className={inputStyle}
                  value={editingDoctor.name}
                  onChange={(e) => setEditingDoctor({ ...editingDoctor, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Specialization</label>
                <select
                  className={inputStyle}
                  value={editingDoctor.specialization}
                  onChange={(e) => setEditingDoctor({ ...editingDoctor, specialization: e.target.value })}
                >
                  {specializations.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Qualification</label>
                <input
                  required
                  className={inputStyle}
                  value={editingDoctor.qualification}
                  onChange={(e) => setEditingDoctor({ ...editingDoctor, qualification: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Experience (years)</label>
                <input
                  type="number"
                  min="0"
                  required
                  className={inputStyle}
                  value={editingDoctor.experience}
                  onChange={(e) => setEditingDoctor({ ...editingDoctor, experience: Number(e.target.value) })}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Phone</label>
                <input
                  required
                  className={inputStyle}
                  value={editingDoctor.phone}
                  onChange={(e) => setEditingDoctor({ ...editingDoctor, phone: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  required
                  className={inputStyle}
                  value={editingDoctor.email}
                  onChange={(e) => setEditingDoctor({ ...editingDoctor, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Consultation Fee (₹)</label>
                <input
                  type="number"
                  min="0"
                  required
                  className={inputStyle}
                  value={editingDoctor.fee}
                  onChange={(e) => setEditingDoctor({ ...editingDoctor, fee: Number(e.target.value) })}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Consultation Duration (minutes)</label>
                <input
                  type="number"
                  min="1"
                  required
                  className={inputStyle}
                  value={editingDoctor.duration}
                  onChange={(e) => setEditingDoctor({ ...editingDoctor, duration: Number(e.target.value) })}
                />
              </div>
            </div>

            <div className="p-5 border-t flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setEditingDoctor(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Delete Confirmation */}
      {showDelete !== null && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
            <h2 className="text-xl font-bold text-slate-800">Delete Doctor?</h2>
            <p className="text-sm text-slate-500 mt-2">
              Are you sure you want to remove this doctor? This action cannot be undone.
            </p>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowDelete(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={() => deleteDoctor(showDelete)}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ManageDoctors;
