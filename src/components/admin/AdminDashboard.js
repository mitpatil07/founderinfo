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
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ background: bgColor, color: color, width: '4rem', height: '4rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon size={32} />
            </div>
            <div>
                <p style={{ color: '#64748b', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 0.5rem 0' }}>{title}</p>
                <h3 style={{ color: '#0f172a', fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>{loading ? '...' : value}</h3>
            </div>
        </div>
    );

    return (
        <div>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.5rem' }}>Dashboard Overview</h1>
            <p style={{ color: '#64748b', marginBottom: '2.5rem' }}>Track real-time visitor statistics and overview.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                <StatCard title="Today's Views" value={stats.today.views || 0} icon={Eye} color="#0284c7" bgColor="#e0f2fe" />
                <StatCard title="Today's Visitors" value={stats.today.uniqueVisitors || 0} icon={Users} color="#1d4ed8" bgColor="#eff6ff" />
                <StatCard title="Total Views (All Time)" value={stats.allTime.totalViews || 0} icon={TrendingUp} color="#16a34a" bgColor="#dcfce3" />
                <StatCard title="Total Visitors" value={stats.allTime.totalVisitors || 0} icon={Calendar} color="#9333ea" bgColor="#f3e8ff" />
            </div>

            <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1rem' }}>Welcome to the Admin Portal</h2>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                    This portal allows you to update your profile description, add or edit books, and track the number of visitors visiting your main landing page in real-time. Statistics automatically update as users land on the public page.
                </p>
            </div>
        </div>
    );
};

export default AdminDashboard;
