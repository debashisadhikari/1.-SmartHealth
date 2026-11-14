
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../contex/AuthContext";

const Header = () => {
    const { User, logout } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);

    const isHospitalAdmin =
        String(User?.AccountType ?? "").trim().toLowerCase() === "admin";

    const closeMenu = () => setMenuOpen(false);

    const handleLogout = () => {
        logout();
        closeMenu();
    };

    const navLink =
        "relative text-sm font-semibold text-gray-600 hover:text-blue-600 transition duration-200 py-2";

    const activeLink =
        "text-blue-600 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-blue-600 after:rounded-full";

    const mobileLink =
        "block px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition";

    return (
        <header className="w-full bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">

            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Navbar */}
                <div className="h-16 sm:h-20 flex items-center justify-between gap-4">

                    {/* Logo */}
                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="flex items-center gap-2 shrink-0 group"
                    >
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xl shadow-md shadow-blue-200 group-hover:bg-blue-700 transition">
                            ✚
                        </div>

                        <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-gray-800">
                            Smart<span className="text-blue-600">Health</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-6 xl:gap-8">

                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) =>
                                `${navLink} ${isActive ? activeLink : ""}`
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `${navLink} ${isActive ? activeLink : ""}`
                            }
                        >
                            About
                        </NavLink>

                        <NavLink
                            to="/reviews"
                            className={({ isActive }) =>
                                `${navLink} ${isActive ? activeLink : ""}`
                            }
                        >
                            Reviews
                        </NavLink>

                        {User && isHospitalAdmin && (
                            <>
                                <NavLink
                                    to="/admin/dashboard"
                                    className={({ isActive }) =>
                                        `${navLink} ${isActive ? activeLink : ""}`
                                    }
                                >
                                    Dashboard
                                </NavLink>

                                <NavLink
                                    to="/admin/dashboard/tests"
                                    className={({ isActive }) =>
                                        `${navLink} ${isActive ? activeLink : ""}`
                                    }
                                >
                                    Manage Tests
                                </NavLink>

                                <NavLink
                                    to="/admin/dashboard/doctors"
                                    className={({ isActive }) =>
                                        `${navLink} ${isActive ? activeLink : ""}`
                                    }
                                >
                                    Doctors
                                </NavLink>

                                <NavLink
                                    to="/admin/dashboard/bookings"
                                    className={({ isActive }) =>
                                        `${navLink} ${isActive ? activeLink : ""}`
                                    }
                                >
                                    Bookings
                                </NavLink>
                            </>
                        )}

                    </div>

                    {/* Desktop Right Side */}
                    <div className="hidden lg:flex items-center gap-3 shrink-0">

                        {!User ? (
                            <>
                                <Link
                                    to="/login"
                                    className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition"
                                >
                                    Login
                                </Link>

                                <Link
                                    to="/register"
                                    className="bg-blue-600 text-white text-sm font-semibold px-6 py-2.5 rounded-xl shadow-md shadow-blue-200 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition duration-200"
                                >
                                    Get Started
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/profile"
                                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-50 text-blue-700 text-sm font-semibold hover:bg-blue-100 transition"
                                >
                                    <span>👤</span>
                                    Profile
                                </Link>

                                <button
                                    onClick={handleLogout}
                                    className="px-4 py-2.5 rounded-xl bg-red-50 text-red-600 text-sm font-semibold hover:bg-red-100 transition"
                                >
                                    Logout
                                </button>
                            </>
                        )}

                    </div>

                    {/* Mobile / Tablet Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 border border-gray-200 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition text-xl"
                        aria-label="Toggle navigation"
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? "✕" : "☰"}
                    </button>

                </div>

                {/* Mobile and Tablet Dropdown */}
                {menuOpen && (
                    <div className="lg:hidden pb-5">

                        <div className="bg-white border border-gray-100 rounded-2xl shadow-lg p-3 flex flex-col gap-1">

                            <NavLink
                                to="/"
                                end
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    `${mobileLink} ${isActive ? "bg-blue-50 text-blue-600" : ""}`
                                }
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/about"
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    `${mobileLink} ${isActive ? "bg-blue-50 text-blue-600" : ""}`
                                }
                            >
                                About
                            </NavLink>

                            <NavLink
                                to="/reviews"
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    `${mobileLink} ${isActive ? "bg-blue-50 text-blue-600" : ""}`
                                }
                            >
                                Reviews
                            </NavLink>

                            {User && isHospitalAdmin && (
                                <>
                                    <div className="border-t border-gray-100 my-2"></div>

                                    <p className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                                        Hospital Management
                                    </p>

                                    <Link
                                        to="/admin/dashboard"
                                        onClick={closeMenu}
                                        className={mobileLink}
                                    >
                                        Dashboard
                                    </Link>

                                    <Link
                                        to="/admin/tests"
                                        onClick={closeMenu}
                                        className={mobileLink}
                                    >
                                        Manage Tests
                                    </Link>

                                    <Link
                                        to="/admin/doctors"
                                        onClick={closeMenu}
                                        className={mobileLink}
                                    >
                                        Doctors
                                    </Link>

                                    <Link
                                        to="/admin/bookings"
                                        onClick={closeMenu}
                                        className={mobileLink}
                                    >
                                        Bookings
                                    </Link>
                                </>
                            )}

                            <div className="border-t border-gray-100 mt-2 pt-3">

                                {!User ? (
                                    <div className="flex gap-3">

                                        <Link
                                            to="/login"
                                            onClick={closeMenu}
                                            className="flex-1 text-center py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition"
                                        >
                                            Login
                                        </Link>

                                        <Link
                                            to="/register"
                                            onClick={closeMenu}
                                            className="flex-1 text-center py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition"
                                        >
                                            Get Started
                                        </Link>

                                    </div>
                                ) : (
                                    <div className="flex gap-3">

                                        <Link
                                            to="/profile"
                                            onClick={closeMenu}
                                            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-50 text-blue-700 font-semibold text-sm hover:bg-blue-100 transition"
                                        >
                                            👤 Profile
                                        </Link>

                                        <button
                                            onClick={handleLogout}
                                            className="flex-1 py-3 rounded-xl bg-red-50 text-red-600 font-semibold text-sm hover:bg-red-100 transition"
                                        >
                                            Logout
                                        </button>

                                    </div>
                                )}

                            </div>

                        </div>
                    </div>
                )}

            </nav>
        </header>
    );
};

export default Header;
