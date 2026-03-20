import React, { useState, useEffect } from 'react';
import api from '../../api';
import { Users, Eye, TrendingUp, Calendar } from 'lucide-react';

const AdminDashboard = () => {
    const [stats, setStats] = useState({ today: { views: 0, uniqueVisitors: 0 }, allTime: { totalViews: 0, totalVisitors: 0 } });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchStats();
        const interval = setInterval(fetchStats, 10000); // Poll every 10s for real-time feel if socket fails.
        return () => clearInterval(interval);
    }, []);

    const fetchStats = async () => {
        try {
            const res = await api.get('/analytics');
            setStats(res.data);
            setLoading(false);
        } catch (err) {
            console.error(err);
            setLoading(false);
        }
    };

    const StatCard = ({ title, value, icon: Icon, color, bgColor }) => (
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 sm:gap-6 w-full">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: bgColor, color: color }}>
                <Icon size={28} className="sm:w-8 sm:h-8" />
            </div>
            <div>
                <p className="text-slate-500 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-1">{title}</p>
                <h3 className="text-slate-900 text-2xl sm:text-3xl font-bold m-0">{loading ? '...' : value}</h3>
            </div>
        </div>
    );

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Dashboard Overview</h1>
            <p className="text-slate-500 mb-6 sm:mb-8 text-sm sm:text-base">Track real-time visitor statistics and overview.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
                <StatCard title="Today's Views" value={stats.today.views || 0} icon={Eye} color="#0284c7" bgColor="#e0f2fe" />
                <StatCard title="Today's Visitors" value={stats.today.uniqueVisitors || 0} icon={Users} color="#1d4ed8" bgColor="#eff6ff" />
                <StatCard title="Total Views (All Time)" value={stats.allTime.totalViews || 0} icon={TrendingUp} color="#16a34a" bgColor="#dcfce3" />
                <StatCard title="Total Visitors" value={stats.allTime.totalVisitors || 0} icon={Calendar} color="#9333ea" bgColor="#f3e8ff" />
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Welcome to the Admin Portal</h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    This portal allows you to update your profile description, add or edit books, and track the number of visitors visiting your main landing page in real-time. Statistics automatically update as users land on the public page.
                </p>
            </div>
        </div>
    );
};

export default AdminDashboard;
