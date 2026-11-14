
import { Link } from "react-router-dom";

const AdminHome = () => {
  // Demo data. Replace with backend API data later.
  const stats = [
    {
      title: "Total Diagnostic Tests",
      value: 24,
      icon: "🧪",
      color: "bg-blue-50 text-blue-600",
      change: "Tests added by your hospital",
    },
    {
      title: "Total Doctors",
      value: 12,
      icon: "👨‍⚕️",
      color: "bg-purple-50 text-purple-600",
      change: "Doctors registered",
    },
    {
      title: "Total Appointments",
      value: 156,
      icon: "📅",
      color: "bg-green-50 text-green-600",
      change: "Patient bookings",
    },
    {
      title: "Pending Appointments",
      value: 8,
      icon: "⏳",
      color: "bg-orange-50 text-orange-600",
      change: "Awaiting confirmation",
    },
  ];

  const recentAppointments = [
    {
      id: 1,
      patient: "Rahul Das",
      doctor: "Dr. Rahul Sharma",
      date: "14 Nov 2026",
      time: "10:30 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      patient: "Priya Roy",
      doctor: "Dr. Sneha Paul",
      date: "14 Nov 2026",
      time: "11:00 AM",
      status: "Pending",
    },
    {
      id: 3,
      patient: "Amit Ghosh",
      doctor: "Dr. Priya Das",
      date: "15 Nov 2026",
      time: "12:00 PM",
      status: "Completed",
    },
    {
      id: 4,
      patient: "Sneha Das",
      doctor: "Dr. Rahul Sharma",
      date: "15 Nov 2026",
      time: "02:00 PM",
      status: "Cancelled",
    },
  ];

  const quickActions = [
    {
      title: "Add Diagnostic Test",
      description: "Add a new test and set its price.",
      icon: "🧪",
      link: "/admin/add-test",
      color: "bg-blue-50",
    },
    {
      title: "Manage Tests",
      description: "Update prices and test availability.",
      icon: "📋",
      link: "/admin/tests",
      color: "bg-indigo-50",
    },
    {
      title: "Add Doctor",
      description: "Register a new doctor.",
      icon: "👨‍⚕️",
      link: "/admin/add-doctor",
      color: "bg-purple-50",
    },
    {
      title: "Manage Doctors",
      description: "Edit doctor profiles and details.",
      icon: "🩺",
      link: "/admin/doctors",
      color: "bg-green-50",
    },
    {
      title: "Doctor Availability",
      description: "Manage doctor schedules and slots.",
      icon: "🕒",
      link: "/admin/doctor-availability",
      color: "bg-orange-50",
    },
    {
      title: "Manage Appointments",
      description: "View and manage patient bookings.",
      icon: "📅",
      link: "/admin/bookings",
      color: "bg-cyan-50",
    },
    {
      title: "View Hospital Profile",
      description: "See your hospital's public information.",
      icon: "🏥",
      link: "/admin/view-profile",
      color: "bg-pink-50",
    },
    {
      title: "Edit Hospital Profile",
      description: "Update hospital details and picture.",
      icon: "✏️",
      link: "/admin/profile",
      color: "bg-amber-50",
    },
  ];

  const statusStyle = {
    Confirmed: "bg-green-100 text-green-700",
    Pending: "bg-orange-100 text-orange-700",
    Completed: "bg-blue-100 text-blue-700",
    Cancelled: "bg-red-100 text-red-700",
  };

  return (
    <div className="w-full max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-6 py-5 space-y-7">

      {/* Welcome Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
        <div>
          <p className="text-sm font-semibold text-blue-600">
            HOSPITAL ADMIN PANEL
          </p>

          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 mt-1">
            Dashboard Overview
          </h1>

          <p className="text-sm text-slate-500 mt-2">
            Welcome back! Manage your hospital activities from one place.
          </p>
        </div>

        <Link
          to="/admin/view-profile"
          className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl p-3 hover:border-blue-300 transition"
        >
          <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center text-2xl">
            🏥
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-800">
              Hospital Profile
            </p>
            <p className="text-xs text-slate-500">
              View your hospital
            </p>
          </div>

          <span className="text-slate-400 ml-2">→</span>
        </Link>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">{item.title}</p>
                <h2 className="text-3xl font-bold text-slate-800 mt-3">
                  {item.value}
                </h2>
              </div>

              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${item.color}`}>
                {item.icon}
              </div>
            </div>

            <p className="text-xs text-slate-400 mt-4">
              {item.change}
            </p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <section>
        <div className="mb-4">
          <h2 className="text-xl font-bold text-slate-800">
            Quick Management
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Manage all your hospital services and information.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <Link
              to={action.link}
              key={action.title}
              className="group bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${action.color}`}>
                {action.icon}
              </div>

              <h3 className="font-bold text-slate-800 mt-4 group-hover:text-blue-600 transition">
                {action.title}
              </h3>

              <p className="text-sm text-slate-500 mt-2 leading-6">
                {action.description}
              </p>

              <div className="mt-4 text-sm font-semibold text-blue-600">
                Open page →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Appointments */}
      <section className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-5 border-b border-slate-100">
          <div>
            <h2 className="text-lg font-bold text-slate-800">
              Recent Appointments
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Latest patient appointment activity.
            </p>
          </div>

          <Link
            to="/admin/bookings"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            View All →
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[750px] text-left">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500">
              <tr>
                <th className="px-5 py-4">Patient</th>
                <th className="px-5 py-4">Doctor</th>
                <th className="px-5 py-4">Appointment Date</th>
                <th className="px-5 py-4">Time</th>
                <th className="px-5 py-4">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {recentAppointments.map((appointment) => (
                <tr key={appointment.id} className="hover:bg-slate-50">
                  <td className="px-5 py-4">
                    <p className="font-semibold text-sm text-slate-800">
                      {appointment.patient}
                    </p>
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    {appointment.doctor}
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    {appointment.date}
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    {appointment.time}
                  </td>

                  <td className="px-5 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyle[appointment.status]}`}>
                      {appointment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Bottom Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
          <h3 className="font-bold text-blue-900">
            Manage Your Diagnostic Services
          </h3>
          <p className="text-sm text-blue-800 mt-2 leading-6">
            Add diagnostic tests, update prices and manage which tests are
            available to patients.
          </p>
          <Link
            to="/admin/tests"
            className="inline-block mt-4 text-sm font-bold text-blue-700 hover:underline"
          >
            Manage Tests →
          </Link>
        </div>

        <div className="bg-purple-50 border border-purple-100 rounded-2xl p-5">
          <h3 className="font-bold text-purple-900">
            Manage Your Medical Team
          </h3>
          <p className="text-sm text-purple-800 mt-2 leading-6">
            Register doctors, update their consultation fees and maintain
            their availability schedules.
          </p>
          <Link
            to="/admin/doctors"
            className="inline-block mt-4 text-sm font-bold text-purple-700 hover:underline"
          >
            Manage Doctors →
          </Link>
        </div>

      </div>

    </div>
  );
};

export default AdminHome;
