import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, User, BookOpen, LogOut, Menu, X } from 'lucide-react';

import AdminDashboard from './AdminDashboard';
import AdminProfile from './AdminProfile';
import AdminBooks from './AdminBooks';

const AdminLayout = ({ setToken }) => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        setToken(null);
    };

    const navItems = [
        { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
        { name: 'Profile Update', path: '/admin/profile', icon: User },
        { name: 'Manage Books', path: '/admin/books', icon: BookOpen },
    ];

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-slate-50 font-sans overflow-x-hidden">

            {/* Mobile Header Bar */}
            <div className="md:hidden flex items-center justify-between bg-white border-b border-slate-200 p-4 sticky top-0 z-50">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 m-0">
                    <span className="text-blue-700">Admin</span> Panel
                </h2>
                <button
                    onClick={toggleMenu}
                    className="p-2 text-slate-600 hover:text-slate-900 bg-slate-100 rounded-lg transition-colors"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-slate-900/50 z-40 md:hidden backdrop-blur-sm transition-opacity"
                    onClick={closeMenu}
                />
            )}

            {/* Sidebar Navigation */}
            <div className={`
                fixed md:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 flex flex-col
                transform transition-transform duration-300 ease-in-out md:transform-none shadow-2xl md:shadow-none
                ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            `}>
                <div className="p-6 border-b border-slate-200 hidden md:flex items-center justify-between">
                    <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 m-0">
                        <span className="text-blue-700">Admin</span> Panel
                    </h2>
                </div>

                <div className="md:hidden p-4 border-b border-slate-200 flex items-center justify-between bg-white">
                    <span className="font-bold text-lg text-slate-800">Menu</span>
                    <button onClick={closeMenu} className="p-1 text-slate-500 rounded-md hover:bg-slate-100">
                        <X size={20} />
                    </button>
                </div>

                <nav className="flex-1 p-4 md:p-6 flex flex-col gap-2 overflow-y-auto">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                onClick={closeMenu}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${isActive
                                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                    }`}
                            >
                                <Icon size={20} className={isActive ? 'text-white' : 'text-slate-500'} />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 md:p-6 border-t border-slate-200 bg-slate-50 md:bg-white">
                    <button
                        onClick={handleLogout}
                        className="flex items-center justify-center gap-3 px-4 py-3 w-full rounded-xl font-bold text-red-600 bg-red-50 hover:bg-red-600 hover:text-white transition-all duration-200 border border-red-100"
                    >
                        <LogOut size={20} className="stroke-[2.5]" />
                        Logout
                    </button>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col w-full min-w-0 md:max-w-[calc(100vw-256px)] h-[calc(100vh-73px)] md:h-screen overflow-y-auto bg-slate-50">
                <main className="flex-1 w-full p-4 sm:p-6 lg:p-8 overflow-x-hidden">
                    <Routes>
                        <Route path="/" element={<AdminDashboard />} />
                        <Route path="/profile" element={<AdminProfile />} />
                        <Route path="/books" element={<AdminBooks />} />
                    </Routes>
                </main>
            </div>

        </div>
    );
};

export default AdminLayout;
