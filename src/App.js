import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import FounderWebpage from './mainpage';
import AdminLayout from './components/admin/AdminLayout';
import AdminLogin from './components/admin/AdminLogin';

function App() {
  const [adminToken, setAdminToken] = useState(localStorage.getItem('adminToken'));

  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<FounderWebpage />} />

        <Route path="/admin/*" element={
          adminToken ? (
            <AdminLayout setToken={setAdminToken} />
          ) : (
            <AdminLogin setToken={setAdminToken} />
          )
        } />
      </Routes>
    </Router>
  );
}

export default App;
