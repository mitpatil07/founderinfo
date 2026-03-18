import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, User, BookOpen, LogOut } from 'lucide-react';

import AdminDashboard from './AdminDashboard';
import AdminProfile from './AdminProfile';
import AdminBooks from './AdminBooks';

const AdminLayout = ({ setToken }) => {
    const location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        setToken(null);
    };

    const navItems = [
        { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
        { name: 'Profile Update', path: '/admin/profile', icon: User },
        { name: 'Manage Books', path: '/admin/books', icon: BookOpen },
    ];

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#f8fafc', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            {/* Sidebar */}
            <div style={{ width: '250px', background: 'white', borderRight: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: '2rem 1.5rem', borderBottom: '1px solid #e2e8f0' }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: '#1d4ed8' }}>Admin</span> Panel
                    </h2>
                </div>

                <nav style={{ flex: 1, padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem',
                                    borderRadius: '0.5rem', textDecoration: 'none', fontWeight: '500', transition: 'all 0.2s',
                                    background: isActive ? '#eff6ff' : 'transparent',
                                    color: isActive ? '#1d4ed8' : '#64748b'
                                }}
                                onMouseEnter={(e) => { if (!isActive) { e.currentTarget.style.background = '#f1f5f9'; e.currentTarget.style.color = '#0f172a'; } }}
                                onMouseLeave={(e) => { if (!isActive) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#64748b'; } }}
                            >
                                <Icon size={20} />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                <div style={{ padding: '1.5rem 1rem', borderTop: '1px solid #e2e8f0' }}>
                    <button
                        onClick={handleLogout}
                        style={{
                            display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', width: '100%',
                            borderRadius: '0.5rem', background: 'transparent', border: 'none', color: '#ef4444', fontWeight: '500',
                            cursor: 'pointer', transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = '#fef2f2'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                        <LogOut size={20} />
                        Logout
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '2rem 3rem' }}>
                <Routes>
                    <Route path="/" element={<AdminDashboard />} />
                    <Route path="/profile" element={<AdminProfile />} />
                    <Route path="/books" element={<AdminBooks />} />
                </Routes>
            </div>
        </div>
    );
};

export default AdminLayout;
