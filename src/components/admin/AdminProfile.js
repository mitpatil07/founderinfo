import React, { useState, useEffect } from 'react';
import api from '../../api';
import { Save } from 'lucide-react';
import toast from 'react-hot-toast';

const AdminProfile = () => {
    const [profile, setProfile] = useState({
        name: 'JOE MITTIGA',
        title: 'Global Speaker & Author',
        bioPart1: '',
        bioPart2: '',
        supportUrl: '',
        exploreUrl: '',
        youtubeUrl: '',
        instagramUrl: '',
        linkedinUrl: '',
        facebookUrl: '',
        twitterUrl: ''
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            const res = await api.get('/profile');
            if (res.data) setProfile(res.data);
            setLoading(false);
        } catch (err) {
            console.error(err);
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        try {
            await api.put('/profile', profile);
            toast.success('Profile successfully updated!');
            setSaving(false);
        } catch (err) {
            console.error(err);
            toast.error('Error saving profile: ' + (err.response?.data?.message || err.message));
            setSaving(false);
        }
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div style={{ maxWidth: '800px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.5rem' }}>Profile Update</h1>
                    <p style={{ color: '#64748b', margin: 0 }}>Update your hero section bio and social links.</p>
                </div>
                <button
                    onClick={handleSubmit}
                    disabled={saving}
                    style={{ background: '#1d4ed8', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: '600', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'background 0.2s', opacity: saving ? 0.7 : 1 }}
                >
                    {saving ? 'Saving...' : <><Save size={18} /> Save Changes</>}
                </button>
            </div>

            <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#334155' }}>Display Name</label>
                            <input type="text" name="name" value={profile.name} onChange={handleChange} style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#334155' }}>Job Title badge</label>
                            <input type="text" name="title" value={profile.title} onChange={handleChange} style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none' }} />
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#334155' }}>Bio Description (Paragraph 1)</label>
                        <textarea name="bioPart1" value={profile.bioPart1} onChange={handleChange} rows={3} style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none', resize: 'vertical' }} />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#334155' }}>Bio Description (Paragraph 2)</label>
                        <textarea name="bioPart2" value={profile.bioPart2} onChange={handleChange} rows={3} style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none', resize: 'vertical' }} />
                    </div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', margin: '1rem 0 0 0', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>Social & Action Links</h3>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#334155' }}>Support Us URL (Paypal)</label>
                            <input type="text" name="supportUrl" value={profile.supportUrl} onChange={handleChange} style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#334155' }}>Explore Work URL</label>
                            <input type="text" name="exploreUrl" value={profile.exploreUrl} onChange={handleChange} style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#334155' }}>YouTube Link</label>
                            <input type="text" name="youtubeUrl" value={profile.youtubeUrl} onChange={handleChange} style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#334155' }}>Instagram Link</label>
                            <input type="text" name="instagramUrl" value={profile.instagramUrl} onChange={handleChange} style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#334155' }}>LinkedIn Link</label>
                            <input type="text" name="linkedinUrl" value={profile.linkedinUrl} onChange={handleChange} style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#334155' }}>Facebook Link</label>
                            <input type="text" name="facebookUrl" value={profile.facebookUrl} onChange={handleChange} style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', outline: 'none' }} />
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AdminProfile;
