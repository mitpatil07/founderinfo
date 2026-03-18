import React, { useState, useEffect } from 'react';
import api from '../../api';
import { Plus, Edit2, Trash2, X } from 'lucide-react';
import toast from 'react-hot-toast';

const AdminBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [editingBook, setEditingBook] = useState(null);

    const emptyForm = {
        title: '', description: '', coverUrl: '', status: 'available',
        statusText: 'AVAILABLE NOW', statusColor: '#16a34a', bgColor: '#fef7ed', borderColor: '#fed7aa',
        downloads: '', notification: ''
    };
    const [formData, setFormData] = useState(emptyForm);

    const fetchBooks = async () => {
        try {
            const res = await api.get('/books');
            setBooks(res.data);
            setLoading(false);
        } catch (err) { console.error(err); setLoading(false); }
    };

    useEffect(() => { fetchBooks(); }, []);

    const handleOpenModal = (book = null) => {
        if (book) {
            setEditingBook(book);
            setFormData(book);
        } else {
            setEditingBook(null);
            setFormData(emptyForm);
        }
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setEditingBook(null);
        setFormData(emptyForm);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this book?')) {
            try {
                await api.delete(`/books/${id}`);
                toast.success('Book deleted');
                fetchBooks();
            } catch (err) { toast.error('Failed to delete book'); }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Create primary button format for mainpage simplicity
            const savedData = {
                ...formData, buttons: [
                    { text: formData.status === 'coming-soon' ? 'Coming Soon' : 'Support Author', typeClass: 'primary', color: formData.status === 'coming-soon' ? '#1c4fd8' : '#fa8229', url: 'https://projectsmile.world' }
                ]
            };
            if (editingBook) {
                await api.put(`/books/${editingBook._id}`, savedData);
                toast.success('Book updated successfully!');
            } else {
                await api.post('/books', savedData);
                toast.success('Book created successfully!');
            }
            handleCloseModal();
            fetchBooks();
        } catch (err) {
            console.error(err);
            toast.error('Error saving book: ' + (err.response?.data?.message || err.message));
        }
    };

    if (loading) return <p>Loading books...</p>;

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.5rem' }}>Manage Books</h1>
                    <p style={{ color: '#64748b', margin: 0 }}>Add the latest books or modify existing ones.</p>
                </div>
                <button
                    onClick={() => handleOpenModal()}
                    style={{ background: '#10b981', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: '600', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'background 0.2s' }}
                >
                    <Plus size={18} /> Add New Book
                </button>
            </div>

            <div style={{ background: 'white', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                            <th style={{ padding: '1rem 1.5rem', color: '#475569', fontWeight: '600', fontSize: '0.875rem' }}>Book Cover</th>
                            <th style={{ padding: '1rem 1.5rem', color: '#475569', fontWeight: '600', fontSize: '0.875rem' }}>Title</th>
                            <th style={{ padding: '1rem 1.5rem', color: '#475569', fontWeight: '600', fontSize: '0.875rem' }}>Status</th>
                            <th style={{ padding: '1rem 1.5rem', color: '#475569', fontWeight: '600', fontSize: '0.875rem', textAlign: 'right' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.length === 0 ? (
                            <tr><td colSpan="4" style={{ textAlign: 'center', padding: '2rem', color: '#94a3b8' }}>No books added yet.</td></tr>
                        ) : (
                            books.map(book => (
                                <tr key={book._id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '1rem 1.5rem' }}>
                                        <img src={book.coverUrl || 'https://via.placeholder.com/50x70'} alt="Cover" style={{ width: '50px', height: '70px', objectFit: 'cover', borderRadius: '4px' }} />
                                    </td>
                                    <td style={{ padding: '1rem 1.5rem', fontWeight: '500', color: '#0f172a' }}>{book.title}</td>
                                    <td style={{ padding: '1rem 1.5rem' }}>
                                        <span style={{ background: book.statusColor, color: 'white', padding: '0.25rem 0.5rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 'bold' }}>{book.statusText}</span>
                                    </td>
                                    <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                                        <button onClick={() => handleOpenModal(book)} style={{ background: 'transparent', border: 'none', color: '#3b82f6', cursor: 'pointer', marginRight: '1rem' }}><Edit2 size={18} /></button>
                                        <button onClick={() => handleDelete(book._id)} style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer' }}><Trash2 size={18} /></button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {modalOpen && (
                <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
                    <div style={{ background: 'white', width: '100%', maxWidth: '600px', borderRadius: '1rem', padding: '2rem', position: 'relative', maxHeight: '90vh', overflowY: 'auto' }}>
                        <button onClick={handleCloseModal} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}>
                            <X size={24} />
                        </button>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>{editingBook ? 'Edit Book' : 'Add New Book'}</h2>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>Book Title</label>
                                <input required type="text" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>Cover Image URL</label>
                                <input required type="text" value={formData.coverUrl} onChange={e => setFormData({ ...formData, coverUrl: e.target.value })} style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>Description</label>
                                <textarea required rows={3} value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1' }} />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>Status (available / coming-soon)</label>
                                    <select value={formData.status} onChange={e => setFormData({ ...formData, status: e.target.value })} style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1' }}>
                                        <option value="available">Available Now</option>
                                        <option value="coming-soon">Coming Soon</option>
                                    </select>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>Status Text</label>
                                    <input type="text" value={formData.statusText} onChange={e => setFormData({ ...formData, statusText: e.target.value })} style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1' }} />
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>Badge Color</label>
                                    <input type="color" value={formData.statusColor} onChange={e => setFormData({ ...formData, statusColor: e.target.value })} style={{ padding: '0' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>Background Color</label>
                                    <input type="color" value={formData.bgColor} onChange={e => setFormData({ ...formData, bgColor: e.target.value })} style={{ padding: '0' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>Border Color</label>
                                    <input type="color" value={formData.borderColor} onChange={e => setFormData({ ...formData, borderColor: e.target.value })} style={{ padding: '0' }} />
                                </div>
                            </div>

                            <button type="submit" style={{ background: '#1d4ed8', color: 'white', padding: '1rem', borderRadius: '0.5rem', fontWeight: 'bold', border: 'none', cursor: 'pointer', marginTop: '1rem' }}>
                                {editingBook ? 'Update Book' : 'Save Book'}
                            </button>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};

export default AdminBooks;
