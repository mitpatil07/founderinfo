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

    if (loading) return <div className="p-8 text-center text-slate-500">Loading profile data...</div>;

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 sm:mb-2">Profile Update</h1>
                    <p className="text-slate-500 text-sm sm:text-base m-0">Update your hero section bio and social links.</p>
                </div>
                <button
                    onClick={handleSubmit}
                    disabled={saving}
                    className={`flex items-center justify-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-sm ${saving ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-800 hover:shadow shadow-blue-500/30'
                        } w-full sm:w-auto`}
                >
                    {saving ? 'Saving...' : <><Save size={20} /> Save Changes</>}
                </button>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
                <form className="flex flex-col gap-6">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-slate-700">Display Name</label>
                            <input type="text" name="name" value={profile.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50 focus:bg-white text-slate-900" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-slate-700">Job Title badge</label>
                            <input type="text" name="title" value={profile.title} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50 focus:bg-white text-slate-900" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-700">Bio Description (Paragraph 1)</label>
                        <textarea name="bioPart1" value={profile.bioPart1} onChange={handleChange} rows={3} className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50 focus:bg-white text-slate-900 resize-y" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-700">Bio Description (Paragraph 2)</label>
                        <textarea name="bioPart2" value={profile.bioPart2} onChange={handleChange} rows={3} className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50 focus:bg-white text-slate-900 resize-y" />
                    </div>

                    <div className="mt-4 pt-6 border-t border-slate-100">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6">Social & Action Links</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-slate-700">Support Us URL</label>
                                <input type="text" name="supportUrl" value={profile.supportUrl} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50 focus:bg-white text-slate-900" placeholder="https://" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-slate-700">Explore Work URL</label>
                                <input type="text" name="exploreUrl" value={profile.exploreUrl} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50 focus:bg-white text-slate-900" placeholder="https://" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-slate-700">YouTube Link</label>
                                <input type="text" name="youtubeUrl" value={profile.youtubeUrl} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50 focus:bg-white text-slate-900" placeholder="https://" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-slate-700">Instagram Link</label>
                                <input type="text" name="instagramUrl" value={profile.instagramUrl} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50 focus:bg-white text-slate-900" placeholder="https://" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-slate-700">LinkedIn Link</label>
                                <input type="text" name="linkedinUrl" value={profile.linkedinUrl} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50 focus:bg-white text-slate-900" placeholder="https://" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-slate-700">Facebook Link</label>
                                <input type="text" name="facebookUrl" value={profile.facebookUrl} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-slate-50 focus:bg-white text-slate-900" placeholder="https://" />
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AdminProfile;
