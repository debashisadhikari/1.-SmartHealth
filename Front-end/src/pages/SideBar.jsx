
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: "Dashboard", path: "/admin/dashboard", icon: "📊" },
        { name: "Add Test", path: "/admin/dashboard/add-test", icon: "➕" },
        { name: "Manage Tests", path: "/admin/dashboard/tests", icon: "🧪" },
        { name: "Add Doctor", path: "/admin/dashboard/add-doctor", icon: "👨‍⚕️" },
       
        { name: "Manage Doctors", path: "/admin/dashboard/doctors", icon: "📋" },
        
        { name: "Add Hospital Profile", path: "/admin/dashboard/profile", icon: "🏥" },
        { name: "Hospital Profile", path: "/admin/dashboard/view-profile", icon: "🏥" }
    ];

    const closeSidebar = () => setIsOpen(false);

    return (
        <div className="min-h-screen bg-slate-50 lg:flex">

            {/* Mobile Header */}
            <header className="lg:hidden sticky top-0 z-30 flex items-center justify-between bg-white border-b border-gray-200 px-4 h-16">

                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open navigation menu"
                    aria-expanded={isOpen}
                    className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </header>

            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                    onClick={closeSidebar}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
                    fixed inset-y-0 left-0 z-50
                    w-64 bg-white border-r border-gray-200
                    flex flex-col
                    transform transition-transform duration-300 ease-in-out
                    lg:translate-x-0 lg:sticky lg:top-0 lg:h-screen
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}
                `}
            >

                {/* Logo */}
                <div className="h-20 flex items-center justify-between px-5 border-b shrink-0">

                    <div className="flex items-center">
                        <span className="text-3xl">💙</span>
                        <h2 className="text-xl font-bold ml-2 text-gray-800">
                            Smart<span className="text-blue-600">Health</span>
                        </h2>
                    </div>

                    {/* Close Button - Mobile */}
                    <button
                        type="button"
                        onClick={closeSidebar}
                        aria-label="Close navigation menu"
                        className="lg:hidden text-gray-500 hover:text-red-500 text-2xl"
                    >
                        ✕
                    </button>

                </div>

                {/* Admin Info */}
                <div className="p-4 shrink-0">
                    <div className="bg-blue-50 rounded-xl p-3">

                        <p className="text-xs text-blue-600 font-semibold">
                            HOSPITAL ADMIN
                        </p>

                        <h3 className="font-semibold text-gray-800 mt-1">
                            Hospital Dashboard
                        </h3>

                        <p className="text-xs text-gray-500 mt-1">
                            Manage your hospital
                        </p>

                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 min-h-0 overflow-y-auto px-4 pb-4 space-y-1">

                    <p className="text-xs font-semibold text-gray-400 uppercase px-3 mb-3">
                        Main Menu
                    </p>

                    {menuItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === "/admin/dashboard"}
                            onClick={closeSidebar}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition ${
                                    isActive
                                        ? "bg-blue-600 text-white shadow-sm"
                                        : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                                }`
                            }
                        >
                            <span className="text-lg shrink-0">
                                {item.icon}
                            </span>
                            <span>{item.name}</span>
                        </NavLink>
                    ))}

                </nav>

                {/* Bottom Section */}
                <div className="p-4 border-t space-y-2 shrink-0">

                    <NavLink
                        to="/admin/settings"
                        onClick={closeSidebar}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-3 py-3 rounded-lg text-sm ${
                                isActive
                                    ? "bg-blue-600 text-white"
                                    : "text-gray-600 hover:bg-gray-100"
                            }`
                        }
                    >
                        <span>⚙️</span>
                        Settings
                    </NavLink>

                    <button
                        type="button"
                        className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm text-red-500 hover:bg-red-50"
                    >
                        <span>🚪</span>
                        Logout
                    </button>

                </div>

            </aside>

           

        </div>
    );
};

export default SideBar;
