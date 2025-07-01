// src/pages/DashboardPage.jsx
import React from 'react';
import { auth } from '../firebase/config';

function DashboardPage() {
  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div>
      <h1>Selamat Datang di Dashboard!</h1>
      <p>Email Anda: {auth.currentUser?.email}</p>
      
      {/* Di sini Anda akan menambahkan logika untuk menampilkan dan menambah goal */}
      
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default DashboardPage;