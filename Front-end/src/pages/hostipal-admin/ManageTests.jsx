
import { useMemo, useState } from "react";

const ManageTests = () => {

    // Demo data - later replace with API data from MongoDB
    const [tests, setTests] = useState([
        {
            id: 1,
            testName: "Complete Blood Count (CBC)",
            category: "Blood Test",
            description: "Measures different components of blood.",
            price: 800,
            discountPrice: 650,
            duration: 30,
            startTime: "08:00",
            endTime: "17:00",
            availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            status: "Active"
        },
        {
            id: 2,
            testName: "Liver Function Test",
            category: "Blood Test",
            description: "Checks liver health and function.",
            price: 1200,
            discountPrice: 950,
            duration: 40,
            startTime: "08:30",
            endTime: "16:00",
            availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            status: "Active"
        },
        {
            id: 3,
            testName: "Thyroid Profile",
            category: "Blood Test",
            description: "Evaluates thyroid hormone levels.",
            price: 900,
            discountPrice: 750,
            duration: 25,
            startTime: "09:00",
            endTime: "15:00",
            availableDays: ["Monday", "Wednesday", "Friday"],
            status: "Inactive"
        },
        {
            id: 4,
            testName: "Chest X-Ray",
            category: "Imaging",
            description: "Imaging test for chest and lungs.",
            price: 1000,
            discountPrice: 850,
            duration: 20,
            startTime: "09:00",
            endTime: "18:00",
            availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            status: "Active"
        },
        {
            id: 5,
            testName: "Urine Routine Test",
            category: "Urine Test",
            description: "Checks physical and chemical properties of urine.",
            price: 400,
            discountPrice: 300,
            duration: 20,
            startTime: "08:00",
            endTime: "14:00",
            availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            status: "Active"
        }
    ]);

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [statusFilter, setStatusFilter] = useState("All");
    const [selectedTest, setSelectedTest] = useState(null);
    const [showDelete, setShowDelete] = useState(null);

    // Search and filters
    const filteredTests = useMemo(() => {
        return tests.filter((test) => {
            const matchesSearch =
                test.testName.toLowerCase().includes(search.toLowerCase()) ||
                test.category.toLowerCase().includes(search.toLowerCase());

            const matchesCategory =
                category === "All" || test.category === category;

            const matchesStatus =
                statusFilter === "All" || test.status === statusFilter;

            return matchesSearch && matchesCategory && matchesStatus;
        });
    }, [tests, search, category, statusFilter]);

    // Toggle active / inactive
    const toggleStatus = (id) => {
        setTests((prev) =>
            prev.map((test) =>
                test.id === id
                    ? {
                        ...test,
                        status: test.status === "Active" ? "Inactive" : "Active"
                    }
                    : test
            )
        );
    };

    // Delete test
    const deleteTest = () => {
        setTests((prev) =>
            prev.filter((test) => test.id !== showDelete)
        );
        setShowDelete(null);
    };

    // Update test
    const handleUpdate = (e) => {
        e.preventDefault();

        setTests((prev) =>
            prev.map((test) =>
                test.id === selectedTest.id ? selectedTest : test
            )
        );

        setSelectedTest(null);
    };

    const activeCount = tests.filter(
        (test) => test.status === "Active"
    ).length;

    const inactiveCount = tests.length - activeCount;

    return (
        <div className="w-full max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-6">

            {/* Heading */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

                <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                        Manage Tests
                    </h2>

                    <p className="text-gray-500 mt-2 text-sm sm:text-base">
                        Manage diagnostic tests, pricing and availability.
                    </p>
                </div>

                <a
                    href="/admin/add-test"
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-md shadow-blue-100"
                >
                    <span className="text-xl">+</span>
                    Add New Test
                </a>

            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mb-7">

                <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                    <p className="text-sm text-gray-500 font-medium">
                        Total Tests
                    </p>
                    <h3 className="text-3xl font-bold text-gray-800 mt-2">
                        {tests.length}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                        All diagnostic tests
                    </p>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                    <p className="text-sm text-gray-500 font-medium">
                        Active Tests
                    </p>
                    <h3 className="text-3xl font-bold text-green-600 mt-2">
                        {activeCount}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                        Available for patients
                    </p>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                    <p className="text-sm text-gray-500 font-medium">
                        Inactive Tests
                    </p>
                    <h3 className="text-3xl font-bold text-orange-500 mt-2">
                        {inactiveCount}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                        Currently unavailable
                    </p>
                </div>

            </div>

            {/* Main Table Card */}
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">

                {/* Search and Filters */}
                <div className="p-5 lg:p-7 border-b border-gray-100">

                    <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">

                        {/* Search */}
                        <div className="relative flex-1 max-w-xl">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                🔍
                            </span>

                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search test name or category..."
                                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50"
                            />
                        </div>

                        {/* Filters */}
                        <div className="flex flex-col sm:flex-row gap-3">

                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 bg-white text-sm"
                            >
                                <option value="All">All Categories</option>
                                <option value="Blood Test">Blood Test</option>
                                <option value="Urine Test">Urine Test</option>
                                <option value="Imaging">Imaging</option>
                                <option value="Heart Test">Heart Test</option>
                                <option value="Other">Other</option>
                            </select>

                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 bg-white text-sm"
                            >
                                <option value="All">All Status</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>

                        </div>

                    </div>

                    <div className="mt-5 flex justify-between items-center">
                        <p className="text-sm text-gray-500">
                            Showing <span className="font-semibold text-gray-800">{filteredTests.length}</span> of {tests.length} tests
                        </p>

                        <button
                            onClick={() => {
                                setSearch("");
                                setCategory("All");
                                setStatusFilter("All");
                            }}
                            className="text-sm text-blue-600 font-semibold hover:underline"
                        >
                            Clear Filters
                        </button>
                    </div>

                </div>

                {/* Responsive Table */}
                <div className="overflow-x-auto">

                    <table className="w-full min-w-[950px] text-left">

                        <thead className="bg-slate-50 border-b border-gray-100">

                            <tr className="text-xs uppercase tracking-wider text-gray-500">

                                <th className="px-6 py-4 font-semibold">
                                    Test Information
                                </th>

                                <th className="px-6 py-4 font-semibold">
                                    Category
                                </th>

                                <th className="px-6 py-4 font-semibold">
                                    Pricing
                                </th>

                                <th className="px-6 py-4 font-semibold">
                                    Duration
                                </th>

                                <th className="px-6 py-4 font-semibold">
                                    Availability
                                </th>

                                <th className="px-6 py-4 font-semibold">
                                    Status
                                </th>

                                <th className="px-6 py-4 font-semibold text-center">
                                    Actions
                                </th>

                            </tr>

                        </thead>

                        <tbody className="divide-y divide-gray-100">

                            {filteredTests.map((test) => (

                                <tr key={test.id} className="hover:bg-blue-50/30 transition">

                                    {/* Test Info */}
                                    <td className="px-6 py-5">

                                        <p className="font-semibold text-gray-800">
                                            {test.testName}
                                        </p>

                                        <p className="text-xs text-gray-400 mt-1 max-w-xs">
                                            {test.description}
                                        </p>

                                    </td>

                                    {/* Category */}
                                    <td className="px-6 py-5">
                                        <span className="inline-block px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 text-xs font-semibold">
                                            {test.category}
                                        </span>
                                    </td>

                                    {/* Price */}
                                    <td className="px-6 py-5">

                                        <p className="font-bold text-gray-800">
                                            ₹{test.discountPrice || test.price}
                                        </p>

                                        {test.discountPrice && (
                                            <p className="text-xs text-gray-400 line-through mt-1">
                                                ₹{test.price}
                                            </p>
                                        )}

                                    </td>

                                    {/* Duration */}
                                    <td className="px-6 py-5">
                                        <p className="text-sm font-medium text-gray-700">
                                            {test.duration} min
                                        </p>
                                    </td>

                                    {/* Availability */}
                                    <td className="px-6 py-5">
                                        <p className="text-sm text-gray-700">
                                            {test.startTime} - {test.endTime}
                                        </p>
                                        <p className="text-xs text-gray-400 mt-1">
                                            {test.availableDays.length} days/week
                                        </p>
                                    </td>

                                    {/* Status */}
                                    <td className="px-6 py-5">
                                        <button
                                            onClick={() => toggleStatus(test.id)}
                                            className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                                                test.status === "Active"
                                                    ? "bg-green-50 text-green-700"
                                                    : "bg-gray-100 text-gray-600"
                                            }`}
                                        >
                                            ● {test.status}
                                        </button>
                                    </td>

                                    {/* Actions */}
                                    <td className="px-6 py-5">

                                        <div className="flex items-center justify-center gap-2">

                                            <button
                                                onClick={() => setSelectedTest({ ...test })}
                                                title="Edit Test"
                                                className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
                                            >
                                                ✎
                                            </button>

                                            <button
                                                onClick={() => setShowDelete(test.id)}
                                                title="Delete Test"
                                                className="w-9 h-9 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition"
                                            >
                                                🗑
                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))}

                            {filteredTests.length === 0 && (
                                <tr>
                                    <td colSpan="7" className="text-center py-16">
                                        <div className="text-4xl mb-3">🔍</div>
                                        <h3 className="font-semibold text-gray-700">
                                            No tests found
                                        </h3>
                                        <p className="text-sm text-gray-400 mt-1">
                                            Try changing your search or filters.
                                        </p>
                                    </td>
                                </tr>
                            )}

                        </tbody>

                    </table>

                </div>

            </div>

            {/* Edit Modal */}
            {selectedTest && (
                <div className="fixed inset-0 z-[100] bg-black/40 flex items-center justify-center p-4">

                    <form
                        onSubmit={handleUpdate}
                        className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl p-6 lg:p-8"
                    >

                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">
                                    Edit Diagnostic Test
                                </h3>
                                <p className="text-sm text-gray-500 mt-1">
                                    Update test details and pricing.
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() => setSelectedTest(null)}
                                className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    Test Name
                                </label>
                                <input
                                    required
                                    value={selectedTest.testName}
                                    onChange={(e) => setSelectedTest({
                                        ...selectedTest,
                                        testName: e.target.value
                                    })}
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    Category
                                </label>
                                <select
                                    value={selectedTest.category}
                                    onChange={(e) => setSelectedTest({
                                        ...selectedTest,
                                        category: e.target.value
                                    })}
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                                >
                                    <option>Blood Test</option>
                                    <option>Urine Test</option>
                                    <option>Imaging</option>
                                    <option>Heart Test</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    Regular Price (₹)
                                </label>
                                <input
                                    type="number"
                                    min="1"
                                    required
                                    value={selectedTest.price}
                                    onChange={(e) => setSelectedTest({
                                        ...selectedTest,
                                        price: e.target.value
                                    })}
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    Discount Price (₹)
                                </label>
                                <input
                                    type="number"
                                    min="0"
                                    value={selectedTest.discountPrice}
                                    onChange={(e) => setSelectedTest({
                                        ...selectedTest,
                                        discountPrice: e.target.value
                                    })}
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    Duration (minutes)
                                </label>
                                <input
                                    type="number"
                                    min="1"
                                    value={selectedTest.duration}
                                    onChange={(e) => setSelectedTest({
                                        ...selectedTest,
                                        duration: e.target.value
                                    })}
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    Status
                                </label>
                                <select
                                    value={selectedTest.status}
                                    onChange={(e) => setSelectedTest({
                                        ...selectedTest,
                                        status: e.target.value
                                    })}
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                                >
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>
                            </div>

                            <div className="sm:col-span-2">
                                <label className="block text-sm font-semibold mb-2">
                                    Description
                                </label>
                                <textarea
                                    rows="3"
                                    value={selectedTest.description}
                                    onChange={(e) => setSelectedTest({
                                        ...selectedTest,
                                        description: e.target.value
                                    })}
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 resize-none"
                                />
                            </div>

                        </div>

                        <div className="flex justify-end gap-3 mt-7">
                            <button
                                type="button"
                                onClick={() => setSelectedTest(null)}
                                className="px-5 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700"
                            >
                                Save Changes
                            </button>
                        </div>

                    </form>
                </div>
            )}

            {/* Delete Confirmation */}
            {showDelete !== null && (
                <div className="fixed inset-0 z-[110] bg-black/40 flex items-center justify-center p-4">

                    <div className="bg-white w-full max-w-md rounded-2xl p-7 shadow-xl">

                        <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center text-2xl mb-4">
                            !
                        </div>

                        <h3 className="text-xl font-bold text-gray-800">
                            Delete Test?
                        </h3>

                        <p className="text-sm text-gray-500 mt-2">
                            Are you sure you want to delete this diagnostic test? This action cannot be undone.
                        </p>

                        <div className="flex justify-end gap-3 mt-7">

                            <button
                                onClick={() => setShowDelete(null)}
                                className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-semibold"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={deleteTest}
                                className="px-5 py-2.5 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700"
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

export default ManageTests;
