import React, { useState, useEffect } from 'react';
import api from '../../api';
import { Plus, Edit2, Trash2, X, Image as ImageIcon } from 'lucide-react';
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

    if (loading) return <div className="p-8 text-center text-slate-500 font-medium">Loading books data...</div>;

    return (
        <div className="max-w-6xl mx-auto w-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 sm:mb-2 tracking-tight">Manage Books</h1>
                    <p className="text-slate-500 text-sm sm:text-base m-0">Add the latest books or modify existing ones.</p>
                </div>
                <button
                    onClick={() => handleOpenModal()}
                    className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 rounded-lg font-semibold transition-all shadow-sm w-full sm:w-auto"
                >
                    <Plus size={18} /> Add New Book
                </button>
            </div>

            {/* Books List - Responsive */}
            {books.length === 0 ? (
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-12 text-center">
                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ImageIcon className="w-8 h-8 text-slate-400" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">No books found</h3>
                    <p className="text-slate-500">Get started by adding your first book to the collection.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {books.map(book => (
                        <div key={book._id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col transition-all hover:shadow-md hover:border-blue-200 group">
                            <div className="flex p-4 gap-4 h-full relative">
                                {/* Cover Image */}
                                <div className="w-20 sm:w-24 shrink-0 rounded-lg overflow-hidden border border-slate-100 bg-slate-50 shadow-sm relative">
                                    <img
                                        src={book.coverUrl || 'https://via.placeholder.com/150x200'}
                                        alt={book.title}
                                        className="w-full h-full object-cover aspect-[2/3]"
                                    />
                                </div>

                                {/* Details */}
                                <div className="flex flex-col flex-1 min-w-0 py-1">
                                    <div className="flex items-start justify-between gap-2 mb-1">
                                        <h3 className="font-bold text-slate-900 truncate" title={book.title}>
                                            {book.title}
                                        </h3>
                                    </div>

                                    <div className="mb-auto mt-1">
                                        <span
                                            className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold text-white tracking-wider uppercase shadow-sm"
                                            style={{ backgroundColor: book.statusColor || '#10b981' }}
                                        >
                                            {book.statusText || 'Available'}
                                        </span>
                                    </div>

                                    <p className="text-xs text-slate-500 line-clamp-2 mt-2 leading-relaxed">
                                        {book.description || 'No description provided.'}
                                    </p>
                                </div>
                            </div>

                            {/* Actions Footer */}
                            <div className="border-t border-slate-100 bg-slate-50 p-3 flex justify-end gap-2 shrink-0">
                                <button
                                    onClick={() => handleOpenModal(book)}
                                    className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
                                >
                                    <Edit2 size={16} /> Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(book._id)}
                                    className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
                                >
                                    <Trash2 size={16} /> Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Modal */}
            {modalOpen && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4 sm:p-6 overflow-y-auto">
                    <div className="bg-white w-full max-w-2xl rounded-2xl p-6 sm:p-8 relative my-8 shadow-2xl origin-bottom animate-in fade-in slide-in-from-bottom-4 duration-300">
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors z-10"
                        >
                            <X size={20} />
                        </button>

                        <div className="pr-12 mb-6">
                            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{editingBook ? 'Edit Book Details' : 'Add New Book'}</h2>
                            <p className="text-slate-500 text-sm mt-1">Fill out the information below to {editingBook ? 'update' : 'create'} this book on the main page.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-slate-700">Book Title</label>
                                <input required type="text" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all bg-slate-50 focus:bg-white text-slate-900" placeholder="e.g. My Next Best Seller" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-slate-700">Cover Image URL</label>
                                <input required type="url" value={formData.coverUrl} onChange={e => setFormData({ ...formData, coverUrl: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all bg-slate-50 focus:bg-white text-slate-900" placeholder="https://" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-slate-700">Description</label>
                                <textarea required rows={3} value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all bg-slate-50 focus:bg-white text-slate-900 resize-y" placeholder="Short description of the book..." />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-2">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-slate-700">Status</label>
                                    <select value={formData.status} onChange={e => setFormData({ ...formData, status: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all bg-slate-50 focus:bg-white text-slate-900 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[right_16px_center] bg-no-repeat pr-10">
                                        <option value="available">Available Now</option>
                                        <option value="coming-soon">Coming Soon</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-slate-700">Display Tag Text</label>
                                    <input type="text" value={formData.statusText} onChange={e => setFormData({ ...formData, statusText: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all bg-slate-50 focus:bg-white text-slate-900" placeholder="e.g. AVAILABLE NOW" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Badge Color</label>
                                    <div className="h-10 rounded-lg border border-slate-200 overflow-hidden shadow-sm relative group">
                                        <input type="color" value={formData.statusColor} onChange={e => setFormData({ ...formData, statusColor: e.target.value })} className="w-full h-16 -mt-3 cursor-pointer" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Card Bg</label>
                                    <div className="h-10 rounded-lg border border-slate-200 overflow-hidden shadow-sm relative group">
                                        <input type="color" value={formData.bgColor} onChange={e => setFormData({ ...formData, bgColor: e.target.value })} className="w-full h-16 -mt-3 cursor-pointer" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Card Border</label>
                                    <div className="h-10 rounded-lg border border-slate-200 overflow-hidden shadow-sm relative group">
                                        <input type="color" value={formData.borderColor} onChange={e => setFormData({ ...formData, borderColor: e.target.value })} className="w-full h-16 -mt-3 cursor-pointer" />
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-bold text-lg mt-2 transition-all shadow-md active:scale-[0.98]">
                                {editingBook ? 'Save Changes' : 'Publish Book'}
                            </button>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};

export default AdminBooks;
